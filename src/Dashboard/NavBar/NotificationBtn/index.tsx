import { MdNotificationsNone } from "react-icons/md";

const NotificationBtn = () => {
  return (
    <button className="flex items-center justify-center rounded-full p-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300">
      <MdNotificationsNone className="text-2xl" />
    </button>
  );
};

export default NotificationBtn;
