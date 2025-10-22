import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Radix UI"
      ]
    },
    {
      title: "State Management",
      skills: [
        "Zustand", "Redux", "Context API", "React Query", "SWR"
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        "Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"
      ]
    },
    {
      title: "Tools & Development",
      skills: [
        "Git", "Webpack", "Vite", "Docker", "AWS", "Vercel", "Netlify", "Figma"
      ]
    },
    {
      title: "Testing & Quality",
      skills: [
        "Jest", "React Testing Library", "Cypress", "ESLint", "Prettier", "TypeScript"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Team Leadership", "Mentorship", "Code Review", "Agile/Scrum", "Problem Solving", "Communication"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and professional competencies.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Continuous Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                  I'm passionate about staying up-to-date with the latest technologies and best practices. 
                  I regularly contribute to open-source projects, attend tech conferences, and continuously 
                  expand my skill set to deliver cutting-edge solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <Badge variant="outline" className="px-4 py-2 text-sm">
                    Always Learning
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 text-sm">
                    Open Source Contributor
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 text-sm">
                    Tech Conference Attendee
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

