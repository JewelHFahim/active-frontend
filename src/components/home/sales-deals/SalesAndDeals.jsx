import { Link } from "react-router-dom";
import "./SalesAndDeals.scss";
import img from "../../../assets/images/mobile.jpg";

const SalesAndDeals = () => {
  return (
    <div className="w-100 d-flex gap-4 flex-column flex-lg-row SalesAndDeals">
      {/* Left Portion */}
      <div className="rounded-2 p-3 bg-opacity-25 SD-LeftPortion">
        <div className="d-flex align-items-center justify-content-between">
          <h2>Sale Campaigns</h2>
          <Link
            to=""
            className="text-decoration-none"
            style={{ color: "#0B80FD", fontSize: "12px" }}
          >
            All Campaigns
          </Link>
        </div>

        <div className="mt-2 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {[...Array(3)].map((item, index) => (
            <div key={index} className="col">
              <div
                className="rounded-2 mb-3"
                style={{
                  width: "100%",
                  height: "160px",
                  backgroundColor: "#E5E5E9",
                }}
              >
                <img src={img} className="w-100 h-100 object-fit-cover rounded-2" alt="" />
              </div>
              <div style={{ color: "#3E3F52" }}>
                <h3 className="fw-bold m-0" style={{ fontSize: "17px" }}>
                  Summer Sales
                </h3>
                <p className="mt-1" style={{ fontSize: "13px" }}>
                  Only 3 days left
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Portion */}
      <div className="rounded-2 p-3 bg-opacity-25 SD-RightPortion">
        <div className="d-flex align-items-center justify-content-between">
          <h2>Deals of the Day</h2>
          <Link to="" className="text-decoration-none SD-Link">
            View All Deals
          </Link>
        </div>

        <div className="mt-3 d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3">
          <div className="d-flex flex-column flex-lg-row align-items-center gap-4 lg-width-60">
            <div className="rounded-2 deal-box">
            <img src={img} className="w-100 h-100 rounded-2 object-fit-cover" alt="" />
            </div>

            <div className="middle-160">
              <button className="text-secondary border-0 bg-primary fw-bold">
                Top Deals
              </button>

              <h4 className="mt-4">Smartphones</h4>
              <p className="slogan">Samsung, Oneplus, Nokia, Motorola & more</p>

              <div className="fw-bold text-secondary mt-4">
                <p className="m-0">Under $200.00</p>
                <p className="m-1">Free Gifts</p>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column gap-3 lg-width-40">
            {[...Array(3)].map((item, index) => (
              <div key={index} className="d-flex gap-3">
                <div className="rounded-2 boxes"><img src={img} className="w-100 h-100 rounded-2 object-fit-cover" alt="" /></div>
                <div>
                  <p className="m-0">Headphones</p>
                  <p className="text-secondary fw-bold mt-1">From $0.99</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAndDeals;
