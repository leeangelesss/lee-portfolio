// For social media links
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

import profile from "./assets/profile.png";
// For Timeline in Education Page
import pup from "./assets/images/pup-logo.png"; 
import olfu from "./assets/images/olfu-logo.png";
import mnhs from "./assets/images/mnhs-logo.png";
import sja from "./assets/images/sja-logo.png";
import tcmes from "./assets/images/tcmes-logo.png";

// For Skills -- Tech Stakcs
import html from './assets/skills-images/html.png';
import css from './assets/skills-images/css.png';
import js from './assets/skills-images/js.png';
import react from './assets/skills-images/reactjs.png';
import vite from './assets/skills-images/vite.png';
import php from './assets/skills-images/php.png';
import tailwindCSS from './assets/skills-images/tailwindCSS.png';
import python from './assets/skills-images/python.png';

// For Skills -- Tools
import git from './assets/skills-images/git.png';
import postman from './assets/skills-images/postman.png';
import npm from './assets/skills-images/npm.png';
import figma from './assets/skills-images/figma.png';
import wordpress from './assets/skills-images/wordpress.png';
import vscode from './assets/skills-images/vscode.png';
import kali from './assets/skills-images/kali.png';

import cisco from './assets/cisco.png';
import meta from './assets/meta.png';


export const navLinks = [
    {
      name: "Home",
      path: "/Main"
    },
    {
      name: "About",
      path: "/About"
    },
    {
      name: "Education",
      path: "/Education"
    },
    {
      name: "Portfolio",
      path: "/Portfolio"
    },
];

export const aboutCard = [
    {
        profile: profile,
        greeting: "Hello there!👋",
        name: "Lee Anne",
        location: "Manila, Philippines",
    }
];

// For Timeline in Education Page
export const timelineElements = [
    {
        logo: pup,
        school: "Polytechnic University of the Philippines",
        level: "Bachelor of Science in Computer Engineering",
        location: "📍🗺️ Sta. Mesa, Manila",
        date: "⭐ S.Y. 2021 - Present",
    },
    {
        logo: olfu,
        school: "Our Lady of Fatima University",
        level: "Senior High School",
        location: "📍🗺️ Tomas Claudio St., Morong, Rizal",
        date: "⭐ S.Y. 2019 - 2021",
    },
    {
        logo: mnhs,
        school: "Morong National High School",
        level: "Junior High School (Grade 10)",
        location: "📍🗺️ Tomas Claudio St., Morong, Rizal",
        date: "⭐ S.Y. 2018 - 2019",
    },
    {
        logo: sja,
        school: "St. Jerome's Academy",
        level: "Junior High School (Grade 7 - 9)",
        location: "📍🗺️ 771 Tomas Claudio St., Morong, Rizal",
        date: "⭐ S.Y. 2015 - 2018",
    },
    {
        logo: tcmes,
        school: "Tomas Claudio Memorial Elementary School",
        level: "Primary School (Grade 1 - 6)",
        location: "📍🗺️ Tomas Claudio St., Morong, Rizal",
        date: "⭐ S.Y. 2009 - 2015",
    }
];

// For Certifications in Education Page
export const certifications = [
    {
        cover: cisco,
        title: "CCNA: Switching, Routing, and Wireless Essentials",
        issuer: "Cisco",
        date: "July 20, 2024",
        certificate: 'https://drive.google.com/file/d/1f-BaCIcczPmhlIIPp62HRoo73ZbyOndr/view?usp=drive_link',
        link: "https://www.credly.com/badges/eaa9323e-80fe-48e6-8a85-48a5fd5bbc4b/public_url",
        skillsGained: [
            "Routing",
            "Switching Protocols",
            "Network Fundamentals",
            "IP Services",
        ]
    },
    {
        cover: meta,
        title: "Introduction to Front-End Development",
        issuer: "Meta",
        date: "September 11, 2024",
        certificate: 'https://drive.google.com/file/d/1NJcoxoNGW420ZdqV6X-KQf-LdGKKvmHK/view?usp=drive_link',
        link: "https://www.coursera.org/account/accomplishments/verify/7YW9CPR3EX42",
        skillsGained: [
            "HTML",
            "CSS",
            "Web Development",
        ]
    },
    {
        cover: meta,
        title: "Programming with JavaScript",
        issuer: "Meta",
        date: "September 23, 2024",
        certificate: 'https://drive.google.com/file/d/1FRgh2tSqtLK9d1s6FR9-JvmDxrj_SYT9/view?usp=drive_link',
        link: "https://coursera.org/share/38424a84a4c6ed14eeaa39093ea7f3eb",
        skillsGained: [
            "Javascript",
            "Unit Testing with Jest",
            "Object-Oriented Programming",
        ]
    },
];

export const skills = [
    { 
        logo: html, 
        alt: 'HTML Logo', 
        type: 'tech stacks'
    },
    { 
        logo: css, 
        alt: 'CSS Logo', 
        type: 'tech stacks'
    },
    { 
        logo: js, 
        alt: 'JavaScript Logo', 
        type: 'tech stacks'
    },
    { 
        logo: react, 
        alt: 'ReactJS Logo', 
        type: 'tech stacks'
    },
    {
        logo: vite,
        alt: 'Vite Logo',
        type: 'tech stacks'
    },
    { 
        logo: tailwindCSS, 
        alt: 'TailwindCSS Logo', 
        type: 'tech stacks'
    },
    { 
        logo: python, 
        alt: 'Python Logo', 
        type: 'tech stacks'
    },
    { 
        logo: php, 
        alt: 'PHP Logo', 
        type: 'tech stacks'
    },
    { 
        logo: git, 
        alt: 'Git Logo', 
        type: 'tools'
    },
    { 
        logo: postman, 
        alt: 'Postman Logo', 
        type: 'tools'
    },
    { 
        logo: npm, 
        alt: 'NPM Logo', 
        type: 'tools'
    },
    { 
        logo: figma, 
        alt: 'Figma Logo', 
        type: 'tools'
    },
    { 
        logo: wordpress, 
        alt: 'WordPress Logo', 
        type: 'tools'
    },
    { 
        logo: vscode, 
        alt: 'Visual Studio Code Logo', 
        type: 'tools'
    },
    { 
        logo: kali, 
        alt: 'Kali Linux Logo', 
        type: 'tools'
    },
];

export const sections = [
    {
        title: "Quick Links",
        items: ["Home", "About", "Skills", "Portfolio", "Contact"]
    },
    {
        title: "Contact",
        items: ["+63 938 332 6648", "leeangeles2@gmail.com", "Capinpin St., Morong", "Rizal 1960, Philippines"]
    }
];

export const social = [
    {
        name: "Github",
        icon: <FaGithub />,
        link: "https://github.com/chamukoo"
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/lee-anne-angeles-673124312/"
    },
    {
        name: "Facebook",
        icon: <FaFacebook />,
        link: "https://www.facebook.com/leeanneyangeles"
    },
    {
        name: "Instagram",
        icon: <FaInstagram />,
        link: "https://www.instagram.com/liyaaaaaan_/"
    },
];