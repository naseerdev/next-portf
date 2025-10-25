import { Github, Linkedin, Mail, Briefcase, Heart } from "lucide-react";

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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Naseer Ahmed
            </h3>
            <p className="text-gray-400 mb-4">
              Top Rated Plus Full-Stack Developer building scalable web
              applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", url: "#introduction" },
                { name: "About", url: "#profile" },
                { name: "Work Process", url: "#work-process" },
                { name: "Portfolio", url: "#portfolio" },
                { name: "Services", url: "#services" },
                { name: "Contact", url: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:thenaseer.dev@gmail.com"
                  className="hover:text-purple-400 transition-colors"
                >
                  thenaseer.dev@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923245503557"
                  className="hover:text-purple-400 transition-colors"
                >
                  +92 324 5503557
                </a>
              </li>
              <li>Lahore, Pakistan</li>
              <li className="pt-2">
                <a
                  href="https://www.upwork.com/freelancers/naseerahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Top Rated Plus on Upwork</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Naseer Ahmed. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Built with <Heart className="h-4 w-4 mx-1 text-red-500" /> using
              Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

