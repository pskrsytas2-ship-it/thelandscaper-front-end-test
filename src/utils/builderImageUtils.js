/**
 * Builder.io Image Utility
 * 
 * This utility provides functions to handle Builder.io image URLs properly.
 * 
 * IMPORTANT: The /TEMP/ URLs in your Figma design are temporary and will expire.
 * 
 * To fix this permanently, you have 3 options:
 * 
 * 1. Upload images to Builder.io (Recommended):
 *    - Log into your Builder.io account
 *    - Go to the Content > Images section
 *    - Upload your images
 *    - Use the permanent URLs you get back
 *    - Replace `BUILDER_ACCOUNT_ID` below with your actual Builder.io account ID
 * 
 * 2. Use local images:
 *    - Download the images from the TEMP URLs
 *    - Place them in public/images/ folder
 *    - Update the image paths to reference local files
 * 
 * 3. Use a different CDN:
 *    - Upload images to Cloudinary, AWS S3, or similar
 *    - Use those URLs instead
 */

// Replace this with your actual Builder.io account ID
// You can find this in your Builder.io dashboard under Settings > Account
const BUILDER_ACCOUNT_ID = 'YOUR_BUILDER_ACCOUNT_ID_HERE';

/**
 * Converts a Builder.io TEMP URL to a permanent URL
 * @param {string} tempUrl - The temporary Builder.io URL
 * @param {object} options - Image transformation options
 * @returns {string} - The converted URL
 */
export function convertBuilderImageUrl(tempUrl, options = {}) {
  if (!tempUrl || typeof tempUrl !== 'string') {
    return getFallbackImage();
  }

  // If it's not a Builder.io URL, return as is
  if (!tempUrl.includes('api.builder.io')) {
    return tempUrl;
  }

  // If it's a TEMP URL, we need to handle it
  if (tempUrl.includes('/TEMP/')) {
    // Extract the image hash
    const hashMatch = tempUrl.match(/TEMP\/([a-f0-9]+)/);
    const hash = hashMatch ? hashMatch[1] : null;

    if (!hash) {
      return getFallbackImage();
    }

    // If you have a Builder.io account ID, use it
    if (BUILDER_ACCOUNT_ID && BUILDER_ACCOUNT_ID !== 'YOUR_BUILDER_ACCOUNT_ID_HERE') {
      return `https://cdn.builder.io/api/v1/image/assets/${BUILDER_ACCOUNT_ID}/${hash}${getImageParams(options)}`;
    }

    // Otherwise, keep the TEMP URL but ensure it has proper parameters
    // Note: These will eventually expire
    return `https://cdn.builder.io/api/v1/image/assets/TEMP/${hash}${getImageParams(options)}`;
  }

  return tempUrl;
}

/**
 * Gets image transformation parameters
 * @param {object} options - Transformation options
 * @returns {string} - Query string parameters
 */
function getImageParams(options = {}) {
  const params = new URLSearchParams();

  if (options.width) params.append('width', options.width);
  if (options.height) params.append('height', options.height);
  if (options.quality) params.append('quality', options.quality);
  if (options.format) params.append('format', options.format);

  const queryString = params.toString();
  return queryString ? `?${queryString}` : '';
}

/**
 * Gets a fallback image URL when the original image is not available
 * @returns {string} - Fallback image URL
 */
export function getFallbackImage() {
  // You can replace this with your own fallback image
  return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext fill="%236b7280" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage Loading...%3C/text%3E%3C/svg%3E';
}

/**
 * Optimizes a Builder.io image URL with responsive sizing
 * @param {string} url - The image URL
 * @param {number} width - Target width
 * @returns {string} - Optimized URL
 */
export function getOptimizedImageUrl(url, width = 800) {
  return convertBuilderImageUrl(url, {
    width: width * 2, // 2x for retina displays
    quality: 80,
    format: 'webp'
  });
}

/**
 * Generates a srcset for responsive images
 * @param {string} url - The base image URL
 * @returns {string} - srcset string
 */
export function getImageSrcSet(url) {
  const widths = [320, 640, 768, 1024, 1280, 1536];
  return widths
    .map(width => `${convertBuilderImageUrl(url, { width, quality: 80 })} ${width}w`)
    .join(', ');
}

/**
 * Image component props helper
 * @param {string} url - The image URL
 * @param {string} alt - Alt text
 * @returns {object} - Props object for img element
 */
export function getImageProps(url, alt = '') {
  return {
    src: convertBuilderImageUrl(url, { width: 800 }),
    srcSet: getImageSrcSet(url),
    alt,
    loading: 'lazy',
    onError: (e) => {
      e.target.src = getFallbackImage();
    }
  };
}

export default {
  convertBuilderImageUrl,
  getOptimizedImageUrl,
  getImageSrcSet,
  getImageProps,
  getFallbackImage
};
