import React from "react";
import { footer } from "../portfolio"; // Importing the footer data from portfolio.jsx

const Footer = () => {
    // Check if footer data is available
    if (!footer || footer.length === 0) {
        console.error("Footer data is missing or empty.");
        return null;
    }

    return (
        <footer className="bg-[#000300] text-white py-4">
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm pt-4 text-center tracking-wider text-gray-300">
                Made with 💙 by Lee Anne
            </p>
        </footer>
    );
};

export default Footer;