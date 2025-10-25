import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "University of South Asia",
      location: "Lahore, Pakistan",
      period: "2016 – 2020",
      description: "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and web development.",
      highlights: [
        "Software Engineering Principles",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Web Development Fundamentals",
        "Computer Networks",
        "Operating Systems"
      ]
    }
  ];

  const certificates = [
    {
      title: "Front-End Development Certification",
      issuer: "Upwork",
      year: "2024",
      description: "Official Upwork skill certification demonstrating expertise in modern front-end development, React ecosystem, and best practices.",
      skills: ["React", "JavaScript", "Front-End Architecture", "Modern Web Development"]
    },
    {
      title: "JavaScript Front-End Development",
      issuer: "Upwork",
      year: "2024",
      description: "Upwork skill certification validating advanced JavaScript and front-end development capabilities for enterprise applications.",
      skills: ["JavaScript ES6+", "TypeScript", "Front-End Frameworks", "Performance Optimization"]
    },
    {
      title: "MERN Stack Development",
      issuer: "Nextbridge Institute",
      year: "2021",
      description: "Comprehensive full-stack development certification covering MongoDB, Express.js, React, and Node.js for building scalable web applications.",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Full-Stack Development"]
    },
    {
      title: "The Complete JavaScript Course",
      issuer: "Udemy",
      year: "2021",
      description: "Advanced JavaScript programming course covering modern ES6+ features, async programming, and best practices for professional development.",
      skills: ["JavaScript ES6+", "Async Programming", "DOM Manipulation", "API Integration"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Education & Certificates
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              My educational background and professional certifications that have shaped my expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <GraduationCap className="h-8 w-8 text-blue-500 mr-3" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </CardTitle>
                        <Badge variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                          {edu.period}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center space-x-1">
                          <GraduationCap className="h-4 w-4" />
                          <span className="font-semibold">{edu.institution}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {edu.description}
                      </p>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Key Areas of Study:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight) => (
                            <Badge
                              key={highlight}
                              variant="secondary"
                              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Award className="h-8 w-8 text-purple-500 mr-3" />
                Certificates
              </h3>
              <div className="space-y-6">
                {certificates.map((cert, index) => (
                  <Card key={index} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                          {cert.title}
                        </CardTitle>
                        <Badge variant="outline" className="text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800">
                          {cert.year}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
                        <Award className="h-4 w-4" />
                        <span className="font-semibold">{cert.issuer}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                        {cert.description}
                      </p>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                          Skills Gained:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Learning */}
          <div className="mt-16">
            <Card className="bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Continuous Learning Journey
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-6">
                  I believe in lifelong learning and continuously update my skills through online courses,
                  tech conferences, and hands-on projects. This commitment to growth ensures I stay current
                  with the latest technologies and industry best practices.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge variant="outline" className="px-4 py-2">
                    Online Courses
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2">
                    Tech Conferences
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2">
                    Personal Projects
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2">
                    Open Source
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

export default Education;
