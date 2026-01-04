export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  isNew?: boolean;
  bullets?: string[];
}

export interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  gradient: string;
  siteUrl: string;
}

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

export interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface AuthFormData {
  email: string;
  password: string;
  name: string;
}
