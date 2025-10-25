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
                  Full Stack Developer | React | Next.js | Node.js
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-3">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white border-0">
                    ⭐ Top Rated Plus
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
                    100% Job Success
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
                    $50K+ Earned
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
                    6+ Years Experience
                  </Badge>
                  <Badge className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white border-0">
                    2,128+ Hours on Upwork
                  </Badge>
                </div>
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
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <svg className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                    </svg>
                    <a
                      href="https://www.upwork.com/freelancers/naseerahmed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-green-600 transition-colors"
                    >
                      Upwork Profile (Top Rated Plus)
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
                    Senior Full-Stack Developer with 6+ years of experience building scalable, high-performance web applications for startups, enterprises, and SaaS businesses. Top Rated Plus on Upwork with 100% Job Success across 30+ completed projects and $50K+ in total earnings.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    I specialize in modern JavaScript frameworks, backend APIs, and responsive UI/UX, delivering clean, maintainable, and production-ready code that drives business growth. From MVPs to full-scale SaaS platforms, I transform ideas into reality with cutting-edge web solutions.
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
                          SaaS & MVP Development
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
                          API Development
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300">
                          Agile Methodologies
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300">
                          Team Leadership
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300">
                          CI/CD & Deployment
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
                      {["React", "Next.js", "Vue.js", "Angular", "Node.js", "NestJS", "TypeScript", "PostgreSQL", "MongoDB"].map((tech) => (
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
