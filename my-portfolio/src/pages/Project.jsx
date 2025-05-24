import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../portfolio";

const Project = () => {
  return (
    <div className="min-h-screen max-w-[1200px] my-20 mx-auto bg-[#000300] text-white">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-white mb-10 tracking-wide text-gradient">
        My Projects
      </h2>

      {/* Project Cards */}
      <div className="flex flex-col items-center mx-4 md:mx-6 sm:mx-8 lg:mx-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            techStacks={project.techStacks}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;