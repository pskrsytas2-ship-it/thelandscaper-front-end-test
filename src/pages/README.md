# Pages Documentation

This folder contains the main page components for the Figma design implementation with full navigation support.

## Overview

The application consists of two main pages based on the Figma designs:
1. **LandingPage** - Displays all categories and listings (Frame 1)
2. **DetailsPage** - Shows individual listing details (Frame 2)

## Pages

### LandingPage (`LandingPage.jsx`)

The landing page displays:
- Header with navigation
- Hero section
- Category sections with listing cards
- Footer

**Features:**
- Click on any listing card to navigate to its details page
- All listings are clickable except for the navigation arrows and favorite icon
- Responsive layout with proper RTL (Right-to-Left) support

**Route:** `/`

### DetailsPage (`DetailsPage.jsx`)

The details page displays:
- Header with navigation
- Breadcrumb navigation showing the path
- Image gallery with thumbnails
- Listing specifications and description
- Company information panel
- Footer

**Features:**
- Dynamic content based on the listing ID from URL
- Automatically finds the listing from all categories
- Redirects to home if listing ID is not found
- Breadcrumb shows: Home > Category > Listing Title

**Route:** `/listing/:listingId`

## Navigation Flow

```
Landing Page (/)
    |
    | (Click on listing card)
    v
Details Page (/listing/:listingId)
```

## How It Works

### 1. Clicking a Listing Card

When a user clicks on a listing card on the landing page:

```javascript
// LandingPage.jsx
const handleListingClick = (listingId) => {
  navigate(`/listing/${listingId}`);
};
```

### 2. Loading Details Page

The details page receives the `listingId` from the URL and finds the matching listing:

```javascript
// DetailsPage.jsx
const { listingId } = useParams();

// Find the listing from all categories
for (const category of categoriesData) {
  const listing = category.items.find(item => item.id === listingId);
  if (listing) {
    // Use this listing data to populate the page
  }
}
```

### 3. Displaying Dynamic Content

The details page creates dynamic breadcrumb, specifications, and other content based on the found listing data.

## Usage Example

```jsx
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// In main.jsx
<BrowserRouter>
  <App />
</BrowserRouter>

// In App.jsx
<Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/listing/:listingId" element={<DetailsPage />} />
</Routes>
```

## Listing ID Format

All listings use the format: `{category}-{number}`

Examples:
- `transport-1`
- `farm-2`
- `seed-3`
- `fertilizer-4`
- `nursery-1`
- `equipment-2`

These IDs are defined in `src/dubai/data/landingPageData.js`

## Components Used

### LandingPage Components
- Header
- Hero
- CategorySection (multiple instances)
- ListingCard (rendered by CategorySection)
- Footer

### DetailsPage Components
- Header
- Breadcrumb
- ImageGallery
- ListingDetails
- CompanyInfo
- Footer

## Customization

### Adding More Listings

To add more listings, edit `src/dubai/data/landingPageData.js`:

```javascript
{
  id: 'transport-5',  // Unique ID
  image: '/images/transport-5.jpg',
  title: 'Your Title',
  subtitle: 'Your Subtitle',
  location: 'Dubai, UAE',
  price: '100,000',
  priceUnit: 'AED',
  favorite: false
}
```

### Customizing Details Page Layout

Edit `src/pages/DetailsPage.jsx` to change:
- Grid layout (currently 2:1 ratio for details:sidebar)
- Specifications shown
- Description formatting
- Company info display

### Adding Category Pages

To add dedicated category pages (e.g., `/categories/transport`):

1. Create a new page component
2. Filter listings by category
3. Add route in `App.jsx`
4. Update the "View All" link in CategorySection

## Styling

All pages use:
- **Tailwind CSS** for styling
- **RTL (dir="rtl")** for Arabic text direction
- **Dubai font** for typography
- **Brand color**: `#0C7A1F` (green)

## Error Handling

- If a listing ID doesn't exist, the user is redirected to the landing page
- Loading state is shown while fetching listing data
- Breadcrumb updates automatically based on the listing

## Notes

- All text content is in Arabic
- Images use placeholder paths (update with actual image URLs)
- The app maintains state across navigation
- Back button works properly with browser history




