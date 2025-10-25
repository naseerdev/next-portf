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
    default: "Naseer Ahmed - Top Rated Plus Full-Stack Developer | React, Next.js, Node.js Expert",
    template: "%s | Naseer Ahmed"
  },
  description: "Top Rated Plus Full-Stack Developer with 6+ years of experience. 100% Job Success on Upwork with 30+ completed projects and $50K+ earned. Expert in React, Next.js, TypeScript, Node.js, Vue.js, Angular, and modern web technologies. Available for hire on Upwork.",
  keywords: [
    "Naseer Ahmed",
    "Senior Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Expert",
    "TypeScript Developer",
    "Node.js Developer",
    "Vue.js Developer",
    "Angular Developer",
    "JavaScript Expert",
    "Web Development",
    "Portfolio",
    "UI/UX Developer",
    "Top Rated Plus Upwork",
    "E-commerce Development",
    "SaaS Development",
    "Vendor Management Systems",
    "Shipment Management",
    "Modern Web Applications",
    "Responsive Web Design",
    "API Development",
    "Database Design",
    "Lahore Pakistan Developer",
    "Freelance Developer",
    "Remote Developer",
    "Software Consultant"
  ],
  authors: [{ name: "Naseer Ahmed", url: "https://naseerdev.netlify.app" }],
  creator: "Naseer Ahmed",
  publisher: "Naseer Ahmed",
  applicationName: "Naseer Ahmed Portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://naseerdev.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naseerdev.netlify.app",
    title: "Naseer Ahmed - Top Rated Plus Full-Stack Developer | React, Next.js Expert",
    description: "Top Rated Plus Full-Stack Developer with 6+ years of experience. 100% Job Success on Upwork with 30+ completed projects and $50K+ earned. Specializing in React, Next.js, TypeScript, Node.js, and modern web technologies.",
    siteName: "Naseer Ahmed Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Naseer Ahmed - Top Rated Plus Full-Stack Developer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naseer Ahmed - Top Rated Plus Full-Stack Developer | React, Next.js Expert",
    description: "Top Rated Plus Full-Stack Developer with 6+ years of experience. 100% Job Success on Upwork with 30+ projects. Expert in React, Next.js, TypeScript, Node.js, Vue.js, and Angular.",
    images: ["/profile.jpg"],
    creator: "@naseer_dev",
    site: "@naseer_dev",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
    // Add your verification tokens here after claiming your site
    // google: "your-google-verification-token",
    // yandex: "your-yandex-verification-token",
    // bing: "your-bing-verification-token",
  },
  category: "technology",
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
    "url": "https://naseerdev.netlify.app",
    "image": "https://naseerdev.netlify.app/profile.jpg",
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
      "Web Applications",
      "REST APIs",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
      "Git",
      "Agile Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full-Stack Developer",
      "description": "Building scalable, high-performance web applications using modern technologies for startups, enterprises, and SaaS businesses",
      "estimatedSalary": {
        "@type": "MonetaryAmountDistribution",
        "name": "Professional Full-Stack Developer",
        "currency": "USD"
      }
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of South Asia"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "addressCountry": "Pakistan"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "30",
      "bestRating": "5",
      "worstRating": "1"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance / Upwork"
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Naseer Ahmed Portfolio",
    "url": "https://naseerdev.netlify.app",
    "description": "Professional portfolio of Naseer Ahmed, a Top Rated Plus Full-Stack Developer specializing in React, Next.js, TypeScript, and Node.js",
    "author": {
      "@type": "Person",
      "name": "Naseer Ahmed"
    },
    "inLanguage": "en-US"
  };

  const professionalServiceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Naseer Ahmed - Full-Stack Development Services",
    "description": "Professional web development services specializing in React, Next.js, TypeScript, Node.js, and modern web technologies",
    "url": "https://naseerdev.netlify.app",
    "image": "https://naseerdev.netlify.app/profile.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "addressCountry": "Pakistan"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.5204",
      "longitude": "74.3587"
    },
    "priceRange": "$$",
    "telephone": "+923245503557",
    "email": "thenaseer.dev@gmail.com",
    "sameAs": [
      "https://github.com/naseer-dev",
      "https://linkedin.com/in/naseer-dev",
      "https://www.upwork.com/freelancers/naseerahmed"
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceData),
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
