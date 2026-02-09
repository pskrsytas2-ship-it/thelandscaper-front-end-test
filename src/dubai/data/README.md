# Figma Components Data

This folder contains all the structured data extracted from the Figma design files. The data is organized into three main files based on their usage context.

## Data Files

### 1. `landingPageData.js`
Contains all data for the landing page (Frame 1):
- **heroData**: Hero section background image
- **categoriesData**: All categories with their listings (Transport, Farms, Seeds, Fertilizers, Nursery, Equipment)
- **headerData**: Navigation menu, top bar, authentication links
- **footerData**: Footer content, logo, description, social media

### 2. `detailsPageData.js`
Contains all data for the listing details page (Frame 2):
- **breadcrumbData**: Breadcrumb navigation items
- **imageGalleryData**: Main image, thumbnails, and image count
- **listingDetailsData**: Title, specifications, description, pricing
- **companyInfoData**: Company profile, contact info, ratings, working hours
- **relatedListingsData**: Similar/related listings
- **reviewsData**: Customer reviews and ratings
- **faqData**: Frequently asked questions

### 3. `commonData.js`
Contains shared data used across both pages:
- **brandData**: Brand name, colors, tagline
- **locationData**: UAE emirates list
- **categoryIconsData**: Category icons and colors
- **currencyData**: Currency information and exchange rates
- **languageData**: Available languages (Arabic/English)
- **contactData**: Contact information and social media
- **notificationTypesData**: Notification types
- **userMenuData**: User menu items
- **filterOptionsData**: Sort and filter options
- **paymentMethodsData**: Available payment methods
- **deliveryOptionsData**: Delivery and installation options
- **warrantyOptionsData**: Warranty duration options

## Usage Examples

### Import Individual Data Sets

```javascript
import { categoriesData, heroData } from './data/landingPageData';
import { listingDetailsData, companyInfoData } from './data/detailsPageData';
import { brandData, locationData } from './data/commonData';
```

### Import All Data from a File

```javascript
import * as LandingPageData from './data/landingPageData';
import * as DetailsPageData from './data/detailsPageData';
import * as CommonData from './data/commonData';

console.log(LandingPageData.categoriesData);
console.log(DetailsPageData.listingDetailsData);
console.log(CommonData.brandData);
```

### Import Everything from Index

```javascript
import {
  categoriesData,
  listingDetailsData,
  brandData,
  locationData
} from './data/index';
```

## Data Structure Examples

### Category with Listings
```javascript
{
  id: 'transport',
  title: 'النقل',
  icon: 'transport',
  viewAllLink: '/categories/transport',
  items: [
    {
      id: 'transport-1',
      image: '/images/transport-1.jpg',
      title: 'شاحنة نقل زراعية',
      subtitle: 'موديل 2023',
      location: 'دبي، الإمارات',
      price: '150,000',
      priceUnit: 'درهم',
      favorite: false
    }
  ]
}
```

### Listing Specification
```javascript
{
  label: 'النوع',
  value: 'نظام ري أوتوماتيكي'
}
```

### Company Information
```javascript
{
  publishedDate: 'منذ 3 أيام',
  company: {
    name: 'شركة المناظر الخضراء للمعدات الزراعية',
    logo: '/images/company-logo.png',
    rating: 4.8,
    reviewCount: 245,
    verified: true,
    // ... more fields
  }
}
```

## Notes

- All text content is in Arabic (RTL)
- Images paths are placeholder references (update with actual image URLs)
- Prices are in UAE Dirham (AED)
- Phone numbers follow UAE format
- Data is structured to match the component props exactly

## Customization

To use this data in your application:

1. **Replace image paths**: Update all `/images/...` paths with your actual image URLs
2. **Update content**: Modify Arabic text and values as needed
3. **Add/remove items**: Extend or reduce the number of listings, categories, etc.
4. **Integrate with API**: Replace static data with API calls as needed

## Example: Using with Components

```javascript
import { Header, Hero, CategorySection, Footer } from '../dubai/index';
import { headerData, heroData, categoriesData, footerData } from '../dubai/data/index';

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

```javascript
import {
  Breadcrumb,
  ImageGallery,
  ListingDetails,
  CompanyInfo
} from '../dubai/index';
import {
  breadcrumbData,
  imageGalleryData,
  listingDetailsData,
  companyInfoData
} from '../dubai/data/index';

function DetailsPage() {
  return (
    <div>
      <Breadcrumb items={breadcrumbData.items} />
      <ImageGallery
        mainImage={imageGalleryData.mainImage.src}
        thumbnails={imageGalleryData.thumbnails}
      />
      <ListingDetails
        title={listingDetailsData.title}
        specifications={listingDetailsData.specifications}
        description={listingDetailsData.description}
      />
      <CompanyInfo {...companyInfoData} />
    </div>
  );
}
```



