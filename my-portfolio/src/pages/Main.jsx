import React from "react";
import { ReactTyped } from "react-typed";

import videobg from "../assets/videobg2.mp4";
import profile from "../assets/profile.png";

const Main = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden text-white">
            {/* Video Background */}
            <video
                src={videobg}
                className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
                autoPlay
                loop
                muted
                playsInline
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-[-1]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[800px] w-full px-4">
                <img
                    src={profile}
                    alt="Image of Lee Anne Angeles"
                    className="w-40 md:w-56 lg:w-72 rounded-full p-4 transition-transform duration-300 transform hover:scale-105"
                />
                <p className="text-[#89CFF0] font-bold md:text-2xl sm:text-xl tracking-wide p-2 shadow-lg">
                    HELLO WORLD! 👋
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 shadow-lg">
                    I am Lee Anne Angeles
                </h1>
                <div className="flex flex-wrap justify-center items-center gap-2 py-4">
                    <p className="text-2xl sm:text-2xl md:text-3xl font-semibold tracking-wide">
                        An aspiring
                    </p>
                    <ReactTyped
                        className="text-[#89CFF0] pl-2 text-2xl sm:text-2xl md:text-3xl font-bold"
                        strings={["Web Developer", "Frontend Developer", "UI/UX Designer"]}
                        typeSpeed={120}
                        backSpeed={50}
                        loop
                    />
                </div>
                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <a
                        href="mailto:leeanneyangeles@gmail.com"
                        className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br transition duration-300 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-md px-6 py-3 text-center shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                        Let's Connect
                    </a>
                    <a
                        href="/CV.pdf"
                        download
                        className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br transition duration-300 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-md px-6 py-3 text-center shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Main;