import { useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const DarkModeToggleBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="flex items-center rounded-full p-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
    >
      {isDarkMode ? (
        <MdOutlineDarkMode className="text-gray-700 text-2xl" />
      ) : (
        <MdOutlineLightMode className="text-gray-700 text-2xl" />
      )}
    </button>
  );
};

export default DarkModeToggleBtn;
