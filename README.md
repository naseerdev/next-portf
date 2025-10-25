# Naseer Ahmed - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, projects, and skills as a Top Rated Plus Full-Stack Developer on Upwork.

## 🌟 Highlights

- ⭐ **Top Rated Plus** on Upwork with **100% Job Success Score**
- 💰 **$50K+** total earnings from **30+ completed projects**
- ⏱️ **2,128+ hours** of successful client work
- 💼 **6+ years** of professional development experience
- 🏆 **Upwork Certified** in Front-End Development and JavaScript

## 🚀 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Runtime**: React 19
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI)
- **Type Safety**: TypeScript
- **Theme**: next-themes with dark mode
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **SEO**: Complete metadata, structured data, sitemap
- **Deployment**: Netlify (Vercel-ready)

## 📋 Features

- 🎨 Modern, responsive design with dark mode support
- 📱 Mobile-first approach
- ⚡ Optimized performance with Next.js 16
- 🔍 **Advanced SEO optimization**:
  - Complete metadata with Open Graph and Twitter Cards
  - Rich structured data (Person, Website, ProfessionalService schemas)
  - Dynamic XML sitemap with priority settings
  - Optimized robots.txt
  - PWA manifest with shortcuts
  - Search engine verification ready
- 📧 **Functional Contact Form**:
  - Netlify Forms integration (free, no backend needed)
  - Real-time form validation
  - Success/error messaging
  - Loading states and UX feedback
  - Spam protection with honeypot
  - Email notifications on submission
- 🎯 Sections: About, Experience, Projects, Skills, Education, Contact
- 🌐 Professional presentation of Upwork achievements

## 🛠️ Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main page
│   ├── layout.tsx        # Root layout with SEO metadata & structured data
│   ├── globals.css       # Global styles
│   └── sitemap.ts        # Dynamic XML sitemap
├── components/
│   ├── theme/           # Main section components
│   │   ├── Navbar.tsx
│   │   ├── Introduction.tsx
│   │   ├── Profile.tsx
│   │   ├── WorkProcess.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   └── ui/              # Reusable UI components (shadcn)
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── ...more
└── lib/
    └── utils.ts         # Utility functions
public/
├── robots.txt           # Search engine crawling rules
├── manifest.json        # PWA manifest with shortcuts
├── sitemap.xml          # Auto-generated sitemap
└── profile.jpg          # Profile image & OG image
```

## 🎯 Key Sections

### About
- Professional summary highlighting Top Rated Plus status
- Key achievements and Upwork metrics
- Direct link to Upwork profile
- Contact information

### Experience
- **Upwork Freelancing** (2019-Present) - Top Rated Plus achievements
- Senior Software Engineer at Osol (2024-Present)
- Frontend Developer at Kwanso (2022-2024)
- Previous positions at Nextbridge Ltd. and Codility Solutions

### Projects
- Filtermart - Next.js 15 e-commerce platform
- VendrPro Portal - Vendor management system
- Irsal Dashboard - Shipment management
- Jackson Guitars - Premium guitar retailer eCommerce
- Bata Shoes - Modern eCommerce platform
- G Form - Dynamic form builder
- Instructional Platform - Educational platform (5.0/5.0 client rating)

### Skills
10 comprehensive categories including:
- Frontend Technologies (React, Next.js, Vue.js, Angular, Astro)
- UI Frameworks (Tailwind, Material UI, Chakra UI, Bootstrap)
- Backend & APIs (Node.js, Express, NestJS, GraphQL)
- Databases (PostgreSQL, MongoDB, Firebase, Supabase)
- CMS & eCommerce (WordPress, Shopify, WooCommerce)
- And more...

### Education & Certifications
- Front-End Development Certification - Upwork (2024)
- JavaScript Front-End Development - Upwork (2024)
- MERN Stack Development - Nextbridge Institute (2021)
- Bachelor's in Computer Science - University of South Asia (2016-2020)

## 🔗 Connect

- 💼 [Upwork Profile](https://www.upwork.com/freelancers/naseerahmed) - Top Rated Plus
- 💻 [GitHub](https://github.com/naseer-dev)
- 🔗 [LinkedIn](https://linkedin.com/in/naseer-dev)
- 📧 thenaseer.dev@gmail.com

## 📝 Recent Updates (October 2025)

### SEO Enhancements
- ✅ Comprehensive metadata configuration with 27+ keywords
- ✅ Three structured data schemas (Person, Website, ProfessionalService)
- ✅ Open Graph and Twitter Card optimization
- ✅ Enhanced PWA manifest with shortcuts and screenshots
- ✅ Fixed URL consistency across all files
- ✅ Added search engine verification placeholders
- ✅ Improved robots.txt and sitemap.ts
- ✅ Created comprehensive SEO_GUIDE.md

### Portfolio Updates
- ✅ Added Upwork Top Rated Plus achievements and statistics
- ✅ Updated with 2,128+ hours and $50K+ earnings metrics
- ✅ Added Upwork freelancing experience section
- ✅ Expanded skills to include 60+ technologies
- ✅ Added new projects from Upwork portfolio
- ✅ Included Upwork certifications
- ✅ Added direct Upwork profile links throughout the site

## 🔍 SEO Features

This portfolio is fully optimized for search engines with:

- Complete metadata setup with Open Graph and Twitter Cards
- Three structured data schemas (Person, Website, ProfessionalService)
- Dynamic XML sitemap with priority-based page ranking
- Optimized robots.txt for crawler control
- PWA manifest with app shortcuts
- Search engine verification ready

### Quick SEO Setup

1. **Claim your site in Google Search Console**
   - Submit the sitemap: `https://naseerdev.netlify.app/sitemap.xml`

2. **Add verification tokens**
   - Update the `verification` object in `src/app/layout.tsx`

3. **Monitor performance**
   - Use PageSpeed Insights: https://pagespeed.web.dev
   - Check structured data: https://validator.schema.org

## 📧 Contact Form

The contact form is fully functional using **Netlify Forms** (free tier includes 100 submissions/month).

**Features:**
- ✅ No backend required - works out of the box on Netlify
- ✅ Email notifications sent to thenaseer.dev@gmail.com
- ✅ Spam protection with honeypot field
- ✅ Professional UX with loading states and success/error messages
- ✅ Form data stored in Netlify dashboard

**Setup Required:**
1. Deploy to Netlify
2. Navigate to **Site settings** → **Forms** → **Form notifications**
3. Add email notification for the "contact" form
4. Done! You'll receive emails for all submissions

For detailed setup instructions, see [CONTACT_FORM_SETUP.md](./CONTACT_FORM_SETUP.md)

## 🚀 Deployment

### Netlify (Current)
Already configured with:
- Static export (`output: 'export'`)
- Trailing slashes enabled
- Custom build settings in `netlify.toml`

```bash
# Build command
npm run build

# Publish directory
out/
```

### Vercel (Alternative)
Deploy instantly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/naseer-dev/next-portf)

## 🚀 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components
- [TypeScript](https://www.typescriptlang.org/docs/) - Static type checking
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Next.js SEO](https://nextjs.org/learn/seo/introduction-to-seo) - SEO best practices
