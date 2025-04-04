import React from "react";
import { ReactTyped } from 'react-typed';

import videobg from "../assets/videobg2.mp4";

const Main = () => {
    return (
        <div className="flex text-white h-screen overflow-hidden flex items-center justify-center">
            <video
                src={videobg}
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute inset-0 bg-black opacity-50 z-[-1]" />
            <div className="relative max-w-[800px] w-full h-full mx-auto text-center flex flex-col justify-center items-center">
                <p className="md:text-2xl sm:text-xl text-[#89CFF0] font-bold tracking-wide p-2 shadow-lg">
                    HELLO WORLD! 👋
                </p>
                <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold mb-4 shadow-lg">
                    I'm Lee Anne Angeles
                </h1>
                <div className="flex justify-center items-center py-4">
                    <p className="md:text-3xl sm:text-2xl text-2xl font-bold">
                        An aspiring
                    </p>
                    <ReactTyped
                        className="text-[#89CFF0] pl-2 md:text-3xl sm:text-2xl text-2xl font-bold"
                        strings={["Web Developer", "Frontend Developer", "UI/UX Designer"]}
                        typeSpeed={120}
                        backSpeed={50}
                        loop
                    />
                </div>
                <p className="px-10 py-2 md:text-2xl sm:text-xl font-medium text-gray-400">
                    Currently a Third-year Computer Engineering student at the Polytechnic University of the Philippines.
                </p>
                <button
                    type="button"
                    className="mt-6 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-md px-6 py-3 text-center shadow-md hover:shadow-lg transform hover:scale-105"
                >
                    Let's Connect
                </button>
            </div>
        </div>
    );
};

export default Main;