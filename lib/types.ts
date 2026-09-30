export interface NavigationItem { label: string; href: string }
export interface Service { title: string; description: string; points?: string[] }
export interface ServiceCategory { id: string; title: string; summary: string; services: Service[] }
export interface FAQ { question: string; answer: string }
export interface PortfolioProject { name: string; category: string; technology: string[]; description: string; image?: string; url?: string }
export interface Testimonial { quote: string; name: string; designation: string; company: string }
export interface ContactFormData {
  name: string; company: string; email: string; phone: string; service: string;
  budget: string; details: string; contactMethod: string; consent: boolean;
}
