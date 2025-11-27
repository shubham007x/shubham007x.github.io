import type { Metadata } from "next";
import { Rajdhani, Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shubham007x.github.io'),
  title: {
    default: "Shubham Agdari - Software Development Engineer | Portfolio",
    template: "%s | Shubham Agdari"
  },
  description:
    "Software Development Engineer with expertise in React, Next.js, TypeScript, and modern web technologies. Building scalable applications and exceptional digital experiences.",
  keywords: [
    "Shubham Agdari",
    "Software Development Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Web Developer",
    "Portfolio",
    "JavaScript",
    "Node.js",
    "Software Engineer",
    "Gurugram",
    "India"
  ],
  authors: [{ name: "Shubham Agdari" }],
  creator: "Shubham Agdari",
  publisher: "Shubham Agdari",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shubham007x.github.io",
    siteName: "Shubham Agdari Portfolio",
    title: "Shubham Agdari - Software Development Engineer",
    description:
      "Software Development Engineer with expertise in React, Next.js, TypeScript, and modern web technologies. Building scalable applications and exceptional digital experiences.",
    images: [
      {
        url: "https://shubham007x.github.io/images/projects/shubh.png",
        width: 1200,
        height: 630,
        alt: "Shubham Agdari - Software Development Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Agdari - Software Development Engineer",
    description:
      "Software Development Engineer with expertise in React, Next.js, TypeScript, and modern web technologies.",
    creator: "@shubham007x",
    images: ["https://shubham007x.github.io/images/projects/shubh.png"],
  },
  alternates: {
    canonical: "https://shubham007x.github.io",
  },
  category: "Portfolio",
  classification: "Software Development",
  other: {
    "theme-color": "#FF6B00",
    "color-scheme": "dark",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#FF6B00" />
        <meta name="color-scheme" content="dark" />
        <link rel="canonical" href="https://shubham007x.github.io" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shubham Agdari",
              "jobTitle": "Software Development Engineer",
              "url": "https://shubham007x.github.io",
              "sameAs": [
                "https://github.com/shubham007x",
                "https://linkedin.com/in/shubham-agdari-30500617b"
              ],
              "image": "https://shubham007x.github.io/images/projects/shubh.png",
              "description": "Software Development Engineer with expertise in React, Next.js, TypeScript, and modern web technologies.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gurugram",
                "addressCountry": "IN"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Electronics and Telecommunication Engineering"
              },
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Web Development",
                "Software Engineering"
              ]
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${rajdhani.variable} ${orbitron.variable} font-sans antialiased bg-[#0a0a0a] text-gray-100 transition-colors`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navbar />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
