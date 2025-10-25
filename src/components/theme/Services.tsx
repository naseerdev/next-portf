const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "I build responsive, high-performance, and accessible user interfaces using React, Next.js, Vue.js, and modern UI frameworks. I focus on creating engaging experiences that work seamlessly across all devices.",
    technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "I develop robust and scalable backend systems using Node.js, Express.js, and modern databases. From REST APIs to GraphQL, I ensure your backend is secure, efficient, and maintainable.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    id: 3,
    title: "Full-Stack Solutions",
    description:
      "I provide end-to-end development services, from database design to deployment. Whether it's a SaaS platform, eCommerce site, or custom web application, I deliver production-ready solutions.",
    technologies: ["MERN Stack", "Next.js", "TypeScript", "AWS", "CI/CD"],
  },
];

const Services = () => {
  return (
    <section
      className="py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
            <h2 className="section-title text-gray-900 dark:text-white">
              What I Do?
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-base md:text-lg">
                I specialize in building modern web applications, crafting
                engaging user interfaces, and developing robust backend systems
                that deliver value and exceptional user experiences.
              </p>
              <p className="text-base md:text-lg">
                My approach combines creativity with technical expertise to
                deliver solutions that are both visually appealing and highly
                functional, scalable, and maintainable.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="mailto:thenaseer.dev@gmail.com"
                className="btn-primary-theme inline-block"
              >
                Let's Work Together!
              </a>
            </div>
          </div>

          {/* Right Content - Services */}
          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                      {service.id}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

