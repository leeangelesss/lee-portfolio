import React from "react";

const ProjectCard = ({ image, title, description, techStacks, githubLink, demoLink }) => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-6xl h-auto sm:h-80 transition-transform duration-300 hover:scale-[1.02]">
      {/* Left side - Full Cover Image */}
      <div className="w-full sm:w-1/2 h-48 sm:h-full md:h-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Right side - Content */}
      <div className="w-full sm:w-1/2 md:h-full py-3 px-6 sm:pr-10 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-blue-600 tracking-wider">{title}</h3>
        <p className="text-gray-600 mt-2 text-xs sm:text-xs md:text-xs lg:text-sm tracking-wide">{description}</p>

        {/* Tech Stacks */}
        <div className="flex flex-wrap gap-2 mt-4">
          {techStacks.map((stack, index) => (
            <span key={index} className="text-blue-500 border border-blue-500 px-4 py-1 rounded-full text-xs font-semibold shadow-md">
              {stack}
            </span>
          ))}
        </div>

        <div className="flex flex-row justify-left mt-4">
            {/* Demo Button */}
            <div className="flex justify-left pr-2">
                <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-5 py-2 rounded-lg text-xs font-medium hover:bg-blue-600 transition-shadow shadow-md hover:shadow-lg"
                    >
                    Demo
                </a>
            </div>

            {/* GitHub Button */}
            <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-200 text-yellow-900 px-5 py-2 rounded-lg text-xs font-medium hover:bg-yellow-400 transition-shadow shadow-md hover:shadow-lg"
                >
                ⭐ Star Repository
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;