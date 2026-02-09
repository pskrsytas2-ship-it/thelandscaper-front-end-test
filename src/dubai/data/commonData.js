// Common Data
// Shared data used across both frames

export const brandData = {
  name: 'المناظر الطبيعية',
  nameEnglish: 'Green Landscapes',
  tagline: 'منصة شاملة للمناظر الطبيعية والزراعة',
  primaryColor: '#0C7A1F',
  secondaryColor: '#147AFC',
  accentColor: '#FFBE28'
};

export const locationData = {
  emirates: [
    { id: 'dubai', name: 'دبي', nameEnglish: 'Dubai' },
    { id: 'abudhabi', name: 'أبوظبي', nameEnglish: 'Abu Dhabi' },
    { id: 'sharjah', name: 'الشارقة', nameEnglish: 'Sharjah' },
    { id: 'ajman', name: 'عجمان', nameEnglish: 'Ajman' },
    { id: 'rak', name: 'رأس الخيمة', nameEnglish: 'Ras Al Khaimah' },
    { id: 'fujairah', name: 'الفجيرة', nameEnglish: 'Fujairah' },
    { id: 'uaq', name: 'أم القيوين', nameEnglish: 'Umm Al Quwain' },
    { id: 'alain', name: 'العين', nameEnglish: 'Al Ain' }
  ]
};

export const categoryIconsData = {
  transport: {
    name: 'النقل',
    icon: 'truck',
    color: '#0C7A1F'
  },
  farms: {
    name: 'المزارع',
    icon: 'farm',
    color: '#0C7A1F'
  },
  seeds: {
    name: 'البذور',
    icon: 'seed',
    color: '#0C7A1F'
  },
  fertilizers: {
    name: 'الأسمدة',
    icon: 'fertilizer',
    color: '#0C7A1F'
  },
  nursery: {
    name: 'المشاتل',
    icon: 'plant',
    color: '#0C7A1F'
  },
  equipment: {
    name: 'المعدات',
    icon: 'equipment',
    color: '#0C7A1F'
  },
  machinery: {
    name: 'الآليات',
    icon: 'machinery',
    color: '#0C7A1F'
  },
  projects: {
    name: 'المشاريع',
    icon: 'project',
    color: '#0C7A1F'
  }
};

export const currencyData = {
  default: 'AED',
  symbol: 'درهم',
  symbolEnglish: 'AED',
  exchangeRates: {
    USD: 3.67,
    EUR: 4.10,
    GBP: 4.75,
    SAR: 0.98
  }
};

export const languageData = {
  available: [
    { code: 'ar', name: 'العربية', direction: 'rtl' },
    { code: 'en', name: 'English', direction: 'ltr' }
  ],
  default: 'ar'
};

export const contactData = {
  phone: '+971 50 123 4567',
  email: 'info@greenlandscapes.ae',
  whatsapp: '+971501234567',
  address: {
    street: 'شارع الشيخ زايد',
    city: 'دبي',
    country: 'الإمارات العربية المتحدة',
    poBox: 'ص.ب 12345'
  },
  socialMedia: {
    facebook: 'https://facebook.com/greenlandscapesuae',
    twitter: 'https://twitter.com/greenlandscapes',
    instagram: 'https://instagram.com/greenlandscapesuae',
    linkedin: 'https://linkedin.com/company/greenlandscapes',
    youtube: 'https://youtube.com/greenlandscapesuae'
  }
};

export const notificationTypesData = [
  { id: 'message', label: 'رسائل', icon: 'message' },
  { id: 'favorite', label: 'المفضلة', icon: 'heart' },
  { id: 'listing', label: 'إعلانات', icon: 'listing' },
  { id: 'system', label: 'النظام', icon: 'bell' }
];

export const userMenuData = {
  menuItems: [
    { id: 'profile', label: 'الملف الشخصي', link: '/profile', icon: 'user' },
    { id: 'listings', label: 'إعلاناتي', link: '/my-listings', icon: 'listing' },
    { id: 'favorites', label: 'المفضلة', link: '/favorites', icon: 'heart' },
    { id: 'messages', label: 'الرسائل', link: '/messages', icon: 'message' },
    { id: 'settings', label: 'الإعدادات', link: '/settings', icon: 'settings' },
    { id: 'logout', label: 'تسجيل الخروج', link: '/logout', icon: 'logout' }
  ]
};

export const filterOptionsData = {
  sortBy: [
    { value: 'recent', label: 'الأحدث' },
    { value: 'price-asc', label: 'السعر: من الأقل للأعلى' },
    { value: 'price-desc', label: 'السعر: من الأعلى للأقل' },
    { value: 'popular', label: 'الأكثر شعبية' },
    { value: 'rating', label: 'الأعلى تقييماً' }
  ],
  condition: [
    { value: 'new', label: 'جديد' },
    { value: 'used', label: 'مستعمل' },
    { value: 'refurbished', label: 'مجدد' }
  ],
  priceRanges: [
    { value: '0-1000', label: 'أقل من 1,000 درهم' },
    { value: '1000-5000', label: '1,000 - 5,000 درهم' },
    { value: '5000-10000', label: '5,000 - 10,000 درهم' },
    { value: '10000-50000', label: '10,000 - 50,000 درهم' },
    { value: '50000-100000', label: '50,000 - 100,000 درهم' },
    { value: '100000+', label: 'أكثر من 100,000 درهم' }
  ]
};

export const paymentMethodsData = [
  { id: 'cash', name: 'كاش', icon: 'cash', enabled: true },
  { id: 'card', name: 'بطاقة ائتمان', icon: 'card', enabled: true },
  { id: 'bank', name: 'تحويل بنكي', icon: 'bank', enabled: true },
  { id: 'installment', name: 'تقسيط', icon: 'installment', enabled: true }
];

export const deliveryOptionsData = [
  { id: 'pickup', name: 'استلام من المعرض', icon: 'pickup', cost: 0 },
  { id: 'delivery', name: 'توصيل', icon: 'truck', cost: 'حسب الموقع' },
  { id: 'installation', name: 'توصيل + تركيب', icon: 'tools', cost: 'حسب الموقع' }
];

export const warrantyOptionsData = [
  { duration: '6months', label: '6 أشهر' },
  { duration: '1year', label: 'سنة واحدة' },
  { duration: '2years', label: 'سنتان' },
  { duration: '3years', label: '3 سنوات' },
  { duration: '5years', label: '5 سنوات' },
  { duration: 'lifetime', label: 'مدى الحياة' }
];

