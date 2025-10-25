const workSteps = [
  {
    id: 1,
    title: "Research & Planning",
    description:
      "I start by understanding your business goals, target audience, and requirements to create a solid foundation for the project.",
  },
  {
    id: 2,
    title: "Design & Architecture",
    description:
      "I design the system architecture and UI/UX, ensuring scalability, performance, and an exceptional user experience.",
  },
  {
    id: 3,
    title: "Development",
    description:
      "Using modern technologies and best practices, I build clean, maintainable, and production-ready code that scales.",
  },
  {
    id: 4,
    title: "Testing & Launch",
    description:
      "Rigorous testing ensures quality and reliability. I handle deployment and provide ongoing support for a smooth launch.",
  },
];

const WorkProcess = () => {
  return (
    <section
      className="py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
      id="work-process"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center xl:text-left">
            <h2 className="section-title text-gray-900 dark:text-white">
              Work Process
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-base md:text-lg">
                Driven by design and powered by code, I create digital
                interfaces that feel intuitive and perform seamlessly. Every
                layout, animation, and component is crafted with intention —
                merging usability with visual clarity.
              </p>
              <p className="text-base md:text-lg">
                I blend clean design with efficient code to build engaging,
                user-friendly web experiences that stand out and deliver
                results.
              </p>
            </div>
          </div>

          {/* Right Content - Work Steps */}
          <div className="grid sm:grid-cols-2 gap-4">
            {workSteps.map((step, index) => (
              <div
                key={step.id}
                className={`bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow ${index % 2 === 1 ? "sm:mt-8" : "sm:mb-8"
                  }`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xl mb-4">
                  {step.id}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;

