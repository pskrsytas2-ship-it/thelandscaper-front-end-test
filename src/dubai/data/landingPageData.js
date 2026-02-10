// Landing Page Data
// Extracted from Figma Design with Builder.io image URLs

export const heroData = {
  backgroundImage: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770686403/BG_ycfujy.png',
  alt: 'Create your dream landscaping today!',
  title: 'أنشئ تنسيق الحدائق الذي تحلم به اليوم!',
  titleEn: 'Create your dream landscaping today!',
  searchButton: 'البحث',
  searchButtonEn: 'Search',
  searchPlaceholder: 'ابحث عن أي شيء',
  searchPlaceholderEn: 'Search for anything',
  categoriesLabel: 'جميع الفئات',
  categoriesLabelEn: 'All Categories',
  citiesLabel: 'جميع المدن',
  citiesLabelEn: 'All Cities'
};

export const categoriesData = [
  {
    id: 'projects',
    title: 'المشاريع الشعبية',
    titleEn: 'Popular Projects',
    icon: 'landscaper',
    viewAllLink: '/categories/projects',
    items: [
      {
        id: 'project-1',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770698029/Frame_628862-45_s57m7l.jpg',
        title: 'الشامه',
        titleEn: 'Al Shamha',
        subtitle: '',
        location: 'شركة النجد للتنسيق.',
        locationEn: 'Al Najda Landscaping Inc.',
        price: '',
        priceUnit: '',
        priceUnitEn: '',
        favorite: false
      },
      {
        id: 'project-2',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770698028/Frame_628862-44_hhsfka.jpg',
        title: 'منطقة مريحة | صيانة جيدة | عمل حديقة.',
        titleEn: 'Accessible Area | Well Maintained | garden work',
        subtitle: '',
        location: 'شركة النجد للتنسيق.',
        locationEn: 'Al Najda Landscaping Inc.',
        price: '',
        priceUnit: '',
        priceUnitEn: '',
        favorite: true
      },
      {
        id: 'project-3',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770698021/Frame_628862-43_vvgyni.jpg',
        title: 'نخلة أريكا صفقة رائعة | موقع متميز | إطلالة مذهلة | 1 غرفة نوم وحمام.',
        titleEn: 'Areca palm Great Deal | Prime location | Amazing View | 1 BHK',
        subtitle: '',
        location: 'شركة الشمخة للتنسيق.',
        locationEn: 'Al Shamkha Landscaping Inc.',
        price: '',
        priceUnit: '',
        priceUnitEn: '',
        favorite: false
      },
      {
        id: 'project-4',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697857/Frame_628862-50_apvddg.jpg',
        title: 'تنسيق الحدائق المصغرة.',
        titleEn: 'Miniature landscaping',
        subtitle: '',
        location: 'شركة الحدائق الخضراء.',
        locationEn: 'Green Garden Landscaping Inc.',
        price: '',
        priceUnit: '',
        priceUnitEn: '',
        favorite: false
      },
      {
        id: 'project-5',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770698010/Frame_628862-41_qebjk7.jpg',
        title: 'عمل حديقة بمساحة جيدة | مرافق ممتازة | دفعتين',
        titleEn: 'GOOD SIZE Garden work | TOP NOTCH FACILITIES | 2 PAYMENTS',
        subtitle: '',
        location: 'شركة النجد للتنسيق.',
        locationEn: 'Al Najda Landscaping Inc.',
        price: '',
        priceUnit: '',
        priceUnitEn: '',
        favorite: false
      },
      // {
      //   id: 'project-6',
      //   image: 'https://api.builder.io/api/v1/image/assets/TEMP/71272703a3c453c6f5af3240fc96a41ec82d86b4',
      //   title: 'مشروع نخلة أريكا | عمل حديقة بمساحة جيدة | 4 غرف نوم وحمامين',
      //   titleEn: 'Areca palm project | GOOD SIZE garden work | 4 BHK',
      //   subtitle: '',
      //   location: 'شركة  لتنسيق الحدائق المخصصة.',
      //   locationEn: 'Lifescape Custom Landscaping Inc.',
      //   price: '',
      //   priceUnit: '',
      //   priceUnitEn: '',
      //   favorite: false
      // }
    ]
  },
  {
    id: 'machineries-rent',
    title: 'العناصر الشائعة في الآلات للإيجار',
    titleEn: 'Popular Machineries for Rent',
    icon: 'machaineries',
    viewAllLink: '/categories/machineries-rent',
    items: [
      {
        id: 'machinery-rent-1',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770698006/Frame_628862-39_skl9wt.jpg',
        title: 'محملات صغيرة',
        titleEn: 'Mini Loaders',
        subtitle: '',
        location: 'شارع النجدة، أبوظبي، الإمارات',
        locationEn: 'Al Najda Street, Abu Dhabi, UAE',
        price: '200',
        priceUnit: '/ يوم',
        priceUnitEn: '/ Day',
        favorite: false
      },
      {
        id: 'machinery-rent-2',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697999/Frame_628862-38_y0ljok.jpg',
        title: 'جرارات مع ملحقات',
        titleEn: 'Tractors with attachments',
        subtitle: '',
        location: 'برج السماء، أبوظبي، الإمارات',
        locationEn: 'Sky Tower, Abu Dhabi, UAE',
        price: '260',
        priceUnit: '/ يوم',
        priceUnitEn: '/ Day',
        favorite: false
      },
      {
        id: 'machinery-rent-3',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697993/Frame_628862-37_ggf91q.jpg',
        title: 'جرار حقل',
        titleEn: 'Field tractor',
        subtitle: '',
        location: 'شارع النجدة، أبوظبي، الإمارات',
        locationEn: 'Al Najda Street, Abu Dhabi, UAE',
        price: '800',
        priceUnit: '/ يوم',
        priceUnitEn: '/ Day',
        favorite: true
      },
      {
        id: 'machinery-rent-4',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697989/Frame_628862-36_uhygiz.jpg',
        title: 'حفار جي سي بي',
        titleEn: 'JCB',
        subtitle: '',
        location: 'الشامخة',
        locationEn: 'Al Shamkha',
        price: '2500',
        priceUnit: '/ يوم',
        priceUnitEn: '/ Day',
        favorite: false
      },
      {
        id: 'machinery-rent-5',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697986/Frame_628862-35_sbavno.jpg',
        title: 'جامع الذرة',
        titleEn: 'Corn collector',
        subtitle: '',
        location: 'الشامخة، أبوظبي، الإمارات',
        locationEn: 'Al Shamkha, Abu Dhabi, UAE',
        price: '1,00,00',
        priceUnit: '/ شهر',
        priceUnitEn: '/ Month',
        favorite: false
      },
      // {
      //   id: 'machinery-rent-6',
      //   image: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f',
      //   title: 'قطع الأشجار',
      //   titleEn: 'Tree cutting',
      //   subtitle: '',
      //   location: 'الشامخة',
      //   locationEn: 'Al Shamkha',
      //   price: '670',
      //   priceUnit: '/ يوم',
      //   priceUnitEn: '/ Day',
      //   favorite: false
      // }
    ]
  },
  {
    id: 'machineries-sale',
    title: 'العناصر الشائعة في الآلات للبيع',
    titleEn: 'Popular Machineries for Sale',
    icon: 'machaineries',
    viewAllLink: '/categories/machineries-sale',
    items: [
      {
        id: 'machinery-sale-1',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697983/Frame_628862-33_j8gt2g.jpg',
        title: 'محمل ثقيل',
        titleEn: 'Heavy loader',
        subtitle: '',
        location: 'شارع النجدة، أبوظبي، الإمارات',
        locationEn: 'Al Najda Street, Abu Dhabi, UAE',
        price: '200,000',
        priceUnit: '',
        priceUnitEn: '',
        favorite: false
      },
      {
        id: 'machinery-sale-2',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697980/Frame_628862-32_w06mve.jpg',
        title: 'شاحنة مع ملحقات',
        titleEn: 'Van with attachments',
        subtitle: '',
        location: 'برج السماء، أبوظبي، الإمارات',
        locationEn: 'Sky Tower, Abu Dhabi, UAE',
        price: '260,000',
        priceUnit: '',
        priceUnitEn: '',
        favorite: false
      },
      {
        id: 'machinery-sale-3',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697977/Frame_628862-31_q8zael.jpg',
        title: 'شاحنة عرض',
        titleEn: 'Display truck',
        subtitle: '',
        location: 'شارع النجدة، أبوظبي، الإمارات',
        locationEn: 'Al Najda Street, Abu Dhabi, UAE',
        price: '800,000',
        priceUnit: '',
        priceUnitEn: '',
        favorite: true
      },
      {
        id: 'machinery-sale-4',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697974/Frame_628862-30_qpf9cp.jpg',
        title: 'محمل',
        titleEn: 'Loader',
        subtitle: '',
        location: 'الشامخة',
        locationEn: 'Al Shamkha',
        price: '200,500',
        priceUnit: '',
        priceUnitEn: '',
        favorite: false
      },
      {
        id: 'machinery-sale-5',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697971/Frame_628862-29_ej0ar7.jpg',
        title: 'محمل صغير',
        titleEn: 'Mini loader',
        subtitle: '',
        location: 'الشامخة، أبوظبي، الإمارات',
        locationEn: 'Al Shamkha, Abu Dhabi, UAE',
        price: '100,000',
        priceUnit: '',
        priceUnitEn: '',
        favorite: false
      },
      // {
      //   id: 'machinery-sale-6',
      //   image: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f',
      //   title: 'رشاش بكرة',
      //   titleEn: 'Sprayer roller',
      //   subtitle: '',
      //   location: 'الشامخة',
      //   locationEn: 'Al Shamkha',
      //   price: '200,670',
      //   priceUnit: '',
      //   priceUnitEn: '',
      //   favorite: false
      // }
    ]
  },
  {
    id: 'tools',
    title: 'العناصر الشائعة في أدوات للبيع',
    titleEn: 'Popular Tools for Sale',
    icon: 'equipments',
    viewAllLink: '/categories/tools',
    items: [
      {
        id: 'tool-1',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697963/Frame_628862-26_lh1amr.jpg',
        title: 'أداة إزالة الأعشاب',
        titleEn: 'Weeder',
        subtitle: '',
        location: 'شارع النجدة، أبوظبي، الإمارات',
        locationEn: 'Al Najda Street, Abu Dhabi, UAE',
        price: '200',
        priceUnit: '',
        priceUnitEn: '',
        favorite: false
      },
      {
        id: 'tool-2',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697962/Frame_628862-25_zrfolv.jpg',
        title: 'مجرفة يدوية',
        titleEn: 'Hand trowel',
        subtitle: '',
        location: 'برج السماء، أبوظبي، الإمارات',
        locationEn: 'Sky Tower, Abu Dhabi, UAE',
        price: '260',
        priceUnit: '',
        priceUnitEn: '',
        favorite: false
      },
      {
        id: 'tool-3',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697861/Frame_628862-52_akseas.jpg',
        title: 'شوكة الحديقة',
        titleEn: 'Garden fork',
        subtitle: '',
        location: 'شارع النجدة، أبوظبي، الإمارات',
        locationEn: 'Al Najda Street, Abu Dhabi, UAE',
        price: '800',
        priceUnit: '',
        priceUnitEn: '',
        favorite: true
      },
      {
        id: 'tool-4',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697859/Frame_628862-51_bxppyb.jpg',
        title: 'مقص التقليم',
        titleEn: 'Pruning shears',
        subtitle: '',
        location: 'الشامخة',
        locationEn: 'Al Shamkha',
        price: '250',
        priceUnit: '',
        priceUnitEn: '',
        favorite: false
      },
      {
        id: 'tool-5',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697854/Frame_628862-49_zpb6cw.jpg',
        title: 'أداة زراعة البذور',
        titleEn: 'Seed dibber',
        subtitle: '',
        location: 'الشامخة، أبوظبي، الإمارات',
        locationEn: 'Al Shamkha, Abu Dhabi, UAE',
        price: '6,00,00',
        priceUnit: '',
        priceUnitEn: '',
        favorite: false
      },
      // {
      //   id: 'tool-6',
      //   image: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f',
      //   title: 'آلة الحرث',
      //   titleEn: 'Cultivator',
      //   subtitle: '',
      //   location: 'الشامخة',
      //   locationEn: 'Al Shamkha',
      //   price: '670',
      //   priceUnit: '',
      //   priceUnitEn: '',
      //   favorite: false
      // }
    ]
  },
  {
    id: 'trees',
    title: 'العناصر الشائعة في قسم الأشجار للبيع',
    titleEn: 'Popular Trees for Sale',
    icon: 'nursery',
    viewAllLink: '/categories/trees',
    items: [
      {
        id: 'tree-1',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770698020/Frame_628862-42_qmtil2.jpg',
        title: 'نبات الأفعى',
        titleEn: 'Snake plant',
        subtitle: '',
        location: 'شارع النجدة، أبوظبي، الإمارات',
        locationEn: 'Al Najda Street, Abu Dhabi, UAE',
        price: '200',
        priceUnit: '/ كجم',
        priceUnitEn: '/ Kg',
        favorite: false
      },
      {
        id: 'tree-2',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697957/Frame_628862-23_obuuhp.jpg',
        title: 'نبات الأوراق الحمراء',
        titleEn: 'Red leaf plant',
        subtitle: '',
        location: 'برج السماء، أبوظبي، الإمارات',
        locationEn: 'Sky Tower, Abu Dhabi, UAE',
        price: '180',
        priceUnit: '/ كجم',
        priceUnitEn: '/ Kg',
        favorite: false
      },
      {
        id: 'tree-3',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697954/Frame_628862-22_npz8jj.jpg',
        title: 'نبات النيم',
        titleEn: 'Neem plant',
        subtitle: '',
        location: 'شارع النجدة، أبوظبي، الإمارات',
        locationEn: 'Al Najda Street, Abu Dhabi, UAE',
        price: '400',
        priceUnit: '/ كجم',
        priceUnitEn: '/ Kg',
        favorite: false
      },
      {
        id: 'tree-4',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697951/Frame_628862-21_hdjywm.jpg',
        title: 'نبات أوراق الزنبق',
        titleEn: 'Lilly leaf plant',
        subtitle: '',
        location: 'الشامخة',
        locationEn: 'Al Shamkha',
        price: '250',
        priceUnit: '/ كجم',
        priceUnitEn: '/ Kg',
        favorite: false
      },
      {
        id: 'tree-5',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/d97cce6e2d158a290e96fd0eaa4863d5758849e0',
        title: 'نبات أوراق الأفعى',
        titleEn: 'Snake leaves plant',
        subtitle: '',
        location: 'الشامخة، أبوظبي، الإمارات',
        locationEn: 'Al Shamkha, Abu Dhabi, UAE',
        price: '200',
        priceUnit: '/ كجم',
        priceUnitEn: '/ Kg',
        favorite: false
      },
      {
        id: 'tree-6',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697949/Frame_628862-20_dqorhl.jpg',
        title: 'نبات العنكبوت مع الوعاء',
        titleEn: 'Spider Plant with pot',
        subtitle: '',
        location: 'الشامخة',
        locationEn: 'Al Shamkha',
        price: '98',
        priceUnit: '/ كجم',
        priceUnitEn: '/ Kg',
        favorite: false
      }
    ]
  },
  {
    id: 'fertilizers',
    title: 'العناصر الشائعة في الأسمدة للبيع',
    titleEn: 'Popular Agro Chemicals for Sale',
    icon: 'Fertilizers',
    viewAllLink: '/categories/fertilizers',
    items: [
      {
        id: 'fertilizer-1',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697852/Frame_628862-47_vplss0.jpg',
        title: 'النيتروجين',
        titleEn: 'Nitrogenous',
        subtitle: '',
        location: 'شارع النجدة، أبوظبي، الإمارات',
        locationEn: 'Al Najda Street, Abu Dhabi, UAE',
        price: '200',
        priceUnit: '/ كجم',
        priceUnitEn: '/ Kg',
        favorite: false
      },
      {
        id: 'fertilizer-2',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697854/Frame_628862-48_qs5emj.jpg',
        title: 'الفوسفات',
        titleEn: 'Phosphate',
        subtitle: '',
        location: 'الشامخة',
        locationEn: 'Al Shamkha',
        price: '80',
        priceUnit: '/ كجم',
        priceUnitEn: '/ Kg',
        favorite: false
      },
      {
        id: 'fertilizer-3',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697865/Frame_628862-54_bbmkln.jpg',
        title: 'العناصر الصغرى',
        titleEn: 'Micronutrient',
        subtitle: '',
        location: 'شارع النجدة، أبوظبي، الإمارات',
        locationEn: 'Al Najda Street, Abu Dhabi, UAE',
        price: '89',
        priceUnit: '/ كجم',
        priceUnitEn: '/ Kg',
        favorite: false
      },
      {
        id: 'fertilizer-4',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697946/Frame_628862-18_rwdk5r.jpg',
        title: 'اليوريا',
        titleEn: 'Urea',
        subtitle: '',
        location: 'برج السماء، أبوظبي، الإمارات',
        locationEn: 'Sky Tower, Abu Dhabi, UAE',
        price: '150',
        priceUnit: '/ كجم',
        priceUnitEn: '/ Kg',
        favorite: false
      },
      {
        id: 'fertilizer-5',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770697940/Frame_628862-16_us7xu1.jpg',
        title: 'نترات الأمونيوم',
        titleEn: 'Ammonium nitrate',
        subtitle: '',
        location: 'الشامخة، أبوظبي، الإمارات',
        locationEn: 'Al Shamkha, Abu Dhabi, UAE',
        price: '162',
        priceUnit: '/ كجم',
        priceUnitEn: '/ Kg',
        favorite: false
      },
      // {
      //   id: 'fertilizer-6',
      //   image: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f',
      //   title: 'البوتاسيوم',
      //   titleEn: 'Potassium',
      //   subtitle: '',
      //   location: 'الشامخة',
      //   locationEn: 'Al Shamkha',
      //   price: '220',
      //   priceUnit: '/ كجم',
      //   priceUnitEn: '/ Kg',
      //   favorite: false
      // }
    ]
  },
  {
    id: 'forum',
    title: 'المنشورات الشائعة في المنتدى',
    titleEn: 'Trending Posts in Forum',
    icon: 'forum',
    viewAllLink: '/landscape-network',
    items: [
      {
        id: 'forum-1',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770698041/Rectangle_16_jn34ma.jpg',
        images: [
         'https://res.cloudinary.com/drhwchhsp/image/upload/v1770701157/Frame_628862-3_pxcyeu.jpg',
      'https://res.cloudinary.com/drhwchhsp/image/upload/v1770701161/Rectangle_25_aweb3h.jpg',
      'https://res.cloudinary.com/drhwchhsp/image/upload/v1770701160/Rectangle_23_xanbqo.jpg',
    'https://res.cloudinary.com/drhwchhsp/image/upload/v1770701158/Rectangle_22_fzr2ap.jpg',
  'https://res.cloudinary.com/drhwchhsp/image/upload/v1770701155/Frame_628862-2_jwa8fj.jpg',
'https://res.cloudinary.com/drhwchhsp/image/upload/v1770701155/Frame_628862-1_sniayx.jpg'
        ],
        title: 'كيفية زراعة نبات المال؟',
        titleEn: 'How to grow money plan?',
        author: 'محمد ياسر',
        authorEn: 'Mohammed Yasir',
        timeAgo: 'منذ ساعتين',
        timeAgoEn: '2hrs ago',
        commentCount: 22,
      },
      {
        id: 'forum-2',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770698035/image_58_eiihxb.jpg',
        images: [
          'https://res.cloudinary.com/drhwchhsp/image/upload/v1770698041/tree_pathway_gn7awg.jpg','https://res.cloudinary.com/drhwchhsp/image/upload/v1770698041/Rectangle_16_jn34ma.jpg'
        ],
        title: 'شجرة المانجو الخاصة بي تموت، كيف أنقذها؟',
        titleEn: 'My mango tree is dying, how to save it?',
        author: 'محمد ياسر',
        authorEn: 'Mohammed Yasir',
        timeAgo: 'منذ يوم',
        timeAgoEn: '1day ago',
        commentCount: 636,
      },
      {
        id: 'forum-3',
        image: 'https://res.cloudinary.com/drhwchhsp/image/upload/v1770698041/tree_pathway_gn7awg.jpg',
        images: [
          'https://res.cloudinary.com/drhwchhsp/image/upload/v1770698035/image_58_eiihxb.jpg','https://res.cloudinary.com/drhwchhsp/image/upload/v1770698041/tree_pathway_gn7awg.jpg','https://res.cloudinary.com/drhwchhsp/image/upload/v1770698041/Rectangle_16_jn34ma.jpg'
        ],
        title: 'ما هي الآفات والأمراض الشائعة التي يمكن أن تؤثر على الأشجار في منطقتك، وكيف يمكنك منعها؟',
        titleEn: 'What are common pests and diseases that can affect trees in your area, and how can you prevent them?',
        author: 'محمد ياسر',
        authorEn: 'Mohammed Yasir',
        timeAgo: 'منذ يوم',
        timeAgoEn: '1day ago',
        commentCount: 56,
      },
      // {
      //   id: 'forum-4',
      //   image: 'https://api.builder.io/api/v1/image/assets/TEMP/1ae32a2abee0a835e2cc1931001cd2d656ec4663?width=236',
      //   images: [
      //     'https://api.builder.io/api/v1/image/assets/TEMP/1ae32a2abee0a835e2cc1931001cd2d656ec4663?width=236',
      //     'https://api.builder.io/api/v1/image/assets/TEMP/3f09c6eba88ef2566ca56f9e3fb9b4b197908574?width=236',
      //     'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=236',
      //   ],
      //   title: 'هل يمكنني المشاركة في مبادرات زراعة الأشجار المجتمعية؟',
      //   titleEn: 'Can I get involved in community tree planting initiatives?',
      //   author: 'محمد ياسر',
      //   authorEn: 'Mohammed Yasir',
      //   timeAgo: 'منذ 3 أيام',
      //   timeAgoEn: '3 day ago',
      //   commentCount: 83,
      // },
      // {
      //   id: 'forum-5',
      //   image: 'https://api.builder.io/api/v1/image/assets/TEMP/05ef63691745cee167060ca79a5f07467902372c?width=238',
      //   images: [
      //     'https://api.builder.io/api/v1/image/assets/TEMP/05ef63691745cee167060ca79a5f07467902372c?width=238',
      //     'https://api.builder.io/api/v1/image/assets/TEMP/3f09c6eba88ef2566ca56f9e3fb9b4b197908574?width=238',
      //     'https://api.builder.io/api/v1/image/assets/TEMP/71272703a3c453c6f5af3240fc96a41ec82d86b4?width=238',
      //   ],
      //   title: 'اختيار أشجار النخيل المناسبة لممتلكاتك',
      //   titleEn: 'Choosing the right palm trees for your property',
      //   author: 'خبراء تنسيق الحدائق',
      //   authorEn: 'Landscaping Masters',
      //   timeAgo: 'منذ 5 أيام',
      //   timeAgoEn: '5 days ago',
      //   commentCount: 76,
      // },
      // {
      //   id: 'forum-6',
      //   image: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=238',
      //   images: [
      //     'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=238',
      //     'https://api.builder.io/api/v1/image/assets/TEMP/152cc0a6ebba88a4e5b69bf0509b18732ed27c39?width=238',
      //     'https://api.builder.io/api/v1/image/assets/TEMP/d97cce6e2d158a290e96fd0eaa4863d5758849e0?width=238',
      //   ],
      //   title: 'تركيب نظام الري - الأعمال اليدوية مقابل الاحترافي',
      //   titleEn: 'Irrigation system installation - DIY vs Professional',
      //   author: 'بستانيو الإمارات',
      //   authorEn: 'UAE Gardeners',
      //   timeAgo: 'منذ أسبوع',
      //   timeAgoEn: '1 week ago',
      //   commentCount: 102,
      // }
    ]
  }
];

export const headerData = {
  topBar: {
    primaryButton: {
      text: 'إنشاء قوائم جديدة',
      textEn: 'Create New Listing',
      link: '/post-ad'
    },
    auth: {
      loginText: 'تسجيل الدخول / التسجيل',
      loginTextEn: 'Log In/Sign Up',
      loginLink: '/login'
    },
    notifications: {
      count: 0,
      link: '/notifications'
    },
    language: {
      current: 'عربي',
      currentEn: 'Arabic',
      flag: 'ae',
      options: [
        { code: 'ar', label: 'عربي', labelEn: 'Arabic', flag: 'ae' },
        { code: 'en', label: 'English', labelEn: 'English', flag: 'gb' }
      ]
    }
  },
  navigation: {
    logo: {
      src: 'data:image/svg+xml;base64,...', // SVG logo from Figma
      alt: 'LANDSCAPER',
      link: '/'
    },
    menuItems: [
      { id: 'landscape-network', label: 'المنتدى', labelEn: 'Forum', link: '/landscape-network', icon: 'messages_2' },
      { id: 'movers', label: 'النقل', labelEn: 'Transport', link: '/categories/movers', icon: 'Transport' },
      { id: 'farms', label: 'المزارع', labelEn: 'Farms', link: '/categories/farms', icon: 'Farms' },
      { id: 'seeds', label: 'البذور', labelEn: 'Seeds', link: '/categories/seeds', icon: 'Seeds' },
      { id: 'agro-chemicals', label: 'الأسمدة', labelEn: 'Fertilizers', link: '/categories/agro-chemicals', icon: 'Fertilizers' },
      { id: 'trees', label: 'الأشجار', labelEn: 'Trees', link: '/categories/trees', icon: 'nursery' },
      { id: 'tools', label: 'أدوات', labelEn: 'Tools', link: '/categories/tools', icon: 'equipments' },
      { id: 'machineries', label: 'الآلات', labelEn: 'Machineries', link: '/categories/machineries', icon: 'machaineries' },
      { id: 'projects', label: 'المشاريع', labelEn: 'Projects', link: '/categories/projects', icon: 'landscaper' }
    ]
  }
};

export const footerData = {
  logo: {
    src: 'data:image/svg+xml;base64,...', // SVG logo from Figma
    alt: 'LANDSCAPER'
  },
  description: '"المصمم الخارجي" هو منصة شاملة مصممة لتلبية الاحتياجات المتنوعة لعشاق ومحترفي تنسيق الحدائق. تقدم المنصة مجموعة واسعة من الميزات لتسهيل إنشاء وإدارة واكتشاف مشاريع وخدمات ومعدات تنسيق الحدائق.',
  copyright: '© المناظر الطبيعية 2025، جميع الحقوق محفوظة.',
  sections: [
    {
      title: 'الشركة',
      links: [
        { label: 'من نحن', link: '/about' },
        { label: 'اتصل بنا', link: '/contact' },
        { label: 'الأخبار والفعاليات', link: '/news' },
        { label: 'زيارة شبكة المناظر الطبيعية', link: '/landscape-network' }
      ]
    },
    {
      title: 'الأسئلة الشائعة',
      links: [
        { label: 'سياسة الخصوصية', link: '/privacy' },
        { label: 'الشروط والأحكام', link: '/terms' }
      ]
    },
    {
      title: 'وسائل التواصل الاجتماعي',
      links: [
        { label: 'لينكد إن', link: '#', icon: 'linkedin' },
        { label: 'تويتر', link: '#', icon: 'twitter' },
        { label: 'يوتيوب', link: '#', icon: 'youtube' }
      ]
    }
  ]
};
