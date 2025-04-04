import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../portfolio";

const Project = () => {
  return (
    <div className="p-12 bg-[#000300] min-h-screen flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-white mb-10 tracking-wide text-gradient">
        My Projects
      </h2>

      {/* Project Cards */}
      <div className="flex flex-col items-center gap-10 w-full max-w-5xl">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            techStacks={project.techStacks}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;