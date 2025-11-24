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
