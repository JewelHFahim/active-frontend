import logo from "../../assets/images/logo.png";
import { useState } from "react";
import SideDrawer from "./Drawer";
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-between bg-secondary px-4"
      style={{ height: "70px" }}
    >
      <div>
        <img src={logo} alt="" style={{ width: "", height: "" }} />
      </div>

      <div>
        <SideDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
      </div>
    </div>
  );
};

export default MobileNav;
