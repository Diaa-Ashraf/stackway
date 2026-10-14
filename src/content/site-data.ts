export interface ServiceItem {
  id: string;
  slug: string;
  code: string;
  number: string;
  group: 'technology' | 'infrastructure' | 'growth' | 'brand';
  groupName: { en: string; ar: string };
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  description: { en: string; ar: string };
  deliverables: { en: string[]; ar: string[] };
  iconType: string;
  popular?: boolean;
}

export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  category: { en: string; ar: string };
  tags: { en: string[]; ar: string[] };
  summary: { en: string; ar: string };
  whatWeBuilt: { en: string[]; ar: string[] };
  stats: { label: { en: string; ar: string }; value: string }[];
  image: string;
  logo?: string;
  color?: string;
  liveUrl?: string;
}

export interface ProcessStage {
  step: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  output: { en: string; ar: string };
}

export interface TechItem {
  number: string;
  name: string;
  role: { en: string; ar: string };
  description: { en: string; ar: string };
}

export interface HostingPlan {
  id: string;
  name: { en: string; ar: string };
  tagline: { en: string; ar: string };
  popular?: boolean;
  priceEGP: number;
  priceUSD: number;
  specs: { en: string[]; ar: string[] };
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: { en: string; ar: string };
  company: string;
  quote: { en: string; ar: string };
  projectSlug: string;
  image: string;
  showcaseImage?: string;
}

export interface InsightArticle {
  slug: string;
  category: { en: string; ar: string };
  readTime: string;
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  date: string;
  content: { en: string; ar: string };
}

export interface SolutionItem {
  id: string;
  slug: string;
  number: string;
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  challenges: { en: string[]; ar: string[] };
  solutions: { en: string[]; ar: string[] };
  techStack: string[];
}

export const CLIENT_NAMES = [
  "Kid Zeal", "Golden Era General Trading", "Energyex", "Elfaleh Tours", 
  "Brandware", "Beta & Alpha for Trading", "Edge Heating", "Mumanta Construction", 
  "Laft Spa Beauty Center", "Learnuva", "Network Knowledge", "B.Connect", 
  "King Tut Industrial", "Shurfah Building Technologies", "AS Architecture Interiors", 
  "Aliaa Inc", "Molvoo", "DB Global Logistic", "Shifa Way", 
  "Eagles Economic Consultancy", "Alimomo Tours", "Aalaf", "Bayan Digital", 
  "Alraya", "Alferdaws", "Diyar Projects", "Tabsira", "Adhar", "Falcon Spice Co."
];

export const CLIENT_NAMES_AR = [
  "كنوز للاستثمار العقاري", "تاور توب للديكور الداخلي", "سيستم كابتن حسام منصور", "الجمعية السعودية للجلدية",
  "ألبان وسوبرماركت التوحيد", "المتجر الملكي ريجاليست", "الصفا للخدمات البترولية", "سنتر الأستاذ محمد الغندي",
  "إيجاركو لتأجير السيارات", "مجموعة العمروسي للتجارة", "صيدلية المعتز الكبرى", "آرت بيلا للتشطيبات والجبسون بورد",
  "بيرفكت فارما الطبية", "سلوميدا للتوريدات", "توصيلة إكسبريس للخدمات اللوجستية", "رونق للتجارة الرقمية",
  "إيفارا للمقتنيات الفاخرة", "شركة كينج توت الصناعية", "شرفة لتكنولوجيا البناء", "ديار للاستثمار والتطوير",
  "بيان للحلول والأنظمة الرقمية", "النسر للاستشارات الاقتصادية", "شبكة المعرفة للبرمجيات", "الفالح للسياحة والخدمات"
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "web",
    slug: "web-development",
    code: "WEB",
    number: "01",
    group: "technology",
    groupName: { en: "Technology", ar: "التكنولوجيا البرمجية" },
    title: { en: "Web Design & Development", ar: "تصميم وتطوير المواقع والمنصات" },
    subtitle: { 
      en: "Fast, search-ready websites and web platforms, engineered rather than assembled.", 
      ar: "مواقع ومنصات رقمية فائقة السرعة ومتوافقة مع محركات البحث، مبنية بهندسة برمجية متماسكة." 
    },
    description: {
      en: "We engineer performant Next.js, React, and bespoke web platforms designed for high conversion, rock-solid security, and seamless user experiences across all screen sizes.",
      ar: "نطور مواقع ومنصات ويب تفاعلية باستخدام أحدث المعايير البرمجية لضمان سرعة تحميل فائقة وتجربة مستخدم سلسة تحقق أعلى معدلات التحويل."
    },
    deliverables: {
      en: ["Custom Next.js & React architecture", "Fluid responsive UI & animations", "Core Web Vitals 95+ score", "Enterprise CMS integrations"],
      ar: ["بنية متطورة بنظام Next.js و React", "واجهات تفاعلية متجاوبة بدقة عالية", "معدل سرعة 95+ في مؤشرات أداء الويب", "ربط متكامل مع أنظمة إدارة المحتوى"]
    },
    iconType: "browser",
    popular: true,
  },
  {
    id: "app",
    slug: "mobile-development",
    code: "APP",
    number: "02",
    group: "technology",
    groupName: { en: "Technology", ar: "التكنولوجيا البرمجية" },
    title: { en: "Mobile Development", ar: "تطوير تطبيقات الهواتف الذكية" },
    subtitle: { 
      en: "Native-grade iOS & Android applications with flawless offline states and instant responses.", 
      ar: "تطبيقات جوال لأجهزة iOS و Android بأداء أصيل واستجابة فورية تدعم العمل بدون اتصال." 
    },
    description: {
      en: "Cross-platform and native mobile apps built with React Native and Flutter. We emphasize tactile interactions, biometric authentication, and cloud data synchronization.",
      ar: "نصمم ونبني تطبيقات الهواتف الذكية بمرونة تقنية عالية تدعم التزامن السحابي الفوري والأمان البيومتري."
    },
    deliverables: {
      en: ["iOS and Android production builds", "Push notifications engine", "App Store & Google Play compliance", "Offline-first data sync"],
      ar: ["إصدارات رسمية لمتاجر App Store و Google Play", "منظومة إشعارات فورية متقدمة", "أمان مالي وبيومتري مدمج", "تزامن سحابي فوري وسريع"]
    },
    iconType: "phone",
  },
  {
    id: "shop",
    slug: "ecommerce",
    code: "SHOP",
    number: "03",
    group: "technology",
    groupName: { en: "Technology", ar: "التكنولوجيا البرمجية" },
    title: { en: "E-Commerce", ar: "المتاجر الإلكترونية والتجارة الرقمية" },
    subtitle: { 
      en: "High-scale commerce architectures that maximize average order value and checkout speed.", 
      ar: "منصات تجارة إلكترونية سريعة مصممة لرفع قيمة الطلبات وتسريع عمليات الشراء والدفع." 
    },
    description: {
      en: "From custom headless storefronts to specialized checkout flows, we engineer frictionless shopping experiences with multi-currency support, payment gateways, and inventory syncing.",
      ar: "نبني متاجر إلكترونية متطورة تدعم تعدد العملات وبوابات الدفع المحلية والعالمية وإدارة المخزون بدقة تامة."
    },
    deliverables: {
      en: ["Frictionless 1-step checkout", "Payment gateways (Visa, Apple Pay, Mada, Fawry)", "Real-time inventory & ERP connection", "Conversion rate optimization"],
      ar: ["تجربة إتمام الشراء بخطوة واحدة", "ربط مع بوابات الدفع الإلكتروني المعتمدة", "مزامنة لحظية مع المخزون وأنظمة ERP", "تحسين مستمر لمعدل إتمام الشراء"]
    },
    iconType: "cart",
  },
  {
    id: "sys",
    slug: "software-development",
    code: "SYS",
    number: "04",
    group: "technology",
    groupName: { en: "Technology", ar: "التكنولوجيا البرمجية" },
    title: { en: "Custom Software & Systems", ar: "البرمجيات الخاصة والأنظمة السحابية" },
    subtitle: { 
      en: "Bespoke SaaS platforms, internal ERP engines, and automation systems tailored to your workflows.", 
      ar: "منصات SaaS خاصة، وأنظمة ERP داخلية، وحلول أتمتة برمجية مفصلة خصيصاً لاحتياجات أعمالك." 
    },
    description: {
      en: "Complex software shouldn't feel complicated. We craft tailored CRM, ERP, client portals, and multi-tenant SaaS applications built with secure, resilient architectures.",
      ar: "نبتكر أنظمة إدارة أعمال متكاملة ومنصات SaaS متعددة المشتركين وبوابات عملاء مخصصة وفق أعلى معايير الحماية والاستقرار."
    },
    deliverables: {
      en: ["Multi-tenant SaaS architecture", "Role-based access control (RBAC)", "Custom API integrations", "Comprehensive automated test suites"],
      ar: ["هيكلة SaaS متعددة المشتركين", "صلاحيات دقيقة وتشفير آمن للبيانات", "ربط برمجي مع الأنظمة الخارجية APIs", "اختبارات برمجية مؤتمتة"]
    },
    iconType: "nodes",
  },
  {
    id: "infra",
    slug: "cloud-hosting",
    code: "INFRA",
    number: "05",
    group: "infrastructure",
    groupName: { en: "Infrastructure & Digital Services", ar: "البنية التحتية والخدمات الرقمية" },
    title: { en: "Hosting & Infrastructure", ar: "الاستضافة السحابية والبنية التحتية" },
    subtitle: { 
      en: "Managed NVMe cloud servers, LiteSpeed optimization, and 99.9% uptime monitored around the clock.", 
      ar: "خوادم سحابية فائقة السرعة بأقراص NVMe وتقنية LiteSpeed مع مراقبة مدار الساعة وضمان تشغيل 99.9%." 
    },
    description: {
      en: "Host your digital assets on hardware optimized for real workload demands. Powered by CloudLinux account isolation, LiteSpeed Web Server, and proactive patch management.",
      ar: "استضافة مُدارة بالكامل تحمي بياناتك بعزل CloudLinux وتسرع استجابة صفحاتك بنظام LiteSpeed المعتمد عالمياً."
    },
    deliverables: {
      en: ["Enterprise NVMe SSD storage arrays", "LiteSpeed cache integration", "Automated daily offsite backups", "24/7 proactive infrastructure telemetry"],
      ar: ["أقراص تخزين NVMe فائقة السرعة", "تسريع فوري مع LiteSpeed Cache", "نسخ احتياطي يومي آمن ومستقل", "مراقبة مستمرة للأداء على مدار الساعة"]
    },
    iconType: "server",
  },
  {
    id: "dns",
    slug: "domains",
    code: "DNS",
    number: "06",
    group: "infrastructure",
    groupName: { en: "Infrastructure & Digital Services", ar: "البنية التحتية والخدمات الرقمية" },
    title: { en: "Domains & DNS", ar: "النطاقات وإدارة نظام DNS" },
    subtitle: { 
      en: "Enterprise domain registration, Anycast DNS routing, and proactive DNSSEC protection.", 
      ar: "تسجيل رسمي لنطاقات الأعمال، توجيه Anycast DNS العالمي، وحماية متقدمة ضد هجمات التزييف." 
    },
    description: {
      en: "Your domain is your brand's digital address. We manage global TLD registrations, DNS Anycast routing for sub-millisecond resolutions, and domain theft protection.",
      ar: "تسجيل وإدارة النطاقات العالمية والمحلية بدقة مع تسريع التوجيه وحماية الملكية وحماية الخصوصية."
    },
    deliverables: {
      en: ["Instant TLD registration and renewals", "Ultra-fast Anycast DNS network", "WHOIS privacy protection", "DNSSEC and SPF/DKIM automated records"],
      ar: ["تسجيل فوري لجميع امتدادات النطاقات", "شبكة توجيه DNS موزعة عالمياً", "حماية خصوصية بيانات المالك WHOIS", "ضبط سجلات الأمان SPF و DKIM"]
    },
    iconType: "globe",
  },
  {
    id: "mail",
    slug: "business-email",
    code: "MAIL",
    number: "07",
    group: "infrastructure",
    groupName: { en: "Infrastructure & Digital Services", ar: "البنية التحتية والخدمات الرقمية" },
    title: { en: "Business Email", ar: "البريد الإلكتروني للشركات والمؤسسات" },
    subtitle: { 
      en: "Professional mailbox setups with 100% inbox delivery, anti-spam filters, and mobile sync.", 
      ar: "بريد إلكتروني رسمي باسم شركتك يضمن وصول الرسائل إلى صندوق الوارد ومحمياً من الرسائل المزعجة." 
    },
    description: {
      en: "Empower your team with domain-branded email accounts protected by strict SPF, DKIM, and DMARC policies that prevent your messages from hitting spam filters.",
      ar: "حلول بريد إلكتروني موثوقة لأعضاء فريقك تدعم التوافق مع برامج Outlook وتطبيقات الهواتف الذكية مع حماية تامة ضد التجسس."
    },
    deliverables: {
      en: ["Domain branded emails (name@yourdomain.com)", "DMARC, DKIM & SPF inbox deliverability", "Enterprise spam & virus shield", "Cross-device webmail and IMAP/SMTP sync"],
      ar: ["بريد رسمي بنطاق شركتك", "تهيئة سجلات تسليم البريد لصندوق الوارد", "فلترة صارمة للفيروسات والسبام", "مزامنة فورية عبر أجهزة الموظفين"]
    },
    iconType: "mail",
  },
  {
    id: "sec",
    slug: "cybersecurity",
    code: "SEC",
    number: "08",
    group: "infrastructure",
    groupName: { en: "Infrastructure & Digital Services", ar: "البنية التحتية والخدمات الرقمية" },
    title: { en: "Cybersecurity", ar: "الأمن السيبراني وحماية المواقع" },
    subtitle: { 
      en: "Web Application Firewalls, automated malware scanners, and hardening for zero breaches.", 
      ar: "جدران حماية للتطبيقات (WAF)، وفحص دوري للبرمجيات الخبيثة، وتأمين وحماية ضد محاولات الاختراق." 
    },
    description: {
      en: "Security is non-negotiable. We implement multi-layered defenses including WAF, DDoS mitigation, real-time vulnerability checks, and automated SSL certificate management.",
      ar: "حلول حماية سيبرانية شاملة تحصن بنيتك الرقمية من الهجمات وهجمات حجب الخدمة DDoS وتسريب البيانات."
    },
    deliverables: {
      en: ["Web Application Firewall (WAF)", "Automated malware isolation & removal", "DDoS mitigation & rate limiting", "Security patch audits & hardening"],
      ar: ["جدار حماية ذكي WAF للتطبيقات", "فحص دوري وعزل للبرمجيات الخبيثة", "حماية متقدمة من هجمات DDoS", "تدقيق أمني دوري وسد الثغرات"]
    },
    iconType: "shield",
  },
  {
    id: "grow",
    slug: "digital-marketing",
    code: "GROW",
    number: "09",
    group: "growth",
    groupName: { en: "Growth", ar: "النمو والتسويق الرقمي" },
    title: { en: "Digital Marketing", ar: "التسويق الرقمي واستراتيجيات النمو" },
    subtitle: { 
      en: "Data-led omnichannel campaigns engineered to acquire, convert, and retain high-value customers.", 
      ar: "حملات تسويقية تعتمد على تحليل البيانات تهدف لجذب عملاء محتملين ورفع معدلات الولاء والمبيعات." 
    },
    description: {
      en: "Growth is a deliberate discipline. We blend audience segmentation, conversion funnel design, and creative messaging to drive measurable ROI across every digital touchpoint.",
      ar: "استراتيجيات تسويق موجهة بالأرقام والنتائج، تركز على مسار تحويل العميل من الوعي بالخدمة إلى إتمام الشراء المتكرر."
    },
    deliverables: {
      en: ["Omnichannel growth strategy", "Full-funnel attribution tracking", "Audience research & persona building", "Monthly ROI & unit economics reporting"],
      ar: ["استراتيجية نمو متكاملة عبر القنوات", "تتبع دقيق لمصادر العملاء والمبيعات", "دراسة سلوك الجمهور المستهدف", "تقارير أداء دورية توضح العائد الاستثماري"]
    },
    iconType: "trending",
  },
  {
    id: "ppc",
    slug: "ppc",
    code: "PPC",
    number: "10",
    group: "growth",
    groupName: { en: "Growth", ar: "النمو والتسويق الرقمي" },
    title: { en: "Google Ads & PPC", ar: "إعلانات جوجل والحملات المدفوعة" },
    subtitle: { 
      en: "High-intent search, display, and social ad campaigns optimized for maximum return on ad spend.", 
      ar: "حملات إعلانية دقيقة تستهدف العملاء الباحثين عن خدماتك لتحقيق أعلى عائد على الإنفاق الإعلاني (ROAS)." 
    },
    description: {
      en: "Stop burning ad budget on low-intent clicks. We engineer search campaigns targeting high-intent keywords with tight negative lists and continuous bid optimization.",
      ar: "إدارة متخصصة لحملات Google Ads وشبكات الإعلانات المدفوعة، تركز على الكلمات المفتاحية ذات نية الشراء العالية لخفض كلفة الاستحواذ."
    },
    deliverables: {
      en: ["Google Search & Performance Max ads", "Conversion tracking & server-side events", "Negative keyword harvesting", "A/B copy and landing page testing"],
      ar: ["إعلانات Google Search و Performance Max", "ربط أحداث التحويل وسيرفرات القياس بدقة", "فلترة الكلمات السلبية لتقليل الهدر المالي", "اختبارات A/B دورية للنصوص الإعلانية"]
    },
    iconType: "target",
  },
  {
    id: "seo",
    slug: "seo",
    code: "SEO",
    number: "11",
    group: "growth",
    groupName: { en: "Growth", ar: "النمو والتسويق الرقمي" },
    title: { en: "Search Engine Optimization (SEO)", ar: "تحسين محركات البحث وتصدر النتائج" },
    subtitle: { 
      en: "Technical SEO, topical authority architecture, and quality links that dominate Google page one.", 
      ar: "تهيئة تقنية متقدمة لموقعك، وبناء سلطة المحتوى، لتصدر نتائج البحث الأولى في جوجل بشكل مستدام." 
    },
    description: {
      en: "Organic search is the highest-value long-term distribution channel. We fix technical crawl errors, optimize schema markup, and build topical clusters that rank consistently.",
      ar: "نرفع ظهور موقعك بين المنافسين بمعالجة كافة الأخطاء البرمجية وإعداد مخطط البيانات الهيكلية Schema وتطوير محتوى يفضله محرك البحث."
    },
    deliverables: {
      en: ["Technical crawl & indexability audit", "Semantic content cluster strategy", "Schema & rich snippet implementation", "White-hat domain authority building"],
      ar: ["تدقيق تقني شامل لسرعة وفهرسة الصفحات", "خطة محتوى مبنية على الكلمات المفتاحية الأكثر ربحية", "تطبيق بيانات Schema للظهور المميز", "بناء روابط خارجية موثوقة ونظيفة"]
    },
    iconType: "search",
  },
  {
    id: "social",
    slug: "social-media",
    code: "SOCIAL",
    number: "12",
    group: "growth",
    groupName: { en: "Growth", ar: "النمو والتسويق الرقمي" },
    title: { en: "Social Media Management", ar: "إدارة منصات التواصل الاجتماعي" },
    subtitle: { 
      en: "Editorial calendars, distinctive motion visuals, and active community engagement.", 
      ar: "صناعة محتوى إبداعي وجذاب، وتصميمات تفاعلية، وبناء مجتمع مخلص لعلامتك التجارية." 
    },
    description: {
      en: "Build a brand people remember. We handle content ideation, striking visual design, motion snippets, and ongoing community interaction across LinkedIn, Instagram, and X.",
      ar: "إدارة احترافية لحسابات التواصل تترجم هوية شركتك إلى محتوى بصري وفيديوهات تفاعلية تعزز التفاعل وتجذب المتابعين المستهدفين."
    },
    deliverables: {
      en: ["Strategic monthly content calendars", "High-fidelity static and motion creatives", "Community moderation and DM handling", "Analytics on reach and engagement velocity"],
      ar: ["جدولة دورية للمحتوى التسويقي الهادف", "تصاميم ورسوم متحركة تعكس هوية الشركة", "إدارة التفاعل والرد على استفسارات الجمهور", "تقارير أداء دورية تقيس الوصول والتفاعل"]
    },
    iconType: "share",
  },
  {
    id: "brand",
    slug: "branding",
    code: "BRAND",
    number: "13",
    group: "brand",
    groupName: { en: "Brand", ar: "الهوية والتواصل البصري" },
    title: { en: "Branding & Identity", ar: "بناء وتصميم الهوية التجارية" },
    subtitle: { 
      en: "Enduring visual systems, typography rules, and complete identity guidelines.", 
      ar: "هويات بصرية متكاملة، ونظم طباعية متقنة، ودليل إرشادي شامل يضمن حضوراً مميزاً لشركتك." 
    },
    description: {
      en: "A great brand stands out instantly. We build thoughtful identity systems comprising logos, color palettes, custom typography pairings, iconography, and exhaustive brand books.",
      ar: "نصمم هويات بصرية أصيلة تخلد في ذاكرة عملائك، تشمل الشعارات، ودراسة درجات الألوان، والخطوط، ومطبوعات الشركات، والأصول الرقمية."
    },
    deliverables: {
      en: ["Primary & responsive logo marks", "Harmonious color palettes & type pairing", "Comprehensive Brand Guidelines PDF", "Digital & print asset ready exports"],
      ar: ["شعار رئيسي بنسخ مرنة لكافة الاستخدامات", "لوحة ألوان متناسقة واختيار مدروس للخطوط", "دليل إرشادي كامل للهوية التجارية Brandbook", "ملفات جاهزة للطباعة والتطبيقات الرقمية"]
    },
    iconType: "sparkles",
  },
  {
    id: "copy",
    slug: "copywriting",
    code: "COPY",
    number: "14",
    group: "brand",
    groupName: { en: "Brand", ar: "الهوية والتواصل البصري" },
    title: { en: "Marketing Copywriting", ar: "كتابة المحتوى التسويقي والإعلاني" },
    subtitle: { 
      en: "Persuasive landing page copy, value propositions, and messaging that turns visitors into buyers.", 
      ar: "نصوص تسويقية مقنعة وصفحات هبوط مصممة بأساليب سيكولوجية تحول الزائر إلى عميل فعلي." 
    },
    description: {
      en: "Words do the selling. We craft crisp, clear, jargon-free copy for websites, pitch decks, and ad campaigns that clearly states your value proposition and eliminates hesitation.",
      ar: "كلمات واضحة تبرز قيمة ما تقدمه وتبدد تردد المشتري. نكتب نصوص صفحات الهبوط، وحملات البريد، والإعلانات بأسلوب إقناعي مباشر."
    },
    deliverables: {
      en: ["High-converting landing page copy", "Product messaging & value propositions", "Email onboarding & nurturing sequences", "Microcopy and UX call-to-actions"],
      ar: ["نصوص صفحات هبوط تحقق أعلى تحويل", "صياغة المزايا التنافسية للخدمات والمنتجات", "سلاسل رسائل البريد الإلكتروني الترحيبية", "نصوص الأزرار والتوجيه الداخلي UX Copy"]
    },
    iconType: "file-text",
  },
  {
    id: "keys",
    slug: "digital-products",
    code: "KEYS",
    number: "15",
    group: "brand",
    groupName: { en: "Brand", ar: "الهوية والتواصل البصري" },
    title: { en: "Licenses & Digital Products", ar: "التراخيص والمنتجات الرقمية" },
    subtitle: { 
      en: "Authentic software licensing, server control panel keys, and enterprise digital solutions.", 
      ar: "تراخيص برمجية أصلية، ومفاتيح لوحات التحكم بالخوادم، وحلول رقمية معتمدة للشركات." 
    },
    description: {
      en: "We supply official licenses for cPanel, CloudLinux, LiteSpeed, WHMCS, SSL certificates, and enterprise tools with instant provisioning and local currency billing.",
      ar: "نوفر تراخيص أصلية لكافة برمجيات إدارة الخوادم مثل cPanel و CloudLinux و LiteSpeed وتراخيص الأمان بأسعار تنافسية وسرعة تفعيل فورية."
    },
    deliverables: {
      en: ["Official cPanel & WHM server licenses", "LiteSpeed Web Server licenses", "CloudLinux OS enterprise keys", "Commercial Wildcard & EV SSLs"],
      ar: ["تراخيص رسمية لـ cPanel و WHM", "تراخيص خوادم الويب LiteSpeed", "مفاتيح أنظمة CloudLinux OS المعتمدة", "شهادات أمان SSL تجارية موثوقة"]
    },
    iconType: "key",
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "kunuz",
    slug: "kunuz",
    number: "01",
    title: { en: "Kunuz Real Estate", ar: "كنوز العقارية" },
    subtitle: { 
      en: "Real estate investment & commercial development platform in Badr City.", 
      ar: "منصة رائدة للتطوير والاستثمار العقاري والتجاري بمدينة بدر." 
    },
    category: { en: "Real Estate SaaS", ar: "منصة عقارية واستثمارية" },
    tags: {
      en: ["Web Engineering", "3D Showcase", "Investment Calculator", "Bilingual"],
      ar: ["هندسة الويب", "معارض ثلاثية الأبعاد", "حاسبة استثمارية", "ثنائي اللغة"]
    },
    summary: {
      en: "A dynamic real estate portal featuring commercial complexes (Orbit Mall, Fuel Station, Zad Center) with smart zero-downpayment calculators and interactive 3D showcases.",
      ar: "منصة رقمية رائدة للتطوير العقاري والاستثمار بمدينة بدر تتيح استعراض كبرى المشروعات وحاسبة أقساط استثمارية ذكية حتى 6 سنوات ومعارض ثلاثية الأبعاد."
    },
    whatWeBuilt: {
      en: [
        "Interactive commercial project portfolio showcases",
        "Dynamic multi-year investment & instalment calculator",
        "3D perspective showcases with smooth mouse interactions",
        "Instant CRM & WhatsApp lead conversion pipeline"
      ],
      ar: [
        "تطوير منصة تفاعلية متكاملة لعرض مشروعات شركة كنوز العقارية",
        "حاسبة أقساط واستثمار رقمية ذكية وديناميكية لأنظمة السداد حتى 6 سنوات",
        "معارض ثلاثية الأبعاد تفاعلية مع مؤثرات بصرية متميزة",
        "نظام حجز وحدات واستفسارات فورية مربوط بالواتساب والـ CRM"
      ]
    },
    stats: [
      { label: { en: "Commercial Space", ar: "مساحة مشروعات مطورة" }, value: "35,000m²" },
      { label: { en: "Calculator Inquiries", ar: "استفسارات الحاسبة" }, value: "2,400+" },
      { label: { en: "Lead Conversion Rate", ar: "معدل تحويل المهتمين" }, value: "+42%" }
    ],
    image: "/images/work/showcase/kunuz.webp",
    liveUrl: "https://kunuz.stackway.cloud"
  },
  {
    id: "tower-top",
    slug: "tower-top",
    number: "02",
    title: { en: "Tower Top EG", ar: "تاور توب للديكور والتشطيبات" },
    subtitle: { 
      en: "Turnkey interior architecture, decoration, and gypsum board engineering.", 
      ar: "الموقع الرسمي ومعرض أعمال التشطيبات والديكور والتصميم الداخلي." 
    },
    category: { en: "Interior Architecture", ar: "التشطيبات والديكور" },
    tags: {
      en: ["Interior Design", "Live Portfolio", "Lead Generation", "Responsive"],
      ar: ["التشطيبات المعمارية", "معرض أعمال حي", "حاسبة تكاليف", "تصميم متجاوب"]
    },
    summary: {
      en: "An interactive showroom for Tower Top EG showcasing on-site renovation progress, categorized residential and commercial portfolios, and instant cost estimations.",
      ar: "موقع رسمي ومعرض أعمال تفاعلي لشركة تاور توب الرائدة في مصر بمجال التشطيبات والديكور، يبرز مراحل التنفيذ الحية مع حاسبة تكاليف فورية لحجز المعاينات."
    },
    whatWeBuilt: {
      en: [
        "Real-world categorized portfolio (villas, apartments, offices)",
        "On-site progress photo and video showcase galleries",
        "Instant finishing package cost estimator",
        "One-click WhatsApp direct consultation funnel"
      ],
      ar: [
        "معرض مشاريع حي ومصنف (سكني، تجاري، مكاتب، فلل) من قلب الموقع",
        "استعراض صور ومراحل التنفيذ الحية بدقة عالية ومواصفات الخامات",
        "نظام طلب معاينة وحساب تقديري لتكاليف التشطيب وتحديد المساحات",
        "تكامل سريع مع واتساب وقنوات الاتصال المباشر للمبيعات"
      ]
    },
    stats: [
      { label: { en: "Completed Projects", ar: "مشروع منجز" }, value: "180+" },
      { label: { en: "Client Rating", ar: "تقييم العملاء" }, value: "5.0 ★" },
      { label: { en: "Inquiry Response Time", ar: "سرعة الرد على المعاينات" }, value: "< 15min" }
    ],
    image: "/images/work/showcase/tower-top.webp",
    liveUrl: "https://towertop-eg.com/"
  },
  {
    id: "team-hm",
    slug: "team-hm",
    number: "03",
    title: { en: "Team HM System", ar: "سيستم كابتن حسام منصور" },
    subtitle: { 
      en: "Athletic coaching SaaS for World Bodybuilding Champion Hossam Mansour.", 
      ar: "نظام تدريب ومتابعة وتغذية متكامل لبطل العالم كمال أجسام." 
    },
    category: { en: "Coaching SaaS", ar: "نظام SaaS رياضي" },
    tags: {
      en: ["Custom SaaS", "Workout Engine", "Nutrition Planner", "RBAC"],
      ar: ["منصة SaaS رياضية", "محرك الجداول التدريبية", "تخطيط الوجبات والسعرات", "صلاحيات دقيقة"]
    },
    summary: {
      en: "A comprehensive cloud coaching portal managing thousands of competitive athletes worldwide with tailored workouts, macro meal plans, and weekly check-in photo tracking.",
      ar: "نظام SaaS سحابي متكامل لإدارة التدريب الرياضي والمتابعة البدنية المباشرة للرياضيين والأبطال تحت إشراف بطل العالم حسام منصور مع جداول تغذية وتمارين وتقييم أسبوعي."
    },
    whatWeBuilt: {
      en: [
        "Role-based coaching platform managing thousands of trainees (RBAC)",
        "Bespoke workout split generator with exercise video tutorials",
        "Automated macronutrient and caloric meal plan engine",
        "Weekly photo check-in module with body fat trend graphs"
      ],
      ar: [
        "لوحة تحكم لإدارة آلاف المتدربين مع صلاحيات وصول دقيقة (RBAC)",
        "محرك بناء وتخصيص الجداول التدريبية بالفيديو والشرح الفني",
        "نظام تخطيط وجبات محسوبة السعرات والبروتين والدهون بدقة",
        "وحدة متابعة أسبوعية (Weekly Check-in) لرفع صور التطور والقياسات"
      ]
    },
    stats: [
      { label: { en: "Active Trainees", ar: "رياضي ومتدرب مسجل" }, value: "3,400+" },
      { label: { en: "Weekly Check-ins", ar: "متابعة أسبوعية مسجلة" }, value: "24,000+" },
      { label: { en: "System Reliability", ar: "جاهزية واستقرار النظام" }, value: "99.98%" }
    ],
    image: "/images/work/showcase/team-hm.webp",
    liveUrl: "https://team-hm.com/login"
  },
  {
    id: "hossam-mansour",
    slug: "hossam-mansour",
    number: "04",
    title: { en: "Hossam Mansour Official", ar: "موقع بطل العالم حسام منصور" },
    subtitle: { 
      en: "World champion personal brand, transformation gallery, and coaching store.", 
      ar: "بوابة بطل العالم كمال أجسام والتدريب الرياضي ومتجر باقات التدريب." 
    },
    category: { en: "Personal Brand & Commerce", ar: "منصة علامة رياضية وتجارة" },
    tags: {
      en: ["Web Design & Development", "Transformations", "Subscriptions", "SEO"],
      ar: ["تصميم وتطوير ويب", "معرض التحولات", "اشتراكات أونلاين", "تهيئة محركات البحث"]
    },
    summary: {
      en: "The global personal platform for World Champion Hossam Mansour, showcasing his championship titles, before-and-after transformations, and multi-currency training store.",
      ar: "الموقع والمنصة الرسمية لبطل العالم حسام منصور لعرض إنجازاته الرياضية، باقات الاشتراك أونلاين، قصص نجاح وتحول المتدربين، ومدونة المقالات التغذوية."
    },
    whatWeBuilt: {
      en: [
        "Cinematic brand design reflecting global championship excellence",
        "Interactive Before & After client transformation showcases",
        "Multi-currency storefront for custom training & diet programs",
        "Direct consultation appointment scheduling system"
      ],
      ar: [
        "تصميم موقع سينمائي بهوية رياضية قوية تعكس بطولات العالم",
        "معرض تفاعلي لقصص نجاح وتحولات المتدربين (Before & After)",
        "متجر إلكتروني لباقات التدريب أونلاين بدعم عملات متعددة",
        "نظام حجز استشارات تدريبية وتغذوية مباشرة مع بطل العالم"
      ]
    },
    stats: [
      { label: { en: "Global Trainees", ar: "متدرب حول العالم" }, value: "5,000+" },
      { label: { en: "Transformations", ar: "قصة نجاح وتحول" }, value: "850+" },
      { label: { en: "Page Load Speed", ar: "سرعة تحميل الصفحة" }, value: "0.8s" }
    ],
    image: "/images/work/showcase/hossam-mansour.webp",
    liveUrl: "https://hossammansour.com/ar/"
  },
  {
    id: "ssdds",
    slug: "ssdds",
    number: "05",
    title: { en: "SSDDS Saudi Society", ar: "الجمعية السعودية للأمراض الجلدية" },
    subtitle: { 
      en: "Official medical portal for the Saudi Society of Dermatology & Surgery.", 
      ar: "البوابة الإلكترونية الرسمية للجمعية السعودية للأمراض وجراحة الجلد." 
    },
    category: { en: "Medical Society & CME", ar: "بوابة طبية وتعليم مستمر" },
    tags: {
      en: ["Medical Portal", "Conferences", "CME System", "Journal CMS"],
      ar: ["بوابة طبية رسمية", "إدارة المؤتمرات", "ساعات CME معتمدة", "المجلة العلمية"]
    },
    summary: {
      en: "The official digital infrastructure for the Saudi Society of Dermatology and Dermatologic Surgery (founded 1989), managing international medical conferences, CME hours, and research journals.",
      ar: "البوابة الإلكترونية الرسمية للجمعية السعودية للأمراض وجراحة الجلد (تأسست 1989م)، تدير المؤتمرات الدولية، ورش العمل المعتمدة، تسجيل العضويات الطبية، ونشر الأبحاث والمجلات العلمية."
    },
    whatWeBuilt: {
      en: [
        "Enterprise medical society portal compliant with Saudi health regulations",
        "Medical conference registration engine with CME credit issuance",
        "Doctor and consultant membership portal with electronic renewal",
        "Digital repository for peer-reviewed dermatology research journals"
      ],
      ar: [
        "بناء البوابة الرسمية للجمعية وفق أعلى المعايير الأمنية والطبية",
        "نظام إدارة المؤتمرات والفعاليات الطبية وإصدار شهادات الساعات المعتمدة (CME)",
        "نظام إدارة العضويات للأطباء والاستشاريين مع بوابات الدفع الإلكتروني",
        "مكتبة رقمية متقدمة لنشر الأبحاث والمجلات العلمية الطبية المحكمة"
      ]
    },
    stats: [
      { label: { en: "Registered Doctors", ar: "طبيب واستشاري مسجل" }, value: "6,200+" },
      { label: { en: "Accredited CME Hours", ar: "ساعة تعليم طبي معتمدة" }, value: "480+" },
      { label: { en: "Research Papers", ar: "بحث ومقال علمي محكم" }, value: "1,200+" }
    ],
    image: "/images/work/showcase/ssdds.svg",
    liveUrl: "https://ssdds.org"
  },
  {
    id: "al-tawheed-market",
    slug: "al-tawheed-market",
    number: "06",
    title: { en: "Al Tawhid Market", ar: "سوبر ماركت وألبان التوحيد" },
    subtitle: { 
      en: "Hyper-local grocery & fresh dairy e-commerce with geolocation delivery.", 
      ar: "متجر إلكتروني وسوبرماركت غذائي مع نظام توصيل جغرافي وربط POS." 
    },
    category: { en: "Grocery E-Commerce", ar: "تجارة إلكترونية وتوصيل سريع" },
    tags: {
      en: ["Quick Commerce", "Geolocation", "InstaPay", "POS Sync"],
      ar: ["تجارة سريعة", "توصيل جغرافي GPS", "دفع إنستاباي", "ربط نقاط البيع POS"]
    },
    summary: {
      en: "A rapid online grocery storefront for Al Tawhid Supermarkets in Alexandria, delivering fresh dairy and groceries with zone-based delivery fees and POS stock synchronization.",
      ar: "منصة تسوق إلكتروني متكاملة لسلسلة ألبان وسوبرماركت التوحيد بالإسكندرية، توفر منتجات الألبان والأجبان الطبيعية مع سلة تسوق فورية وتحديد الموقع الجغرافي ودعم إنستاباي."
    },
    whatWeBuilt: {
      en: [
        "Sub-second grocery item catalog with fast filtering and daily deals",
        "Pin-drop geolocation delivery engine with automated zone fees",
        "Frictionless checkout supporting Cash, InstaPay, and mobile wallets",
        "Direct two-way POS integration preventing stock discrepancies"
      ],
      ar: [
        "تطوير متجر إلكتروني متكامل لمنتجات الألبان مع تجربة تسوق فورية",
        "نظام توصيل طلبات جغرافي محدد لمناطق الإسكندرية مع حساب الرسوم تلقائياً",
        "دعم خيارات دفع متعددة: كاش، إنستاباي (InstaPay)، والمحافظ الإلكترونية",
        "ربط مباشر ومزامنة مع نظام نقاط البيع والمخزون (POS)"
      ]
    },
    stats: [
      { label: { en: "Active Shoppers", ar: "مستخدم نشط" }, value: "2,800+" },
      { label: { en: "Average Delivery Time", ar: "متوسط وقت التوصيل" }, value: "24min" },
      { label: { en: "Order Accuracy", ar: "دقة تسليم الطلبات" }, value: "99.4%" }
    ],
    image: "/images/work/showcase/al-tawheed.webp",
    liveUrl: "https://altawhid.stackway.cloud"
  },
  {
    id: "regalest",
    slug: "regalest",
    number: "07",
    title: { en: "Regalest Royal Store", ar: "المتجر الملكي ريجاليست" },
    subtitle: { 
      en: "Bespoke royal timepieces & luxury collectibles e-commerce boutique.", 
      ar: "متجر المقتنيات والساعات الفاخرة والملكية بتجربة تسوق راقية." 
    },
    category: { en: "Luxury E-Commerce", ar: "تجارة إلكترونية فاخرة" },
    tags: {
      en: ["Dark Luxury", "Swiper 3D", "Haute Horlogerie", "Frictionless Checkout"],
      ar: ["تجارة فاخرة", "عرض ثلاثي الأبعاد 3D", "ساعات ملكية سويسرية", "دفع آمن وسريع"]
    },
    summary: {
      en: "A bespoke luxury watch storefront designed in Dark & Gold luxury styling, featuring Swiper 3D movement showcases, advanced caliber filtering, and frictionless checkout.",
      ar: "متجر تجارة إلكترونية فاخر مخصص للساعات والمقتنيات الكلاسيكية والملكية الفاخرة، صُمم بهوية Dark Luxury رفيعة المستوى وعروض Swiper 3D التفاعلية."
    },
    whatWeBuilt: {
      en: [
        "Dark Luxury visual identity incorporating Cinzel and Alexandria typography",
        "Interactive 3D watch movement showcases with high-res dial inspection",
        "Precision faceted filtering (automatic/quartz, case metal, diameter)",
        "Streamlined mobile checkout flow minimizing cart abandonment"
      ],
      ar: [
        "تصميم متجر إلكتروني فاخر بهوية بصرية ملوكية (Dark & Gold Luxury Aesthetic)",
        "معارض صور ثلاثية الأبعاد تفاعلية باستخدام Swiper 3D لاستعراض تفاصيل الساعات",
        "نظام تصفية وتصنيف متقدم حسب العلامة ونوع الحركة والمعدن والمقاس",
        "سلة تسوق ديناميكية وصفحة دفع فورية محسنة تقلل معدل ترك السلة"
      ]
    },
    stats: [
      { label: { en: "Average Order Value", ar: "متوسط قيمة الطلب" }, value: "Premium" },
      { label: { en: "Mobile Engagement", ar: "تفاعل مستخدمي الجوال" }, value: "+65%" },
      { label: { en: "Checkout Abandonment", ar: "انخفاض ترك السلة" }, value: "-38%" }
    ],
    image: "/images/work/showcase/regalest.webp",
    liveUrl: "https://regalest.stackway.cloud"
  },
  {
    id: "al-safa-petroleum",
    slug: "al-safa-petroleum",
    number: "08",
    title: { en: "Al Safa Petroleum", ar: "شركة الصفا للخدمات البترولية" },
    subtitle: { 
      en: "Industrial fuel supply, fleet dispatch, and petroleum infrastructure portal.", 
      ar: "خدمات الوقود الصناعي والبنية التحتية البترولية والتوريدات الصناعية." 
    },
    category: { en: "Energy & Infrastructure", ar: "قطاع الطاقة والخدمات البترولية" },
    tags: {
      en: ["Corporate Portal", "Industrial Logistics", "Quotation Engine", "Enterprise"],
      ar: ["بوابة بترولية مؤسسية", "لوجستيات الوقود", "حاسبة عروض الأسعار", "عقود الشركات"]
    },
    summary: {
      en: "The corporate digital portal and B2B operations gateway for Al Safa Petroleum Services, highlighting nationwide fuel distribution, safety certifications, and commercial supply contracts.",
      ar: "البوابة الرقمية المؤسسية ومنصة إدارة العمليات لشركة الصفا للبترول، تستعرض خدمات توريد الوقود للمصانع والمشروعات الكبرى، وإدارة أساطيل النقل، ومعايير الجودة والسلامة."
    },
    whatWeBuilt: {
      en: [
        "Corporate energy portal presenting bulk petroleum supply capabilities",
        "Automated B2B industrial fuel supply quotation calculator",
        "Compliance repository for ISO certifications and safety standards",
        "Secure client portal for commercial contract tracking and dispatch schedules"
      ],
      ar: [
        "بوابة مؤسسية متكاملة لخطوط إمداد الوقود والمنتجات البترولية للمصانع",
        "نظام طلب عروض أسعار وتوريد مباشر للمشروعات الصناعية وأساطيل النقل",
        "توثيق معايير السلامة والبيئة ومطابقة مواصفات الجودة والاعتمادات الرسمية",
        "لوحة تفاعلية لخدمات العملاء مع مؤشرات الأداء التشغيلي ومواعيد التسليم"
      ]
    },
    stats: [
      { label: { en: "Industrial Fuel Supplied", ar: "وقود صناعي تم توريده" }, value: "15M+ Liters" },
      { label: { en: "Corporate Clients", ar: "عملاء ومصانع متعاقدة" }, value: "120+" },
      { label: { en: "Safety Compliance", ar: "مطابقة معايير السلامة" }, value: "100%" }
    ],
    image: "/images/work/showcase/al-safa.svg",
    liveUrl: "https://stackway.cloud"
  },
  {
    id: "elgendy",
    slug: "elgendy",
    number: "09",
    title: { en: "Mr. Mohamed El Ghandy Center", ar: "سنتر الأستاذ محمد الغندي" },
    subtitle: { 
      en: "Smart educational LMS platform, online examination engine, and student tracking.", 
      ar: "منصة وسنتر تعليمي ذكي (بداية قوية .. لمستقبل أفضل) لإدارة الطلاب والامتحانات الإلكترونية وكروت الشحن." 
    },
    category: { en: "EdTech & LMS", ar: "التعليم الإلكتروني وإدارة السناتر" },
    tags: {
      en: ["Custom LMS", "Exam Engine", "Parent Portal", "Scratch Cards"],
      ar: ["منصة LMS تعليمية", "محرك الامتحانات الذكية", "بوابة ولي الأمر", "كروت الشحن والأكواد"]
    },
    summary: {
      en: "An intelligent learning management platform for Mr. Mohamed El Ghandy Educational Center, featuring timed online exams, attendance barcodes, parent grade alerts, and scratch-card lecture access.",
      ar: "منصة تعليمية وإدارية ذكية لسنتر الأستاذ محمد الغندي (بداية قوية .. لمستقبل أفضل)، تجمع بين نظام إدارة السنتر حضورياً ومنصة إلكترونية متطورة للطلاب، تتضمن إدارة المجموعات، الامتحانات التفاعلية، وكروت الشحن."
    },
    whatWeBuilt: {
      en: [
        "Interactive test and exam engine with automated instant grading",
        "Student attendance barcode scanning and lecture tracking",
        "Dedicated parent portal delivering instant test and absence notifications",
        "Encrypted scratch-card voucher redemption system for video lectures"
      ],
      ar: [
        "بنك أسئلة واختبارات إلكترونية ذكية مع تصحيح تلقائي ومؤقت زمني",
        "نظام إدارة الحضور والغياب للسنتر ومتابعة المذكرات المطبوعة",
        "بوابة خاصة لأولياء الأمور لمتابعة درجات أبنائهم ونسبة الحضور",
        "نظام كروت الشحن والأكواد المشفرة لفتح المحاضرات والامتحانات أونلاين"
      ]
    },
    stats: [
      { label: { en: "Enrolled Students", ar: "طالب مسجل بالسنتر" }, value: "4,100+" },
      { label: { en: "Exams Completed", ar: "امتحان مكتمل ومصحح" }, value: "38,000+" },
      { label: { en: "Parent Satisfaction", ar: "رضا أولياء الأمور" }, value: "98.5%" }
    ],
    image: "/images/work/showcase/elgendy.webp",
    liveUrl: "https://elgendy.stackway.cloud/"
  },
  {
    id: "securecheap",
    slug: "securecheap",
    number: "10",
    title: { en: "SecureCheap Cloud", ar: "سيكيور تشيب كلاود" },
    subtitle: { 
      en: "Infrastructure monitoring SaaS with real-time alerting & cost insights.", 
      ar: "منصة SaaS سحابية لمراقبة الخوادم وحماية البنية التحتية مع تحسين التكاليف." 
    },
    category: { en: "Cloud SaaS", ar: "منصة سحابية SaaS" },
    tags: {
      en: ["Custom Software & Systems", "Web Design & Development", "Next.js", "Cloud"],
      ar: ["برمجيات وأنظمة مخصصة", "مراقبة الخوادم اللحظية", "فاحص الثغرات CVE", "تحسين تكاليف السحابة"]
    },
    summary: {
      en: "An AI-powered platform for monitoring servers, security and cloud costs from one unified dashboard with sub-second alert triggers.",
      ar: "منصة ذكية لمراقبة الخوادم واكتشاف الثغرات الأمنية ومتابعة تكاليف الحوسبة السحابية من لوحة تحكم واحدة."
    },
    whatWeBuilt: {
      en: [
        "Real-time server monitoring telemetry (<25ms)",
        "Uptime, SSL & DNS automated checks",
        "Security scanner: open ports, CVEs, malware",
        "Multi-cloud cost optimization engine"
      ],
      ar: [
        "نظام قياس ومراقبة لحظي لأداء الخوادم (< 25ms)",
        "فحص تلقائي مستمر للاتصال وشهادات SSL و DNS",
        "فاحص أمني للثغرات والمنافذ والبرمجيات الخبيثة",
        "محرك لتحسين وتقليل تكاليف السحابة"
      ]
    },
    stats: [
      { label: { en: "Uptime Monitored", ar: "نسبة توفر المراقبة" }, value: "99.99%" },
      { label: { en: "Telemetry Latency", ar: "سرعة نقل البيانات" }, value: "< 25ms" },
      { label: { en: "Servers Protected", ar: "خوادم تحت الحماية" }, value: "1,200+" }
    ],
    image: "/images/work/showcase/securecheap.svg",
    liveUrl: "https://securecheap.com"
  },
  {
    id: "arabybot",
    slug: "arabybot",
    number: "11",
    title: { en: "ArabyBot AI", ar: "منصة عربي بوت للذكاء الاصطناعي" },
    subtitle: { 
      en: "Conversational commerce SaaS connecting WhatsApp, Messenger, and online stores.", 
      ar: "منصة تجارة تفاعلية عبر برامج المحادثة تربط واتساب والماسنجر بالمتاجر." 
    },
    category: { en: "AI & Automation", ar: "ذكاء اصطناعي وأتمتة" },
    tags: {
      en: ["Conversational AI", "E-Commerce", "Custom Software"],
      ar: ["شات بوت ذكي للواتساب", "كتالوج المتاجر الإلكترونية", "استرجاع السلات المتروكة", "أتمتة المبيعات"]
    },
    summary: {
      en: "Automated chat funnels enabling e-commerce brands to close sales, track orders, and provide 24/7 customer support automatically.",
      ar: "مسارات محادثة آلية تتيح للمتاجر إتمام المبيعات وتتبع مسار الشحنات والرد الفوري على استفسارات العملاء على مدار الساعة."
    },
    whatWeBuilt: {
      en: [
        "Official WhatsApp Business Cloud API integration",
        "Automated catalogue browsing inside chat",
        "Abandoned cart recovery reminders",
        "Live agent handover dashboard"
      ],
      ar: [
        "ربط رسمي مع واجهة WhatsApp Cloud API",
        "استعراض منتجات المتجر مباشرة داخل المحادثة",
        "استرجاع السلات المتروكة بإشعارات تلقائية",
        "لوحة تحكم لتحويل المحادثة لموظفي خدمة العملاء"
      ]
    },
    stats: [
      { label: { en: "Messages Processed", ar: "رسائل تمت معالجتها" }, value: "3.5M+" },
      { label: { en: "Cart Recovery Rate", ar: "استعادة السلات المتروكة" }, value: "+34%" }
    ],
    image: "/images/work/showcase/arabybot.svg",
    liveUrl: "https://arabybot.com"
  },
  {
    id: "elmatajer",
    slug: "elmatajer",
    number: "12",
    title: { en: "El Matajer SaaS", ar: "منصة المتاجر السحابية" },
    subtitle: { 
      en: "Multi-vendor e-commerce SaaS platform built for Middle East merchants.", 
      ar: "منصة تجارة إلكترونية سحابية متعددة المتاجر مخصصة لتجار الشرق الأوسط." 
    },
    category: { en: "E-Commerce SaaS", ar: "منصة تجارة إلكترونية" },
    tags: {
      en: ["E-Commerce", "Multi-tenant", "Fintech"],
      ar: ["تجارة إلكترونية متعددة", "بوابات دفع إقليمية", "ربط شركات الشحن", "لوحة تحكم التاجر"]
    },
    summary: {
      en: "Turnkey online store platform with localized shipping couriers, regional payment gateways, and lightning-fast checkout.",
      ar: "منصة متكاملة لبناء المتاجر الإلكترونية مع ربط مسبق بشركات الشحن الإقليمية وبوابات الدفع الإلكتروني المعتمدة."
    },
    whatWeBuilt: {
      en: [
        "Multi-tenant store generator engine",
        "Localized gateway integration (Mada, Fawry, Tabby)",
        "Automated shipping label generation",
        "Mobile-first responsive buyer checkout"
      ],
      ar: [
        "محرك إنشاء المتاجر المستقلة في ثوانٍ",
        "ربط بوابات الدفع المحلية (مدى، فوري، تابي)",
        "طباعة بوالص الشحن تلقائياً بمجرد إتمام الطلب",
        "صفحة دفع سريعة ومتوافقة كلياً مع الجوال"
      ]
    },
    stats: [
      { label: { en: "Active Merchants", ar: "متاجر مفعلة" }, value: "450+" },
      { label: { en: "Checkout Speed", ar: "سرعة الدفع" }, value: "1.4s" }
    ],
    image: "/images/work/showcase/elmatajer.svg",
    liveUrl: "https://elmatajer.com"
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: "01",
    title: { en: "Discover", ar: "الاستكشاف والتحليل" },
    description: { 
      en: "We learn your business, users and goals before proposing anything.", 
      ar: "نتعمق في فهم نموذج عملك، واحتياجات جمهورك، وأهدافك التجارية قبل كتابة أي سطر برمجي أو تقديم مقترحات." 
    },
    output: { en: "Brief & scope", ar: "نطاق العمل ووثيقة المتطلبات" }
  },
  {
    step: "02",
    title: { en: "Strategy", ar: "التخطيط والاستراتيجية" },
    description: { 
      en: "A written plan: what we'll build, why, in what order, and what it costs.", 
      ar: "خطة تنفيذ مكتوبة بدقة: ما سنقوم ببنائه، وأولويات التطوير، والجدول الزمني والتكاليف المحددة." 
    },
    output: { en: "Plan, price, timeline", ar: "الخطة، السعر، والجدول الزمني" }
  },
  {
    step: "03",
    title: { en: "Design", ar: "التصميم وتجربة المستخدم" },
    description: { 
      en: "Structure, interface and brand, reviewed with you at every step.", 
      ar: "بناء الهيكل البصري، والواجهات التفاعلية، وتطبيق الهوية مع مراجعات مرحلية مستمرة لضمان التوافق التام." 
    },
    output: { en: "Approved designs", ar: "نماذج الواجهات المعتمدة" }
  },
  {
    step: "04",
    title: { en: "Build", ar: "الهندسة البرمجية والتطوير" },
    description: { 
      en: "Engineering, content and integrations, with regular working previews.", 
      ar: "كتابة الأكواد، وإعداد الخوادم، وربط الأنظمة، مع روابط تجريبية دورية لاختبار المنصة أثناء البناء." 
    },
    output: { en: "Working product", ar: "نظام حي قيد التشغيل الفعلي" }
  },
  {
    step: "05",
    title: { en: "Launch", ar: "الإطلاق وتسليم المشروع" },
    description: { 
      en: "Testing, deployment on reliable infrastructure and handover.", 
      ar: "اختبارات أداء وضغط شاملة، ونشر المنصة على استضافة سريعة ومحمية، مع تسليم كامل للملفات والتدريب." 
    },
    output: { en: "Live & handed over", ar: "إطلاق مباشر وتسليم رسمي" }
  },
  {
    step: "06",
    title: { en: "Grow", ar: "النمو والشراكة المستمرة" },
    description: { 
      en: "Hosting, support, SEO and marketing to keep it improving.", 
      ar: "إدارة الاستضافة، والدعم الفني السريع، وتحسين محركات البحث، وتطوير الميزات للحفاظ على نمو أعمالك." 
    },
    output: { en: "Ongoing partnership", ar: "شراكة نمو مستدامة" }
  }
];

export const TECH_ITEMS: TechItem[] = [
  {
    number: "01",
    name: "cPanel",
    role: { en: "Hosting control panel", ar: "لوحة التحكم الرائدة عالمياً" },
    description: { 
      en: "Industry standard control panel for reliable domain, email, and database orchestration.", 
      ar: "لوحة التحكم الأكثر موثوقية لإدارة المواقع والبريد الإلكتروني وقواعد البيانات بكل سهولة وأمان." 
    }
  },
  {
    number: "02",
    name: "CloudLinux",
    role: { en: "Isolated, secure hosting OS", ar: "نظام التشغيل المعزول والآمن" },
    description: { 
      en: "CageFS virtualization ensures no single user can impact another account's resources or security.", 
      ar: "عزل كامل لحسابات الاستضافة عبر تقنية CageFS لضمان عدم تأثر أي موقع بمواقع أخرى على نفس الخادم." 
    }
  },
  {
    number: "03",
    name: "Red Hat",
    role: { en: "Enterprise Linux servers", ar: "خوادم لينكس المؤسسية" },
    description: { 
      en: "Mission-critical enterprise distribution delivering rock-solid stability and kernel-level defense.", 
      ar: "توزيعة الخوادم العملاقة المعتمدة في كبرى المؤسسات لضمان الاستقرار الفائق تحت أقصى ضغط." 
    }
  },
  {
    number: "04",
    name: "AWS",
    role: { en: "Cloud infrastructure", ar: "البنية السحابية العالمية من أمازون" },
    description: { 
      en: "Global content distribution, object storage arrays, and elastic compute autoscaling.", 
      ar: "شبكة توزيع محتوى عالمية، ومساحات تخزين سحابية، وقدرات توسع تلقائي لتلبية ذروة الزيارات." 
    }
  },
  {
    number: "05",
    name: "Microsoft",
    role: { en: "Microsoft platforms", ar: "حلول مايكروسوفت المؤسسية" },
    description: { 
      en: "Exchange email routing, Azure cloud services, and enterprise security identity synchronization.", 
      ar: "أنظمة بريد Exchange، وخدمات سحابة Azure، والتكامل الأمني مع بيئات العمل الاحترافية." 
    }
  },
  {
    number: "06",
    name: "WHMCS",
    role: { en: "Billing & client automation", ar: "أتمتة الفواتير وبوابات العملاء" },
    description: { 
      en: "Seamless automated client provisioning, recurring invoice generation, and support desk.", 
      ar: "تفعيل فوري للاشتراكات والخدمات، مع إدارة تلقائية للفواتير ونظام تذاكر دعم فني متقدم." 
    }
  }
];

export const DIGITAL_INFRASTRUCTURE_LAYERS = [
  {
    number: "01",
    name: "Applications",
    nameAr: "التطبيقات والواجهات",
    desc: "Web, mobile and internal tools",
    descAr: "واجهات الويب وتطبيقات الجوال والأنظمة الإدارية الداخلية",
    detail: "Next.js, React Native, responsive web apps, and native frontends tailored for instant response."
  },
  {
    number: "02",
    name: "APIs",
    nameAr: "واجهات الربط البرمجي APIs",
    desc: "Integrations between every system",
    descAr: "قنوات الربط اللحظي بين الأنظمة والخدمات الخارجية",
    detail: "REST and GraphQL endpoints linking your CRM, ERP, mobile apps, and third-party partners."
  },
  {
    number: "03",
    name: "Payments",
    nameAr: "بوابات الدفع والفوترة",
    desc: "Gateways, checkout and billing",
    descAr: "بوابات الدفع الإلكتروني والاشتراكات الدورية",
    detail: "Secure checkout pipelines supporting credit cards, digital wallets (Apple Pay, Mada), and recurring billing."
  },
  {
    number: "04",
    name: "Databases",
    nameAr: "قواعد البيانات وإدارة العمليات",
    desc: "Customers, orders and operations",
    descAr: "بيانات العملاء، وسجلات الطلبات، والعمليات التجارية",
    detail: "Relational and document storage with read-replicas, indexing, and automated point-in-time recovery."
  },
  {
    number: "05",
    name: "Analytics",
    nameAr: "التحليلات ومؤشرات الأداء",
    desc: "Search, campaigns and reporting",
    descAr: "تتبع الحملات، وتحليل سلوك الزوار، وتقارير العائد",
    detail: "Server-side event streaming, conversion funnels, and real-time business health telemetry."
  },
  {
    number: "06",
    name: "Security",
    nameAr: "الأمان السيبراني والعزل",
    desc: "SSL, isolation and backups",
    descAr: "تشفير SSL، وعزل الحسابات، والنسخ الاحتياطي المستمر",
    detail: "CloudLinux CageFS isolation, automated SSL renewal, DDoS mitigation, and daily off-site data archives."
  },
  {
    number: "07",
    name: "Cloud",
    nameAr: "السحابة والخوادم المدارة",
    desc: "Hosting, servers and AWS",
    descAr: "الاستضافة فائقة السرعة وخوادم AWS و LiteSpeed",
    detail: "High-frequency NVMe storage nodes, LiteSpeed Web Server, and scalable compute fabric."
  }
];

export const HOSTING_PLANS: HostingPlan[] = [
  {
    id: "starter",
    name: { en: "Starter", ar: "البداية (Starter)" },
    tagline: { 
      en: "One website, online today.", 
      ar: "موقع واحد احترافي، متاح على الإنترنت اليوم." 
    },
    priceEGP: 2099,
    priceUSD: 39.99,
    specs: {
      en: [
        "1 Website hosted",
        "15 GB NVMe High-Speed Storage",
        "Unmetered Bandwidth*",
        "Free SSL Certificates for all domains",
        "5 Business Email Accounts",
        "Daily automated backups",
        "LiteSpeed Web Server acceleration",
        "24/7 Human support"
      ],
      ar: [
        "استضافة موقع واحد",
        "15 جيجابايت مساحة تخزين NVMe فائقة السرعة",
        "حركة مرور غير محدودة (Bandwidth)*",
        "شهادة أمان SSL مجانية ومفعلة تلقائياً",
        "5 حسابات بريد إلكتروني باسم نطاقك",
        "نسخ احتياطي يومي تلقائي",
        "تسريع صفحات الموقع عبر خوادم LiteSpeed",
        "دعم فني بشري متواصل 24/7"
      ]
    }
  },
  {
    id: "business",
    popular: true,
    name: { en: "Business", ar: "الأعمال (Business)" },
    tagline: { 
      en: "For growing businesses with several sites.", 
      ar: "الخيار الأنسب للشركات النامية التي تدير عدة مواقع ومتاجر." 
    },
    priceEGP: 3399,
    priceUSD: 64.99,
    specs: {
      en: [
        "Up to 5 Websites hosted",
        "40 GB NVMe Enterprise Storage",
        "Unmetered Bandwidth*",
        "Free SSL Certificates included",
        "Unlimited Business Email Accounts",
        "Daily automated off-site backups",
        "LiteSpeed Cache with 3x PHP memory",
        "cPanel & CloudLinux isolated resources",
        "Priority 24/7 technical support"
      ],
      ar: [
        "استضافة حتى 5 مواقع مستقلة",
        "40 جيجابايت مساحة تخزين NVMe مؤسسية",
        "حركة مرور غير محدودة (Bandwidth)*",
        "شهادات أمان SSL مجانية لجميع النطاقات",
        "حسابات بريد إلكتروني غير محدودة",
        "نسخ احتياطي يومي في خوادم خارجية آمنة",
        "تسريع LiteSpeed ومضاعفة ذاكرة PHP ثلاث مرات",
        "لوحة cPanel وموارد معزولة بتقنية CloudLinux",
        "دعم فني ذو أولوية على مدار الساعة"
      ]
    }
  },
  {
    id: "pro",
    name: { en: "Pro", ar: "المحترف (Pro)" },
    tagline: { 
      en: "Room to scale, with a free domain.", 
      ar: "مساحة غير محدودة للنمو، مع نطاق .com مجاني." 
    },
    priceEGP: 5199,
    priceUSD: 99.99,
    specs: {
      en: [
        "Unlimited Websites hosted",
        "100 GB NVMe Ultra Storage",
        "Free .com Domain (1st year)",
        "Unmetered Bandwidth*",
        "Free Wildcard SSL Certificates",
        "Unlimited Business Mailboxes",
        "Real-time malware scanner & firewall",
        "Dedicated VIP Account Engineer",
        "Zero-downtime migration included"
      ],
      ar: [
        "استضافة مواقع غير محدودة",
        "100 جيجابايت مساحة NVMe فائقة السرعة",
        "نطاق .com مجاني للسنة الأولى",
        "حركة مرور غير محدودة (Bandwidth)*",
        "شهادات أمان متقدمة Wildcard SSL مجانية",
        "صناديق بريد رسمي غير محدودة",
        "فحص أمني فوري ضد البرمجيات الخبيثة وجدار ناري",
        "مهندس خوادم مخصص ومباشر لحسابك",
        "نقل مجاني بالكامل لمواقعك السابقة بدون توقف"
      ]
    }
  }
];

export const WHY_POINTS = [
  {
    number: "01",
    title: { en: "Technology-first", ar: "الأولوية للهندسة والتكنولوجيا" },
    text: {
      en: "Engineers and designers in one team. Decisions are made on how things work, not just how they look.",
      ar: "مهندسون ومصممون في فريق واحد متناغم. نتخذ قراراتنا بناءً على الكفاءة والصلابة التقنية، وليس فقط الشكل الظاهري."
    }
  },
  {
    number: "02",
    title: { en: "Performance", ar: "السرعة والأداء الفائق" },
    text: {
      en: "NVMe storage, LiteSpeed and lean front-ends. Speed is designed in, not patched on.",
      ar: "أقراص NVMe فائقة السرعة، خوادم LiteSpeed، وواجهات أمامية رشيقة. السرعة مبنية في صلب المنظومة وليست حلاً مؤقتاً."
    }
  },
  {
    number: "03",
    title: { en: "Security", ar: "الأمان وحماية البيانات" },
    text: {
      en: "Free SSL, CloudLinux account isolation and daily backups as standard.",
      ar: "شهادات SSL مجانية، وعزل كامل للحسابات بتقنية CloudLinux، ونسخ احتياطي يومي كمعيار أساسي بدون تكاليف خفية."
    }
  },
  {
    number: "04",
    title: { en: "Scalability", ar: "القابلية للتوسع غير المحدود" },
    text: {
      en: "From shared hosting to dedicated servers and AWS, your infrastructure grows with you.",
      ar: "من الاستضافة المدارة البسيطة إلى الخوادم السحابية المخصصة وبيئات AWS، بنيتك التحتية تتوسع بسلاسة مع نمو أعمالك."
    }
  },
  {
    number: "05",
    title: { en: "Human support", ar: "دعم فني بشري حقيقي" },
    text: {
      en: "Real people, 24/7, who know your project. Not a ticket queue.",
      ar: "فريق من المهندسين الحقيقيين على مدار 24/7 يفهمون تفاصيل مشروعك ويتجاوبون فوراً، بعيداً عن الردود الآلية وقوائم الانتظار."
    }
  },
  {
    number: "06",
    title: { en: "Long-term partnership", ar: "شراكة استراتيجية طويلة الأمد" },
    text: {
      en: "Eleven years of building with clients, not just for them.",
      ar: "أكثر من 11 عاماً من الخبرة في البناء والتطوير مع شركائنا جنباً إلى جنب، لنكون الذراع التقني لنجاحهم المستمر."
    }
  }
];

export const STATS_LIST = [
  { value: "11", label: { en: "Years building digital products", ar: "عاماً في بناء المنتجات والأنظمة الرقمية" } },
  { value: "41", label: { en: "Client brands we've built for", ar: "علامة تجارية وشركة قمنا بالبناء لها" } },
  { value: "15", label: { en: "Disciplines under one roof", ar: "تخصصاً تقنياً ورقمياً تحت سقف واحد" } },
  { value: "24/7", label: { en: "Support, every day", ar: "دعم فني متواصل يومياً على مدار الساعة" } }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "hossam",
    name: "Hossam Mansour",
    role: { en: "CEO & Head Coach", ar: "الرئيس التنفيذي والمدرب الرياضي" },
    company: "Team HM",
    quote: {
      en: "I worked with Stackway to design a website for my company, and they were excellent in understanding our needs and executing them professionally. I highly recommend them to all companies looking for quality and efficiency in web design.",
      ar: "تعاملت مع ستاك واي لتصميم وتطوير موقع شركتي، وكانوا رائعين في استيعاب كافة متطلباتنا وتنفيذها باحترافية استثنائية وسرعة فائقة. أنصح بهم بشدة لكل من يبحث عن الجودة الحقيقية والالتزام."
    },
    projectSlug: "team-hm",
    image: "/images/work/team-hm.webp",
    showcaseImage: "/images/work/showcase/team-hm.webp"
  },
  {
    id: "kunuz",
    name: "Eng. Ahmed Kunuz",
    role: { en: "Managing Director", ar: "العضو المنتدب ورئيس مجلس الإدارة" },
    company: "Kunuz Real Estate",
    quote: {
      en: "Stackway engineered a standout digital platform for Kunuz Real Estate. The interactive 3D commercial showcase and dynamic instalment calculator significantly increased our qualified investor inquiries.",
      ar: "طوّرت ستاك واي منصة رقمية استثنائية لشركة كنوز العقارية. معرض المشروعات ثلاثي الأبعاد وحاسبة الأقساط الاستثمارية الذكية ضاعفت معدل استفسارات المستثمرين والعملاء التجاريين بشكل ملحوظ."
    },
    projectSlug: "kunuz",
    image: "/images/work/kunuz.webp",
    showcaseImage: "/images/work/showcase/kunuz.webp"
  },
  {
    id: "tower-top",
    name: "Eng. Mahmoud Tower",
    role: { en: "Founder & Operations Director", ar: "المؤسس ومدير العمليات" },
    company: "Tower Top EG",
    quote: {
      en: "The real-world on-site portfolio and interactive finishing cost estimator built by Stackway elevated our brand credibility and helped us close dozens of high-value residential and commercial fitout contracts.",
      ar: "معرض الأعمال الحي 'من قلب الموقع' وحاسبة تكاليف التشطيب الفورية التي صممتها ستاك واي عززت ثقة العملاء وساعدتنا في إغلاق عشرات التعاقدات السكنية والتجارية الكبرى."
    },
    projectSlug: "tower-top",
    image: "/images/work/tower-top.svg",
    showcaseImage: "/images/work/showcase/tower-top.webp"
  },
  {
    id: "ssdds",
    name: "Prof. Dr. Abdullah Al-Eisa",
    role: { en: "Board Member & Medical Director", ar: "عضو مجلس الإدارة والمدير الطبي" },
    company: "SSDDS Saudi Society",
    quote: {
      en: "Finding a technical team that treats your reputation and digital infrastructure with such meticulous care is rare. Stackway delivered an immaculate medical portal and continues to support us proactively every week.",
      ar: "من النادر إيجاد فريق تقني يتعامل مع سمعتك وبنيتك الرقمية بهذا القدر من الدقة والاهتمام. قدمت ستاك واي بوابة طبية استثنائية وتواصل دعمنا بشكل استباقي ومستمر."
    },
    projectSlug: "ssdds",
    image: "/images/work/ssdds.svg",
    showcaseImage: "/images/work/showcase/ssdds.svg"
  },
  {
    id: "elgendy",
    name: "Mr. Mohamed El Ghandy",
    role: { en: "Educational Director & Founder", ar: "المؤسس والمشرف العام" },
    company: "El Ghandy Center",
    quote: {
      en: "The LMS examination engine and automated student tracking transformed our center operations. Thousands of students take timed exams simultaneously without a single second of downtime.",
      ar: "نظام الامتحانات الإلكترونية وإدارة الحضور بالباركود وكروت الشحن نقلت إدارة السنتر إلى مرحلة متطورة كلياً. آلاف الطلاب يؤدون الامتحانات في وقت واحد بكل سلاسة واستقرار تام."
    },
    projectSlug: "elgendy",
    image: "/images/work/elgendy.webp",
    showcaseImage: "/images/work/showcase/elgendy.webp"
  }
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    slug: "landing-page-copywriting-structure",
    category: { en: "Copywriting", ar: "كتابة المحتوى" },
    readTime: "6 min read",
    date: "October 2026",
    title: {
      en: "Landing Page Copywriting: The Structure That Turns Visitors into Customers",
      ar: "كتابة نصوص صفحات الهبوط: الهيكل الدقيق الذي يحول الزوار إلى عملاء فعليين"
    },
    excerpt: {
      en: "A landing page has one job: get a visitor who came from an ad to do one thing. This is the structure we write with, section by section.",
      ar: "صفحة الهبوط لها وظيفة واحدة محددة: دفع الزائر القادم من الإعلان لاتخاذ إجراء واحد واضح. هذا هو الهيكل الذي نكتب به قسماً بقسم."
    },
    content: {
      en: `A landing page has one job: get a visitor who came from an ad or link to take a single, specific action. It is not an about page, it is not a brochure, and it should never give the reader five different places to click.

### 1. The Above-the-Fold Equation
Within 3 seconds, a visitor must understand:
- **What you offer** (clearly, without metaphors)
- **Who it is for**
- **The specific outcome or transformation they get**
- **The immediate next step** (the primary Call-To-Action)

### 2. Social Proof Before Explanations
Place trusted logos or quantifiable metrics directly beneath the main hero button. People believe what other people have already validated.

### 3. The Problem Agitation
Frame the exact frustration your buyer is feeling right now. Show that you understand their bottleneck before presenting your solution.

### 4. The Mechanism & The Transformation
Explain *how* your product or service delivers the outcome. When people understand the mechanism, they believe the promise.

### 5. Risk Reversal & The Final CTA
Eliminate friction: highlight guarantees, transparent terms, and straightforward onboarding.`,
      ar: `صفحة الهبوط لها وظيفة واحدة محددة: دفع الزائر القادم من الإعلان أو الرابط لاتخاذ إجراء واحد محدد. ليست صفحة تعريفية عامة وليست بروشوراً رقمياً، ولا يجب أبداً أن تشتت القارئ بعشرات الروابط.

### 1. معادلة ما قبل التمرير (Above the Fold)
في أول 3 ثوانٍ، يجب أن يفهم الزائر:
- **ما الذي تقدمه بدقة** (بلفظ مباشر بدون مبالغات مبهمة)
- **لمن هذه الخدمة أو المنتج تحديداً**
- **النتيجة الملموسة التي سيحصل عليها**
- **الخطوة التالية المباشرة** (زر الإجراء الرئيسي CTA)

### 2. إثبات الثقة قبل الإطالة في الشرح
ضع شعارات الشركات أو الأرقام الملموسة مباشرة أسفل الزر الرئيسي. العميل يثق بما جربه الآخرون قبله.

### 3. توصيف التحدي والألم الحالي
صف المعاناة التي يواجهها عميلك الآن بدقة، حتى يشعر أنك تفهم مشكلته تماماً قبل أن تقدم الحل.

### 4. آلية الحل والتحول
اشرح كيف تحقق النتيجة المرجوة خطوة بخطوة. عندما يفهم العميل آلية عمل المنظومة، يطمئن لعرضك.

### 5. إزالة المخاطر وزر الإجراء النهائي
أزل أي تردد: أبرز الضمانات، ووضوح الأسعار، وسهولة بدء التجربة.`
    }
  },
  {
    slug: "marketing-copy-rules-formulas",
    category: { en: "Copywriting", ar: "كتابة المحتوى" },
    readTime: "8 min read",
    date: "September 2026",
    title: {
      en: "How to Write Marketing Copy That Sells: Seven Rules and Two Proven Formulas",
      ar: "كيف تكتب نصوصاً تسويقية تبيع بالفعل: 7 قواعد ومعادلتان مجربتان"
    },
    excerpt: {
      en: "Marketing copy isn't pretty words; it's words that make the reader act: call, buy, sign up. These are the rules we write by, with practical examples.",
      ar: "النص التسويقي ليس كلمات منمقة؛ بل هو لغة تدفع القارئ للتصرف: الاتصال، الشراء، أو التسجيل. هذه هي القواعد التي نكتب بها مع أمثلة عملية."
    },
    content: {
      en: `Good marketing copy does not sound like a committee wrote it. It sounds like one smart, experienced professional speaking directly to another.

### The Seven Fundamental Rules:
1. **Specificity beats enthusiasm.** "Saves 4 hours every Tuesday" beats "Incredible time-saving solution".
2. **Features inform, but benefits sell.** Don't just list NVMe storage; explain that pages load in 400ms so shoppers don't abandon their carts.
3. **One idea per sentence.** Short, punchy sentences maintain momentum.
4. **Delete adverbs.** Strong verbs create confidence.
5. **Write the way you speak in a conference room.** Skip academic jargon.
6. **Anticipate the objection before they ask.** Address pricing, migration effort, and reliability immediately.
7. **Always test the offer before the headline.** A mediocre headline on an irresistible offer will always beat a clever headline on an unwanted product.

### The Two Proven Formulas:
- **PAS (Problem - Agitation - Solution):** Identify the pain, highlight the cost of inaction, present your system as the definitive resolution.
- **BAB (Before - After - Bridge):** Describe their chaotic current state, paint the picture of the organized future, position your product as the bridge.`,
      ar: `النص التسويقي الممتاز لا يبدو وكأنه صادر عن لجنة صياغة معقدة، بل كأنه حديث من شخص خبير وموثوق يوجه نصيحة مباشرة لشخص آخر.

### القواعد السبع الذهبية:
1. **الدقة المحددة تتفوق على الكلمات الرنانة.** "يوفر 4 ساعات كل ثلاثاء" أقوى بمرات من "حل يوفر الوقت بشكل مذهل".
2. **المواصفات تشرح، لكن الفوائد هي ما يبيع.** لا تذكر فقط أقراص NVMe، بل وضح أن موقعك سيفتح في 400 جزء من الثانية حتى لا يغادر الزبون.
3. **فكرة واحدة في كل جملة.** الجمل القصيرة تحافظ على تركيز وحماس القارئ.
4. **احذف الحشو والمبالغات.** الأفعال القوية والنتائج الملموسة تصنع الهيبة والمصداقية.
5. **تحدث بلغة رجال الأعمال العملية.** ابتعد عن المصطلحات الأكاديمية والتعقيد اللغوي.
6. **توقع اعتراض العميل قبل أن يطرحه.** أجب عن الأسئلة المتعلقة بالتكلفة، ووقت التسليم، ومجهود النقل.
7. **اختبر قوة العرض أولاً.** أفضل صياغة في العالم لن تنقذ عرضاً تجارياً ضعيفاً، لكن عرضاً استثنائياً سينجح بأبسط الكلمات.

### المعادلتان المجربتان:
- **معادلة PAS (المشكلة - تفاقم الأثر - الحل المباشر):** توصيف المشكلة، إبراز خسائر تركها معلقة، ثم تقديم خدمتك كالحل الحاسم.
- **معادلة BAB (قبل - بعد - الجسر الرابط):** توضيح الوضع الصعب الحالي، رسم صورة المستقبل المنظم، وتقديم منصتك كالجسر الآمن للوصول إليه.`
    }
  },
  {
    slug: "choose-domain-name-rules",
    category: { en: "Domains", ar: "النطاقات والـ DNS" },
    readTime: "5 min read",
    date: "August 2026",
    title: {
      en: "How to Choose a Domain Name for Your Business: Eight Rules Before You Register",
      ar: "كيف تختار اسم النطاق المناسب لشركتك: 8 قواعد حاسمة قبل الحجز"
    },
    excerpt: {
      en: "Your domain goes on every card, ad and email for years, and changing it later is expensive. These eight rules help you choose well the first time.",
      ar: "نطاقك الرقمي سيرافق هويتك وإعلاناتك وبريدك لسنوات طويلة، وتغييره لاحقاً باهظ الثمن. هذه القواعد ترشدك للاختيار الصحيح من أول مرة."
    },
    content: {
      en: `Your domain is the front door to your business. It is spoken aloud on phone calls, printed on business cards, and embedded in every link your customers share.

### 1. The Radio Test
If you say your domain out loud in a noisy room, can the other person spell it correctly without asking "is that with a C or a K"?

### 2. Prioritize .com for Commercial Credibility
While new extensions (.tech, .agency) have their place, the .com extension still holds the highest cognitive trust among enterprise buyers.

### 3. Never Use Hyphens or Numbers
Hyphens feel spammy and customers inevitably forget them, sending your traffic to your competitor's site.

### 4. Keep It Under 14 Characters
Shorter names are easier to type on mobile keyboards, fit better in headers, and remember instantly.

### 5. Check Trademark Databases Early
Ensure you are not infringing on an existing registered trademark in your target jurisdictions.

### 6. Protect Secondary TLDs & Common Typos
If your brand is valuable, register the common country codes (.sa, .ae, .eg) to prevent brand hijacking.`,
      ar: `اسم النطاق هو العنوان الرقمي الأبدي لشركتك. يُنطق في المحادثات الهاتفية، ويُطبع في المواد التسويقية، ويظهر في كل بريد ترسله لعملائك.

### 1. اختبار الراديو الصوتي
إذا نطقت اسم نطاقك في محادثة هاتفية، هل يستطيع الطرف الآخر كتابته فوراً بدون أن يسألك عن طريقة التهجئة؟

### 2. الأولوية دائماً لامتداد .com للأنشطة التجارية
على الرغم من انتشار الامتدادات الجديدة، يظل امتداد .com هو الأكثر موثوقية وهيبة في أذهان العملاء والشركات.

### 3. تجنب الفواصل والشرطات (-) والأرقام نهائياً
الشرطات تعطي انطباعاً غير احترافي وغالباً ما ينساها العميل فيذهب إلى موقع منافسك بالخطأ.

### 4. لا تجعله يتجاوز 14 حرفاً
الأسماء القصيرة أسهل في الكتابة عبر لوحات مفاتيح الهواتف وأسرع في الحفظ والتذكر.

### 5. تحقق من العلامات التجارية المسجلة
تأكد من عدم تعارض الاسم مع علامة تجارية محمية في دولتك أو الأسواق التي تستهدفها قانونياً.

### 6. احجز الامتدادات الإقليمية لحماية هويتك
إذا كان لشركتك وزن تجاري، احرص على حجز النطاقات المحلية مثل (.com.eg أو .sa أو .ae) لمنع انتحال هويتك.`
    }
  }
];

export const SOLUTIONS_LIST: SolutionItem[] = [
  {
    id: "ecommerce",
    slug: "ecommerce",
    number: "01",
    title: { en: "E-Commerce & High-Volume Retail", ar: "التجارة الإلكترونية ومبيعات التجزئة الكبرى" },
    subtitle: {
      en: "Headless shopping experiences engineered for high transactions and zero downtime during flash sales.",
      ar: "متاجر إلكترونية متطورة مصممة لتحمل آلاف الطلبات المتزامنة بدون أي بطء أثناء مواسم التخفيضات الكبرى."
    },
    challenges: {
      en: ["Checkout cart abandonment on slow mobile networks", "Inventory sync lag between physical warehouses and web", "Payment gateway drops during promotional spikes"],
      ar: ["مغادرة السلة بسبب بطء صفحات الدفع على الجوال", "تأخر مزامنة المخزون بين الفروع والمتجر الإلكتروني", "تعطل بوابات الدفع أثناء فترات الذروة الإعلانية"]
    },
    solutions: {
      en: ["Sub-second Next.js headless storefronts", "Real-time Redis inventory state synchronization", "Multi-gateway fallback routing (Visa, Apple Pay, Mada, Fawry)"],
      ar: ["واجهات أمامية فائقة السرعة بنظام Next.js", "تزامن لحظي فوري لحالة المخزون بتقنية Redis", "مسارات دفع بديلة تضمن نجاح العمليات دائماً"]
    },
    techStack: ["Next.js", "Tailwind CSS", "LiteSpeed", "Redis", "Stripe / Regional Gateways"]
  },
  {
    id: "saas",
    slug: "saas-platforms",
    number: "02",
    title: { en: "SaaS Platforms & Web Applications", ar: "المنصات السحابية وتطبيقات SaaS" },
    subtitle: {
      en: "Scalable multi-tenant software foundations with automated billing, RBAC, and client telemetry.",
      ar: "بنية برمجية متعددة المشتركين تدعم الاشتراكات التلقائية، وإدارة الصلاحيات الدقيقة، والتحليلات اللحظية."
    },
    challenges: {
      en: ["Architecting clean tenant data isolation", "Handling complex tiered subscription billing cycles", "Latency spikes across global API requests"],
      ar: ["عزل بيانات العملاء والشركات بأمان تام", "إدارة فواتير الاشتراكات المتدرجة والتجديد الآلي", "بطء استجابة واجهات APIs على النطاق الجغرافي الواسع"]
    },
    solutions: {
      en: ["PostgreSQL schema-per-tenant isolation models", "Stripe Billing & WHMCS automated recurring engines", "Edge-cached API gateway with cloud telemetry"],
      ar: ["هندسة قواعد بيانات معزولة ومحمية لكل مشترك", "محركات فوترة دورية مؤتمتة بدون أخطاء حسابية", "توزيع واستجابة لحظية للطلبات البرمجية عبر خوادم Edge"]
    },
    techStack: ["React / Next.js", "Node.js / Laravel", "PostgreSQL", "CloudLinux", "AWS"]
  },
  {
    id: "services",
    slug: "professional-services",
    number: "03",
    title: { en: "Professional Services & Advisory", ar: "الشركات الاستشارية والخدمات المهنية" },
    subtitle: {
      en: "Authority-building digital portals with secure client file vaults and automated scheduling.",
      ar: "بوابات رقمية تعكس هيبة ومكانة الشركات الكبرى، مع خزائن إلكترونية للوثائق وحجز مواعيد مؤتمت."
    },
    challenges: {
      en: ["Communicating complex advisory value clearly", "Unsecured email attachments containing confidential documents", "Manual back-and-forth consultation scheduling"],
      ar: ["صعوبة إيصال قيمة الخدمات الاستشارية المعقدة بوضوح", "مخاطر إرسال الوثائق السرية عبر البريد الإلكتروني العادي", "إهدار الوقت في تنسيق مواعيد المقابلات يدوياً"]
    },
    solutions: {
      en: ["Editorial-grade typography and messaging architecture", "End-to-end encrypted client submission vaults", "Direct calendar synchronization with automated reminders"],
      ar: ["صياغة نصوص وهويات بصرية تعكس الرصانة والخبرة", "خزائن رفع ملفات مشفرة ومحمية لحفظ المستندات الحساسة", "ربط تقويم المقابلات تلقائياً مع تنبيهات الرسائل القصيرة"]
    },
    techStack: ["Next.js", "Tailwind CSS", "Encrypted S3 Vaults", "Calendar APIs", "DMARC Mail"]
  },
  {
    id: "logistics",
    slug: "logistics-supply-chain",
    number: "04",
    title: { en: "Logistics & Supply Chain", ar: "اللوجستيات وسلاسل الإمداد والتوزيع" },
    subtitle: {
      en: "Real-time dispatch portals, driver companion workflows, and live milestone tracking.",
      ar: "منصات إدارة الشحن والتوزيع الميداني، ومتابعة مسارات السائقين، وتتبع الشحنات لحظياً."
    },
    challenges: {
      en: ["Customer anxiety from vague tracking statuses", "Driver dispatch miscommunication and routing delays", "Manual paperwork and lost proof-of-delivery receipts"],
      ar: ["قلق العملاء بسبب عدم وضوح حالة الشحنة وموقعها", "تأخر السائقين وسوء توزيع خطوط السير اليومية", "الاعتماد على الفواتير الورقية وضياع إثباتات التسليم"]
    },
    solutions: {
      en: ["Live milestone tracking maps with SMS notifications", "Automated smart route dispatching", "Digital signatures and photo proof-of-delivery uploads"],
      ar: ["خرائط تتبع لحظية وإشعارات نصية بوصول الشحنة", "توزيع ذكي للمسارات لتوفير الوقت والوقود", "إثبات تسليم رقمي بالتوقيع والصورة من جوال المندوب"]
    },
    techStack: ["Next.js", "Google Maps API", "WebSockets", "Cloud Storage", "SMS Gateways"]
  }
];

export const COMPANY_VALUES = [
  {
    num: "01",
    title: { en: "Engineers First", ar: "عقلية هندسية راسخة" },
    desc: { 
      en: "We believe visual design without rigorous technical architecture is just decoration. We build systems made to withstand real production loads.", 
      ar: "نؤمن بأن التصميم الجميل بدون بنية برمجية متماسكة مجرد ديكور. نحن نصمم ونبني أنظمة مصممة لتتحمل أقصى ضغوط العمل الفعلي." 
    }
  },
  {
    num: "02",
    title: { en: "Zero Fluff Copy", ar: "وضوح وشفافية بدون حشو" },
    desc: { 
      en: "No corporate jargon. We speak clearly about timelines, technical bottlenecks, prices, and honest expectations.", 
      ar: "نتحدث بوضوح تام عن الجداول الزمنية، والتحديات التقنية، والأسعار، بدون وعود وهمية أو مصطلحات مضللة." 
    }
  },
  {
    num: "03",
    title: { en: "Speed as a Feature", ar: "السرعة معيار أساسي" },
    desc: { 
      en: "Page latency kills revenue. We treat milliseconds with religious discipline across both front-end code and server virtualization.", 
      ar: "كل جزء من الثانية له ثمنه المباشر في المبيعات وتجربة الزائر. نتعامل مع تحسين السرعة كأولوية قصوى في كل كود وخادم نطلقه." 
    }
  },
  {
    num: "04",
    title: { en: "Accountable Ownership", ar: "مسؤولية وشراكة حقيقية" },
    desc: { 
      en: "One accountable team handles both your software code and the cloud servers running it. No passing the buck between developers and hosts.", 
      ar: "فريق واحد مسؤول عن كتابة كود برمجياتك وعن إدارة الخوادم السحابية التي تشغلها، فلا مجال لإلقاء اللوم بين المطور والمستضيف." 
    }
  }
];
