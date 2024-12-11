import DarkModeToggleBtn from "./DarkModeToggleBtn";
import LockToggleBtn from "./LockToggleBtn";
import NotificationBtn from "./NotificationBtn";
import ProfileBtn from "./ProfileBtn";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="left-group flex items-center gap-6">
        <div className="logo">
          <img src="./img/logo-light.png" alt="Logo" className="h-8 md:h-16" />
        </div>
        <div>
          <LockToggleBtn />
        </div>
      </div>
      <div className="right-group nav-elements flex gap-4">
        <DarkModeToggleBtn />
        <NotificationBtn />
        <ProfileBtn />
      </div>
    </div>
  );
};

export default NavBar;
