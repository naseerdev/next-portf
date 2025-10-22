import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Naseer Ahmed - Senior Software Engineer & Frontend Developer",
    template: "%s | Naseer Ahmed"
  },
  description: "Experienced Senior Software Engineer specializing in frontend technologies, with a strong background in building complex, high-performance web applications using React, TypeScript, Next.js, and modern web technologies.",
  keywords: [
    "Naseer Ahmed", 
    "Software Engineer", 
    "Frontend Developer", 
    "React Developer", 
    "TypeScript", 
    "Next.js", 
    "JavaScript", 
    "Web Development", 
    "Portfolio", 
    "UI/UX", 
    "Full Stack Developer",
    "E-commerce Development",
    "Vendor Management Systems",
    "Shipment Management",
    "Modern Web Applications"
  ],
  authors: [{ name: "Naseer Ahmed", url: "https://naseer-dev.vercel.app" }],
  creator: "Naseer Ahmed",
  publisher: "Naseer Ahmed",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://your-site-name.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-site-name.netlify.app",
    title: "Naseer Ahmed - Senior Software Engineer & Frontend Developer",
    description: "Experienced Senior Software Engineer specializing in frontend technologies, with a strong background in building complex, high-performance web applications using React, TypeScript, and Next.js.",
    siteName: "Naseer Ahmed Portfolio",
    images: [
      {
        url: "/api/placeholder/1200/630",
        width: 1200,
        height: 630,
        alt: "Naseer Ahmed - Senior Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naseer Ahmed - Senior Software Engineer & Frontend Developer",
    description: "Experienced Senior Software Engineer specializing in frontend technologies, with a strong background in building complex, high-performance web applications.",
    images: ["/api/placeholder/1200/630"],
    creator: "@naseer_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Naseer Ahmed",
    "jobTitle": "Senior Software Engineer",
    "description": "Experienced Senior Software Engineer specializing in frontend technologies, with a strong background in building complex, high-performance web applications using React, TypeScript, and Next.js.",
    "url": "https://your-site-name.netlify.app",
    "image": "https://your-site-name.netlify.app/profile.jpg",
    "sameAs": [
      "https://github.com/naseer-ahmed",
      "https://linkedin.com/in/naseer-ahmed",
      "https://twitter.com/naseer_dev"
    ],
    "knowsAbout": [
      "React",
      "TypeScript", 
      "Next.js",
      "JavaScript",
      "Web Development",
      "Frontend Development",
      "UI/UX Design",
      "E-commerce Development",
      "Vendor Management Systems",
      "Shipment Management"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Senior Software Engineer",
      "description": "Building complex, high-performance web applications using modern frontend technologies"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Karachi"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karachi",
      "addressCountry": "Pakistan"
    }
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
