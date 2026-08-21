import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zareen Zia — Senior Software Engineer & Data Explorer",
  description:
    "Senior Software Engineer with 4+ years of Java/Spring Boot experience, currently pursuing an MSc in Data Science. Exploring data engineering, ML, and AI systems.",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Zareen Zia — Senior Software Engineer & Data Explorer",
    description:
      "Senior Software Engineer with 4+ years of Java/Spring Boot experience, currently pursuing an MSc in Data Science.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-weight='bold' fill='%23d4af37'>Z</text></svg>" />
      </head>
      <body className="bg-primary-bg text-primary-text">
        <Navbar name="Zareen Zia" />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
