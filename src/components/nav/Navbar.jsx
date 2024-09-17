import { LuUser2 } from "react-icons/lu";
import logo from "../../assets/images/logo.png";
import SearchDropdown from "../../utils/category-dropdown/SearchDropdown";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BsGridFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
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
    <div
      className="d-flex flex-column justify-content-center align-items-cente gap-3"
      style={{ height: "116px" }}
    >
      {/* Top Nav Section */}
      <div className="d-flex justify-content-between align-items-center position-relative">
        {/* Logo */}

        <div>
          <img src={logo} alt="" style={{ width: "135px", height: "32px" }} />
        </div>

        {/* Search Bar */}
        <div style={{ maxWidth: "696px", width: "50%" }}>
          <SearchDropdown />
        </div>

        {/* Tracker & Seller */}
        <div className=" d-flex align-content-center" style={{ gap: "26px" }}>
          <div className="d-flex flex-column align-content-center gap-1">
            <p
              className="text-primary fw-bold m-0"
              style={{ fontSize: "13px" }}
            >
              +01 112 352 566
            </p>
            <p style={{ color: "#929292", fontSize: "12px", margin: "0px" }}>
              Track Order
            </p>
          </div>

          <div className="d-flex flex-column align-content-center gap-1">
            <p
              className="text-primary fw-bold m-0 d-flex"
              style={{ fontSize: "13px", cursor: "pointer" }}
            >
              EN/USD <IoIosArrowDown size={16} />
            </p>
            <p style={{ color: "#929292", fontSize: "12px", margin: "0px" }}>
              Seller Center
            </p>
          </div>
        </div>

        {/* Login */}
        <div className=" d-flex align-content-center" style={{ gap: "10px" }}>
          <div
            className="rounded-circle d-flex justify-content-center align-items-center text-white"
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: "#797979",
            }}
          >
            <LuUser2 style={{ fontSize: "16px" }} />
          </div>

          <div className="d-flex flex-column align-content-center gap-1">
            <p
              className="text-primary fw-bold m-0"
              style={{ fontSize: "13px", cursor: "pointer" }}
            >
              Login or Register
            </p>
            <p
              style={{
                color: "#929292",
                fontSize: "12px",
                marginTop: "5px",
                margin: "0",
              }}
            >
              Customer Zone
            </p>
          </div>
        </div>
      </div>


      {/* Bottom Nav Section */}
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center mainMenu w-100">
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center ">
          {/* Categories Section */}
          <div className="d-flex gap-1 align-items-center border-end pe-2 mb-2 mb-lg-0">
            <BsGridFill size={20} className="text-primary" />
            <Link to="" className="fw-bold" style={{ fontSize: "13px" }}>
              All Categories
            </Link>
          </div>

          {/* Main Menu Links */}
          <ul className="list-unstyled d-flex justify-content-between align-items-center mb-0 gap-2 mt-2 mt-lg-0">
            {mainMenus.map((menu, index) => (
              <li key={index} className="mx-2">
                <Link
                  to=""
                  className="text-primary fw-bold"
                  style={{ fontSize: "13px" }}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Section */}
        <div
          className="d-flex justify-content-between align-items-center mt-2 mt-lg-0 gap-3"
          style={{ fontSize: "13px" }}
        >
          <p
            className="m-0"
            style={{ fontSize: "13px", color: "#929292", cursor: "pointer" }}
          >
            Compare (17)
          </p>
          <p
            className="text-primary d-flex align-items-center gap-1 m-0"
            style={{ cursor: "pointer" }}
          >
            <FaHeart size={16} />
            Wishlist (17)
          </p>
          <p
            className="text-primary d-flex align-items-center gap-1 m-0"
            style={{ cursor: "pointer" }}
          >
            <MdEmail size={16} />
            Notification (17)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
