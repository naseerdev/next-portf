import Image from "next/image";
import { Github, Linkedin, Mail, Briefcase } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/naseer-dev",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/naseer-dev",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:thenaseer.dev@gmail.com",
  },
  {
    icon: Briefcase,
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/naseerahmed",
  },
];

const Profile = () => {
  return (
    <div className="relative -mt-20 z-10 px-4" id="profile">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-10 lg:p-16 xl:p-20">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            {/* Profile Image with Social Links */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-64 h-80 md:w-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/profile.jpg"
                    alt="Naseer Ahmed"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Social Media Links */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl px-6 py-3">
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                          aria-label={social.label}
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="flex-1 w-full mt-8 md:mt-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white mb-6 text-center md:text-left">
                I am a Professional Full-Stack Developer
              </h2>

              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base lg:text-lg text-center md:text-left">
                <p>
                  Senior Full-Stack Developer with 6+ years of experience
                  building scalable, high-performance web applications for
                  startups, enterprises, and SaaS businesses. Top Rated Plus on
                  Upwork with 100% Job Success across 30+ completed projects and
                  $50K+ in total earnings.
                </p>
                <p>
                  I specialize in modern JavaScript frameworks, backend APIs,
                  and responsive UI/UX, delivering clean, maintainable, and
                  production-ready code that drives business growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
                <a
                  href="#portfolio"
                  className="btn-primary-theme text-center"
                >
                  My Projects
                </a>
                <a
                  href="https://www.upwork.com/freelancers/naseerahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 text-center"
                >
                  View Upwork Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

