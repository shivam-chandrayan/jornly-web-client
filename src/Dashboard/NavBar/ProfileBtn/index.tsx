import { MdOutlinePerson } from "react-icons/md";

const ProfileBtn = () => {
  return (
    <button className="flex items-center justify-center rounded-full p-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300">
      <MdOutlinePerson className="text-2xl" />
    </button>
  );
};

export default ProfileBtn;
