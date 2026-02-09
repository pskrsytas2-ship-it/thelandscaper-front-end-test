# Navigation Setup Guide

Complete guide for the listing card navigation from Landing Page to Details Page.

## ✅ What's Been Implemented

### 1. **Updated Components**
- ✅ `ListingCard.jsx` - Now clickable with hover effects
- ✅ `CategorySection.jsx` - Passes click handlers to cards

### 2. **New Pages**
- ✅ `src/pages/LandingPage.jsx` - Main landing page (Frame 1)
- ✅ `src/pages/DetailsPage.jsx` - Listing details page (Frame 2)

### 3. **Routing**
- ✅ Updated `src/App.jsx` with new routes
- ✅ Route: `/` → LandingPage
- ✅ Route: `/listing/:listingId` → DetailsPage

### 4. **Data Structure**
- ✅ All listings have unique IDs (e.g., `transport-1`, `farm-2`)
- ✅ IDs are used for navigation and data lookup

## 🚀 How to Test

### 1. Start the Development Server

```bash
npm run dev
```

### 2. Open Your Browser

Navigate to: `http://localhost:5173` (or the port shown in terminal)

### 3. Test Navigation

1. **Landing Page**: You'll see all categories with listing cards
2. **Click any card**: It will navigate to the details page
3. **Details Page**: Shows the listing details, image gallery, and company info
4. **Breadcrumb**: Click to navigate back

### 4. Test Specific Listings

Try these URLs directly:
- `http://localhost:5173/listing/transport-1`
- `http://localhost:5173/listing/farm-2`
- `http://localhost:5173/listing/seed-1`
- `http://localhost:5173/listing/fertilizer-1`

## 📋 Navigation Flow

```
┌─────────────────────────────────┐
│      Landing Page (/)           │
│                                 │
│  ┌─────────┐  ┌─────────┐      │
│  │ Card 1  │  │ Card 2  │      │
│  └────┬────┘  └────┬────┘      │
│       │            │            │
└───────┼────────────┼────────────┘
        │            │
        ▼            ▼
┌─────────────────────────────────┐
│   Details Page                  │
│   (/listing/:listingId)         │
│                                 │
│   • Breadcrumb Navigation       │
│   • Image Gallery               │
│   • Listing Details             │
│   • Company Info                │
└─────────────────────────────────┘
```

## 🎯 Key Features

### Interactive Elements

**Landing Page:**
- ✅ Clickable listing cards
- ✅ Hover effects (shadow increase)
- ✅ Favorite icon (prevents navigation)
- ✅ Arrow buttons (prevents navigation)
- ✅ "View All" link per category

**Details Page:**
- ✅ Dynamic breadcrumb based on category
- ✅ Image gallery with thumbnails
- ✅ Specifications list
- ✅ Company information
- ✅ Auto-redirect if listing not found

### Click Behavior

```javascript
// Clicking anywhere on the card navigates
// EXCEPT:
- ❌ Favorite (heart) icon
- ❌ Navigation arrows
- ❌ These trigger their own actions
```

## 🔧 Customization

### Change Navigation URL Pattern

Edit `src/pages/LandingPage.jsx`:

```javascript
const handleListingClick = (listingId) => {
  // Change the URL pattern here
  navigate(`/listing/${listingId}`);  // Current
  // navigate(`/details/${listingId}`);  // Alternative
};
```

Then update the route in `src/App.jsx`:

```javascript
<Route path="/listing/:listingId" element={<DetailsPage />} />
```

### Add Category Filter

To filter by category on the details page breadcrumb:

```javascript
// In DetailsPage.jsx breadcrumb
{ 
  label: categoryName, 
  link: `/categories/${categoryId}`,  // Add category route
  active: false 
}
```

### Modify Details Page Layout

Edit `src/pages/DetailsPage.jsx`:

```javascript
// Current: 2 columns (2:1 ratio)
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  <div className="lg:col-span-2">...</div>  {/* Listing details */}
  <div className="lg:col-span-1">...</div>  {/* Company info */}
</div>

// Alternative: Full width
<div className="max-w-4xl mx-auto">
  {/* Your layout */}
</div>
```

## 📦 File Structure

```
src/
├── pages/
│   ├── LandingPage.jsx       ✨ NEW - Main landing page
│   ├── DetailsPage.jsx        ✨ NEW - Listing details
│   └── README.md              ✨ NEW - Pages documentation
├── figma-components/
│   ├── ListingCard.jsx        ✏️ UPDATED - Clickable
│   ├── CategorySection.jsx    ✏️ UPDATED - Pass click handler
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Footer.jsx
│   ├── Breadcrumb.jsx
│   ├── ImageGallery.jsx
│   ├── ListingDetails.jsx
│   ├── CompanyInfo.jsx
│   └── data/
│       ├── landingPageData.js  (all listings with IDs)
│       ├── detailsPageData.js
│       ├── commonData.js
│       └── index.js
├── App.jsx                     ✏️ UPDATED - New routes
└── main.jsx                    (BrowserRouter already set up)
```

## 🐛 Troubleshooting

### Navigation Not Working

**Problem**: Cards don't navigate when clicked
**Solution**: 
1. Check console for errors
2. Verify React Router is installed: `npm list react-router-dom`
3. Ensure BrowserRouter wraps App in `main.jsx`

### Listing Not Found

**Problem**: Details page shows loading or redirects
**Solution**:
1. Check the listing ID in the URL matches data
2. Verify listing exists in `landingPageData.js`
3. Check browser console for errors

### Styling Issues

**Problem**: Layout doesn't match design
**Solution**:
1. Ensure Tailwind CSS is configured
2. Check `dir="rtl"` is set for Arabic layout
3. Verify Dubai font is loaded

## 📝 Next Steps

### Recommended Enhancements

1. **Add Loading State**
   - Show skeleton while loading listing data
   
2. **Add Error Page**
   - Custom 404 page for missing listings
   
3. **Add Related Listings**
   - Show similar items from same category
   
4. **Add Search & Filter**
   - Search by title, filter by price, location
   
5. **Add Favorites**
   - Store favorites in localStorage or backend
   
6. **Add Share Functionality**
   - Share listing on social media

## 💡 Tips

1. **IDs are important**: Every listing must have a unique ID
2. **Images**: Update image paths in data files with real URLs
3. **RTL Layout**: Always keep `dir="rtl"` for Arabic content
4. **Mobile**: Test on mobile - layout is responsive
5. **Browser Back**: Use browser back button to return to landing page

## 📞 Support

For issues or questions:
1. Check the `src/pages/README.md` for detailed documentation
2. Review component props in `src/figma-components/README.md`
3. Check data structure in `src/figma-components/data/README.md`

---

**Status**: ✅ Navigation fully implemented and ready to use!
