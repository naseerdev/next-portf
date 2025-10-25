"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Briefcase } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    description: "Lahore, Pakistan",
  },
  {
    icon: Mail,
    title: "My Email",
    description: "thenaseer.dev@gmail.com",
    link: "mailto:thenaseer.dev@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Me Now",
    description: "+92 324 5503557",
    link: "tel:+923245503557",
  },
];

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
    icon: Briefcase,
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/naseerahmed",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:thenaseer.dev@gmail.com?subject=Message from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative -mb-20 z-10 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-10 lg:p-16">
          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12">
            {/* Left Side - Contact Info */}
            <div className="lg:w-5/12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4 hidden lg:block">
                Let's discuss your Project
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-center lg:text-left">
                I'm available for freelance work. Drop me a line if you have a
                project you think I'd be a good fit for.
              </p>

              {/* Contact Information Cards */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          {info.description}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300">
                          {info.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="text-center lg:text-left">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex justify-center lg:justify-start space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border-2 border-purple-600 dark:border-purple-400 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:w-7/12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center lg:hidden">
                Let's discuss your Project
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button type="submit" className="w-full btn-primary-theme">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

