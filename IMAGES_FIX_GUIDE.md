# Builder.io Image URLs - Fix Guide

## ⚠️ Problem

Your application is using **temporary Builder.io image URLs** containing `/TEMP/` in the path. These URLs are temporary and will eventually expire, causing broken images throughout your application.

Example of a temporary URL:
```
https://api.builder.io/api/v1/image/assets/TEMP/6cec6ff561f77d67771d3d7eedcac19cf931a673?width=1568
```

## 🎯 Solution Options

You have **3 options** to fix this permanently:

### Option 1: Upload to Builder.io (Recommended)

This is the best option if you're already using Builder.io for your project.

#### Steps:

1. **Log into Builder.io**
   - Go to https://builder.io
   - Sign in to your account

2. **Upload Images**
   - Navigate to `Content` > `Images`
   - Click `Upload` and select your images
   - Builder.io will generate permanent URLs

3. **Get Your Account ID**
   - Go to `Settings` > `Account`
   - Copy your Organization/Account ID
   
4. **Update the Utility**
   - Open `src/utils/builderImageUtils.js`
   - Replace `YOUR_BUILDER_ACCOUNT_ID_HERE` with your actual account ID

5. **Permanent URLs**
   - Builder.io will give you URLs like:
   ```
   https://cdn.builder.io/api/v1/image/assets/[YOUR_ACCOUNT_ID]/[IMAGE_HASH]
   ```

#### How to Extract Images from TEMP URLs:

```bash
# Create a directory for images
mkdir -p temp_images

# Use the browser to download the images
# Open each TEMP URL in your browser and save the image
# Or use a script to download them:

# Example using curl (replace URLs with your actual TEMP URLs)
curl "https://api.builder.io/api/v1/image/assets/TEMP/6cec6ff561f77d67771d3d7eedcac19cf931a673" -o temp_images/image1.jpg
```

### Option 2: Use Local Images

Store images directly in your project.

#### Steps:

1. **Download Images**
   - Save all images from the TEMP URLs to `public/images/` folder

2. **Organize Images**
   ```
   public/
     images/
       projects/
         project-1.jpg
         project-2.jpg
       machineries/
         machinery-1.jpg
       tools/
         tool-1.jpg
       trees/
         tree-1.jpg
       fertilizers/
         fertilizer-1.jpg
   ```

3. **Update Image Paths**
   - Replace Builder.io URLs with local paths:
   ```javascript
   // Before
   image: 'https://api.builder.io/api/v1/image/assets/TEMP/71272703...'
   
   // After
   image: '/images/projects/project-1.jpg'
   ```

4. **Benefits**
   - Full control over images
   - No external dependencies
   - Faster loading (no CDN latency)

### Option 3: Use Another CDN

Upload to a different image hosting service.

#### Recommended Services:

1. **Cloudinary** (Free tier: 25GB storage, 25GB bandwidth/month)
   - Sign up at https://cloudinary.com
   - Upload your images
   - Get permanent URLs

2. **AWS S3 + CloudFront**
   - More control, requires AWS account
   - Best for large-scale applications

3. **Vercel Blob** (if using Vercel)
   - Integrated with Vercel deployments
   - Simple API

4. **Supabase Storage**
   - Free tier: 1GB storage
   - Good for small to medium projects

## 🔧 Using the Image Utility

I've created a utility to help manage your images: `src/utils/builderImageUtils.js`

### Basic Usage:

```javascript
import { convertBuilderImageUrl, getImageProps } from '@/utils/builderImageUtils';

// Convert a single URL
const permanentUrl = convertBuilderImageUrl(tempUrl);

// Get optimized image props for React
const imageProps = getImageProps(tempUrl, 'Alt text');

// Use in JSX
<img {...imageProps} />

// Get responsive srcset
import { getImageSrcSet } from '@/utils/builderImageUtils';
<img 
  src={convertBuilderImageUrl(url)}
  srcSet={getImageSrcSet(url)}
  alt="Description"
/>
```

### Update Your Components:

```javascript
// Before
<img src={item.image} alt={item.title} />

// After
import { getImageProps } from '@/utils/builderImageUtils';
<img {...getImageProps(item.image, item.title)} />
```

## 📝 Files That Need Updating

Here are all the files containing TEMP URLs:

1. **Data Files:**
   - `src/data/sampleData.js` (most images)
   - `src/dubai/data/landingPageData.js` (landing page images)
   - `src/dubai/data/detailsPageData.js` (detail page images)

2. **Components:**
   - `src/dubai/Hero.jsx` (hero background)
   - `src/components/Hero.jsx` (hero background)
   - `src/components/ListingCard.jsx` (fallback image)

## 🚀 Quick Migration Script

I can help you create a script to:
1. Extract all unique TEMP URLs from your codebase
2. Download the images
3. Upload to your chosen service
4. Update all references

Would you like me to create this script?

## ✅ Recommended Next Steps

1. **Immediate Fix** (Temporary):
   - The image utility will keep TEMP URLs working for now
   - But they WILL eventually break

2. **Permanent Fix** (Choose one):
   - **Best:** Upload to Builder.io and update account ID
   - **Good:** Move to local images in `public/images/`
   - **Alternative:** Use Cloudinary or another CDN

3. **Test**:
   - After implementing your chosen solution, test all pages
   - Verify images load correctly
   - Check responsive images work on different devices

## 📞 Need Help?

If you need assistance:
1. Choosing the best option for your project
2. Creating a migration script
3. Updating all image references

Let me know and I'll help you implement the solution!

## 🔍 Image Inventory

Your application currently uses images in these categories:
- Projects: ~42 images
- Machineries (Rent & Sale): ~36 images
- Tools: ~18 images
- Trees/Plants: ~18 images
- Fertilizers/Agro: ~18 images
- Seeds: ~18 images
- Farms (Rent & Sale): ~36 images
- Movers: ~18 images
- Forum posts: ~18 images
- Hero images: 2 images
- Company logos/avatars: ~10 images

**Total: ~234 unique images** (approximately)

## 💡 Pro Tips

1. **Image Optimization**:
   - Use WebP format for better compression
   - Serve responsive images using srcset
   - Implement lazy loading

2. **Performance**:
   - Consider using a CDN for faster delivery
   - Enable caching headers
   - Use image sprites for icons

3. **Maintenance**:
   - Keep a backup of all original images
   - Document your image naming convention
   - Use consistent sizes for similar image types
