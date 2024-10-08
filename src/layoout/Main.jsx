import SideDrawer from "../components/side-drawer/SideDrawer";
import Navbar from "../components/nav/Navbar";
import HomePage from "../components/home/HomePage";
import MobileNav from "../components/mobile-nav/MobileNav";

const Main = () => {
  return (
    <div className="relative">

      <div className=" position-fixed left-0 top-0 bg-white d-none d-lg-block" style={{ zIndex: "9999"}}>
        <SideDrawer />
      </div>

      <div>
        <div
          className="d-none d-xl-block position-fixed w-100 bg-secondary"
          style={{ padding: "0px 14%", top: "0", zIndex: "999" }}
        >
          <Navbar />
        </div>

        <div className="d-xl-none position-fixed w-100 top-0">
          <MobileNav />
        </div>

        <div style={{ padding: "0px 14%", margin: "100px 0"}}>
          <HomePage />
        </div>

        
      </div>
    </div>
  );
};

export default Main;
