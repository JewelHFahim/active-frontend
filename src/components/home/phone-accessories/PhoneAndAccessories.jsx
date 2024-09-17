import { Link } from "react-router-dom";
import img from "../../../assets/images/mobile.jpg";

const PhoneAndAccessories = () => {
  const menus = [
    {
      name: "iPhones",
      path: "",
    },
    {
      name: "Smartphones under $200",
      path: "",
    },
    {
      name: "Free Gifts",
      path: "",
    },
    {
      name: "Charger",
      path: "",
    },
    {
      name: "Charging Cables",
      path: "",
    },
  ];
  return (
    <div className="mt-5">
      <div className="d-flex flex-column text-center text-lg-start flex-lg-row justify-content-between align-items-center">
        <div>
          <h2
            className="text-info"
            style={{ fontSize: "30px", fontWeight: "900" }}
          >
            Smartphone & Accessories
          </h2>
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center gap-3">
            {menus.map((item, i) => (
              <Link
                key={i}
                to=""
                className="fw-bold text-decoration-none"
                style={{ fontSize: "13px", color: "#0B80FD" }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <button
          className="mt-4 mt-lg-0 btn btn-outline-info border rounded-5 fw-bold px-4 py-2"
          style={{ fontSize: "12px", width: "168px", height: "42px" }}
        >
          View All Products
        </button>
      </div>

      <div>
        <div
          className="mt-4 w-100 d-flex flex-column flex-lg-row align-items-center gap-4"
          style={{ height: "454px", gap: "" }}
        >
          {/* Top Deals */}
          <div
            className="p-4"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#FAFAFC",
            }}
          >
            <p className="text-secondary fw-bold" style={{ fontSize: "17px" }}>
              Top Deals
            </p>
            <div
              className="rounded-2 bg-secondary-subtle d-flex flex-column justify-content-end align-items-center p-4"
              style={{
                width: "100%",
                height: "368px",
                backgroundImage: `URL(${img})`,
                objectFit: "cover",
              }}
            >
              <div className="text-center">
                <p
                  className="text-info fw-bold m-0"
                  style={{ fontSize: "17px" }}
                >
                  Summer Sales
                </p>
                <p className="text-info" style={{ fontSize: "13px" }}>
                  Only 3 days left
                </p>
              </div>
            </div>
          </div>

          {/* Most popular */}
          <div
            className=" p-4"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#FAFAFC",
            }}
          >
            <p className="text-secondary fw-bold" style={{ fontSize: "17px" }}>
              Most Popular
            </p>

            <div className="d-flex flex-column gap-3">
              {[...Array(4)].map((item, i) => (
                <div key={i} className="d-flex gap-3 d-flex align-items-center">
                  <div
                    className="rounded-2 bg-secondary-subtle"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <img
                      src={img}
                      className="w-100 h-100 rounded-2 object-fit-cover"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-info m-0" style={{ fontSize: "13px" }}>
                      Headphones
                    </p>
                    <p
                      className="text-info fw-bold mt-2"
                      style={{ fontSize: "13px" }}
                    >
                      From $0.99
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Display Products */}
          <div
            className="d-flex flex-column gap-3"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#FAFAFC",
            }}
          >
            <div
              className="bg-secondary-subtle rounded-2"
              style={{ width: "100%", height: "100%", minHeight: "215px" }}
            >
              <img
                src={img}
                className="w-100 h-100 rounded-2 object-fit-cover"
                alt=""
              />
            </div>
            <div
              className="bg-secondary-subtle rounded-2"
              style={{ width: "100%", height: "100%", minHeight: "215px" }}
            >
              <img
                src={img}
                className="w-100 h-100 rounded-2 object-fit-cover"
                alt=""
              />
            </div>
          </div>

          {/* On Sales */}
          <div
            className=" p-4"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "RGBA(255,68,0,0.12 )",
            }}
          >
            <p className="text-secondary fw-bold" style={{ fontSize: "17px" }}>
              On Sales
            </p>

            <div className="d-flex flex-column gap-3">
              {[...Array(4)].map((item, i) => (
                <div key={i} className="d-flex gap-3 d-flex align-items-center">
                  <div
                    className="rounded-2 bg-white"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <img
                      src={img}
                      className="w-100 h-100 rounded-2 object-fit-cover"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-info m-0" style={{ fontSize: "13px" }}>
                      Headphones
                    </p>
                    <p
                      className="text-info fw-bold mt-2"
                      style={{ fontSize: "13px" }}
                    >
                      From $0.99
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneAndAccessories;
