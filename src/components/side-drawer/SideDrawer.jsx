import { useState } from "react";
import { FaChair } from "react-icons/fa";
import { BiSolidGridAlt } from "react-icons/bi";
import "../../custom.scss";
import { Link } from "react-router-dom";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { PiBabyCarriageLight, PiBuildingsThin } from "react-icons/pi";
import { LuShirt, LuTv } from "react-icons/lu";
import { MdOutlineKitchen, MdOutlinePhoneAndroid } from "react-icons/md";
import { GiWatch } from "react-icons/gi";
import { CgLaptop } from "react-icons/cg";
import { FiPrinter } from "react-icons/fi";
import { CiDumbbell } from "react-icons/ci";
import {
  IoCameraOutline,
  IoHammerOutline,
  IoTennisballOutline,
} from "react-icons/io5";
import { GrGamepad } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";

const SideDrawer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [active, setActive] = useState("allCat");

  const menus = [
    {
      name: "All Categories",
      path: "",
      activeValue: "allCat",
      icon: <BiSolidGridAlt />,
      toogle: true,
    },
    {
      name: "Women's Corner",
      activeValue: "home",
      path: "",
      icon: <AiOutlineWoman />,
    },
    {
      name: "Men's Corder",
      activeValue: "mens",
      path: "",
      icon: <AiOutlineMan />,
    },
    {
      name: "Baby Items",
      activeValue: "baby",
      path: "",
      icon: <PiBabyCarriageLight />,
    },
    {
      name: "Kid's Zone",
      activeValue: "kid",
      path: "",
      icon: <LuShirt />,
    },
    {
      name: "Smartphones & Tablets",
      activeValue: "phone",
      path: "",
      icon: <MdOutlinePhoneAndroid />,
    },
    {
      name: "Watches",
      activeValue: "watch",
      path: "",
      icon: <GiWatch />,
    },
    {
      name: "Laptops & PCs",
      activeValue: "laptop",
      path: "",
      icon: <CgLaptop />,
    },
    {
      name: "Computer Accessories",
      activeValue: "setting",
      path: "",
      icon: <FiPrinter />,
    },
    {
      name: "TV & Entertainment",
      activeValue: "tv",
      path: "",
      icon: <LuTv />,
    },
    {
      name: "Body Fitness & Health",
      activeValue: "dumbell",
      path: "",
      icon: <CiDumbbell />,
    },
    {
      name: "Sports Item",
      activeValue: "sports",
      path: "",
      icon: <IoTennisballOutline />,
    },
    {
      name: "Camera & Drones",
      activeValue: "camera",
      path: "",
      icon: <IoCameraOutline />,
    },
    {
      name: "Gamers Zone",
      activeValue: "gamers",
      path: "",
      icon: <GrGamepad />,
    },
    {
      name: "Home Appliances",
      activeValue: "homeapp",
      path: "",
      icon: <MdOutlineKitchen />,
    },
    {
      name: "Furniture & Home Decor’s",
      activeValue: "furnichair",
      path: "",
      icon: <FaChair />,
    },
    {
      name: "Hardware Store",
      activeValue: "hardware",
      path: "",
      icon: <IoHammerOutline />,
    },
    {
      name: "Building Materials",
      activeValue: "building",
      path: "",
      icon: <PiBuildingsThin />,
    },
  ];

  const handleActive = (value) => {
    setActive(value);
  };

  return (
    <div className="d-flex" style={{ fontFamily: "Lato, sans-serif" }}>
      {/* Sidebar */}
      <div
        className={`sidebar text-white d-flex border-end ${
          isExpanded ? "expanded " : "collapsed"
        }`}
        style={{ height: "100vh", transition: "width 0.3s" }}
      >
        <ul
          className={`nav ms-2 mt-2 flex-column ${
            isExpanded ? "w-100 me-4" : "pe-2"
          }`}
        >
          <li className="nav-item">
            {menus.map((menu, index) => {
              return (
                <Link
                  key={index}
                  to={menu.path}
                  className={`${
                    active === menu.activeValue ? "bg-primary rounded-5" : ""
                  } d-flex mt-1 flex-column align-items-start gap-2 MenuLink`}
                  onClick={() => {
                    if (menu.toogle) {
                      setIsExpanded((prev) => !prev);
                      handleActive("allCat");
                    } else {
                      handleActive(menu.activeValue);
                    }
                  }}
                >
                  <div className="d-flex align-items-center gap-2 w-100">
                    <span
                      className={
                        active === menu.activeValue
                          ? "text-white"
                          : "text-dark opacity-50"
                      }
                      style={{ fontSize: "16px", color: "#06072C" }}
                    >
                      {menu.icon}
                    </span>

                    {isExpanded && (
                      <span
                        className="text-dark fw-bold mt-1 d-flex justify-content-between align-content-center w-100"
                        style={{ fontSize: "13px", color: "#06072C" }}
                      >
                        {menu.name}

                        <IoIosArrowForward className="mt-1 opacity-50" />
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
