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
    default: "Naseer Ahmed - Top Rated Plus Full-Stack Developer | React, Next.js, Node.js",
    template: "%s | Naseer Ahmed"
  },
  description: "Top Rated Plus Full-Stack Developer with 6+ years of experience. 100% Job Success on Upwork with 30+ completed projects and $50K+ earned. Specializing in React, Next.js, TypeScript, Node.js, and modern web technologies.",
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
    title: "Naseer Ahmed - Top Rated Plus Full-Stack Developer",
    description: "Top Rated Plus Full-Stack Developer with 6+ years of experience. 100% Job Success on Upwork with 30+ completed projects and $50K+ earned. Specializing in React, Next.js, TypeScript, and Node.js.",
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
    title: "Naseer Ahmed - Top Rated Plus Full-Stack Developer",
    description: "Top Rated Plus Full-Stack Developer with 6+ years of experience. 100% Job Success on Upwork. Specializing in React, Next.js, TypeScript, and Node.js.",
    images: ["/profile.jpg"],
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
    "jobTitle": "Top Rated Plus Full-Stack Developer",
    "description": "Top Rated Plus Full-Stack Developer with 6+ years of experience. 100% Job Success on Upwork with 30+ completed projects and $50K+ earned. Specializing in React, Next.js, TypeScript, Node.js, and modern web technologies.",
    "url": "https://your-site-name.netlify.app",
    "image": "https://your-site-name.netlify.app/profile.jpg",
    "email": "thenaseer.dev@gmail.com",
    "telephone": "+923245503557",
    "sameAs": [
      "https://github.com/naseer-dev",
      "https://linkedin.com/in/naseer-dev",
      "https://twitter.com/naseer_dev",
      "https://www.upwork.com/freelancers/naseerahmed"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Vue.js",
      "Angular",
      "Full-Stack Development",
      "Frontend Development",
      "Backend Development",
      "UI/UX Design",
      "E-commerce Development",
      "SaaS Development",
      "Web Applications"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full-Stack Developer",
      "description": "Building scalable, high-performance web applications using modern technologies for startups, enterprises, and SaaS businesses"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of South Asia"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
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
