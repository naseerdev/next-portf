import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import Image from "next/image";

const About = () => {

  return (
    <section id="about" className="py-20 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image and Info */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30"></div>
                <div className="relative w-48 h-48 mx-auto lg:mx-0 z-10">
                  <Image
                    src="/profile.jpg"
                    alt="Naseer Ahmed"
                    fill
                    className="rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-xl"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Naseer Ahmed
                </h3>
                <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                  Senior Software Engineer (Frontend React Developer)
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Lahore, Pakistan
                </p>

                {/* Contact Info */}
                <div className="space-y-3 pt-4">
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <a
                      href="mailto:thenaseer.dev@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                    >
                      thenaseer.dev@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <Phone className="h-5 w-5 text-blue-500" />
                    <a
                      href="tel:+923245503557"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                    >
                      +92 324 5503557
                    </a>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Lahore, Pakistan
                    </span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <Linkedin className="h-5 w-5 text-blue-500" />
                    <a
                      href="https://linkedin.com/in/naseer-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                    >
                      linkedin.com/in/naseer-dev
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div>
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Professional Summary
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    Experienced Senior Software Engineer specializing in frontend technologies, with a strong background in building complex, high-performance web applications. Adept at leading development teams, driving best coding practices, and implementing scalable solutions using React, TypeScript, and Next.js in dynamic business environments.
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Key Highlights:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300">
                          Team Leadership
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300">
                          Performance Optimization
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300">
                          Scalable Architecture
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300">
                          Modern Technologies
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Preview */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Core Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
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
        </div>
      </div>
    </section>
  );
};

export default About;
