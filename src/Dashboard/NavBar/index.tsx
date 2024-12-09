const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="left-group flex items-center gap-6">
        <div className="logo text-3xl">Jornly</div>
        <div>Lock Button</div>
      </div>
      <div className="right-group nav-elements flex gap-4">
        <div>dark mode</div>
        <div>Notification</div>
        <div>Profile</div>
      </div>
    </div>
  );
};

export default NavBar;
