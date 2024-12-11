import { MdOutlinePerson } from "react-icons/md";

const ProfileBtn = () => {
  return (
    <button className="flex items-center justify-center rounded-full p-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
      <MdOutlinePerson className="text-gray-700 text-2xl" />
    </button>
  );
};

export default ProfileBtn;
