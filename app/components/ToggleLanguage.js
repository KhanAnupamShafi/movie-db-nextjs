"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
const languages = [
  {
    code: "en",
    language: "English",
  },
  {
    code: "bn",
    language: "Bangla",
  },
];
const ToggleLanguage = ({ lang }) => {
  const router = useRouter();
  const found = languages.find((language) => language.code === lang);
  const [isHovered, setIsHovered] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(
    found.language ?? "English"
  );

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleLanguageClick = (entry) => {
    setActiveLanguage(entry.language);
    setIsHovered(false);
    router.push(`/${entry.code}/movies`);
  };

  return (
    <div
      className='relative inline-block'
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}>
      <div className='flex items-center justify-between px-4 py-2 text-white bg-gray-800 rounded-t-lg cursor-pointer'>
        {activeLanguage} ▼
      </div>
      {isHovered && (
        <div className='absolute w-full  text-white bg-gray-800 rounded-b-lg shadow-lg'>
          {languages.map((entry) => (
            <button
              key={entry.code}
              onClick={() => handleLanguageClick(entry)}
              className={`block w-full px-4 py-2 ${
                activeLanguage === "English"
                  ? "bg-gray-700"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}>
              {entry.language}
            </button>
          ))}
          {/* <button
            onClick={() => handleLanguageClick("English")}
            className={`block w-full px-4 py-2 ${
              activeLanguage === "English"
                ? "bg-gray-700"
                : "bg-gray-800 hover:bg-gray-700"
            }`}>
            English
          </button>
          <button
            onClick={() => handleLanguageClick("Bangla")}
            className={`block  w-full px-4 py-2 ${
              activeLanguage === "German"
                ? "bg-gray-700"
                : "bg-gray-800 hover:bg-gray-700"
            }`}>
            Bangla
          </button> */}
        </div>
      )}
    </div>
  );
};

export default ToggleLanguage;
