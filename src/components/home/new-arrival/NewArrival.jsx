import "./NewArrival.scss";
import img from "../../../assets/images/mobile.jpg";

const NewArrival = () => {
  return (
    <div className="mt-5 mt-lg:4">
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
        <div>
          <p
            className="text-info m-0"
            style={{ fontSize: "20px", fontWeight: "900" }}
          >
            Newly Arrived
          </p>
          <p className="text-info m-0" style={{ fontSize: "13px" }}>
            Products arrived in last 30 days
          </p>
        </div>

        <button
          className="bg-primary border-0 fw-bold mt-4 mt-lg-0"
          style={{
            width: "170px",
            height: "40px",
            borderRadius: "22px",
            fontSize: "12px",
          }}
        >
          View All New Products
        </button>
      </div>

      <div className="row g-4" style={{ marginTop: "23px" }}>
        {[...Array(6)].map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div
              className="bg-secondary-subtle rounded-2"
              style={{ width: "100%", height: "240px" }}
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

export default NewArrival;
