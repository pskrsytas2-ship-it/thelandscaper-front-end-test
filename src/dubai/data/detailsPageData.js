// Details Page Data
// Note: Update these image URLs when the details page Figma frame is available
// Currently using placeholder structure - replace with actual Builder.io URLs from Figma

// Project Detail Page Data - Unique data for each project
export const projectsDetailData = {
  'project-1': {
    breadcrumb: {
      items: [
        { label: 'المشاريع', link: '/categories/projects', active: false },
        { label: 'الشامه', link: '#', active: true }
      ]
    },
    imageGallery: {
      mainImage: {
        src: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770701157/Frame_628862-3_pxcyeu.jpg',
        alt: 'الشامه - تصميم حديقة'
      },
      thumbnails: [
        { id: 1, src: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770701161/Rectangle_25_aweb3h.jpg', alt: 'الشامه 1' },
        { id: 2, src: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770701160/Rectangle_23_xanbqo.jpg', alt: 'الشامه 2' }
      ],
      imageCount: 3
    },
    company: {
      publishedDate: 'تم النشر: منذ 3 أيام',
      projectTitle: 'الشامه',
      companyName: 'شركة النجد للتنسيق.',
      companyLogo: 'https://api.builder.io/api/v1/image/assets/TEMP/ac255a85a30c3107b0be7335f83bf1c90e98a58d?width=144',
      rating: '4.8',
      reviewCount: '١٢ تقييمات'
    },
    projectDetails: {
      title: 'المواصفات',
      specifications: [
        { label: 'النوع', value: 'تصميم حدائق سكنية' },
        { label: 'المساحة', value: '350 متر مربع' },
        { label: 'الموقع', value: 'الشامه، أبوظبي' },
        { label: 'مدة التنفيذ', value: '4 أسابيع' },
        { label: 'نوع النباتات', value: 'نباتات محلية ومستوردة' }
      ],
      description: 'مشروع تنسيق حديقة سكنية في منطقة الشامه يتميز بتصميم عصري يجمع بين الجمال والوظائف العملية. يشمل المشروع زراعة أشجار الظل، نباتات الزينة المتنوعة، ونظام ري أوتوماتيكي حديث. تم استخدام مواد عالية الجودة لضمان الاستدامة والمظهر الجمالي على المدى الطويل.'
    }
  },
  'project-2': {
    breadcrumb: {
      items: [
        { label: 'المشاريع', link: '/categories/projects', active: false },
        { label: 'منطقة مريحة | صيانة جيدة | عمل حديقة', link: '#', active: true }
      ]
    },
    imageGallery: {
      mainImage: {
        src: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770701158/Rectangle_22_fzr2ap.jpg',
        alt: 'حديقة مريحة مع صيانة متقنة'
      },
      thumbnails: [
        { id: 1, src: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770701155/Frame_628862-2_jwa8fj.jpg', alt: 'حديقة 1' },
        { id: 2, src:'https://res.cloudinary.com/drhwchhsp/image/upload/v1770701155/Frame_628862-1_sniayx.jpg', alt: 'حديقة 2' }
      ],
      imageCount: 3
    },
    company: {
      publishedDate: 'تم النشر: منذ يومين',
      projectTitle: 'منطقة مريحة | صيانة جيدة | عمل حديقة',
      companyName: 'شركة النجد للتنسيق.',
      companyLogo: 'https://api.builder.io/api/v1/image/assets/TEMP/ac255a85a30c3107b0be7335f83bf1c90e98a58d?width=144',
      rating: '5.0',
      reviewCount: '٢٨ تقييمات'
    },
    projectDetails: {
      title: 'المواصفات',
      specifications: [
        { label: 'النوع', value: 'حديقة فيلا فاخرة' },
        { label: 'المساحة', value: '650 متر مربع' },
        { label: 'الموقع', value: 'دبي' },
        { label: 'مدة التنفيذ', value: '6 أسابيع' },
        { label: 'المميزات', value: 'منطقة جلوس خارجية، ممرات حجرية، نافورة' }
      ],
      description: 'مشروع تصميم حديقة فاخرة مع منطقة جلوس مريحة ومساحات خضراء واسعة. تم تنفيذ المشروع بأعلى معايير الجودة مع ضمان الصيانة الدورية. يتضمن المشروع نباتات مختارة بعناية، نظام إضاءة ليلية، ونظام ري ذكي يوفر في استهلاك المياه بنسبة 40%.'
    }
  },
  'project-3': {
    breadcrumb: {
      items: [
        { label: 'المشاريع', link: '/categories/projects', active: false },
        { label: 'نخلة أريكا صفقة رائعة', link: '#', active: true }
      ]
    },
    imageGallery: {
      mainImage: {
        src: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770701161/Rectangle_25_aweb3h.jpg',
        alt: 'مشروع نخلة أريكا'
      },
      thumbnails: [
        { id: 1, src:'https://res.cloudinary.com/drhwchhsp/image/upload/v1770701160/Rectangle_23_xanbqo.jpg', alt: 'نخلة أريكا 1' },
        //{ id: 2, src: 'https://api.builder.io/api/v1/image/assets/TEMP/e30d075912c99f1ac50a0bdb15f2443ee8442ec3', alt: 'نخلة أريكا 2' }
      ],
      imageCount: 12
    },
    company: {
      publishedDate: 'تم النشر: منذ أسبوع',
      projectTitle: 'نخلة أريكا صفقة رائعة | موقع متميز | إطلالة مذهلة',
      companyName: 'شركة الشمخة للتنسيق.',
      companyLogo: 'https://api.builder.io/api/v1/image/assets/TEMP/ac255a85a30c3107b0be7335f83bf1c90e98a58d?width=144',
      rating: '4.9',
      reviewCount: '١٥ تقييمات'
    },
    projectDetails: {
      title: 'المواصفات',
      specifications: [
        { label: 'النوع', value: 'تنسيق حدائق استوائية' },
        { label: 'المساحة', value: '450 متر مربع' },
        { label: 'الموقع', value: 'الشمخة، أبوظبي' },
        { label: 'مدة التنفيذ', value: '5 أسابيع' },
        { label: 'عدد النخيل', value: '15 نخلة أريكا' }
      ],
      description: 'مشروع مميز يتضمن زراعة نخيل الأريكا في موقع استراتيجي مع إطلالة خلابة. تم اختيار نخيل الأريكا بعناية فائقة لضمان النمو السليم والمظهر الجمالي المتناسق. يشمل المشروع تصميم ممرات حجرية طبيعية ونظام إضاءة متطور لإبراز جمال النخيل ليلاً.'
    }
  },
  'project-4': {
    breadcrumb: {
      items: [
        { label: 'المشاريع', link: '/categories/projects', active: false },
        { label: 'تنسيق الحدائق المصغرة', link: '#', active: true }
      ]
    },
    imageGallery: {
      mainImage: {
        src: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770701160/Rectangle_23_xanbqo.jpg',
        alt: 'حديقة مصغرة'
      },
      thumbnails: [
        { id: 1, src: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770701158/Rectangle_22_fzr2ap.jpg', alt: 'حديقة مصغرة 1' },
        { id: 2, src: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770701155/Frame_628862-2_jwa8fj.jpg', alt: 'حديقة مصغرة 2' }
      ],
      imageCount: 10
    },
    company: {
      publishedDate: 'تم النشر: منذ 5 أيام',
      projectTitle: 'تنسيق الحدائق المصغرة',
      companyName: 'شركة الحدائق الخضراء.',
      companyLogo: 'https://api.builder.io/api/v1/image/assets/TEMP/ac255a85a30c3107b0be7335f83bf1c90e98a58d?width=144',
      rating: '4.7',
      reviewCount: '٩ تقييمات'
    },
    projectDetails: {
      title: 'المواصفات',
      specifications: [
        { label: 'النوع', value: 'حدائق مصغرة' },
        { label: 'المساحة', value: '180 متر مربع' },
        { label: 'الموقع', value: 'دبي' },
        { label: 'مدة التنفيذ', value: '3 أسابيع' },
        { label: 'المميزات', value: 'نباتات قزمة، أحواض صغيرة، ديكورات حجرية' }
      ],
      description: 'مشروع تنسيق حديقة مصغرة مثالي للمساحات الصغيرة. يتميز بتصميم ذكي يستغل كل متر مربع بكفاءة عالية. يشمل المشروع نباتات قزمة متنوعة، أحواض زراعية صغيرة، وديكورات حجرية تضيف لمسة جمالية فريدة. الحل الأمثل للمنازل ذات المساحات المحدودة.'
    }
  },
  // 'project-5': {
  //   breadcrumb: {
  //     items: [
  //       { label: 'المشاريع', link: '/categories/projects', active: false },
  //       { label: 'عمل حديقة بمساحة جيدة', link: '#', active: true }
  //     ]
  //   },
  //   imageGallery: {
  //     mainImage: {
  //       src: 'https://api.builder.io/api/v1/image/assets/TEMP/069f5e3f17bdf6c593745f1c45b47bc51a41cbf3?width=1536',
  //       alt: 'حديقة واسعة'
  //     },
  //     thumbnails: [
  //       { id: 1, src: 'https://api.builder.io/api/v1/image/assets/TEMP/607d9c93f9e05f3765230472828718da55ac6f4e?width=736', alt: 'حديقة واسعة 1' },
  //       { id: 2, src: 'https://api.builder.io/api/v1/image/assets/TEMP/27e66cd00a5172e0dd67fbbaeb0f762ed4c6014f?width=736', alt: 'حديقة واسعة 2' }
  //     ],
  //     imageCount: 18
  //   },
  //   company: {
  //     publishedDate: 'تم النشر: منذ يوم',
  //     projectTitle: 'عمل حديقة بمساحة جيدة | مرافق ممتازة | دفعتين',
  //     companyName: 'شركة النجد للتنسيق.',
  //     companyLogo: 'https://api.builder.io/api/v1/image/assets/TEMP/ac255a85a30c3107b0be7335f83bf1c90e98a58d?width=144',
  //     rating: '5.0',
  //     reviewCount: '٣٢ تقييمات'
  //   },
  //   projectDetails: {
  //     title: 'المواصفات',
  //     specifications: [
  //       { label: 'النوع', value: 'حديقة كبيرة متعددة الاستخدامات' },
  //       { label: 'المساحة', value: '800 متر مربع' },
  //       { label: 'الموقع', value: 'أبوظبي' },
  //       { label: 'مدة التنفيذ', value: '8 أسابيع' },
  //       { label: 'الدفع', value: 'على دفعتين' },
  //       { label: 'المرافق', value: 'منطقة ألعاب، ممرات، إضاءة، نظام ري' }
  //     ],
  //     description: 'مشروع حديقة واسعة بمساحة كبيرة تشمل جميع المرافق الحديثة. تم تصميم الحديقة لتلبي احتياجات العائلات الكبيرة مع توفير مناطق متعددة الاستخدامات. يتضمن المشروع منطقة ألعاب للأطفال، منطقة جلوس عائلية، ممرات للمشي، وإضاءة LED موفرة للطاقة. نظام الدفع المرن على دفعتين يسهل على العملاء تنفيذ مشاريعهم.'
  //   }
  // },
  // 'project-6': {
  //   breadcrumb: {
  //     items: [
  //       { label: 'المشاريع', link: '/categories/projects', active: false },
  //       { label: 'مشروع نخلة أريكا | 4 غرف', link: '#', active: true }
  //     ]
  //   },
  //   imageGallery: {
  //     mainImage: {
  //       src: 'https://api.builder.io/api/v1/image/assets/TEMP/71272703a3c453c6f5af3240fc96a41ec82d86b4',
  //       alt: 'مشروع نخلة أريكا متكامل'
  //     },
  //     thumbnails: [
  //       { id: 1, src: 'https://api.builder.io/api/v1/image/assets/TEMP/71272703a3c453c6f5af3240fc96a41ec82d86b4', alt: 'مشروع نخلة 1' },
  //       { id: 2, src: 'https://api.builder.io/api/v1/image/assets/TEMP/3f09c6eba88ef2566ca56f9e3fb9b4b197908574', alt: 'مشروع نخلة 2' }
  //     ],
  //     imageCount: 20
  //   },
  //   company: {
  //     publishedDate: 'تم النشر: منذ 4 أيام',
  //     projectTitle: 'مشروع نخلة أريكا | عمل حديقة بمساحة جيدة | 4 غرف نوم وحمامين',
  //     companyName: 'شركة لتنسيق الحدائق المخصصة.',
  //     companyLogo: 'https://api.builder.io/api/v1/image/assets/TEMP/ac255a85a30c3107b0be7335f83bf1c90e98a58d?width=144',
  //     rating: '4.9',
  //     reviewCount: '٢٤ تقييمات'
  //   },
  //   projectDetails: {
  //     title: 'المواصفات',
  //     specifications: [
  //       { label: 'النوع', value: 'مشروع تنسيق حدائق فيلا فاخرة' },
  //       { label: 'المساحة', value: '950 متر مربع' },
  //       { label: 'الموقع', value: 'دبي' },
  //       { label: 'مدة التنفيذ', value: '10 أسابيع' },
  //       { label: 'عدد النخيل', value: '25 نخلة أريكا' },
  //       { label: 'المميزات', value: 'حديقة خلفية وأمامية، نافورة، شلال صناعي' }
  //     ],
  //     description: 'مشروع تنسيق حدائق متكامل لفيلا فاخرة مكونة من 4 غرف نوم وحمامين. يشمل المشروع تصميم حديقة خلفية وأمامية بمساحة إجمالية تقارب 1000 متر مربع. تم استخدام 25 نخلة أريكا عالية الجودة موزعة بشكل استراتيجي. يتضمن المشروع نافورة مركزية، شلال صناعي، نظام إضاءة متطور، ومناطق جلوس متعددة. تنفيذ احترافي بأعلى معايير الجودة والفخامة.'
  //   }
  // }
};

// Default project data (fallback)
export const projectDetailPageData = projectsDetailData['project-1'];

export const breadcrumbData = {
  items: [
    { label: 'Home', link: '/', active: false },
    { label: 'Equipment', link: '/categories/equipment', active: false },
    { label: 'Automatic Irrigation System', link: '#', active: true }
  ]
};

export const imageGalleryData = {
  mainImage: {
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/069f5e3f17bdf6c593745f1c45b47bc51a41cbf3?width=1536',
    alt: 'Garden Entry Design'
  },
  thumbnails: [
    { id: 1, src: 'https://api.builder.io/api/v1/image/assets/TEMP/607d9c93f9e05f3765230472828718da55ac6f4e?width=736', alt: 'Garden Design 1' },
    { id: 2, src: 'https://api.builder.io/api/v1/image/assets/TEMP/27e66cd00a5172e0dd67fbbaeb0f762ed4c6014f?width=736', alt: 'Garden Design 2' }
  ],
  imageCount: 11
};

export const listingDetailsData = {
  title: 'Advanced Automatic Irrigation System',
  price: '15,000',
  priceUnit: 'AED',
  specifications: [
    { label: 'Type', value: 'Automatic Irrigation System' },
    { label: 'Coverage Area', value: '5000 square meters' },
    { label: 'Condition', value: 'New' },
    { label: 'Warranty', value: '2 years' },
    { label: 'Installation', value: 'Free' },
    { label: 'Maintenance', value: 'Available' },
    { label: 'Manufacturing Country', value: 'Italy' },
    { label: 'Model', value: '2024' },
    { label: 'Control Type', value: 'Smart - WiFi' },
    { label: 'Number of Stations', value: '12 stations' },
    { label: 'Power Source', value: 'Electric / Solar' },
    { label: 'Delivery', value: 'All UAE Emirates' }
  ],
  description: `Modern and advanced automatic irrigation system, specially designed for large farms and gardens. Features smart control via mobile app, with pre-programming capability and precise irrigation scheduling.

Key Features:
- Smart WiFi control
- 12 independently programmable irrigation stations
- Soil moisture sensors
- Rain sensors for water conservation
- Frost protection system
- Water consumption reports
- High-quality valves
- UV-resistant hoses
- Energy-saving program
- 24/7 technical support

The system is ideal for commercial farms and large gardens, helping save up to 40% water consumption compared to traditional irrigation systems.

Installation and Maintenance:
- Free installation by specialized team
- Training on system usage
- Periodic maintenance available
- Original spare parts always available

Note: Price includes installation but excludes excavation work if required.`
};

export const companyInfoData = {
  publishedDate: '3 days ago',
  company: {
    name: 'Green Landscapes Equipment Co.',
    // TODO: Replace with actual Builder.io image URL from Figma
    logo: 'https://api.builder.io/api/v1/image/assets/TEMP/company-logo-placeholder',
    rating: 4.8,
    reviewCount: 245,
    verified: true,
    memberSince: '2020',
    totalListings: 156,
    responseTime: 'Within an hour',
    location: 'Dubai, United Arab Emirates',
    phone: '+971 50 123 4567',
    email: 'info@greenlandscapes.ae',
    website: 'www.greenlandscapes.ae',
    description: 'Leading company in supplying and installing irrigation systems and modern agricultural equipment. Serving customers across the UAE since 2020.',
    workingHours: {
      saturday: '8:00 AM - 6:00 PM',
      sunday: '8:00 AM - 6:00 PM',
      monday: '8:00 AM - 6:00 PM',
      tuesday: '8:00 AM - 6:00 PM',
      wednesday: '8:00 AM - 6:00 PM',
      thursday: '8:00 AM - 6:00 PM',
      friday: 'Closed'
    }
  },
  actions: {
    callButton: {
      text: 'Call Now',
      phone: '+971501234567',
      icon: 'phone'
    },
    whatsappButton: {
      text: 'WhatsApp',
      phone: '+971501234567',
      icon: 'whatsapp'
    },
    messageButton: {
      text: 'Send Message',
      link: '/messages/new',
      icon: 'message'
    },
    viewListingsButton: {
      text: 'View All Listings',
      link: '/company/green-landscapes/listings',
      count: 156
    }
  },
  shareOptions: {
    facebook: 'https://facebook.com/sharer.php?u=',
    twitter: 'https://twitter.com/intent/tweet?url=',
    whatsapp: 'https://wa.me/?text=',
    linkedin: 'https://linkedin.com/sharing/share-offsite/?url=',
    email: 'mailto:?subject=&body='
  }
};

export const relatedListingsData = [
  {
    id: 'related-1',
    // TODO: Replace with actual Builder.io image URL from Figma
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/related-1-placeholder',
    title: 'Advanced Drip System',
    subtitle: 'For 3000m² area',
    location: 'Abu Dhabi, UAE',
    price: '8,500',
    priceUnit: 'AED',
    favorite: false
  },
  {
    id: 'related-2',
    // TODO: Replace with actual Builder.io image URL from Figma
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/related-2-placeholder',
    title: 'Powerful Irrigation Pump',
    subtitle: '7 HP power',
    location: 'Dubai, UAE',
    price: '4,200',
    priceUnit: 'AED',
    favorite: false
  },
  {
    id: 'related-3',
    // TODO: Replace with actual Builder.io image URL from Figma
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/related-3-placeholder',
    title: 'Agricultural Sprinkler System',
    subtitle: 'Wide coverage',
    location: 'Sharjah, UAE',
    price: '12,000',
    priceUnit: 'AED',
    favorite: false
  },
  {
    id: 'related-4',
    // TODO: Replace with actual Builder.io image URL from Figma
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/related-4-placeholder',
    title: 'Large Water Tank',
    subtitle: '20000 liter capacity',
    location: 'Al Ain, UAE',
    price: '7,500',
    priceUnit: 'AED',
    favorite: false
  }
];

export const reviewsData = [
  {
    id: 'review-1',
    author: 'Ahmed Mohammed',
    // TODO: Replace with actual Builder.io image URL from Figma
    avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/avatar-1-placeholder',
    rating: 5,
    date: 'A week ago',
    comment: 'Excellent service and high-quality products. Installation team very professional and system works efficiently. Highly recommend.',
    helpful: 12
  },
  {
    id: 'review-2',
    author: 'Sara Ali',
    // TODO: Replace with actual Builder.io image URL from Figma
    avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/avatar-2-placeholder',
    rating: 4,
    date: '2 weeks ago',
    comment: 'Great system and reasonable price. Installation took longer than expected but final result is excellent.',
    helpful: 8
  },
  {
    id: 'review-3',
    author: 'Khaled Abdullah',
    // TODO: Replace with actual Builder.io image URL from Figma
    avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/avatar-3-placeholder',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Best investment for the farm. System saved me a lot of time and water. Excellent after-sales service.',
    helpful: 15
  }
];

export const faqData = [
  {
    id: 'faq-1',
    question: 'Is installation included in the price?',
    answer: 'Yes, installation is completely free and done by a specialized team. The price excludes only excavation work if required.'
  },
  {
    id: 'faq-2',
    question: 'What is the warranty period?',
    answer: 'The system comes with a comprehensive 2-year warranty covering all parts and free maintenance.'
  },
  {
    id: 'faq-3',
    question: 'Can the system be controlled remotely?',
    answer: 'Yes, the system is equipped with WiFi technology and can be fully controlled via mobile app from anywhere.'
  },
  {
    id: 'faq-4',
    question: 'Do you provide periodic maintenance?',
    answer: 'Yes, we provide periodic maintenance service with annual contracts or on-demand, with original spare parts always available.'
  },
  {
    id: 'faq-5',
    question: 'How long does installation take?',
    answer: 'Installation usually takes 2-3 working days depending on the area size and required system complexity.'
  }
];

// Note for developers:
// When the details page Figma design is available:
// 1. Extract all image URLs from the Figma design using Builder.io API
// 2. Replace all placeholder image URLs above with actual Builder.io URLs
// 3. Update the imageGalleryData with actual gallery images
// 4. Update relatedListingsData with actual related listing images
// 5. Update reviewsData with actual user avatar images
// 6. Update companyInfoData.company.logo with actual company logo
