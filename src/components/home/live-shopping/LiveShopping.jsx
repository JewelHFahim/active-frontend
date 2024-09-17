import img from "../../../assets/images/mobile.jpg";


const LiveShopping = () => {
  return (
    <div className="mt-5">

      {/* Section Title */}
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">

        <div>
          <h2
            className="text-info"
            style={{ fontSize: "30px", fontWeight: "900" }}
          >
            Live Shopping
          </h2>
          <p className="mt-2" style={{ fontSize: "17px", color: "#3E3F51" }}>
            Experience the new way of shopping…
          </p>
        </div>

        <button
          className="btn btn-outline-info border rounded-5 fw-bold px-4 py-2"
          style={{ fontSize: "12px", width: "168px", height: "42px" }}
        >
          All Live Shopping
        </button>
      </div>

      {/* Products Card */}
      <div
        className="w-100 row mt-4"
        style={{ height: "396px" }}
      >
        {[...Array(6)].map((item, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 g-2">
            <div
              key={i}
              className="bg-secondary-subtle rounded-2 p-2 d-flex flex-column justify-content-end"
              style={{ width: "100%", height: "100%", minHeight: "390px", backgroundImage: `URL(${img})` }}
            >
              <div
                className="rounded-2 mb-4 p-2 p-xl-3"
                style={{ height: "92px", backgroundColor: "RGBA(0,0,0,0.3 )" }}
              >
                <p
                  className="fw-bold m-0"
                  style={{ fontSize: "", color: "#EAEAEA" }}
                >
                  Fantech Associates..
                </p>
                <p
                  className="m-0"
                  style={{ fontSize: "10px", color: "#EAEAEA" }}
                >
                  Included 32 Products
                </p>
                <p
                  className="m-0"
                  style={{ fontSize: "10px", color: "#EAEAEA" }}
                >
                  Included 32 Products
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveShopping;
