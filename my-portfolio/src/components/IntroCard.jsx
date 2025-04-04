import React from "react";

const IntroCard = ({ title, image, subtitle, intro }) => {
  return (
    <div className="mx-4 md:mx-6 sm:mx-8 lg:mx-10 bg-[#1a1a1a] my-20 rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center mx-10 pt-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center text-gradient">
          {title}
        </h1>
        <hr className="flex border-t-5 border-[#89CFF0] ml-4 w-[200px]" />
      </div>
      <div className="flex flex-col md:flex-row justify-center mx-10">
        <div className="w-full p-5 md:w-1/3 flex justify-center items-center">
          <img src={image} alt={title} className="mb-5 md:mb-0 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105" />
        </div>
        <div className="w-full p-5 md:w-2/3 flex flex-col justify-center items-center md:items-start">
          <h2 className="mb-4 text-[#89CFF0] text-xl sm:text-2xl font-semibold tracking-wide">{subtitle}</h2>
          <p className="text-gray-400 text-md font-normal mb-2 text-justify">{intro}</p>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;