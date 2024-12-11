import { MdNotificationsNone } from "react-icons/md";

const NotificationBtn = () => {
  return (
    <button className="flex items-center justify-center rounded-full p-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
      <MdNotificationsNone className="text-gray-700 text-2xl" />
    </button>
  );
};

export default NotificationBtn;
