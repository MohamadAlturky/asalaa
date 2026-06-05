import type { AppLocale } from '../types/homeContent'
import type { ProductDetailContent, ProductListItem, ProductsIndexContent } from '../types/productDetail'

const IMGS = {
  coppersmithing: '/images/products/Gemini_Generated_Image_pkdubypkdubypkdu (3).png',
  mosaics:        '/images/products/Gemini_Generated_Image_pkdubypkdubypkdu.png',
  ceramics:       '/images/products/Gemini_Generated_Image_pkdubypkdubypkdu (1).png',
  textiles:       '/images/products/Gemini_Generated_Image_pkdubypkdubypkdu (2).png',
  glassblowing:   '/images/products/Gemini_Generated_Image_zhsapyzhsapyzhsa.png',
  marquetry:      '/images/products/Gemini_Generated_Image_zhsapyzhsapyzhsa (1).png',
  soap:           '/images/products/Gemini_Generated_Image_zhsapyzhsapyzhsa (2).png',
  embroidery:     '/images/products/Gemini_Generated_Image_zhsapyzhsapyzhsa (3).png',
}

const SHARED_LABELS = {
  ar: {
    pageTitle: 'منتجاتنا',
    breadcrumbHomeLabel: 'الصفحة الرئيسية',
    breadcrumbProductsLabel: 'منتجاتنا',
    heroDecorImageSrc: '/images/mockup/museum-strip.svg',
    heroDecorImageAlt: 'زخرفة تراثية',
    addToCartLabel: 'إضافة إلى سلة المشتريات',
    buyNowLabel: 'اشتري الآن',
    galleryPrevLabel: 'الصورة السابقة',
    galleryNextLabel: 'الصورة التالية',
    thumbnailPickerLabel: 'معرض الصور',
    sizeOptions: {
      id: 'size' as const,
      label: 'اختر المقاس',
      choices: [
        { id: 'large', label: 'كبير' },
        { id: 'medium', label: 'متوسط' },
        { id: 'small', label: 'صغير' },
      ],
    },
    colorOptions: {
      id: 'color' as const,
      label: 'اختر اللون',
      choices: [
        { id: 'gold', label: 'ذهبي' },
        { id: 'black', label: 'أسود' },
        { id: 'grey', label: 'رمادي' },
      ],
    },
  },
  en: {
    pageTitle: 'Our products',
    breadcrumbHomeLabel: 'Home',
    breadcrumbProductsLabel: 'Our products',
    heroDecorImageSrc: '/images/mockup/museum-strip.svg',
    heroDecorImageAlt: 'Heritage ornament',
    addToCartLabel: 'Add to cart',
    buyNowLabel: 'Buy now',
    galleryPrevLabel: 'Previous image',
    galleryNextLabel: 'Next image',
    thumbnailPickerLabel: 'Image gallery',
    sizeOptions: {
      id: 'size' as const,
      label: 'Choose size',
      choices: [
        { id: 'large', label: 'Large' },
        { id: 'medium', label: 'Medium' },
        { id: 'small', label: 'Small' },
      ],
    },
    colorOptions: {
      id: 'color' as const,
      label: 'Choose color',
      choices: [
        { id: 'gold', label: 'Gold' },
        { id: 'black', label: 'Black' },
        { id: 'grey', label: 'Grey' },
      ],
    },
  },
}

const DETAIL: Record<AppLocale, Record<string, ProductDetailContent>> = {
  ar: {
    'brass-mortar': {
      ...SHARED_LABELS.ar,
      slug: 'brass-mortar',
      categoryLabel: 'نحاسيات',
      title: 'مدق هاون نحاس محفور يدوياً تراثي',
      descriptionParagraphs: [
        'قطعة أصيلة من الحرف اليدوية السورية، نُفّذت بدقة على النحاس الصلب وتميزت بنقوش تراثية تعكس ذاكرة البيت الشامي.',
        'مناسبة للاستخدام اليومي وللعرض كقطعة ديكور تمثل تراثاً حياً؛ كل قطعة فريدة قليلاً بسبب الطابع اليدوي للحفر والتشطيب.',
      ],
      priceDisplay: '١٬٢٠٠٬٠٠٠ ل.س',
      images: [
        { src: IMGS.coppersmithing, alt: 'نقش النحاس في سوق دمشق' },
        { src: IMGS.mosaics,        alt: 'الفسيفساء الدمشقية المعقدة' },
        { src: IMGS.glassblowing,   alt: 'نفخ الزجاج الدمشقي' },
        { src: IMGS.marquetry,      alt: 'التطعيم بالصدف والماركتري' },
      ],
      defaultSizeId: 'large',
      defaultColorId: 'black',
    },
    'damascus-mosaic': {
      ...SHARED_LABELS.ar,
      slug: 'damascus-mosaic',
      categoryLabel: 'فسيفساء',
      title: 'لوحة فسيفساء دمشقية',
      descriptionParagraphs: [
        'لوحة فسيفساء يدوية الصنع تجمع بين الفن الإسلامي الكلاسيكي وخبرة الحرفيين الدمشقيين عبر الأجيال.',
        'تُنفَّذ باستخدام قطع زجاجية وحجرية مقطوعة بدقة تامة، وتُشكّل قطعة فنية فريدة تضيف لمسة تراثية راقية لأي مكان.',
      ],
      priceDisplay: '٨٥٠٬٠٠٠ ل.س',
      images: [
        { src: IMGS.mosaics,        alt: 'الفسيفساء الدمشقية المعقدة' },
        { src: IMGS.coppersmithing, alt: 'نقش النحاس في سوق دمشق' },
        { src: IMGS.ceramics,       alt: 'فخار دمشقي مزخرف' },
        { src: IMGS.marquetry,      alt: 'التطعيم بالصدف والماركتري' },
      ],
      defaultSizeId: 'medium',
      defaultColorId: 'gold',
    },
    'ceramic-bowl': {
      ...SHARED_LABELS.ar,
      slug: 'ceramic-bowl',
      categoryLabel: 'فخاريات',
      title: 'طبق فخاري مزخرف',
      descriptionParagraphs: [
        'طبق من الفخار الدمشقي الأصيل، يُشكَّل يدوياً على الدولاب ويُزيَّن بزخارف نباتية وهندسية ملوّنة بالطريقة التقليدية.',
        'مثالي للعرض أو الاستخدام في المناسبات الخاصة، يعكس روح الحضارة الشامية وجمال الحرفة اليدوية الأصيلة.',
      ],
      priceDisplay: '٦٥٠٬٠٠٠ ل.س',
      images: [
        { src: IMGS.ceramics,       alt: 'فخار دمشقي مزخرف' },
        { src: IMGS.mosaics,        alt: 'الفسيفساء الدمشقية المعقدة' },
        { src: IMGS.coppersmithing, alt: 'نقش النحاس في سوق دمشق' },
        { src: IMGS.textiles,       alt: 'منسوجات حريرية دمشقية' },
      ],
      defaultSizeId: 'medium',
      defaultColorId: 'gold',
    },
    'silk-textile': {
      ...SHARED_LABELS.ar,
      slug: 'silk-textile',
      categoryLabel: 'منسوجات',
      title: 'قماش حرير دمشقي مطرز',
      descriptionParagraphs: [
        'منسوج من أجود أنواع الحرير الطبيعي بأنماط دمشقية كلاسيكية، يجمع بين ثراء الألوان ودقة التطريز اليدوي التقليدي.',
        'يُستخدم في الأزياء التراثية والديكور الداخلي الفاخر، وقد اشتُهر الحرير الدمشقي بجودته عبر التاريخ في أسواق العالم.',
      ],
      priceDisplay: '١٬٥٠٠٬٠٠٠ ل.س',
      images: [
        { src: IMGS.textiles,       alt: 'منسوجات حريرية دمشقية' },
        { src: IMGS.embroidery,     alt: 'تطريز يدوي تراثي' },
        { src: IMGS.mosaics,        alt: 'الفسيفساء الدمشقية المعقدة' },
        { src: IMGS.ceramics,       alt: 'فخار دمشقي مزخرف' },
      ],
      defaultSizeId: 'large',
      defaultColorId: 'gold',
    },
    'blown-glass-vase': {
      ...SHARED_LABELS.ar,
      slug: 'blown-glass-vase',
      categoryLabel: 'زجاجيات',
      title: 'مزهرية زجاج مفخوخ',
      descriptionParagraphs: [
        'مزهرية من الزجاج المفخوخ يدوياً وفق تقنيات عريقة توارثها حرفيو دمشق جيلاً بعد جيل، تتميز بألوانها الزاهية وأشكالها المميزة.',
        'كل قطعة فريدة بذاتها وتحمل بصمة النَّفَس البشري الذي شكّلها، مما يجعلها تحفة فنية حقيقية وهدية استثنائية.',
      ],
      priceDisplay: '٧٥٠٬٠٠٠ ل.س',
      images: [
        { src: IMGS.glassblowing,   alt: 'نفخ الزجاج الدمشقي' },
        { src: IMGS.coppersmithing, alt: 'نقش النحاس في سوق دمشق' },
        { src: IMGS.mosaics,        alt: 'الفسيفساء الدمشقية المعقدة' },
        { src: IMGS.ceramics,       alt: 'فخار دمشقي مزخرف' },
      ],
      defaultSizeId: 'large',
      defaultColorId: 'gold',
    },
    'marquetry-box': {
      ...SHARED_LABELS.ar,
      slug: 'marquetry-box',
      categoryLabel: 'أعمال خشبية',
      title: 'صندوق تطعيم صدف وخشب',
      descriptionParagraphs: [
        'صندوق خشبي من خشب الجوز المحلي، مُطعَّم بقطع الصدف والعاج وفق فن الماركتري الدمشقي الأصيل الذي يعود لقرون.',
        'يُستخدم لحفظ المجوهرات أو كقطعة ديكور راقية، ويعكس ذروة الحرفة اليدوية الشامية في التطعيم والنقش الخشبي.',
      ],
      priceDisplay: '١٬١٠٠٬٠٠٠ ل.س',
      images: [
        { src: IMGS.marquetry,      alt: 'التطعيم بالصدف والماركتري' },
        { src: IMGS.coppersmithing, alt: 'نقش النحاس في سوق دمشق' },
        { src: IMGS.glassblowing,   alt: 'نفخ الزجاج الدمشقي' },
        { src: IMGS.mosaics,        alt: 'الفسيفساء الدمشقية المعقدة' },
      ],
      defaultSizeId: 'medium',
      defaultColorId: 'black',
    },
    'aleppo-soap': {
      ...SHARED_LABELS.ar,
      slug: 'aleppo-soap',
      categoryLabel: 'منتجات طبيعية',
      title: 'صابون حلبي طبيعي',
      descriptionParagraphs: [
        'صابون حلبي أصيل مصنوع من زيت الزيتون وزيت الغار الطبيعي بنسب محددة، وفق وصفة تقليدية عمرها أكثر من ألف عام.',
        'يُخزَّن لمدة لا تقل عن سنة قبل الاستخدام ليكتسب خصائصه الفريدة في ترطيب البشرة والعناية الطبيعية.',
      ],
      priceDisplay: '٢٥٠٬٠٠٠ ل.س',
      images: [
        { src: IMGS.soap,           alt: 'صابون حلبي أصيل' },
        { src: IMGS.textiles,       alt: 'منسوجات حريرية دمشقية' },
        { src: IMGS.ceramics,       alt: 'فخار دمشقي مزخرف' },
        { src: IMGS.embroidery,     alt: 'تطريز يدوي تراثي' },
      ],
      defaultSizeId: 'medium',
      defaultColorId: 'gold',
    },
    'hand-embroidery': {
      ...SHARED_LABELS.ar,
      slug: 'hand-embroidery',
      categoryLabel: 'تطريز',
      title: 'طراز يدوي تقليدي',
      descriptionParagraphs: [
        'قطعة تطريز يدوية تقليدية تحمل أنماط الطراز الشامي الأصيل، مُنفَّذة بخيوط الحرير والفضة على قماش الكتان الفاخر.',
        'تعكس كل غرزة صبراً وإتقاناً متوارثاً، وتمثل توثيقاً حياً لموروث التطريز السوري الذي يُعدّ من أرقى فنون الخياطة في العالم.',
      ],
      priceDisplay: '٩٥٠٬٠٠٠ ل.س',
      images: [
        { src: IMGS.embroidery,     alt: 'تطريز يدوي تراثي' },
        { src: IMGS.textiles,       alt: 'منسوجات حريرية دمشقية' },
        { src: IMGS.mosaics,        alt: 'الفسيفساء الدمشقية المعقدة' },
        { src: IMGS.ceramics,       alt: 'فخار دمشقي مزخرف' },
      ],
      defaultSizeId: 'medium',
      defaultColorId: 'gold',
    },
  },
  en: {
    'brass-mortar': {
      ...SHARED_LABELS.en,
      slug: 'brass-mortar',
      categoryLabel: 'Brassware',
      title: 'Traditional hand-engraved brass mortar',
      descriptionParagraphs: [
        'An authentic piece of Syrian craftsmanship, worked in solid brass with heritage engravings that echo Levantine home traditions.',
        'Suitable for everyday use or display as decor; each piece varies slightly thanks to hand engraving and finishing.',
      ],
      priceDisplay: '1,200,000 SYP',
      images: [
        { src: IMGS.coppersmithing, alt: 'Coppersmithing in Damascus Souk' },
        { src: IMGS.mosaics,        alt: 'Mosaics in Damascus' },
        { src: IMGS.glassblowing,   alt: 'Glassblowing in Damascus' },
        { src: IMGS.marquetry,      alt: 'Marquetry in Damascus' },
      ],
      defaultSizeId: 'large',
      defaultColorId: 'black',
    },
    'damascus-mosaic': {
      ...SHARED_LABELS.en,
      slug: 'damascus-mosaic',
      categoryLabel: 'Mosaics',
      title: 'Damascus mosaic panel',
      descriptionParagraphs: [
        'A hand-crafted mosaic panel combining classical Islamic art with the generational expertise of Damascus craftsmen.',
        'Made from precisely cut glass and stone pieces, each panel is a unique work of art that brings refined heritage character to any space.',
      ],
      priceDisplay: '850,000 SYP',
      images: [
        { src: IMGS.mosaics,        alt: 'Intricate Damascus mosaics' },
        { src: IMGS.coppersmithing, alt: 'Coppersmithing in Damascus Souk' },
        { src: IMGS.ceramics,       alt: 'Decorated Damascus ceramic' },
        { src: IMGS.marquetry,      alt: 'Marquetry and shell inlay' },
      ],
      defaultSizeId: 'medium',
      defaultColorId: 'gold',
    },
    'ceramic-bowl': {
      ...SHARED_LABELS.en,
      slug: 'ceramic-bowl',
      categoryLabel: 'Ceramics',
      title: 'Decorated ceramic bowl',
      descriptionParagraphs: [
        'A bowl of authentic Damascus ceramics, hand-thrown on the wheel and decorated with floral and geometric motifs using traditional techniques.',
        'Perfect for display or special occasions, it reflects the spirit of Levantine civilisation and the beauty of genuine hand craftsmanship.',
      ],
      priceDisplay: '650,000 SYP',
      images: [
        { src: IMGS.ceramics,       alt: 'Decorated Damascus ceramic' },
        { src: IMGS.mosaics,        alt: 'Intricate Damascus mosaics' },
        { src: IMGS.coppersmithing, alt: 'Coppersmithing in Damascus Souk' },
        { src: IMGS.textiles,       alt: 'Damascus silk textiles' },
      ],
      defaultSizeId: 'medium',
      defaultColorId: 'gold',
    },
    'silk-textile': {
      ...SHARED_LABELS.en,
      slug: 'silk-textile',
      categoryLabel: 'Textiles',
      title: 'Damascus embroidered silk fabric',
      descriptionParagraphs: [
        'Woven from the finest natural silk in classic Damascus patterns, combining rich colours with meticulous traditional hand embroidery.',
        'Used in heritage fashion and luxury interior decor, Damascus silk has been celebrated for its quality in world markets throughout history.',
      ],
      priceDisplay: '1,500,000 SYP',
      images: [
        { src: IMGS.textiles,       alt: 'Damascus silk textiles' },
        { src: IMGS.embroidery,     alt: 'Heritage hand embroidery' },
        { src: IMGS.mosaics,        alt: 'Intricate Damascus mosaics' },
        { src: IMGS.ceramics,       alt: 'Decorated Damascus ceramic' },
      ],
      defaultSizeId: 'large',
      defaultColorId: 'gold',
    },
    'blown-glass-vase': {
      ...SHARED_LABELS.en,
      slug: 'blown-glass-vase',
      categoryLabel: 'Glassware',
      title: 'Blown glass vase',
      descriptionParagraphs: [
        'A hand-blown glass vase crafted using ancient techniques passed down through generations of Damascus artisans, distinguished by vivid colours and distinctive forms.',
        'Every piece is unique, bearing the imprint of the human breath that shaped it — a true work of art and an exceptional gift.',
      ],
      priceDisplay: '750,000 SYP',
      images: [
        { src: IMGS.glassblowing,   alt: 'Glassblowing in Damascus' },
        { src: IMGS.coppersmithing, alt: 'Coppersmithing in Damascus Souk' },
        { src: IMGS.mosaics,        alt: 'Intricate Damascus mosaics' },
        { src: IMGS.ceramics,       alt: 'Decorated Damascus ceramic' },
      ],
      defaultSizeId: 'large',
      defaultColorId: 'gold',
    },
    'marquetry-box': {
      ...SHARED_LABELS.en,
      slug: 'marquetry-box',
      categoryLabel: 'Woodwork',
      title: 'Marquetry wood and shell box',
      descriptionParagraphs: [
        'A walnut box inlaid with mother-of-pearl and ivory pieces following the authentic Damascus marquetry tradition that dates back centuries.',
        'Used for jewellery storage or as a refined decorative piece, it represents the pinnacle of Levantine hand craftsmanship in wood inlay and carving.',
      ],
      priceDisplay: '1,100,000 SYP',
      images: [
        { src: IMGS.marquetry,      alt: 'Marquetry and shell inlay' },
        { src: IMGS.coppersmithing, alt: 'Coppersmithing in Damascus Souk' },
        { src: IMGS.glassblowing,   alt: 'Glassblowing in Damascus' },
        { src: IMGS.mosaics,        alt: 'Intricate Damascus mosaics' },
      ],
      defaultSizeId: 'medium',
      defaultColorId: 'black',
    },
    'aleppo-soap': {
      ...SHARED_LABELS.en,
      slug: 'aleppo-soap',
      categoryLabel: 'Natural products',
      title: 'Natural Aleppo soap',
      descriptionParagraphs: [
        'Authentic Aleppo soap made from olive oil and natural bay laurel oil in precise ratios, following a traditional recipe over a thousand years old.',
        'Stored for at least one year before use to develop its unique skin-moisturising and natural care properties.',
      ],
      priceDisplay: '250,000 SYP',
      images: [
        { src: IMGS.soap,           alt: 'Authentic Aleppo soap' },
        { src: IMGS.textiles,       alt: 'Damascus silk textiles' },
        { src: IMGS.ceramics,       alt: 'Decorated Damascus ceramic' },
        { src: IMGS.embroidery,     alt: 'Heritage hand embroidery' },
      ],
      defaultSizeId: 'medium',
      defaultColorId: 'gold',
    },
    'hand-embroidery': {
      ...SHARED_LABELS.en,
      slug: 'hand-embroidery',
      categoryLabel: 'Embroidery',
      title: 'Traditional hand embroidery',
      descriptionParagraphs: [
        'A traditional hand-embroidery piece carrying authentic Levantine embroidery patterns, executed with silk and silver threads on fine linen.',
        'Every stitch reflects inherited patience and mastery, representing a living record of Syrian embroidery heritage — among the most refined needlework traditions in the world.',
      ],
      priceDisplay: '950,000 SYP',
      images: [
        { src: IMGS.embroidery,     alt: 'Heritage hand embroidery' },
        { src: IMGS.textiles,       alt: 'Damascus silk textiles' },
        { src: IMGS.mosaics,        alt: 'Intricate Damascus mosaics' },
        { src: IMGS.ceramics,       alt: 'Decorated Damascus ceramic' },
      ],
      defaultSizeId: 'medium',
      defaultColorId: 'gold',
    },
  },
}

const ALL_PRODUCTS: Record<AppLocale, ProductListItem[]> = {
  ar: [
    {
      slug: 'brass-mortar',
      href: '/products/brass-mortar',
      title: 'مدق هاون نحاس محفور يدوياً تراثي',
      categoryLabel: 'نحاسيات',
      priceDisplay: '١٬٢٠٠٬٠٠٠ ل.س',
      imageSrc: IMGS.coppersmithing,
      imageAlt: 'نقش النحاس في سوق دمشق',
    },
    {
      slug: 'damascus-mosaic',
      href: '/products/damascus-mosaic',
      title: 'لوحة فسيفساء دمشقية',
      categoryLabel: 'فسيفساء',
      priceDisplay: '٨٥٠٬٠٠٠ ل.س',
      imageSrc: IMGS.mosaics,
      imageAlt: 'الفسيفساء الدمشقية المعقدة',
    },
    {
      slug: 'ceramic-bowl',
      href: '/products/ceramic-bowl',
      title: 'طبق فخاري مزخرف',
      categoryLabel: 'فخاريات',
      priceDisplay: '٦٥٠٬٠٠٠ ل.س',
      imageSrc: IMGS.ceramics,
      imageAlt: 'فخار دمشقي مزخرف',
    },
    {
      slug: 'silk-textile',
      href: '/products/silk-textile',
      title: 'قماش حرير دمشقي مطرز',
      categoryLabel: 'منسوجات',
      priceDisplay: '١٬٥٠٠٬٠٠٠ ل.س',
      imageSrc: IMGS.textiles,
      imageAlt: 'منسوجات حريرية دمشقية',
    },
    {
      slug: 'blown-glass-vase',
      href: '/products/blown-glass-vase',
      title: 'مزهرية زجاج مفخوخ',
      categoryLabel: 'زجاجيات',
      priceDisplay: '٧٥٠٬٠٠٠ ل.س',
      imageSrc: IMGS.glassblowing,
      imageAlt: 'نفخ الزجاج الدمشقي',
    },
    {
      slug: 'marquetry-box',
      href: '/products/marquetry-box',
      title: 'صندوق تطعيم صدف وخشب',
      categoryLabel: 'أعمال خشبية',
      priceDisplay: '١٬١٠٠٬٠٠٠ ل.س',
      imageSrc: IMGS.marquetry,
      imageAlt: 'التطعيم بالصدف والماركتري',
    },
    {
      slug: 'aleppo-soap',
      href: '/products/aleppo-soap',
      title: 'صابون حلبي طبيعي',
      categoryLabel: 'منتجات طبيعية',
      priceDisplay: '٢٥٠٬٠٠٠ ل.س',
      imageSrc: IMGS.soap,
      imageAlt: 'صابون حلبي أصيل',
    },
    {
      slug: 'hand-embroidery',
      href: '/products/hand-embroidery',
      title: 'طراز يدوي تقليدي',
      categoryLabel: 'تطريز',
      priceDisplay: '٩٥٠٬٠٠٠ ل.س',
      imageSrc: IMGS.embroidery,
      imageAlt: 'تطريز يدوي تراثي',
    },
  ],
  en: [
    {
      slug: 'brass-mortar',
      href: '/products/brass-mortar',
      title: 'Traditional hand-engraved brass mortar',
      categoryLabel: 'Brassware',
      priceDisplay: '1,200,000 SYP',
      imageSrc: IMGS.coppersmithing,
      imageAlt: 'Coppersmithing in Damascus Souk',
    },
    {
      slug: 'damascus-mosaic',
      href: '/products/damascus-mosaic',
      title: 'Damascus mosaic panel',
      categoryLabel: 'Mosaics',
      priceDisplay: '850,000 SYP',
      imageSrc: IMGS.mosaics,
      imageAlt: 'Intricate Damascus mosaics',
    },
    {
      slug: 'ceramic-bowl',
      href: '/products/ceramic-bowl',
      title: 'Decorated ceramic bowl',
      categoryLabel: 'Ceramics',
      priceDisplay: '650,000 SYP',
      imageSrc: IMGS.ceramics,
      imageAlt: 'Decorated Damascus ceramic',
    },
    {
      slug: 'silk-textile',
      href: '/products/silk-textile',
      title: 'Damascus embroidered silk fabric',
      categoryLabel: 'Textiles',
      priceDisplay: '1,500,000 SYP',
      imageSrc: IMGS.textiles,
      imageAlt: 'Damascus silk textiles',
    },
    {
      slug: 'blown-glass-vase',
      href: '/products/blown-glass-vase',
      title: 'Blown glass vase',
      categoryLabel: 'Glassware',
      priceDisplay: '750,000 SYP',
      imageSrc: IMGS.glassblowing,
      imageAlt: 'Glassblowing in Damascus',
    },
    {
      slug: 'marquetry-box',
      href: '/products/marquetry-box',
      title: 'Marquetry wood and shell box',
      categoryLabel: 'Woodwork',
      priceDisplay: '1,100,000 SYP',
      imageSrc: IMGS.marquetry,
      imageAlt: 'Marquetry and shell inlay',
    },
    {
      slug: 'aleppo-soap',
      href: '/products/aleppo-soap',
      title: 'Natural Aleppo soap',
      categoryLabel: 'Natural products',
      priceDisplay: '250,000 SYP',
      imageSrc: IMGS.soap,
      imageAlt: 'Authentic Aleppo soap',
    },
    {
      slug: 'hand-embroidery',
      href: '/products/hand-embroidery',
      title: 'Traditional hand embroidery',
      categoryLabel: 'Embroidery',
      priceDisplay: '950,000 SYP',
      imageSrc: IMGS.embroidery,
      imageAlt: 'Heritage hand embroidery',
    },
  ],
}

const INDEX: Record<AppLocale, ProductsIndexContent> = {
  ar: {
    pageTitle: 'منتجاتنا',
    breadcrumbHomeLabel: 'الصفحة الرئيسية',
    intro: 'تصفح منتجاتنا التراثية المختارة.',
    products: ALL_PRODUCTS.ar,
  },
  en: {
    pageTitle: 'Our products',
    breadcrumbHomeLabel: 'Home',
    intro: 'Browse our curated heritage products.',
    products: ALL_PRODUCTS.en,
  },
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function cloneDetail(content: ProductDetailContent): ProductDetailContent {
  return {
    ...content,
    descriptionParagraphs: [...content.descriptionParagraphs],
    images: content.images.map((img) => ({ ...img })),
    sizeOptions: {
      ...content.sizeOptions,
      choices: content.sizeOptions.choices.map((c) => ({ ...c })),
    },
    colorOptions: {
      ...content.colorOptions,
      choices: content.colorOptions.choices.map((c) => ({ ...c })),
    },
  }
}

/** Dummy API: replace with fetch when backend is ready. */
export async function getProductDetail(locale: AppLocale, slug: string): Promise<ProductDetailContent | null> {
  await delay(260)
  const row = DETAIL[locale][slug]
  if (!row) return null
  return cloneDetail(row)
}

export async function getProductsIndexContent(locale: AppLocale): Promise<ProductsIndexContent> {
  await delay(200)
  return { ...INDEX[locale] }
}
