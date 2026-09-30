import type { NavigationItem } from "@/lib/types";
export const site = {
  name: "WebX",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  title: "WebX — Web Development, Design & Digital Solutions",
  description: "WebX builds custom websites, ecommerce experiences, digital products and creative solutions across WordPress, Shopify, Drupal, Next.js and more.",
  email: "hello@webx.com",
  phone: "+91 99718 33801",
  address: "Faridabad, Haryana, India",
  socials: [{ label: "LinkedIn", href: "https://www.linkedin.com/" }, { label: "Instagram", href: "https://www.instagram.com/" }, { label: "WhatsApp", href: "https://wa.me/919971833801" }],
  copyright: "© 2026 WebX. All rights reserved.",
  budgets: ["Under ₹50K", "₹50K – ₹1L", "₹1L – ₹3L", "Not sure yet"],
  services: ["WordPress","Shopify","Drupal","Next.js","Static Website","Landing Page","Emailer","Digital Warranty","Website Design","Branding","Server / Infrastructure","Website Maintenance","Other"],
};
export const nav: NavigationItem[] = [
  { label: "Services", href: "#services" }, { label: "Capabilities", href: "#capabilities" },
  { label: "Technology", href: "#technology" }, { label: "About", href: "#why" }, { label: "Contact", href: "#contact" },
];
