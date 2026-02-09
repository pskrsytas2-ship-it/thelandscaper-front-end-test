# Figma Components

This folder contains all the components extracted from the 2 Figma design frames.

## Structure

### Shared Components (Used in Both Frames)
- **Header.jsx** - Top navigation header with logo, menu items, notifications, and language selector
- **Footer.jsx** - Footer with company logo and description

### Landing Page Components (Frame 1)
- **Hero.jsx** - Hero section with background image
- **CategorySection.jsx** - Section displaying category title and listing cards
- **ListingCard.jsx** - Individual listing card with image carousel, title, location, and price

### Details Page Components (Frame 2)
- **Breadcrumb.jsx** - Navigation breadcrumb trail
- **ImageGallery.jsx** - Main image gallery with thumbnails
- **ListingDetails.jsx** - Specifications and details section
- **CompanyInfo.jsx** - Company information panel with logo, rating, and action buttons

### Data Folder
- **data/** - Contains all structured data extracted from Figma designs
  - **landingPageData.js** - Hero, categories, listings for landing page
  - **detailsPageData.js** - Listing details, company info, reviews, FAQs
  - **commonData.js** - Shared data (brand, locations, categories, filters)
  - **index.js** - Centralized data exports
  - **README.md** - Complete data documentation and usage examples

## Usage

Import components individually:
```jsx
import { Header, Footer } from './dubai/index';
import { Hero, CategorySection, ListingCard } from './dubai/index';
import { Breadcrumb, ImageGallery, ListingDetails, CompanyInfo } from './dubai/index';
```

Or import all at once:
```jsx
import * as FigmaComponents from './dubai/index';
```

## Component Props

### ListingCard
```jsx
<ListingCard
  image="https://..."
  title="Card Title"
  subtitle="Card Subtitle"
  location={true}
  price="AED 500"
  priceUnit="/ يوم"
  favorite={false}
/>
```

### CategorySection
```jsx
<CategorySection
  title="Section Title"
  icon={<svg>...</svg>}
  items={[
    { image: "...", title: "...", price: "..." },
    // ... more items
  ]}
  viewAllLink="/category"
/>
```

### Breadcrumb
```jsx
<Breadcrumb
  items={[
    { label: "Home", active: false },
    { label: "Category", active: false },
    { label: "Current Page", active: true }
  ]}
/>
```

### ImageGallery
```jsx
<ImageGallery
  mainImage="https://..."
  thumbnails={["https://...", "https://..."]}
/>
```

### ListingDetails
```jsx
<ListingDetails
  title="Listing Title"
  specifications={[
    { label: "النوع", value: "أعمال المناظر الطبيعية" },
    { label: "قدم مربع", value: "---" }
  ]}
  description="Description text..."
/>
```

### CompanyInfo
```jsx
<CompanyInfo
  publishedDate="تم النشر: منذ يومين"
  companyName="Company Name"
  companyLogo="https://..."
  rating="5.0"
  reviewCount="06"
/>
```

## Styling

All components use Tailwind CSS classes and the Dubai font family. Make sure you have:
- Tailwind CSS configured in your project
- Dubai font installed and configured

## Using Components with Data

You can combine the components with the extracted data for quick implementation:

```jsx
import { Header, Hero, CategorySection, Footer } from './dubai/index';
import {
  headerData,
  heroData,
  categoriesData,
  footerData
} from '../dubai/data/index';

function LandingPage() {
  return (
    <div>
      <Header {...headerData} />
      <Hero {...heroData} />
      {categoriesData.map(category => (
        <CategorySection
          key={category.id}
          title={category.title}
          icon={category.icon}
          items={category.items}
          viewAllLink={category.viewAllLink}
        />
      ))}
      <Footer {...footerData} />
    </div>
  );
}
```

For more data usage examples, see [data/README.md](./data/README.md)

## Notes

- All text is in Arabic (RTL layout)
- Components use the brand color #0C7A1F (green)
- Icon SVGs are included inline for simplicity
- Some placeholder comments exist for complex SVG paths that can be expanded as needed
- **Data files** contain structured content from Figma designs - see `data/` folder for all extracted data




