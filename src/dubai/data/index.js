// Data Exports
// Centralized export for all data modules

// Landing Page Data
export {
  heroData,
  categoriesData,
  headerData,
  footerData
} from './landingPageData';

// Details Page Data
export {
  projectDetailPageData,
  breadcrumbData,
  imageGalleryData,
  listingDetailsData,
  companyInfoData,
  relatedListingsData,
  reviewsData,
  faqData
} from './detailsPageData';

// Common Data
export {
  brandData,
  locationData,
  categoryIconsData,
  currencyData,
  languageData,
  contactData,
  notificationTypesData,
  userMenuData,
  filterOptionsData,
  paymentMethodsData,
  deliveryOptionsData,
  warrantyOptionsData
} from './commonData';

// Re-export all modules for flexibility
export * as LandingPageData from './landingPageData';
export * as DetailsPageData from './detailsPageData';
export * as CommonData from './commonData';
