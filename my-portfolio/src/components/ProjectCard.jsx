import React from "react";

const ProjectCard = ({ image, title, description, techStacks, demoLink }) => {
  return (
    <div className="flex bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-6xl h-72">
      {/* Left side - Full Cover Image */}
      <div className="w-1/2 h-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Right side - Content */}
      <div className="w-1/2 p-6 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>

        {/* Tech Stacks */}
        <div className="flex flex-wrap gap-2 mt-3">
          {techStacks.map((stack, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-xs font-medium">
              {stack}
            </span>
          ))}
        </div>

        {/* Demo Button */}
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition"
        >
          Demo →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
