import React from "react";

const IntroCard = ({ title, image, intro }) => {
  return (
    <div className="mx-4 md:mx-6 sm:mx-8 lg:mx-10 my-20 py-2 bg-[#1a1a1a] rounded-lg">
      <div className="flex items-center mx-5 pt-5 sm:mx-5 md:px-10 lg:px-10">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-gradient">
            {title}
          </h1>
        </div>
      <div className="flex flex-col md:flex-row justify-center items-center m-2 sm:m-4 md:m-6 lg:m-8">
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className="w-40 sm:w-40 md:w-56 lg:w-72 max-w-full h-auto rounded-full p-4 transition-transform duration-300 transform hover:scale-105"
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-center items-center md:items-start p-2">
          <p className="text-gray-400 px-2 text-md font-normal mb-2 text-xs sm:text-sm md:text-md lg:text-md text-justify tracking-wide">
            {intro}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;