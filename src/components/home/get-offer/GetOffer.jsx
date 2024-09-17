import "./GetOffer.scss";
import img from "../../../assets/images/mobile.jpg";

const GetOffer = () => {
  return (
    <div className="w-100 p-2 p-lg-5 d-flex flex-column gap-5 GetOffer">
      <div className="d-flex flex-column-reverse flex-lg-row align-items-center gap-4">
        {/* Poster Image */}
        <div className="bg-secondary-subtle rounded-2 posterImag">
          <img
            src={img}
            className="w-100 h-100 rounded-2 object-fit-cover"
            alt=""
          />
        </div>

        {/* Duration Clock */}
        <div>
          <h1 className="text-info fw-bold">Get an Apple</h1>
          <p className="mt-1 text-info" style={{ fontSize: "20px" }}>
            Hurry up and get upto 20% discount on selected Apple Devices
          </p>

          <div className="mt-3 d-flex align-items-center gap-3">
            {[...Array(4)].map((item, i) => (
              <div
                key={i}
                className="bg-white d-flex flex-column justify-content-center align-items-center"
                style={{ width: "56px", height: "56px" }}
              >
                <p
                  className="text-info fw-bold m-0"
                  style={{ fontSize: "20px" }}
                >
                  120
                </p>
                <p
                  className="text-info rounded-2 m-0"
                  style={{ fontSize: "10px" }}
                >
                  Days
                </p>
              </div>
            ))}
          </div>
          <button
            className="mt-4 bg-primary border-0 rounded-2 fw-bold"
            style={{ width: "122px", height: "40px", fontSize: "13px" }}
          >
            Get Shopping
          </button>
        </div>
      </div>

      {/* Product List */}
      <div className="row g-3">
        {[...Array(5)].map((item, i) => (
          <div key={i} className="col-12 col-sm-6 col-lg-4  col-xl-1-5">
            <div
              className="d-flex bg-secondary-subtl justify-content-center align-items-center p-2 gap-2 rounded-2"
              style={{
                width: "100%",
                height: "112px",
                backgroundColor: "#E5E5E9",
              }}
            >
              <div
                className="bg-white rounded-2 border"
                style={{ width: "50%", height: "80px" }}
              >
                <img
                  src={img}
                  className="w-100 h-100 rounded-2 object-fit-cover"
                  alt=""
                />
              </div>

              <div style={{ width: "50%" }}>
                <p className="text-info m-0" style={{ fontSize: "13px" }}>
                  Kid’s bicycle (girls) & accessories
                </p>
                <p
                  className="text-secondary fw-bold m-0"
                  style={{ fontSize: "13px" }}
                >
                  Upto 60% discount
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetOffer;
