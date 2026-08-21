import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "[YOUR NAME] - Software Engineer & Data Explorer",
  description:
    "Professional portfolio of a software engineer exploring data science and AI systems.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "[YOUR NAME] - Software Engineer & Data Explorer",
    description:
      "Professional portfolio of a software engineer exploring data science and AI systems.",
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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-weight='bold' fill='%23d4af37'>A</text></svg>" />
      </head>
      <body className="bg-primary-bg text-primary-text">
        <Navbar name="[YOUR NAME]" />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
