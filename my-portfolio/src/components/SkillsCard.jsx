import React from "react";

const SkillsCard = ({ skills, title }) => {
  return (
    <div className="my-5 mx-auto w-full flex flex-col">
      <div className="flex mb-5 items-center mx-10">
        <hr className="flex border-t-5 border-[#89CFF0] mr-4 w-[100px]" />
        <h3 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold text-gradient">{title}</h3>
      </div>
      <div className="flex justify-center flex-wrap px-2">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center m-2 p-4">
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-[45px] h-auto sm:w-[55px] md:w-[65px] lg:w-[75px] transition-transform duration-300 hover:scale-110"
            />
            {/* Display skill name below the image */}
            <p className="mt-3 text-white text-xs sm:text-sm md:text-md lg:text-md font-regular">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;