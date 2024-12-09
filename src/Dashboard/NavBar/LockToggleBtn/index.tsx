import { useState } from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";

const LockToggleBtn = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div
      onClick={() => setIsToggled(!isToggled)}
      className={`flex items-center justify-between rounded-full px-2 py-2 cursor-pointer transition-colors duration-300 ease-in-out bg-gray-300`}
    >
      <div
        className={`px-3 transition-all duration-300 ease-in-out ${
          !isToggled ? "opacity-100 w-auto" : "opacity-0 w-0 px-0"
        }`}
      >
        <FaLockOpen className="text-white" />
      </div>

      <div
        className={`bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out flex items-center justify-center text-sm w-20 px-2 py-1`}
      >
        {!isToggled ? "Lock" : "Unlock"}
      </div>

      <div
        className={`px-3 transition-all duration-300 ease-in-out ${
          isToggled ? "opacity-100 w-auto" : "opacity-0 w-0 px-0"
        }`}
      >
        <FaLock className="text-white" />
      </div>
    </div>
  );
};
export default LockToggleBtn;
