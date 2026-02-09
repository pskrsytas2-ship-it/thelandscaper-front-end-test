// Landing Page Data
// Extracted from Figma Design with Builder.io image URLs

export const heroData = {
  backgroundImage: 'https://api.builder.io/api/v1/image/assets/TEMP/9be3baed836ae26a3307735e9ec5487cb7fef27d',
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
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/05ef63691745cee167060ca79a5f07467902372c?width=552',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/46dc379ca3b835c7b62debfbba9664f327409d44',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/3f09c6eba88ef2566ca56f9e3fb9b4b197908574',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/e30d075912c99f1ac50a0bdb15f2443ee8442ec3',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/18726854b4b33d33ef16f6a4136c5d7cf8779460',
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
      {
        id: 'project-6',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/71272703a3c453c6f5af3240fc96a41ec82d86b4',
        title: 'مشروع نخلة أريكا | عمل حديقة بمساحة جيدة | 4 غرف نوم وحمامين',
        titleEn: 'Areca palm project | GOOD SIZE garden work | 4 BHK',
        subtitle: '',
        location: 'شركة  لتنسيق الحدائق المخصصة.',
        locationEn: 'Lifescape Custom Landscaping Inc.',
        price: '',
        priceUnit: '',
        priceUnitEn: '',
        favorite: false
      }
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/b2e30b069b6239dbd46ae0d3cc1fcbb318fcc25b',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/263ed740a153be7cb68abc426c38a9b94ddecf5c',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/c3e9f38018a410fbd0b878cf0e395ae7a6ea1a33',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/663a4773f1418504148f217208a44b7b8e1cb36d',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/b5043f861c44a52c80692370ef27abe3f851b930',
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
      {
        id: 'machinery-rent-6',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f',
        title: 'قطع الأشجار',
        titleEn: 'Tree cutting',
        subtitle: '',
        location: 'الشامخة',
        locationEn: 'Al Shamkha',
        price: '670',
        priceUnit: '/ يوم',
        priceUnitEn: '/ Day',
        favorite: false
      }
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/806d9d4f22c807a56a400f82bbb4df2960a331d3',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/50653b4a556487a3053d07edc59256870a76c994',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/7b2122987367db26421f3580a24942226803a4ba',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/52b1979003babd43256874ca409656be107af377',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/9161cc746b2d9c391f2609268c2ccdff04c70b4a',
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
      {
        id: 'machinery-sale-6',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f',
        title: 'رشاش بكرة',
        titleEn: 'Sprayer roller',
        subtitle: '',
        location: 'الشامخة',
        locationEn: 'Al Shamkha',
        price: '200,670',
        priceUnit: '',
        priceUnitEn: '',
        favorite: false
      }
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/95a48899de615c3e8680847347351acf40bbabcf',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/36bdea3529666a15ceedb42388e4403cfe370903',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/689b9210bc339e536667043f556c03aad239aefc',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/3b34dfc3336e4aacf8e4878a3eeb4d20a1227b81',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/4ce7d10c7236c50420ff427c1e3f959a22dae163',
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
      {
        id: 'tool-6',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f',
        title: 'آلة الحرث',
        titleEn: 'Cultivator',
        subtitle: '',
        location: 'الشامخة',
        locationEn: 'Al Shamkha',
        price: '670',
        priceUnit: '',
        priceUnitEn: '',
        favorite: false
      }
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/b9a90a6de611c594b23d352d9522460a2c2c8104',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/19ac3af87c5d9538edd7ea7f17ab73028667b44e',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/152cc0a6ebba88a4e5b69bf0509b18732ed27c39',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/c7077d162f6bc35e67a422291815a5c3e13445f8',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/48a2566cfa4b689f83fc36574b82c89afe933e41',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/f23c89a9faff2bfa969e0de3d2ca25cf5bed40a7',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/5f1fb7971f3e419941274052fa13b451006868a8',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/7914a20319f2aafbabefb3a84d0092e6188f8c8f',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/870e6f5f47b4dc9c329810b54d998be4540db0d2',
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
      {
        id: 'fertilizer-6',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f',
        title: 'البوتاسيوم',
        titleEn: 'Potassium',
        subtitle: '',
        location: 'الشامخة',
        locationEn: 'Al Shamkha',
        price: '220',
        priceUnit: '/ كجم',
        priceUnitEn: '/ Kg',
        favorite: false
      }
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/cd71af43bcdd782289d53cc2a8461e91b4743ee1?width=238',
        images: [
          'https://api.builder.io/api/v1/image/assets/TEMP/cd71af43bcdd782289d53cc2a8461e91b4743ee1?width=238',
          'https://api.builder.io/api/v1/image/assets/TEMP/71272703a3c453c6f5af3240fc96a41ec82d86b4?width=238',
          'https://api.builder.io/api/v1/image/assets/TEMP/18726854b4b33d33ef16f6a4136c5d7cf8779460?width=238',
          'https://api.builder.io/api/v1/image/assets/TEMP/e30d075912c99f1ac50a0bdb15f2443ee8442ec3?width=238',
          'https://api.builder.io/api/v1/image/assets/TEMP/3f09c6eba88ef2566ca56f9e3fb9b4b197908574?width=238',
          'https://api.builder.io/api/v1/image/assets/TEMP/05ef63691745cee167060ca79a5f07467902372c?width=238',
          'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=238',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/c0accebc9a26e7886777400f497244fe93e741ef?width=237',
        images: [
          'https://api.builder.io/api/v1/image/assets/TEMP/c0accebc9a26e7886777400f497244fe93e741ef?width=237',
          'https://api.builder.io/api/v1/image/assets/TEMP/18726854b4b33d33ef16f6a4136c5d7cf8779460?width=237',
          'https://api.builder.io/api/v1/image/assets/TEMP/e30d075912c99f1ac50a0bdb15f2443ee8442ec3?width=237',
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
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/60b5fea5ac6f7ae48243fe3a9b20154d4aed0640?width=238',
        images: [
          'https://api.builder.io/api/v1/image/assets/TEMP/60b5fea5ac6f7ae48243fe3a9b20154d4aed0640?width=238',
          'https://api.builder.io/api/v1/image/assets/TEMP/71272703a3c453c6f5af3240fc96a41ec82d86b4?width=238',
          'https://api.builder.io/api/v1/image/assets/TEMP/e30d075912c99f1ac50a0bdb15f2443ee8442ec3?width=238',
        ],
        title: 'ما هي الآفات والأمراض الشائعة التي يمكن أن تؤثر على الأشجار في منطقتك، وكيف يمكنك منعها؟',
        titleEn: 'What are common pests and diseases that can affect trees in your area, and how can you prevent them?',
        author: 'محمد ياسر',
        authorEn: 'Mohammed Yasir',
        timeAgo: 'منذ يوم',
        timeAgoEn: '1day ago',
        commentCount: 56,
      },
      {
        id: 'forum-4',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/1ae32a2abee0a835e2cc1931001cd2d656ec4663?width=236',
        images: [
          'https://api.builder.io/api/v1/image/assets/TEMP/1ae32a2abee0a835e2cc1931001cd2d656ec4663?width=236',
          'https://api.builder.io/api/v1/image/assets/TEMP/3f09c6eba88ef2566ca56f9e3fb9b4b197908574?width=236',
          'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=236',
        ],
        title: 'هل يمكنني المشاركة في مبادرات زراعة الأشجار المجتمعية؟',
        titleEn: 'Can I get involved in community tree planting initiatives?',
        author: 'محمد ياسر',
        authorEn: 'Mohammed Yasir',
        timeAgo: 'منذ 3 أيام',
        timeAgoEn: '3 day ago',
        commentCount: 83,
      },
      {
        id: 'forum-5',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/05ef63691745cee167060ca79a5f07467902372c?width=238',
        images: [
          'https://api.builder.io/api/v1/image/assets/TEMP/05ef63691745cee167060ca79a5f07467902372c?width=238',
          'https://api.builder.io/api/v1/image/assets/TEMP/3f09c6eba88ef2566ca56f9e3fb9b4b197908574?width=238',
          'https://api.builder.io/api/v1/image/assets/TEMP/71272703a3c453c6f5af3240fc96a41ec82d86b4?width=238',
        ],
        title: 'اختيار أشجار النخيل المناسبة لممتلكاتك',
        titleEn: 'Choosing the right palm trees for your property',
        author: 'خبراء تنسيق الحدائق',
        authorEn: 'Landscaping Masters',
        timeAgo: 'منذ 5 أيام',
        timeAgoEn: '5 days ago',
        commentCount: 76,
      },
      {
        id: 'forum-6',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=238',
        images: [
          'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=238',
          'https://api.builder.io/api/v1/image/assets/TEMP/152cc0a6ebba88a4e5b69bf0509b18732ed27c39?width=238',
          'https://api.builder.io/api/v1/image/assets/TEMP/d97cce6e2d158a290e96fd0eaa4863d5758849e0?width=238',
        ],
        title: 'تركيب نظام الري - الأعمال اليدوية مقابل الاحترافي',
        titleEn: 'Irrigation system installation - DIY vs Professional',
        author: 'بستانيو الإمارات',
        authorEn: 'UAE Gardeners',
        timeAgo: 'منذ أسبوع',
        timeAgoEn: '1 week ago',
        commentCount: 102,
      }
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
