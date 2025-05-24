import React from "react";
import { ReactTyped } from "react-typed";

import videobg from "../assets/videobg2.mp4";
import profile from "../assets/profile.png";

const Main = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden text-white flex items-center justify-center mt-[-24px]">
            {/* Background Video */}
            <video
                src={videobg}
                className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
                autoPlay
                loop
                muted
                playsInline
            />
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm z-[-1]" />

            {/* Content */}
            <div className="text-center max-w-[800px] px-6 py-16">
                <img
                    src={profile}
                    alt="Image of Lee Anne Angeles"
                    className="w-48 md:w-56 lg:w-64 mx-auto rounded-full mb-6 shadow-lg transition-transform duration-300 transform hover:scale-105"
                />
                <p className="text-md font-medium text-white tracking-wider py-2">
                    Hello World! 👋
                </p>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider">
                    I am <span className="text-gradient font-bold">Lee Anne</span> Angeles
                </h1>
                <div className="flex flex-wrap justify-center items-center py-2">
                    <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-regular">
                        An aspiring
                    </p>
                    <ReactTyped
                        className="text-gradient pl-2 text-md sm:text-lg md:text-xl lg:text-2xl font-bold"
                        strings={["Web Developer", "Frontend Developer", "UI/UX Designer"]}
                        typeSpeed={120}
                        backSpeed={50}
                        loop
                    />
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-3 py-2">
                    <a
                        href="mailto:leeanneyangeles@gmail.com"
                        className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 transition duration-300 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium tracking-wide rounded-lg text-xs sm:text-sm md:text-md lg:text-lg px-6 py-3 shadow-md hover:shadow-xl transform hover:scale-105"
                    >
                        Let's Connect
                    </a>
                    <a
                        href="/CV.pdf"
                        download
                        className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 transition duration-300 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium tracking-wide rounded-lg text-xs sm:text-sm md:text-md lg:text-lg px-6 py-3 shadow-md hover:shadow-xl transform hover:scale-105"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Main;