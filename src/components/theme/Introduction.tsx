import Image from "next/image";

const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "6+ Years",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "30+",
  },
  {
    id: 3,
    title: "Job Success",
    description: "100%",
  },
];

const Introduction = () => {
  return (
    <div
      className="introduction-profile-background min-h-screen flex items-center"
      id="introduction"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold text-gray-900 dark:text-white">
                Hello, I'm
                <span className="block mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Naseer Ahmed
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                I'm a{" "}
                <span className="bg-highlight px-2 py-1 rounded font-medium">
                  Top Rated Plus Freelancer
                </span>{" "}
                and{" "}
                <span className="bg-highlight px-2 py-1 rounded font-medium">
                  Senior Full-Stack Developer
                </span>{" "}
                based in Lahore, Pakistan. I strive to build immersive and
                scalable web applications through carefully crafted code and
                user-centric design.
              </p>
              <div className="pt-4">
                <a
                  className="btn-primary-theme inline-block"
                  href="mailto:thenaseer.dev@gmail.com"
                >
                  Say Hello!
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12">
              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
                {informationSummaryData.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">
                      {item.description}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 max-w-lg">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Naseer Ahmed"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

