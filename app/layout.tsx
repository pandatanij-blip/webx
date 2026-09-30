import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = {
  metadataBase: new URL(site.url), title: site.title, description: site.description,
  openGraph: { title: site.title, description: site.description, siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${display.variable} ${body.variable}`}><body>{children}</body></html>;
}
