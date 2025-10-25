import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Top Rated Plus Freelancer",
      company: "Upwork",
      location: "Remote",
      period: "Jun 2019 – Present",
      description: "Top Rated Plus freelancer with 100% Job Success Score, 30+ completed projects, 2,128+ hours worked, and $50K+ total earnings. Delivering high-quality web solutions to clients worldwide.",
      achievements: [
        "Achieved and maintained Top Rated Plus status with 100% Job Success Score",
        "Successfully delivered 30+ projects across diverse industries (eCommerce, SaaS, Educational Platforms)",
        "Built instructional platform with React, Tailwind CSS, and Next.js - rated 5.0/5.0 by client",
        "Led frontend development for vendor management system with Material UI and Zustand",
        "Earned $50K+ total revenue through consistent high-quality delivery and client satisfaction"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "Material UI", "Tailwind CSS", "Zustand", "Client Communication"]
    },
    {
      title: "Senior Software Engineer",
      company: "Osol",
      location: "Remote",
      period: "Sep 2024 – Present",
      description: "Leading frontend development initiatives and mentoring junior developers.",
      achievements: [
        "Architected and implemented complex features using React, TypeScript, and Next.js",
        "Provided leadership and mentorship to junior developers",
        "Optimized frontend performance using code splitting, lazy loading, and efficient state management"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Performance Optimization", "Team Leadership"]
    },
    {
      title: "Frontend Developer",
      company: "Kwanso",
      location: "Remote",
      period: "Mar 2022 – Sep 2024",
      description: "Enhanced application performance and engagement with modern frontend technologies.",
      achievements: [
        "Enhanced application performance and engagement with React, TypeScript, and Next.js",
        "Led junior developers and promoted coding standards",
        "Implemented lazy loading and efficient state management"
      ],
      technologies: ["React", "TypeScript", "Next.js", "State Management", "Code Standards"]
    },
    {
      title: "Frontend Developer",
      company: "Nextbridge Ltd.",
      location: "Lahore, Pakistan",
      period: "Sep 2021 – Mar 2022",
      description: "Built responsive UIs and created reusable components for ReactJS projects.",
      achievements: [
        "Built responsive UIs with TailwindCSS and CSS modules",
        "Created reusable components for ReactJS projects",
        "Delivered optimized, user-friendly experiences"
      ],
      technologies: ["React", "TailwindCSS", "CSS Modules", "Component Architecture"]
    },
    {
      title: "Frontend Developer",
      company: "Codility Solutions",
      location: "Lahore, Pakistan",
      period: "Jun 2019 – Sep 2021",
      description: "Developed responsive and accessible web applications with focus on reusability.",
      achievements: [
        "Developed responsive and accessible web apps",
        "Built reusable React libraries, cutting development time by 25%",
        "Translated UI/UX designs into production-ready code"
      ],
      technologies: ["React", "JavaScript", "UI/UX", "Accessibility", "Performance"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 to-purple-600"></div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                  {/* Card */}
                  <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}>
                    <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </CardTitle>
                          <Badge variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                            {exp.period}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                          <div className="flex items-center space-x-1">
                            <Building2 className="h-4 w-4" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {exp.description}
                        </p>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-600 dark:text-gray-300 text-sm">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
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
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
