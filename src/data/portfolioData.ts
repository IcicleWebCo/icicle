export interface ProjectTestimonial {
  clientName: string;
  clientRole: string;
  text: string;
  rating: number;
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  clientName: string;
  industry: string;
  projectDate: string;
  challenge: string;
  solution: string;
  heroImage: string;
  galleryImages: Array<{ url: string; caption: string; alt: string }>;
  priceRange: string;
  projectDuration: string;
  techStack: string[];
  liveUrl: string;
  featured: boolean;
  category: 'ecommerce' | 'booking' | 'informational' | 'custom';
  testimonial?: ProjectTestimonial;
  gradient: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'lordsmith-lamps',
    title: 'Lord Smith Lamps',
    subtitle: 'Luxury E-commerce Platform',
    clientName: 'Lord Smith Lamps',
    industry: 'E-commerce / Retail',
    projectDate: '2025',
    challenge: 'Lord Smith Lamps needed a sophisticated e-commerce platform to sell premium lighting products online with secure payment processing, inventory management, and customer account features.',
    solution: 'Built a full-featured e-commerce site with Stripe integration for payments, Supabase for user authentication and data management, newsletter subscriptions, shipping management, and comprehensive analytics. The platform provides a seamless shopping experience with robust admin capabilities.',
    heroImage: '/images/lordsmithhero.png',
    galleryImages: [
      { url: '/images/lordsmithhero.png', caption: 'Homepage Hero Section', alt: 'Lord Smith Lamps homepage' },
      { url: '/images/lordsmithhero.png', caption: 'Product Catalog', alt: 'Product listing page' },
      { url: '/images/lordsmithhero.png', caption: 'Shopping Cart', alt: 'Shopping cart interface' }
    ],
    priceRange: '$750 - $1000',
    projectDuration: '3 weeks',
    techStack: ['React', 'TypeScript', 'Stripe', 'Supabase', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://www.lordsmithlamps.com',
    featured: true,
    category: 'ecommerce',
    gradient: 'from-amber-500/20 to-orange-500/20'
  },
  {
    id: 'eddys-pizza',
    title: "Eddy's Pizza and Subs",
    subtitle: 'Restaurant Information Site',
    clientName: "Eddy's Pizza and Subs",
    industry: 'Food & Beverage',
    projectDate: '2025',
    challenge: "Eddy's Pizza needed a modern, mobile-friendly website to showcase their menu, provide essential business information, and make it easy for customers to find them and place orders.",
    solution: 'Created a sleek single-page application with a dynamic, customizable menu system that the owner can update easily. The site features responsive design optimized for mobile ordering, integrated location map, and clear call-to-action for phone orders.',
    heroImage: '/images/eddyshero.png',
    galleryImages: [
      { url: '/images/eddyshero.png', caption: 'Homepage Design', alt: "Eddy's Pizza homepage" },
      { url: '/images/eddyshero.png', caption: 'Menu System', alt: 'Interactive menu display' },
      { url: '/images/eddyshero.png', caption: 'Mobile View', alt: 'Mobile responsive design' }
    ],
    priceRange: '$200 - $400',
    projectDuration: '1 week',
    techStack: ['React', 'TypeScript', 'Supabase', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://www.eddyspizzaandsubs.com',
    featured: true,
    category: 'informational',
    gradient: 'from-red-500/20 to-orange-500/20'
  },
  {
    id: 'homestead-haul',
    title: 'Homestead Haul',
    subtitle: 'Courier Delivery Platform',
    clientName: 'Homestead Haul',
    industry: 'Logistics / E-commerce',
    projectDate: '2023',
    challenge: 'Homestead Haul required a complete e-commerce platform for their courier delivery service with complex features including scheduling, real-time inventory management, user authentication, and subscription billing.',
    solution: 'Developed a comprehensive platform from concept to launch with Stripe integration for payments and subscriptions, Supabase for backend infrastructure, user account management with role-based permissions, scheduling system for deliveries, and inventory tracking dashboard.',
    heroImage: '/images/HomesteadHaul.png',
    galleryImages: [
      { url: '/images/HomesteadHaul.png', caption: 'Platform Dashboard', alt: 'Homestead Haul dashboard' },
      { url: '/images/HomesteadHaul.png', caption: 'Scheduling Interface', alt: 'Delivery scheduling system' },
      { url: '/images/HomesteadHaul.png', caption: 'Inventory Management', alt: 'Inventory tracking dashboard' }
    ],
    priceRange: '$1000 - $2000',
    projectDuration: '3 weeks',
    techStack: ['React', 'TypeScript', 'Stripe', 'Supabase', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://www.homesteadhaul.com',
    featured: true,
    category: 'custom',
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 'iron-horse-rv',
    title: 'Iron Horse RV Resort',
    subtitle: 'Booking Management Platform',
    clientName: 'Iron Horse RV Resort',
    industry: 'Hospitality / Tourism',
    projectDate: '2023',
    challenge: 'Iron Horse RV Resort needed a customer management platform to handle bookings, user authentication, subscription billing for long-term guests, and integration with Google Maps for site selection.',
    solution: 'Built a complete booking platform from scratch with Stripe for payment processing and subscription management, Supabase for user authentication and booking data, Google Maps API integration for interactive site selection, and comprehensive analytics dashboard for the resort management.',
    heroImage: '/images/IronHorse.png',
    galleryImages: [
      { url: '/images/IronHorse.png', caption: 'Booking Interface', alt: 'RV booking system' },
      { url: '/images/IronHorse.png', caption: 'Site Map Selection', alt: 'Interactive map with Google Maps' },
      { url: '/images/IronHorse.png', caption: 'Guest Dashboard', alt: 'User account management' }
    ],
    priceRange: '$250',
    projectDuration: '1 weeks',
    techStack: ['React', 'TypeScript', 'Stripe', 'Supabase', 'Google Maps API', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://ironhorserv.com',
    featured: false,
    category: 'booking',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'riverstone-detailing',
    title: 'Riverstone Auto Detailing',
    subtitle: 'Appointment Booking System',
    clientName: 'Riverstone Auto Detailing',
    industry: 'Automotive Services',
    projectDate: '2022',
    challenge: 'Riverstone Auto Detailing needed to automate their appointment scheduling and payment process to reduce administrative overhead and provide customers with 24/7 booking capability.',
    solution: 'Implemented a streamlined booking funnel using Squarespace with custom JavaScript for enhanced functionality and Acuity Scheduling integration for automated appointment management. The system handles booking, payment processing, and automated confirmation emails.',
    heroImage: '/images/Riverstone.png',
    galleryImages: [
      { url: '/images/Riverstone.png', caption: 'Booking Funnel', alt: 'Auto detailing booking interface' },
      { url: '/images/Riverstone.png', caption: 'Service Selection', alt: 'Service packages display' },
      { url: '/images/Riverstone.png', caption: 'Payment Flow', alt: 'Checkout process' }
    ],
    priceRange: '$500 - $750',
    projectDuration: '2 weeks',
    techStack: ['Squarespace', 'JavaScript', 'Acuity Scheduling'],
    liveUrl: 'https://riverstonedetailing.com',
    featured: false,
    category: 'booking',
    gradient: 'from-slate-500/20 to-gray-500/20'
  }
];

export const categories = [
  { id: 'all', name: 'All Projects', icon: 'Grid', color: 'from-blue-500 to-cyan-500' },
  { id: 'ecommerce', name: 'E-commerce', icon: 'ShoppingCart', color: 'from-emerald-500 to-teal-500' },
  { id: 'booking', name: 'Booking Systems', icon: 'Calendar', color: 'from-purple-500 to-pink-500' },
  { id: 'informational', name: 'Informational', icon: 'FileText', color: 'from-orange-500 to-red-500' },
  { id: 'custom', name: 'Custom Apps', icon: 'Code', color: 'from-indigo-500 to-blue-500' }
];

export const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under5k', label: 'Under $5K', min: 0, max: 5000 },
  { id: '5k-10k', label: '$5K - $10K', min: 5000, max: 10000 },
  { id: '10k-20k', label: '$10K - $20K', min: 10000, max: 20000 },
  { id: '20k-plus', label: '$20K+', min: 20000, max: Infinity }
];

export const industries = [
  'All Industries',
  'E-commerce / Retail',
  'Food & Beverage',
  'Logistics / E-commerce',
  'Hospitality / Tourism',
  'Automotive Services'
];

export const sortOptions = [
  { id: 'featured', label: 'Featured First' },
  { id: 'newest', label: 'Newest First' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' }
];
