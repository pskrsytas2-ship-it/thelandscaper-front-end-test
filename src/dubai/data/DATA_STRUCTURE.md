# Data Structure Reference

Quick reference guide for all data structures in the Figma components data files.

## Landing Page Data (`landingPageData.js`)

### heroData
```javascript
{
  backgroundImage: String,  // Image URL
  alt: String               // Alt text
}
```

### categoriesData (Array)
```javascript
[{
  id: String,              // Category ID
  title: String,           // Category title (Arabic)
  icon: String,            // Icon identifier
  viewAllLink: String,     // Link to category page
  items: [{                // Array of listings
    id: String,
    image: String,         // Image URL
    title: String,         // Listing title (Arabic)
    subtitle: String,      // Listing subtitle (Arabic)
    location: String,      // Location (Arabic)
    price: String,         // Price (number as string)
    priceUnit: String,     // Price unit (Arabic)
    favorite: Boolean      // Favorite status
  }]
}]
```

### headerData
```javascript
{
  topBar: {
    primaryButton: {
      text: String,        // Button text (Arabic)
      link: String         // Button link
    },
    auth: {
      loginText: String,
      registerText: String,
      separator: String,
      loginLink: String,
      registerLink: String
    },
    notifications: {
      count: Number,
      link: String
    },
    language: {
      current: String,
      options: [{ code: String, label: String }]
    }
  },
  navigation: {
    logo: {
      src: String,
      alt: String,
      link: String
    },
    menuItems: [{
      id: String,
      label: String,       // Arabic
      link: String
    }]
  }
}
```

### footerData
```javascript
{
  logo: {
    src: String,
    alt: String
  },
  description: String,     // Arabic
  copyright: String,       // Arabic
  socialMedia: [{
    platform: String,
    link: String,
    icon: String
  }]
}
```

## Details Page Data (`detailsPageData.js`)

### breadcrumbData
```javascript
{
  items: [{
    label: String,         // Arabic
    link: String,
    active: Boolean
  }]
}
```

### imageGalleryData
```javascript
{
  mainImage: {
    src: String,
    alt: String
  },
  thumbnails: [{
    id: Number,
    src: String,
    alt: String
  }],
  imageCount: Number
}
```

### listingDetailsData
```javascript
{
  title: String,           // Arabic
  price: String,           // Number as string
  priceUnit: String,       // Arabic
  specifications: [{
    label: String,         // Arabic
    value: String          // Arabic
  }],
  description: String      // Arabic (multiline)
}
```

### companyInfoData
```javascript
{
  publishedDate: String,   // Arabic
  company: {
    name: String,          // Arabic
    logo: String,          // Image URL
    rating: Number,        // Float (e.g., 4.8)
    reviewCount: Number,
    verified: Boolean,
    memberSince: String,   // Year
    totalListings: Number,
    responseTime: String,  // Arabic
    location: String,      // Arabic
    phone: String,         // UAE format
    email: String,
    website: String,
    description: String,   // Arabic
    workingHours: {
      saturday: String,    // Arabic
      sunday: String,
      monday: String,
      tuesday: String,
      wednesday: String,
      thursday: String,
      friday: String
    }
  },
  actions: {
    callButton: {
      text: String,
      phone: String,
      icon: String
    },
    whatsappButton: {
      text: String,
      phone: String,
      icon: String
    },
    messageButton: {
      text: String,
      link: String,
      icon: String
    },
    viewListingsButton: {
      text: String,
      link: String,
      count: Number
    }
  },
  shareOptions: {
    facebook: String,      // Share URL template
    twitter: String,
    whatsapp: String,
    linkedin: String,
    email: String
  }
}
```

### relatedListingsData (Array)
```javascript
[{
  id: String,
  image: String,
  title: String,           // Arabic
  subtitle: String,        // Arabic
  location: String,        // Arabic
  price: String,
  priceUnit: String,       // Arabic
  favorite: Boolean
}]
```

### reviewsData (Array)
```javascript
[{
  id: String,
  author: String,          // Arabic name
  avatar: String,          // Image URL
  rating: Number,          // 1-5
  date: String,            // Arabic (e.g., "منذ أسبوع")
  comment: String,         // Arabic
  helpful: Number          // Helpful count
}]
```

### faqData (Array)
```javascript
[{
  id: String,
  question: String,        // Arabic
  answer: String           // Arabic
}]
```

## Common Data (`commonData.js`)

### brandData
```javascript
{
  name: String,            // Arabic
  nameEnglish: String,
  tagline: String,         // Arabic
  primaryColor: String,    // Hex color
  secondaryColor: String,
  accentColor: String
}
```

### locationData
```javascript
{
  emirates: [{
    id: String,
    name: String,          // Arabic
    nameEnglish: String
  }]
}
```

### categoryIconsData
```javascript
{
  [categoryId]: {
    name: String,          // Arabic
    icon: String,
    color: String          // Hex color
  }
}
```

### currencyData
```javascript
{
  default: String,         // Currency code
  symbol: String,          // Arabic
  symbolEnglish: String,
  exchangeRates: {
    [currency]: Number     // Rate to AED
  }
}
```

### languageData
```javascript
{
  available: [{
    code: String,          // Language code
    name: String,
    direction: String      // 'rtl' or 'ltr'
  }],
  default: String          // Default language code
}
```

### contactData
```javascript
{
  phone: String,           // UAE format
  email: String,
  whatsapp: String,
  address: {
    street: String,        // Arabic
    city: String,          // Arabic
    country: String,       // Arabic
    poBox: String          // Arabic
  },
  socialMedia: {
    facebook: String,      // Full URL
    twitter: String,
    instagram: String,
    linkedin: String,
    youtube: String
  }
}
```

### notificationTypesData (Array)
```javascript
[{
  id: String,
  label: String,           // Arabic
  icon: String
}]
```

### userMenuData
```javascript
{
  menuItems: [{
    id: String,
    label: String,         // Arabic
    link: String,
    icon: String
  }]
}
```

### filterOptionsData
```javascript
{
  sortBy: [{
    value: String,
    label: String          // Arabic
  }],
  condition: [{
    value: String,
    label: String          // Arabic
  }],
  priceRanges: [{
    value: String,         // Range or "min-max"
    label: String          // Arabic
  }]
}
```

### paymentMethodsData (Array)
```javascript
[{
  id: String,
  name: String,            // Arabic
  icon: String,
  enabled: Boolean
}]
```

### deliveryOptionsData (Array)
```javascript
[{
  id: String,
  name: String,            // Arabic
  icon: String,
  cost: String|Number      // Number or "حسب الموقع"
}]
```

### warrantyOptionsData (Array)
```javascript
[{
  duration: String,        // ID
  label: String            // Arabic
}]
```

## Data Types Summary

### Common Patterns

- **IDs**: Lowercase strings with hyphens (e.g., `'transport-1'`, `'review-2'`)
- **Prices**: Strings containing numbers (e.g., `'150,000'`, `'85,000'`)
- **Images**: URL strings (e.g., `'/images/hero-background.jpg'`)
- **Links**: Relative URLs (e.g., `'/categories/transport'`)
- **Arabic Text**: All user-facing text is in Arabic
- **Dates**: Relative Arabic strings (e.g., `'منذ 3 أيام'`)
- **Phone Numbers**: UAE format with country code (e.g., `'+971 50 123 4567'`)
- **Ratings**: Floating point numbers (e.g., `4.8`, `5.0`)
- **Boolean Flags**: `true`/`false` for states like `favorite`, `verified`, `enabled`

## Usage Tips

1. **Type Safety**: Consider creating TypeScript interfaces based on these structures
2. **Validation**: Validate data before using in production (check required fields)
3. **Defaults**: Provide fallback values for optional fields
4. **Localization**: All data includes Arabic text; add English translations if needed
5. **Image Paths**: Replace placeholder paths with actual CDN URLs
6. **API Integration**: Use these structures as response models from your backend API



