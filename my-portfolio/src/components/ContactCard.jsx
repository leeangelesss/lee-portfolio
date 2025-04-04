import React from "react";

const ContactCard = ({ contact }) => {
  return (
    <div className="flex items-center mx-2 my-4 hover:bg-gradient-to-r from-[#B3F6D8] to-[#52A7C1] p-2 rounded-lg transition-all duration-300">
      <div className="px-2">
        <img
          src={contact.logo}
          alt={contact.title}
          className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain"
        />
      </div>
      <div className="px-4">
        <h3 className="text-xs sm:text-sm md:text-md lg:text-md font-normal">{contact.title}</h3>
        <a
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm md:text-lg lg:text-lg font-bold tracking-wide pt-2 text-white hover:text-[#000]"
        >
          {contact.username}
        </a>
      </div>
    </div>
  );
};

export default ContactCard;