import { Link } from "react-router-dom";
import img from "../../../assets/images/mobile.jpg";

const EarlyBirds = () => {
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p
            className="text-info m-0"
            style={{ fontSize: "20px", fontWeight: "900" }}
          >
            Early Bird Offers
          </p>
          <p className="text-info m-0" style={{ fontSize: "13px" }}>
            Products arrived in last 30 days
          </p>
        </div>

        <Link
          to=""
          className="text-decoration-none"
          style={{ fontSize: "12px", color: "#0B80FD" }}
        >
          All Products
        </Link>
      </div>

      <div className="row g-3 mt-3">
        {[...Array(6)].map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div
              className="bg-secondary-subtle rounded-2"
              style={{ width: "100%", height: "208px" }}
            >
              <img
                src={img}
                className="w-100 h-100 rounded-2 object-fit-cover"
                alt=""
              />
            </div>

            <div className="mt-3">
              <p className="text-info m-0" style={{ fontSize: "13px" }}>
                Women’s Beauty Products
              </p>
              <p
                className="text-secondary fw-bold mt-2"
                style={{ fontSize: "13px" }}
              >
                Upto 70% discount
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarlyBirds;
