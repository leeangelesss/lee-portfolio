import React from "react";
import SkillsCard from "../components/SkillsCard"; 
import ContactCard from "../components/ContactCard";
import IntroCard from "../components/IntroCard"; 
import { skills, contacts, introCard } from "../portfolio";

const About = () => {
  const techStacks = skills.filter((skill) => skill.type === 'tech stacks');
  const tools = skills.filter((skill) => skill.type === 'tools');

  return (
    <div id="about" className="min-h-screen max-w-[1200px] my-20 mx-auto bg-[#000300] text-white">
      <IntroCard
        title={introCard[0].title}
        image={introCard[0].image}
        subtitle={introCard[0].subtitle}
        intro={introCard[0].intro}
      />

      {/* Skills Section */}
      <div className="pt-20 my-20 mx-auto flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-[25px] lg:text-[30px] font-semibold text-white mb-5 mx-10">
          <span className="text-[#89CFF0] text-2xl sm:text-3xl md:text-[25px] lg:text-[30px]">Professional </span>
          Skillset
        </h2>
        <SkillsCard skills={techStacks} title="Tech Stacks" />  
        <SkillsCard skills={tools} title="Tools" />
      </div>

      {/* Contacts Section */}
      <div className="mx-4 md:mx-6 sm:mx-8 lg:mx-10 my-20 py-5 bg-[#1a1a1a] rounded-lg">
        <div className="flex items-center mx-5 py-5 sm:mx-5 md:px-10 lg:px-10">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center text-gradient">
            Contact
          </h2>
          <hr className="flex border-t-5 border-[#89CFF0] ml-4 w-[200px]" />
        </div>
        <div className="flex flex-col justify-start flex-wrap mx-auto px-1 sm:flex-col sm:px-4 md:justify-start md:px-10 md:flex-row lg:justify-start lg:px-10 lg:flex-row">
          {contacts.map((contact, index) => (
            <ContactCard key={index} contact={contact} /> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;