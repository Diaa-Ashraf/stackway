// Detailed project showcase matching Stackway client portfolio case studies

export interface ProjectShowcaseItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  titleAr: string;
  category: { en: string; ar: string };
  color: string;
  logo: string;
  liveUrl?: string;
  specs: {
    industry: { en: string; ar: string };
    services: { en: string; ar: string };
    runsOn: { en: string; ar: string };
    languages: { en: string; ar: string };
  };
  overview: { en: string; ar: string };
  whatWeBuilt: { en: string[]; ar: string[] };
}

export const PROJECTS_SHOWCASE: ProjectShowcaseItem[] = [
  {
    id: "kunuz",
    slug: "kunuz",
    number: "01",
    title: "Kunuz",
    titleAr: "كنوز العقارية",
    category: {
      en: "Real estate investment & development",
      ar: "منصّة استثمار وتطوير عقاري"
    },
    color: "#d4af37",
    logo: "/images/work/kunuz.svg",
    liveUrl: "https://kunuz.stackway.cloud",
    specs: {
      industry: {
        en: "Real Estate & Commercial Development",
        ar: "التطوير والاستثمار العقاري والتجاري"
      },
      services: {
        en: "Web Engineering · 3D Showcase · Interactive Calculator",
        ar: "هندسة الويب · معارض ثلاثية الأبعاد · حاسبة استثمارية"
      },
      runsOn: {
        en: "Laravel & Modern Web Architecture",
        ar: "Laravel وهندسة ويب متقدمة"
      },
      languages: {
        en: "Arabic, English",
        ar: "العربية والإنجليزية"
      }
    },
    overview: {
      en: "A premier digital showcase and investment portal for Kunuz Real Estate Investment & Development in Badr City, Egypt. Features landmark commercial complexes (Orbit Mall, Fuel Station, Zad Center, Qamar Business Plaza) with an intelligent zero-downpayment instalment calculator and interactive 3D perspective showcases.",
      ar: "منصة رقمية رائدة للتطوير العقاري والاستثمار بمدينة بدر، تتيح استعراض كبرى المشروعات التجارية والإدارية كـ (أوربيت مول، محطة الوقود 4,217 م²، زاد سنتر، قمر بيزنس بلازا) مع حاسبة أقساط استثمارية متطورة وأنظمة سداد ذكية ومعارض ثلاثية الأبعاد تفاعلية."
    },
    whatWeBuilt: {
      en: [
        "Interactive real estate portfolio showcase for multi-use commercial complexes",
        "Dynamic multi-year investment & instalment calculator (up to 6 years, 0% interest)",
        "3D perspective showcases with mouse interaction and architectural blueprints",
        "Direct lead capture connected to CRM & WhatsApp with ad campaign attribution",
        "Bilingual architecture (Arabic / English) with fluid RTL/LTR design",
        "High-performance SEO optimization for competitive commercial real estate queries"
      ],
      ar: [
        "تطوير منصة تفاعلية متكاملة لعرض مشروعات شركة كنوز العقارية بمدينة بدر",
        "حاسبة أقساط واستثمار رقمية ذكية وديناميكية تمكن المستثمرين من حساب الدفعات بدقة",
        "تصميم واجهات عرض ثلاثية الأبعاد تفاعلية (3D Perspective Showcases)",
        "نظام حجز وحدات واستفسارات فورية مربوط مباشرة بقنوات خدمة العملاء والواتساب",
        "دعم كامل لتعدد اللغات (عربي / إنجليزي) مع واجهات RTL و LTR متوافقة 100%",
        "تحسينات SEO فائقة وهيكلة بيانات متوافقة مع محركات البحث العالمية"
      ]
    }
  },
  {
    id: "tower-top",
    slug: "tower-top",
    number: "02",
    title: "Tower Top",
    titleAr: "تاور توب",
    category: {
      en: "Luxury interior architecture & finishing",
      ar: "التشطيبات المعمارية الفاخرة والديكور"
    },
    color: "#0ea5e9",
    logo: "/images/work/tower-top.svg",
    liveUrl: "https://towertop-eg.com/",
    specs: {
      industry: {
        en: "Interior Architecture & High-End Fitout",
        ar: "التشطيبات الداخلية والديكور والجبسون بورد"
      },
      services: {
        en: "Frontend Engineering · Real-Time Portfolio · Lead Routing",
        ar: "تطوير الواجهات · معرض أعمال حي · أتمتة طلبات المعاينة"
      },
      runsOn: {
        en: "Modern Frontend · Optimized CDN",
        ar: "واجهات حديثة وشبكة توزيع سحابية CDN"
      },
      languages: {
        en: "Arabic, English",
        ar: "العربية والإنجليزية"
      }
    },
    overview: {
      en: "The official interactive showcase for Tower Top EG, a leading contractor in Egypt specializing in turnkey interior finishing, decorative gypsum board engineering, and luxury renovations. Enables prospective homeowners and business clients to inspect live site executions and book immediate surveys.",
      ar: "موقع رسمي ومعرض أعمال تفاعلي لشركة Tower Top الرائدة في مصر بمجال التشطيبات الداخلية، الديكور، والجبسون بورد، يبرز مراحل التنفيذ الحية 'من قلب الموقع' ويسهل على العملاء طلب المعاينات وعروض الأسعار الفورية."
    },
    whatWeBuilt: {
      en: [
        "Categorized real-world portfolio covering residential villas, offices, and commercial venues",
        "High-resolution progress showcases highlighting structural fitouts before and after",
        "Integrated cost calculator & inspection booking form",
        "Instant one-click WhatsApp routing for incoming client inquiries",
        "Sub-second load times on mobile devices with modern responsive visual layout"
      ],
      ar: [
        "معرض مشاريع حي ومصنف (سكني، تجاري، مكاتب، فلل) مع استعراض صور وفيديوهات من أرض الواقع",
        "إبراز مراحل التنفيذ الحية مع تفاصيل التشطيبات والجبسون بورد وأعمال الإضاءة",
        "نظام طلب معاينة وحساب تقديري لتكاليف التشطيب وتحديد الباقات والمساحات",
        "تكامل سريع مع واتساب وقنوات الاتصال المباشر لتسهيل تحويل الزوار إلى عملاء",
        "واجهة مستخدم ذات انسيابية عالية مع تأثيرات تفاعلية وسرعة تحميل فائقة على الموبايل"
      ]
    }
  },
  {
    id: "team-hm",
    slug: "team-hm",
    number: "03",
    title: "Team HM System",
    titleAr: "سيستم حسام منصور",
    category: {
      en: "World champion athletic coaching SaaS",
      ar: "نظام تدريب ومتابعة أبطال كمال الأجسام"
    },
    color: "#ef4444",
    logo: "/images/work/team-hm.svg",
    liveUrl: "https://team-hm.com/login",
    specs: {
      industry: {
        en: "Athletic Coaching & Sports Performance SaaS",
        ar: "التدريب الرياضي الاحترافي وكمال الأجسام"
      },
      services: {
        en: "Custom SaaS Architecture · RBAC · Nutrition Engine · Subscriptions",
        ar: "بنية SaaS مخصصة · محرك التغذية والتمارين · الاشتراكات وبوابات الدفع"
      },
      runsOn: {
        en: "Laravel · Vue.js · High-Availability MySQL",
        ar: "Laravel و Vue.js وقواعد بيانات عالية التوافر"
      },
      languages: {
        en: "Arabic, English",
        ar: "العربية والإنجليزية"
      }
    },
    overview: {
      en: "A comprehensive cloud coaching portal designed for World Bodybuilding Champion Hossam Mansour. Automates member athlete onboarding, customized workout splits with video tutorials, calorie and macronutrient meal plans, weekly photo check-ins, and recurring subscription billing for thousands of athletes globally.",
      ar: "نظام SaaS متكامل لإدارة التدريب الرياضي والمتابعة البدنية المباشرة للرياضيين والأبطال تحت إشراف بطل العالم حسام منصور، يشمل بناء الجداول التدريبية، الخطط الغذائية المحسوبة بالسعرات والماكروز، تقييم التطور الأسبوعي بالصور والقياسات، وتنبيهات التجديد."
    },
    whatWeBuilt: {
      en: [
        "Multi-role coaching SaaS platform with client and coach permission hierarchies (RBAC)",
        "Bespoke workout split generator with exercise video streaming and rep/tempo notes",
        "Macro-balanced meal plan engine with automated caloric calculation",
        "Weekly athlete check-in module featuring front/back photos and body-fat trend charts",
        "Subscription renewal triggers and integrated multi-currency payment processing",
        "Live communication channel connecting assistant trainers with subscribed members"
      ],
      ar: [
        "بناء نظام SaaS سحابي متكامل لإدارة المشتركين في برامج التدريب والتغذية لبطل العالم كمال أجسام",
        "محرك متقدم لبناء وتخصيص الجداول التدريبية والتمارين الرياضية بالفيديو والشرح التفصيلي",
        "نظام تخطيط وجبات وأنظمة غذائية مخصصة مع حساب تلقائي للسعرات الحرارية ونسب البروتين والكارب",
        "وحدة متابعة أسبوعية متطورة (Weekly Check-in) لرفع صور التطور، قياسات الجسم، والوزن",
        "نظام دفع إلكتروني واشتراكات دورية مع صلاحيات وصول دقيقة ومحمية بأعلى معايير الأمان (RBAC)",
        "تقارير ورسوم بيانية تفاعلية تعكس تقدم المتدربين ومستوى التزامهم بالخطة الرياضية"
      ]
    }
  },
  {
    id: "hossam-mansour",
    slug: "hossam-mansour",
    number: "04",
    title: "Hossam Mansour Official",
    titleAr: "الموقع الرسمي لحسام منصور",
    category: {
      en: "Personal brand & fitness academy",
      ar: "بوابة بطل العالم كمال أجسام والتدريب الرياضي"
    },
    color: "#f97316",
    logo: "/images/work/hossam-mansour.webp",
    liveUrl: "https://hossammansour.com/ar/",
    specs: {
      industry: {
        en: "Global Fitness & Athletic Brand",
        ar: "اللياقة البدنية والعلامات الرياضية الدولية"
      },
      services: {
        en: "Web Engineering · Online Coaching Store · Transformation Engine · SEO",
        ar: "تطوير الويب · متجر باقات التدريب · معرض التحولات · تحسين محركات البحث"
      },
      runsOn: {
        en: "Next-Gen Web Architecture",
        ar: "معمارية ويب متطورة فائقة السرعة"
      },
      languages: {
        en: "Arabic, English",
        ar: "العربية والإنجليزية"
      }
    },
    overview: {
      en: "The official global website and personal brand platform for World Champion Hossam Mansour. Showcases international championships, client before-and-after transformations, online coaching tier checkout with multi-currency support, and educational athletic nutrition resources.",
      ar: "الموقع والمنصة الرسمية لبطل العالم حسام منصور، لعرض إنجازاته الرياضية العالمية، باقات الاشتراك في التدريب الأونلاين، قصص نجاح وتحول المتدربين (Transformations)، متجر البرامج المعتمدة، ومدونة المقالات التغذوية والرياضية."
    },
    whatWeBuilt: {
      en: [
        "Cinematic brand design reflecting world championship pedigree and elite performance",
        "Interactive before-and-after transformation gallery with filterable body goals",
        "Multi-tier coaching storefront with instant online enrollment and localized pricing",
        "Direct consultation scheduling calendar with coaching team availability",
        "Bilingual SEO architecture achieving top search rankings for bodybuilding training terms",
        "Accelerated page speed with responsive optimization across mobile devices"
      ],
      ar: [
        "تصميم وتطوير الموقع الرسمي لبطل العالم كمال أجسام بتجربة بصرية سينمائية وهوية رياضية قوية",
        "معرض تفاعلي لقصص نجاح وتحولات المتدربين (Before & After Transformations) مع تفاصيل كل مرحلة",
        "متجر إلكتروني لباقات التدريب والمتابعة أونلاين بمختلف المستويات والمدد الزمنية مع دعم عملات متعددة",
        "نظام حجز جلسات واستشارات تدريبية وتغذوية مباشرة مع كابتن حسام منصور وفريق العمل",
        "مدونة مقالات رياضية وتثقيفية متقدمة تدعم أحدث معايير تحسين محركات البحث لرفع الترافيك",
        "أداء عالي السرعة وتوافق تام مع شاشات الهواتف الذكية والأجهزة اللوحية والمكتبية"
      ]
    }
  },
  {
    id: "ssdds",
    slug: "ssdds",
    number: "05",
    title: "SSDDS",
    titleAr: "الجمعية السعودية للجلدية",
    category: {
      en: "Saudi medical society & CME platform",
      ar: "البوابة الإلكترونية الطبية والتعليم الطبي المستمر"
    },
    color: "#059669",
    logo: "/images/work/ssdds.svg",
    liveUrl: "https://ssdds.org",
    specs: {
      industry: {
        en: "Healthcare & Academic Medical Research",
        ar: "القطاع الطبي والرعاية الصحية والأبحاث العلمية"
      },
      services: {
        en: "Medical Portal Engine · Conference Management · CME System · Journal CMS",
        ar: "بوابة طبية متكاملة · إدارة المؤتمرات · ساعات التعليم المستمر CME · المجلات العلمية"
      },
      runsOn: {
        en: "Enterprise Laravel · Protected Cloud Infrastructure",
        ar: "Laravel للمؤسسات وبنية تحتية سحابية مؤمنة"
      },
      languages: {
        en: "English, Arabic",
        ar: "الإنجليزية والعربية"
      }
    },
    overview: {
      en: "The official portal of the Saudi Society of Dermatology and Dermatologic Surgery (established in 1989). Manages major international dermatology conferences, accredited Continuing Medical Education (CME) credit hours, physician memberships, and peer-reviewed scientific journal publications across Saudi Arabia.",
      ar: "البوابة الإلكترونية الرسمية للجمعية السعودية للأمراض وجراحة الجلد (تأسست 1989م)، تدير المؤتمرات الدولية، ورش العمل المعتمدة، تسجيل العضويات الطبية، نشر الأبحاث والمجلات العلمية، والفعاليات الطبية التوعوية في المملكة."
    },
    whatWeBuilt: {
      en: [
        "Secure medical society digital infrastructure meeting Saudi health standards",
        "Medical conference and symposium ticketing engine with barcode badge generation",
        "Automated Continuing Medical Education (CME) credit evaluation and certificate generation",
        "Doctor and consultant membership lifecycle portal with electronic payment gateways",
        "Peer-reviewed medical journal digital archive with citation indices and DOI references",
        "Enterprise role-based management for scientific committee reviewers and administrators"
      ],
      ar: [
        "بناء البوابة الرسمية للجمعية السعودية للأمراض وجراحة الجلد وفق أعلى المعايير الأمنية والطبية",
        "نظام إدارة المؤتمرات والفعاليات الطبية مع التسجيل الإلكتروني، حجز التذاكر، وإصدار شهادات الساعات المعتمدة (CME)",
        "نظام إدارة العضويات للأطباء والاستشاريين والباحثين مع بوابات دفع إلكتروني مخصصة وتجديد تلقائي",
        "مكتبة رقمية متقدمة لنشر الأبحاث والمجلات العلمية الطبية المحكمة والمقالات التخصصية",
        "لوحة تحكم إدارية شاملة لإدارة المحتوى، الأعضاء، الأخبار، الفعاليات، ورسائل اللجان العلمية",
        "بنية تحتية سحابية مؤمنة ضد الاختراقات وشهادات أمان متقدمة متوافقة مع الأنظمة السعودية"
      ]
    }
  },
  {
    id: "al-tawheed-market",
    slug: "al-tawheed-market",
    number: "06",
    title: "Al Tawhid Market",
    titleAr: "سوبرماركت التوحيد",
    category: {
      en: "Grocery e-commerce & geolocation delivery",
      ar: "متجر إلكتروني وسوبرماركت غذائي مع توصيل جغرافي"
    },
    color: "#10b981",
    logo: "/images/work/al-tawheed.svg",
    liveUrl: "https://altawhid.stackway.cloud",
    specs: {
      industry: {
        en: "Food Retail & Quick Supermarket Commerce",
        ar: "التجارة الغذائية والتجزئة والتوصيل السريع"
      },
      services: {
        en: "Real-Time E-Commerce · Geolocation Dispatch · POS Sync · InstaPay",
        ar: "تجارة إلكترونية فورية · توجيه جغرافي · ربط نقاط البيع POS · دفع إنستاباي"
      },
      runsOn: {
        en: "High-Performance E-Commerce Engine",
        ar: "محرك تجارة إلكترونية فائق الأداء"
      },
      languages: {
        en: "Arabic",
        ar: "العربية"
      }
    },
    overview: {
      en: "A rapid online grocery and dairy storefront built for Al Tawhid Supermarkets in Alexandria, Egypt. Delivers natural dairy products and household groceries with sub-second cart updates, pin-drop geolocation delivery zone fees, and synchronization with physical retail POS inventory.",
      ar: "منصة تسوق إلكتروني متكاملة وسريعة لسلسلة ألبان وسوبرماركت التوحيد في الإسكندرية، توفر منتجات الألبان والأجبان الطبيعية والسلع الغذائية مع سلة تسوق فورية، تحديد الموقع الجغرافي للتوصيل، ودعم الدفع كاش وإنستاباي مع ربط نقاط البيع (POS)."
    },
    whatWeBuilt: {
      en: [
        "High-performance grocery catalog with instant live search and smart item filtering",
        "Interactive geolocation delivery module with automatic zone-based courier rates",
        "Frictionless 1-click mobile checkout supporting Cash on Delivery, InstaPay, and mobile wallets",
        "Two-way synchronization with branch Point of Sale (POS) software to avoid out-of-stock items",
        "Automated WhatsApp customer order status alerts and live delivery dispatch tracker"
      ],
      ar: [
        "تطوير متجر إلكتروني متكامل لمنتجات الألبان والسلع الغذائية مع تجربة تسوق فورية وسريعة للغاية",
        "سلة تسوق ذكية وتحديث أسعار لحظي، مع تصنيف دقيق لمئات المنتجات والعروض الترويجية اليومية",
        "نظام توصيل طلبات جغرافي محدد لمناطق الإسكندرية مع حساب رسوم التوصيل تلقائياً",
        "دعم خيارات دفع متعددة تشمل الدفع عند الاستلام وإنستاباي (InstaPay) والمحافظ الإلكترونية",
        "ربط مباشر ومزامنة مع نظام إدارة المخزون ونقاط البيع (POS) لمنع نفاذ المنتجات وتحديث الكميات"
      ]
    }
  },
  {
    id: "regalest",
    slug: "regalest",
    number: "07",
    title: "Regalest Store",
    titleAr: "متجر ريجاليست",
    category: {
      en: "Luxury timepieces & royal collectibles",
      ar: "متجر المقتنيات والساعات الفاخرة والملكية"
    },
    color: "#eab308",
    logo: "/images/work/regalest.svg",
    liveUrl: "https://regalest.stackway.cloud",
    specs: {
      industry: {
        en: "Haute Horlogerie & Luxury Retail",
        ar: "الساعات الفاخرة والمقتنيات الكلاسيكية الراقية"
      },
      services: {
        en: "Luxury E-Commerce · Swiper 3D Showcase · Frictionless Checkout",
        ar: "تصميم متجر فاخر · عروض Swiper 3D · تجربة دفع متميزة"
      },
      runsOn: {
        en: "Laravel · Tailwind CSS · Alpine.js",
        ar: "Laravel و Tailwind CSS و Alpine.js"
      },
      languages: {
        en: "Arabic, English",
        ar: "العربية والإنجليزية"
      }
    },
    overview: {
      en: "An ultra-premium e-commerce boutique tailored for luxury timepieces and royal collectibles. Built around a Dark & Gold luxury visual aesthetic with interactive Swiper 3D movement showcases, allowing connoisseurs to inspect mechanical dial finishes and complete purchases securely.",
      ar: "متجر تجارة إلكترونية فاخر مخصص للساعات والمقتنيات الكلاسيكية والملكية الفاخرة، صُمم بهوية Dark Luxury رفيعة المستوى وعروض Swiper 3D التفاعلية لعرض تفاصيل الساعات الميكانيكية وتوفير رحلة شراء راقية."
    },
    whatWeBuilt: {
      en: [
        "Dark Luxury visual identity incorporating Cinzel and Alexandria typography",
        "Interactive Swiper 3D watch presentation with full-screen bezel and movement details",
        "Advanced filtration by watch caliber (automatic/quartz), case material, and water resistance",
        "Streamlined mobile checkout experience engineered to minimize cart abandonment",
        "Administrative dashboard tracking VIP customers, serialized certificates, and warranty status"
      ],
      ar: [
        "تصميم متجر إلكتروني فاخر بهوية بصرية ملوكية (Dark & Gold Luxury Aesthetic) باستخدام خطوط راقية",
        "معارض صور ثلاثية الأبعاد تفاعلية باستخدام Swiper 3D لاستعراض تفاصيل الساعات ومواصفات المحركات",
        "نظام تصفية وتصنيف متقدم حسب العلامة التجارية، نوع الحركة (أوتوماتيك/كوارتز)، المواد والمقاسات",
        "سلة تسوق ديناميكية وصفحة دفع فورية محسنة تضمن تقليل معدل ترك السلة",
        "لوحة تحكم إدارية لمتابعة المخزون، الطلبات، الكوبونات، وتحليلات المبيعات بدقة متناهية"
      ]
    }
  },
  {
    id: "al-safa-petroleum",
    slug: "al-safa-petroleum",
    number: "08",
    title: "Al Safa Petroleum",
    titleAr: "الصفا للبترول",
    category: {
      en: "Industrial fuel & petroleum logistics",
      ar: "خدمات الوقود الصناعي والبنية التحتية البترولية"
    },
    color: "#0284c7",
    logo: "/images/work/al-safa.svg",
    liveUrl: "https://stackway.cloud",
    specs: {
      industry: {
        en: "Energy, Petroleum Supply & Industrial Logistics",
        ar: "قطاع الطاقة والخدمات البترولية والتوريدات الصناعية"
      },
      services: {
        en: "Corporate Portal · Logistics Quotation Engine · Compliance Infrastructure",
        ar: "بوابة الشركات · محرك عروض الأسعار · توثيق معايير الجودة والسلامة"
      },
      runsOn: {
        en: "Enterprise Cloud Infrastructure",
        ar: "بنية سحابية مؤسسية آمنة"
      },
      languages: {
        en: "Arabic, English",
        ar: "العربية والإنجليزية"
      }
    },
    overview: {
      en: "The corporate digital portal and B2B operations gateway for Al Safa Petroleum Services. Highlights nationwide industrial fuel supply, transport fleet fleet operations, environmental safety compliance, and direct quotation engines for commercial contracts.",
      ar: "البوابة الرقمية المؤسسية ومنصة إدارة العمليات لشركة الصفا للبترول، تستعرض خدمات توريد الوقود والمنتجات البترولية للمصانع والمشروعات الكبرى، وإدارة أساطيل النقل، وتوثيق معايير السلامة والجودة والتعاقدات التجارية."
    },
    whatWeBuilt: {
      en: [
        "Comprehensive corporate energy portal presenting industrial petroleum supply capabilities",
        "Automated B2B fuel supply quotation calculator for factories and transport fleets",
        "Interactive compliance repository showcasing ISO standards, safety protocols, and certifications",
        "Client portal for contract tracking, delivery schedule confirmation, and invoices",
        "Enterprise security layers protecting commercial transactions and operational data"
      ],
      ar: [
        "بوابة مؤسسية متكاملة لخطوط إمداد الوقود والمنتجات البترولية للمصانع والشركات",
        "نظام طلب عروض أسعار وتوريد مباشر للمشروعات الصناعية وأساطيل النقل",
        "توثيق معايير السلامة والبيئة ومطابقة مواصفات الجودة والاعتمادات الرسمية",
        "لوحة تفاعلية لخدمات العملاء والشركاء مع مؤشرات الأداء التشغيلي ومواعيد التسليم",
        "بنية أمنية قوية لحماية البيانات والتعاقدات المؤسسية وتوافق كامل مع المعايير الصناعية"
      ]
    }
  },
  {
    id: "elgendy",
    slug: "elgendy",
    number: "09",
    title: "El Gendy Center",
    titleAr: "سنتر الأستاذ محمد الجندي",
    category: {
      en: "Smart education LMS & examination engine",
      ar: "منصة وسنتر تعليمي ذكي لإدارة الطلاب والامتحانات"
    },
    color: "#8b5cf6",
    logo: "/images/work/elgendy.svg",
    liveUrl: "https://elgendy.stackway.cloud/",
    specs: {
      industry: {
        en: "EdTech & Learning Management Systems",
        ar: "التعليم الإلكتروني وتكنولوجيا إدارة السناتر التعليمية"
      },
      services: {
        en: "Custom LMS · Examination Engine · Parent Portal · Scratch Card System",
        ar: "نظام LMS مخصص · بنك الامتحانات الذكي · بوابة أولياء الأمور · كروت الشحن"
      },
      runsOn: {
        en: "Laravel · Tailwind CSS · Real-time Queues",
        ar: "Laravel و Tailwind CSS مع معالجة لحظية للطوابير"
      },
      languages: {
        en: "Arabic",
        ar: "العربية"
      }
    },
    overview: {
      en: "An intelligent learning management platform for Mr. Mohamed El Gendy Educational Center, seamlessly bridging in-person classroom administration with interactive online learning. Features timed online exams with instant correction, student attendance barcodes, parent grade monitoring, and secure lecture activation cards.",
      ar: "منصة تعليمية وإدارية ذكية لسنتر الأستاذ محمد الجندي، تجمع بين نظام إدارة السنتر حضورياً ومنصة إلكترونية متطورة للطلاب، تتضمن إدارة المجموعات، الحصص، الامتحانات الإلكترونية التفاعلية، كروت الشحن، ومتابعة أولياء الأمور للدرجات والغياب لحظياً."
    },
    whatWeBuilt: {
      en: [
        "Interactive test and examination engine with anti-cheat timers and automated instant grading",
        "Center attendance monitoring with student QR barcodes and lecture booklet tracking",
        "Dedicated parent portal delivering instant attendance and test score reports",
        "Encrypted scratch-card voucher redemption system for unlocking video lectures and exams",
        "Instructor dashboard managing student batches, financial settlements, and performance leaderboards",
        "High-concurrency infrastructure handling thousands of simultaneous exam submissions"
      ],
      ar: [
        "تطوير منصة تعليمية تفاعلية متكاملة ونظام إدارة سنتر تعليمي (Educational Management System)",
        "بنك أسئلة واختبارات إلكترونية ذكية مع تصحيح تلقائي، مؤقت زمني، وتغذية راجعة فورية للطلاب",
        "نظام إدارة الحضور والغياب للسنتر ومتابعة المذكرات والملازم الدراسية وأكواد كروت الشحن",
        "بوابة خاصة لأولياء الأمور لمتابعة مستوى أبنائهم والدرجات ونسبة الحضور عبر إشعارات فورية",
        "لوحة تحكم للمعلمين والإداريين لإدارة المجموعات، الفصول، المستحقات، وجداول الحصص والامتحانات",
        "بنية سحابية عالية الاستقرار تتحمل ضغط آلاف الطلاب المتزامنين في أوقات الامتحانات"
      ]
    }
  },
  {
    id: "securecheap",
    slug: "securecheap",
    number: "10",
    title: "SecureCheap",
    titleAr: "SecureCheap",
    category: {
      en: "Infrastructure monitoring & security SaaS",
      ar: "منصّة مراقبة وأمان البنية التحتية"
    },
    color: "#b82208",
    logo: "/images/work/securecheap.webp",
    liveUrl: "https://securecheap.com",
    specs: {
      industry: {
        en: "Infrastructure Monitoring & Cloud Security",
        ar: "مراقبة البنية التحتية وأمان الخوادم السحابية"
      },
      services: {
        en: "Custom Software & Systems · Web Engineering",
        ar: "البرمجيات والأنظمة الخاصة · هندسة الويب"
      },
      runsOn: {
        en: "Next.js · Rust Agent · Distributed Telemetry",
        ar: "Next.js وعميل Rust وقياس عن بُعد موزع"
      },
      languages: {
        en: "English",
        ar: "الإنجليزية"
      }
    },
    overview: {
      en: "SecureCheap brings server health monitoring, uptime checks, vulnerability scanning, and multi-cloud cost optimization into a single unified dashboard, featuring an AI engine that analyzes infrastructure telemetry in real time.",
      ar: "تجمع SecureCheap مراقبة البنية التحتية وفحص الإتاحة والفحص الأمني وتحسين تكاليف السحابة في لوحة تحكم واحدة، مع مساعد ذكي يحلل سجلات الخوادم لحظياً."
    },
    whatWeBuilt: {
      en: [
        "Real-time low-latency server telemetry collectors (<25ms data transit)",
        "Automated uptime, TLS/SSL expiration, and Anycast DNS status monitoring",
        "Comprehensive vulnerability scanner detecting exposed ports, CVEs, and anomalous traffic",
        "Multi-cloud cost allocation and idle server recommendations",
        "Multi-channel alerting via Telegram, Slack, Discord, and Webhooks"
      ],
      ar: [
        "مراقبة الخوادم لحظياً مع سرعة نقل قياسات فائقة (< 25ms)",
        "فحص تلقائي مستمر للاتصال وشهادات SSL و DNS وحالة المنافذ",
        "فاحص أمني لاكتشاف الثغرات والبرمجيات الخبيثة وحركة المرور غير المعتادة",
        "محرك لتحسين وتقليل تكاليف الحوسبة السحابية عبر موفري الخدمة المتعددين",
        "إرسال تنبيهات فورية عبر تيليجرام وسلاك وديسكورد والبريد الإلكتروني"
      ]
    }
  },
  {
    id: "arabybot",
    slug: "arabybot",
    number: "11",
    title: "ArabyBot",
    titleAr: "عربي بوت",
    category: {
      en: "Conversational commerce & AI automation",
      ar: "منصّة محادثات وتجارة بالذكاء الاصطناعي"
    },
    color: "#6f05e7",
    logo: "/images/work/arabybot.webp",
    liveUrl: "https://arabybot.com",
    specs: {
      industry: {
        en: "Conversational AI & E-Commerce Automation",
        ar: "الذكاء الاصطناعي للمحادثات وأتمتة التجارة"
      },
      services: {
        en: "Official WhatsApp Cloud API · Multi-LLM Routing · Live Chat",
        ar: "واجهة WhatsApp Cloud API الرسمية · نماذج ذكاء اصطناعي · محادثة فورية"
      },
      runsOn: {
        en: "Node.js · WebSockets · Microservices",
        ar: "Node.js وخوادم ميكروسيرفيس فورية"
      },
      languages: {
        en: "Arabic, English",
        ar: "العربية والإنجليزية"
      }
    },
    overview: {
      en: "ArabyBot empowers Middle Eastern brands to automate client engagement across WhatsApp, Messenger, and Instagram. Connects directly to online product catalogs to answer inquiries in Arabic dialects, process orders, and recover abandoned carts 24/7.",
      ar: "منصة شات بوت وتجارة ذكية تدعم اللهجات العربية عبر واتساب وماسنجر وإنستجرام، تمكن المتاجر من استعراض المنتجات وإتمام عمليات الشراء والرد الفوري على استفسارات العملاء على مدار الساعة."
    },
    whatWeBuilt: {
      en: [
        "Official WhatsApp Business Cloud API integration with bulk broadcasting",
        "Interactive catalog browsing and order placement directly inside WhatsApp chat",
        "Automated abandoned checkout reminders recovering up to 34% of lost sales",
        "Unified multi-channel customer inbox with seamless human agent handoff",
        "Arabic dialect fine-tuning (Egyptian, Saudi, Gulf, Levantine)"
      ],
      ar: [
        "ربط رسمي مع واجهة WhatsApp Cloud API مع دعم الرسائل الإعلانية المعتمدة",
        "استعراض منتجات المتجر وإتمام الطلبات مباشرة داخل نافذة المحادثة",
        "استرجاع السلات المتروكة بإشعارات تلقائية ترفع المبيعات بنسبة تصل إلى 34%",
        "صندوق محادثات موحد متعدد القنوات مع تحويل المحادثة بسلاسة للموظفين",
        "نماذج ذكاء اصطناعي تفهم وتتحدث باللهجات العربية المختلفة بطلاقة"
      ]
    }
  },
  {
    id: "elmatajer",
    slug: "elmatajer",
    number: "12",
    title: "El Matajer",
    titleAr: "المتاجر",
    category: {
      en: "Multi-vendor e-commerce SaaS platform",
      ar: "منصّة تجارة إلكترونية سحابية (SaaS)"
    },
    color: "#2563eb",
    logo: "/images/work/elmatajer.webp",
    liveUrl: "https://elmatajer.com",
    specs: {
      industry: {
        en: "E-Commerce Infrastructure & Merchant Enablement",
        ar: "البنية التحتية للتجارة الإلكترونية وتمكين التجار"
      },
      services: {
        en: "Multi-Tenant Architecture · Payment Gateway Matrix · Courier Sync",
        ar: "بنية برمجية متعددة المتاجر · بوابات الدفع · مزامنة شركات الشحن"
      },
      runsOn: {
        en: "Custom High-Scale Engine · Cloudflare Edge",
        ar: "محرك تجارة سحابي وشبكة Cloudflare Edge"
      },
      languages: {
        en: "Arabic",
        ar: "العربية"
      }
    },
    overview: {
      en: "A robust Arabic-first e-commerce SaaS platform engineered for regional merchants. Enables brands to launch branded online stores in minutes with pre-integrated payment gateways, automated courier shipping labels, and sub-second checkout.",
      ar: "منصة تجارة إلكترونية سحابية عربية متكاملة تتيح للتجار وأصحاب العلامات التجارية إطلاق متاجرهم المستقلة في دقائق، مع ربط مسبق بشركات الشحن الإقليمية وبوابات الدفع الإلكتروني المعتمدة."
    },
    whatWeBuilt: {
      en: [
        "Multi-tenant store generation engine provisioning isolated merchant environments",
        "Native payment integration with Mada, Fawry, Tabby, Tamara, and card processors",
        "Automated shipping label printing and live shipment tracking with regional couriers",
        "Sub-1.5 second mobile checkout with Cash on Delivery zone management",
        "Arabic merchant dashboard providing sales analytics, inventory, and customer lifetime value"
      ],
      ar: [
        "محرك إنشاء المتاجر المستقلة وتخصيص النطاقات الخاصة في ثوانٍ",
        "ربط مسبق مع بوابات الدفع الإلكتروني المعتمدة (مدى، فوري، تابي، تمارا)",
        "طباعة بوالص الشحن وتتبع مسار الشحنات تلقائياً مع كبرى شركات التوصيل",
        "صفحة دفع سريعة في أقل من 1.5 ثانية مخصصة للمتسوقين عبر الهاتف المحمول",
        "لوحة تحكم عربية لإدارة المنتجات والمخزون وتحليلات المبيعات بدقة"
      ]
    }
  }
];

export function getProjectBySlug(slug: string): ProjectShowcaseItem | undefined {
  // Support aliases if any
  if (slug === 'el-matajer') return PROJECTS_SHOWCASE.find((p) => p.slug === 'elmatajer');
  return PROJECTS_SHOWCASE.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: ProjectShowcaseItem; next: ProjectShowcaseItem } {
  const currentSlug = slug === 'el-matajer' ? 'elmatajer' : slug;
  const index = PROJECTS_SHOWCASE.findIndex((p) => p.slug === currentSlug);
  const safeIndex = index === -1 ? 0 : index;
  const nextIndex = (safeIndex + 1) % PROJECTS_SHOWCASE.length;
  const prevIndex = (safeIndex - 1 + PROJECTS_SHOWCASE.length) % PROJECTS_SHOWCASE.length;
  return {
    prev: PROJECTS_SHOWCASE[prevIndex],
    next: PROJECTS_SHOWCASE[nextIndex],
  };
}
