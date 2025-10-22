import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Filtermart",
      description: "Industrial e-commerce platform built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Zustand. Features product search with 1.1M+ filters, reusable components using Radix UI, Zod validation, and multi-language support.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://app.qa.filtermart.com",
      githubUrl: "#",
      technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Zustand", "Radix UI", "Zod"],
      features: ["1.1M+ Product Filters", "Multi-language Support", "Reusable Components", "Zod Validation"]
    },
    {
      title: "VendrPro Portal",
      description: "Vendor Management System using React 18, TypeScript, Vite, Material UI, Zustand, and React Query. Features onboarding workflows, dynamic validation, OCR integration, and broker collaboration.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://vendor.vendrpro.com",
      githubUrl: "#",
      technologies: ["React 18", "TypeScript", "Vite", "Material UI", "Zustand", "React Query"],
      features: ["Onboarding Workflows", "OCR Integration", "Dynamic Validation", "Broker Collaboration"]
    },
    {
      title: "Irsal Dashboard",
      description: "Shipment Management Dashboard built with React, TypeScript, and Material UI 5. Includes Shopify integration and carrier support for TCS, SpeedEx, and FedEx.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://irsal.pk",
      githubUrl: "#",
      technologies: ["React", "TypeScript", "Material UI 5", "Shopify API"],
      features: ["Shopify Integration", "Multi-carrier Support", "Shipment Tracking", "Dashboard Analytics"]
    },
    {
      title: "Forever Love Puppies",
      description: "Modern puppy showcase site using Astro, Solid.js, and Tailwind CSS. Optimized for SEO, lazy loading, and structured data for top performance.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://954puppies.com",
      githubUrl: "#",
      technologies: ["Astro", "Solid.js", "Tailwind CSS", "SEO"],
      features: ["SEO Optimized", "Lazy Loading", "Structured Data", "Performance Focused"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full" aria-hidden="true"></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              A showcase of my recent work and side projects, highlighting modern web technologies and best practices.
            </p>
          </header>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index}>
                <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-0 group overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-48 bg-linear-to-br from-blue-500 to-purple-600 overflow-hidden" role="img" aria-label={`${project.title} project preview`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-6xl font-bold opacity-20" aria-hidden="true">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0 bg-white/20 hover:bg-white/30 text-white border-0"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                            <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4">
                      <Button
                        variant="default"
                        size="sm"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
