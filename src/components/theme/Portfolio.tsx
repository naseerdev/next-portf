import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Filtermart",
    category: "E-COMMERCE",
    description:
      "Industrial e-commerce platform built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Zustand. Features product search with 1.1M+ filters, reusable components using Radix UI, Zod validation, and multi-language support.",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
    ],
    link: "https://app.qa.filtermart.com",
  },
  {
    id: 2,
    title: "VendrPro Portal",
    category: "VENDOR MANAGEMENT",
    description:
      "Vendor Management System using React 18, TypeScript, Vite, Material UI, Zustand, and React Query. Features onboarding workflows, dynamic validation, OCR integration, and broker collaboration.",
    technologies: ["React 18", "TypeScript", "Material UI", "Zustand"],
    link: "https://vendor.vendrpro.com",
  },
  {
    id: 3,
    title: "Irsal Dashboard",
    category: "LOGISTICS",
    description:
      "Shipment Management Dashboard built with React, TypeScript, and Material UI 5. Includes Shopify integration and carrier support for TCS, SpeedEx, and FedEx.",
    technologies: ["React", "TypeScript", "Material UI 5", "Shopify API"],
    link: "https://irsal.pk",
  },
  {
    id: 4,
    title: "Forever Love Puppies",
    category: "WEBSITE",
    description:
      "Modern puppy showcase site using Astro, Solid.js, and Tailwind CSS. Optimized for SEO, lazy loading, and structured data for top performance.",
    technologies: ["Astro", "Solid.js", "Tailwind CSS", "SEO"],
    link: "https://954puppies.com",
  },
];

const Portfolio = () => {
  return (
    <section
      className="py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-800"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="section-title text-gray-900 dark:text-white mb-6">
            Portfolio
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
            Here's a selection of my recent work, showcasing my skills in
            creating scalable, user-centric, and high-performance web
            applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Header */}
              <div className="relative h-48 bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                <div className="text-8xl font-bold text-white/10">
                  {project.title.charAt(0)}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 font-semibold hover:underline mt-4"
                >
                  <span>View Project</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.upwork.com/freelancers/naseerahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-theme inline-block"
          >
            View More Projects on Upwork
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

