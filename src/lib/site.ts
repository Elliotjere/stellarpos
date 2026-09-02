export const SITE = {
  domain: "https://possystemtanzania.com",
  company: "Stellar Technologies Limited",
  product: "StellarPOS",
  phoneDisplay: "+255 723 451 650",
  phoneRaw: "255723451650",
  email: "sales@possystemtanzania.com",
  address: {
    street: "Kisiwani Street, Ubungo",
    city: "Dar es Salaam",
    country: "Tanzania",
  },
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(
  "Hello Stellar Technologies, I would like to know more about StellarPOS for my business in Tanzania.",
)}`;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const FAQS = [
  {
    q: "What is the best POS system in Tanzania?",
    a: "StellarPOS is one of the most widely used POS systems in Tanzania because it combines fast billing, real-time inventory management, multi-branch control and detailed profit reporting in one affordable package. It is built and supported locally by Stellar Technologies Limited in Dar es Salaam, so you get on-site installation, training and support in Swahili or English.",
  },
  {
    q: "How much does a POS system cost in Tanzania?",
    a: "StellarPOS pricing starts at TZS 360,000 per year for the Starter plan, TZS 600,000 per year for the Business plan and TZS 960,000 per year for the Enterprise plan. Every plan includes setup assistance, updates and support — there are no hidden monthly fees.",
  },
  {
    q: "Which businesses can use StellarPOS?",
    a: "StellarPOS is used by retail shops, supermarkets, pharmacies, restaurants, cafes, electronics and hardware stores, fashion boutiques, beauty shops and wholesale distributors across Tanzania. The system is configured to match the workflow of your specific industry.",
  },
  {
    q: "Does StellarPOS support inventory management?",
    a: "Yes. StellarPOS includes full inventory management software for Tanzanian businesses: live stock tracking, low stock alerts, purchase orders, supplier records, stock transfers between branches and stock-taking with variance reports.",
  },
  {
    q: "Can I use StellarPOS for multiple branches?",
    a: "Yes. You can manage unlimited branches from one account with centralised reporting, per-branch stock levels, inter-branch stock transfers and consolidated profit dashboards for the whole business.",
  },
  {
    q: "Can StellarPOS send Bulk SMS?",
    a: "Yes. StellarPOS integrates with Tanzanian bulk SMS platforms so you can run promotional campaigns, send receipts and payment reminders, and notify loyalty customers automatically.",
  },
  {
    q: "Does StellarPOS work offline?",
    a: "Yes. StellarPOS keeps selling during internet or power interruptions. Sales are recorded locally and synchronised automatically to the cloud once the connection returns.",
  },
  {
    q: "Is training provided?",
    a: "Yes. Every installation includes hands-on training for owners, managers and cashiers, plus printed guides and ongoing phone and WhatsApp support.",
  },
  {
    q: "Do you offer installation in Tanzania?",
    a: "Yes. Our team installs and configures StellarPOS on site in Dar es Salaam, and countrywide including Arusha, Mwanza, Dodoma, Mbeya, Zanzibar and Morogoro. We also supply barcode scanners, thermal receipt printers, cash drawers and label printers.",
  },
  {
    q: "How do I get started?",
    a: "Message us on WhatsApp at +255 723 451 650 or fill in the contact form on this page. We will schedule a free demo, recommend the right plan for your business and handle installation and training.",
  },
];
