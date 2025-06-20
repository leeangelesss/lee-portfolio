// For social media links
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

// For intro in pages
import profile from "./assets/profile.png";
import education from "./assets/education.png";

// For Timeline in Education Page
import pup from "./assets/school-images/pup-logo.png"; 
import olfu from "./assets/school-images/olfu-logo.png";
import mnhs from "./assets/school-images/mnhs-logo.png";
import sja from "./assets/school-images/sja-logo.png";
import tcmes from "./assets/school-images/tcmes-logo.png";

// For Skills -- Tech Stakcs
import html from './assets/skills-images/html.png';
import css from './assets/skills-images/css.png';
import js from './assets/skills-images/js.png';
import ts from './assets/skills-images/ts.png';
import react from './assets/skills-images/reactjs.png';
import vite from './assets/skills-images/vite.png';
import tailwindCSS from './assets/skills-images/tailwindCSS.png';
import python from './assets/skills-images/python.png';
import supabase from './assets/skills-images/supabase.png';

// For Skills -- Tools
import git from './assets/skills-images/git.png';
import postman from './assets/skills-images/postman.png';
import npm from './assets/skills-images/npm.png';
import figma from './assets/skills-images/figma.png';
import wordpress from './assets/skills-images/wordpress.png';
import vscode from './assets/skills-images/vscode.png';
import kali from './assets/skills-images/kali.png';

// For Contacts in ABout page
import email from './assets/contact-images/email.png';
import linkedin from './assets/contact-images/linkedin.png';
import github from './assets/contact-images/github.png';

// For Certifications cover in Education Page
import cisco from './assets/cert-images/cisco.png';
import meta from './assets/cert-images/meta.png';
import google from './assets/cert-images/google.png';

import certificate1 from './assets/certificates/certificate1.pdf';
import certificate2 from './assets/certificates/certificate2.pdf';
import certificate3 from './assets/certificates/certificate3.pdf';
import certificate4 from './assets/certificates/certificate4.pdf';
import certificate5 from './assets/certificates/certificate5.pdf';
import certificate6 from './assets/certificates/certificate6.pdf';
import certificate7 from './assets/certificates/certificate7.pdf';

// For Projects
import project1 from './assets/project-images/aerosense.jpg';


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
      name: "Project",
      path: "/Project"
    },
];



export const introCard = [
    {
        title: "About Me",
        image: profile,
        intro: "Hello! 👋 I'm Lee Anne, a dedicated Computer Engineering student passionate about both web development and design. Throughout my college journey, I’ve gained proficiency in tools such as HTML, CSS, JavaScript, and React, allowing me to create rresponsive web applications. I also use Figma for wireframing and prototyping, turning design concepts into reality. In addition to web development, I have a strong interest in networking, which led me to choose network administration as my college elective. Currently, I’m expanding my skill set by diving into React Native for mobile application development. With this growing expertise, I aim to bridge the gap between web and mobile technologies, contributing to innovative projects that seamlessly combine design and functionality.",
    },
    {
        title: "Basic Qualifications",
        image: education,
        intro: "Welcome to my Education page! 🙋‍♀️ Here, you'll find a summary of my academic qualifications, internship experience, and the journey that has shaped my career. Education is central to my growth, and I’m dedicated to continuous learning and staying updated with the latest advancements in technology. Alongside my academic pursuits, I completed an internship where I gained valuable hands-on experience in the IT field. This page showcases the key milestones of my educational journey, practical experience, and my commitment to lifelong learning."
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
        certificate: certificate1,
        link: "https://www.credly.com/badges/eaa9323e-80fe-48e6-8a85-48a5fd5bbc4b/public_url",
    },
    {
        cover: meta,
        title: "Introduction to Front-End Development",
        issuer: "Meta",
        date: "September 11, 2024",
        certificate: certificate2,
        link: "https://www.coursera.org/account/accomplishments/verify/7YW9CPR3EX42",
    },
    {
        cover: meta,
        title: "Programming with JavaScript",
        issuer: "Meta",
        date: "September 23, 2024",
        certificate: certificate3,
        link: "https://coursera.org/share/38424a84a4c6ed14eeaa39093ea7f3eb",
    },
    {
        cover: meta,
        title: "Version Control",
        issuer: "Meta",
        date: "September 26, 2024",
        certificate: certificate4,
        link: "https://www.coursera.org/account/accomplishments/verify/6N4U2DALR9YA",
    },
    {
        cover: meta,
        title: "HTML and CSS in depth",
        issuer: "Meta",
        date: "October 2, 2024",
        certificate: certificate5,
        link: "https://www.coursera.org/account/accomplishments/verify/OBTE35GZL2M7",
    },
    {
        cover: google,
        title: "Foundations of Cybersecurity",
        issuer: "Google",
        date: "October 3, 2024",
        certificate: certificate6,
        link: "https://www.coursera.org/account/accomplishments/verify/9UH11WBPQUXW",
    },
    {
        cover: cisco,
        title: "CCNA: Enterprise Networking, Security, and Automation",
        issuer: "Cisco",
        date: "October 18, 2024",
        certificate: certificate7,
        link: "https://www.credly.com/earner/earned/badge/3188efcb-0297-43f6-a79f-1163cef65caa",
    },
];

export const skills = [
    { 
        logo: html, 
        name: 'HTML', 
        type: 'tech stacks'
    },
    { 
        logo: css, 
        name: 'CSS', 
        type: 'tech stacks'
    },
    { 
        logo: js, 
        name: 'JavaScript', 
        type: 'tech stacks'
    },
    {
        logo: ts,
        name: 'TypeScript',
        type: 'tech stacks'
    },
    { 
        logo: react, 
        name: 'React', 
        type: 'tech stacks'
    },
    { 
        logo: react, 
        name: 'Native', 
        type: 'tech stacks'
    },
    {
        logo: vite,
        name: 'Vite',
        type: 'tech stacks'
    },
    { 
        logo: tailwindCSS, 
        name: 'Tailwind', 
        type: 'tech stacks'
    },
    { 
        logo: python, 
        name: 'Python', 
        type: 'tech stacks'
    },
    {
        logo: supabase, 
        name: 'Supabase', 
        type: 'tech stacks'
    },
    { 
        logo: git, 
        name: 'Git', 
        type: 'tools'
    },
    { 
        logo: postman, 
        name: 'Postman', 
        type: 'tools'
    },
    { 
        logo: npm, 
        name: 'NPM', 
        type: 'tools'
    },
    { 
        logo: figma, 
        name: 'Figma', 
        type: 'tools'
    },
    { 
        logo: wordpress, 
        name: 'WordPress', 
        type: 'tools'
    },
    { 
        logo: vscode, 
        name: 'VS Code', 
        type: 'tools'
    },
    { 
        logo: kali, 
        name: 'Kali Linux', 
        type: 'tools'
    },
];

export const contacts = [
    {
        logo: email,
        title: "Message me on:",
        username: "leeangeles2@gmail.com",
        link: "mailto: leeangeles2@gmail.com",
    },
    {
        logo: linkedin,
        title: "My LinkedIn Profile:",
        username: "/in/leeanneangeles",
        link: "https://www.linkedin.com/in/leeanneangeles/",
    },
    {
        logo: github,
        title: "My GitHub Profile:",
        username: "/leeangelesss",
        link: "https://github.com/leeangelesss"
    },
];

export const projects = [
    {
      id: 1,
      image: project1,
      title: "AeroSense",
      description: "AeroSense Monitoring App is a real-time monitoring solution designed for tracking environmental conditions. It provides users with accurate data on air quality, temperature, humidity, and fire hazards such as smoke, kerosene, and LPG using IoT sensors. The app features intuitive dashboards and real-time alerts to help users make informed decisions.",
      techStacks: ["React", "Tailwind CSS", "Supabase"],
      githubLink: "https://github.com/leeangelesss/smart-exhaust-fan-monitoring-app",
      demoLink: "https://aerosense-thesis.vercel.app/"
    },

    // Add more projects as needed
  ];

export const footer = [
    {
        name: "Email",
        icon: <FaEnvelope />,
        link: "mailto: leeangeles2@gmail.com"
    },
    {
        name: "Github",
        icon: <FaGithub />,
        link: "https://github.com/chamukoo"
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/leeanneangeles/"
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