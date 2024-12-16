import { useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const DarkModeToggleBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="flex items-center rounded-full p-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
    >
      {isDarkMode ? (
        <MdOutlineDarkMode className="text-2xl" />
      ) : (
        <MdOutlineLightMode className="text-2xl" />
      )}
    </button>
  );
};

export default DarkModeToggleBtn;
