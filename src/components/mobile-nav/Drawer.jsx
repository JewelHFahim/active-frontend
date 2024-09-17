/* eslint-disable react/prop-types */
import { CiMenuFries } from "react-icons/ci";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const SideDrawer = ({ isOpen, toggleDrawer }) => {
  const mainMenus = [
    {
      name: "Home",
      path: "",
    },
    {
      name: "Coupon",
      path: "",
    },
    {
      name: "All Shops",
      path: "",
    },
    {
      name: "Brands",
      path: "",
    },
    {
      name: "Summer Sale",
      path: "",
    },
    {
      name: "Computer Accessories",
      path: "",
    },
    {
      name: "More",
      path: "",
    },
  ];
  return (
    <>
      <button onClick={toggleDrawer} className="border-0 bg-transparent">
        <CiMenuFries size={22} className="text-white" />
      </button>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bg-secondary"
      >
        <div className="p-3 ">
          <img src={logo} alt="" style={{ width: "", height: "" }} />


          <ul className="mt-5 list-unstyled  d-flex flex-column mb-0 gap-3 mt-2 mt-lg-0">
            {mainMenus.map((menu, index) => (
              <li key={index} className="mx-2">
                <Link
                  to=""
                  className="text-primary fw-bold text-decoration-none"
                  style={{ fontSize: "13px" }}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default SideDrawer;
