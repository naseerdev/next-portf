import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Briefcase } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "thenaseer.dev@gmail.com",
      href: "mailto:thenaseer.dev@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 324 5503557",
      href: "tel:+923245503557"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/naseer-dev",
      href: "https://linkedin.com/in/naseer-dev"
    },
    {
      icon: Briefcase,
      label: "Upwork Profile",
      value: "Top Rated Plus",
      href: "https://www.upwork.com/freelancers/naseerahmed"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/naseer-dev"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/naseer-dev"
    },
    {
      icon: Briefcase,
      label: "Upwork",
      href: "https://www.upwork.com/freelancers/naseerahmed"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/naseer_dev"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects. Let&apos;s connect and discuss how we can work together!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Contact Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                          <info.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {info.label}
                          </h4>
                          <a
                            href={info.href}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12 text-center">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Follow Me
                </h4>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="h-12 w-12 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300">
                © 2025 Naseer Ahmed. Built with Next.js and shadcn/ui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
