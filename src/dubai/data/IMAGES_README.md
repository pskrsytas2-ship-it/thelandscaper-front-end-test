# Figma Builder.io Images Documentation

## Overview

This document explains how images from Figma designs are extracted and used in the data files for the Dubai landing and details pages.

## Image Source

All images are hosted on Builder.io's CDN and come from Figma designs exported through the Builder.io plugin. The images use the following URL pattern:

```
https://api.builder.io/api/v1/image/assets/TEMP/{imageId}
```

You can optionally add width parameters for optimization:

```
https://api.builder.io/api/v1/image/assets/TEMP/{imageId}?width=552
```

## Current Image Implementation

### Landing Page (`landingPageData.js`)

The landing page data file contains actual Builder.io image URLs extracted from the Figma design file.

#### Sections with Images:

1. **Hero Section**
   - Background image: Main hero banner
   
2. **Popular Projects** (6 items)
   - Project listing cards with thumbnail images

3. **Popular Machineries for Rent** (6 items)
   - Machinery rental listings with images

4. **Popular Machineries for Sale** (6 items)
   - Machinery sale listings with images

5. **Popular Tools for Sale** (6 items)
   - Tool listings with images

6. **Popular Trees for Sale** (6 items)
   - Plant/tree listings with images

7. **Popular Agro Chemicals for Sale** (6 items)
   - Fertilizer/chemical listings with images

### Details Page (`detailsPageData.js`)

The details page data file is structured to receive Builder.io image URLs but currently uses placeholder URLs marked with `TODO` comments.

#### Sections Requiring Images:

1. **Image Gallery**
   - Main product image
   - 4+ thumbnail images

2. **Company Logo**
   - Company/seller profile image

3. **Related Listings** (4 items)
   - Related product thumbnails

4. **User Reviews** (3 items)
   - User avatar images

## How to Extract Images from Figma

### Method 1: From Figma Export HTML

1. Export the Figma frame using Builder.io plugin
2. Open the exported HTML file
3. Search for image URLs using the pattern: `https://api.builder.io/api/v1/image/assets/TEMP/`
4. Extract all unique image IDs
5. Map them to the appropriate data structure

### Method 2: Using Figma API (If available)

```javascript
// Example of extracting images programmatically
const extractImages = (figmaHtml) => {
  const imageRegex = /https:\/\/api\.builder\.io\/api\/v1\/image\/assets\/TEMP\/([a-f0-9]+)/g;
  const matches = [...figmaHtml.matchAll(imageRegex)];
  return matches.map(match => ({
    url: match[0],
    id: match[1]
  }));
};
```

## Image Optimization

### Recommended Width Parameters

- **Thumbnails/Cards**: `?width=552` (as used in landing page)
- **Hero/Banner**: `?width=2880` (full width)
- **Detail Images**: `?width=1200`
- **Avatars**: `?width=100`

### Example Usage

```javascript
const imageUrl = 'https://api.builder.io/api/v1/image/assets/TEMP/71272703a3c453c6f5af3240fc96a41ec82d86b4';

// For different sizes:
const thumbnail = `${imageUrl}?width=552`;
const medium = `${imageUrl}?width=1200`;
const large = `${imageUrl}?width=2880`;
```

## Updating Images

### For Landing Page

1. Open `landingPageData.js`
2. Locate the category you want to update
3. Find the item's `image` property
4. Replace with new Builder.io image URL

Example:
```javascript
{
  id: 'project-1',
  image: 'https://api.builder.io/api/v1/image/assets/TEMP/NEW_IMAGE_ID',
  title: 'Project Title',
  // ... other properties
}
```

### For Details Page

1. Open `detailsPageData.js`
2. Search for `TODO` comments to find placeholder images
3. Replace placeholder URLs with actual Builder.io image URLs
4. Remove or update the TODO comment

Example:
```javascript
// Before
mainImage: {
  src: 'https://api.builder.io/api/v1/image/assets/TEMP/listing-main-placeholder',
  alt: 'Automatic Irrigation System'
}

// After
mainImage: {
  src: 'https://api.builder.io/api/v1/image/assets/TEMP/actual-image-id-here',
  alt: 'Automatic Irrigation System'
}
```

## Image Mapping Reference

### Landing Page Images (Extracted from Figma)

| Section | Item | Image ID |
|---------|------|----------|
| Hero | Background | 9be3baed836ae26a3307735e9ec5487cb7fef27d |
| Projects | Item 1 | 71272703a3c453c6f5af3240fc96a41ec82d86b4 |
| Projects | Item 2 | 18726854b4b33d33ef16f6a4136c5d7cf8779460 |
| Projects | Item 3 | e30d075912c99f1ac50a0bdb15f2443ee8442ec3 |
| Projects | Item 4 | 3f09c6eba88ef2566ca56f9e3fb9b4b197908574 |
| Projects | Item 5 | 05ef63691745cee167060ca79a5f07467902372c |
| Projects | Item 6 | ad33659c33381eac40061641b81f19d65a13ad9f |
| Machinery Rent | Item 1 | b2e30b069b6239dbd46ae0d3cc1fcbb318fcc25b |
| Machinery Rent | Item 2 | 263ed740a153be7cb68abc426c38a9b94ddecf5c |
| Machinery Rent | Item 3 | c3e9f38018a410fbd0b878cf0e395ae7a6ea1a33 |
| Machinery Rent | Item 4 | 663a4773f1418504148f217208a44b7b8e1cb36d |
| Machinery Rent | Item 5 | b5043f861c44a52c80692370ef27abe3f851b930 |
| Machinery Sale | Item 1 | 806d9d4f22c807a56a400f82bbb4df2960a331d3 |
| Machinery Sale | Item 2 | 50653b4a556487a3053d07edc59256870a76c994 |
| Machinery Sale | Item 3 | 7b2122987367db26421f3580a24942226803a4ba |
| Machinery Sale | Item 4 | 52b1979003babd43256874ca409656be107af377 |
| Machinery Sale | Item 5 | 9161cc746b2d9c391f2609268c2ccdff04c70b4a |
| Tools | Item 1 | 95a48899de615c3e8680847347351acf40bbabcf |
| Tools | Item 2 | 36bdea3529666a15ceedb42388e4403cfe370903 |
| Tools | Item 3 | 689b9210bc339e536667043f556c03aad239aefc |
| Tools | Item 4 | 3b34dfc3336e4aacf8e4878a3eeb4d20a1227b81 |
| Tools | Item 5 | 4ce7d10c7236c50420ff427c1e3f959a22dae163 |
| Trees | Item 1 | b9a90a6de611c594b23d352d9522460a2c2c8104 |
| Trees | Item 2 | 19ac3af87c5d9538edd7ea7f17ab73028667b44e |
| Trees | Item 3 | 152cc0a6ebba88a4e5b69bf0509b18732ed27c39 |
| Trees | Item 4 | c7077d162f6bc35e67a422291815a5c3e13445f8 |
| Trees | Item 5 | d97cce6e2d158a290e96fd0eaa4863d5758849e0 |
| Fertilizers | Item 1 | 48a2566cfa4b689f83fc36574b82c89afe933e41 |
| Fertilizers | Item 2 | f23c89a9faff2bfa969e0de3d2ca25cf5bed40a7 |
| Fertilizers | Item 3 | 5f1fb7971f3e419941274052fa13b451006868a8 |
| Fertilizers | Item 4 | 7914a20319f2aafbabefb3a84d0092e6188f8c8f |
| Fertilizers | Item 5 | 870e6f5f47b4dc9c329810b54d998be4540db0d2 |

## Best Practices

1. **Always use HTTPS**: Builder.io URLs use HTTPS by default
2. **Optimize images**: Add width parameters appropriate for the use case
3. **Alt text**: Always provide descriptive alt text for accessibility
4. **Lazy loading**: Consider implementing lazy loading for better performance
5. **Fallbacks**: Have placeholder images ready in case Builder.io URLs fail
6. **Cache**: Builder.io handles caching, but consider implementing client-side caching

## Troubleshooting

### Image Not Loading

1. Check if the URL is correctly formatted
2. Verify the image ID is valid
3. Try accessing the image directly in browser
4. Check network requests for errors
5. Ensure CORS is properly configured

### Image Quality Issues

1. Adjust the width parameter
2. Check the original image quality in Figma
3. Consider using format parameter: `?format=webp`
4. Try different quality settings: `?quality=80`

## Future Enhancements

- [ ] Add automatic image extraction script from Figma HTML
- [ ] Implement responsive image sets with srcset
- [ ] Add WebP format support
- [ ] Create image optimization pipeline
- [ ] Add image preloading for critical images
- [ ] Implement progressive image loading

## Contact

For questions or issues related to image extraction and usage, please refer to the main project documentation or contact the development team.

---

Last Updated: 2024



