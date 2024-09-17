import "./Classifieds.scss";
import img from "../../../assets/images/mobile.jpg";

const Classifieds = () => {
  return (
    <div className="mt-5 w-100 Classifieds">
      <div>
        <h2
          className="text-info m-0"
          style={{ fontSize: "30px", fontWeight: "900" }}
        >
          Classifieds
        </h2>
        <p className="mt-2" style={{ fontSize: "17px", color: "#3E3F51" }}>
          Sell your own product
        </p>
      </div>

      <div className="w-100 d-flex flex-column flex-xl-row gap-3 boxContainer">
        <div
          className="bg-secondary-subtle rounded-2"
          style={{ width: "100%", height: "100%", minHeight: "50%" }}
        >
          <img
            src={img}
            className="w-100 h-100 rounded-2 object-fit-cover"
            alt=""
          />
        </div>

        <div
          className="d-flex flex-column flex-lg-row gap-3"
          style={{ width: "100%", height: "100%" }}
        >
          <div
            className="border rounded-2 p-3"
            style={{ width: "100%", height: "100%" }}
          >
            <p className="fw-bold text-secondary" style={{ fontSize: "17px" }}>
              New in Classifieds
            </p>

            <div className="rounded-2 bg-secondary-subtle mt-4 posterCont">
              <img
                src={img}
                className="w-100 h-100 rounded-2 object-fit-cover"
                alt=""
              />
            </div>

            <button
              className=" btn btn-outline-info border rounded-5 fw-bold px-4 py-2"
              style={{
                fontSize: "12px",
                width: "168px",
                height: "42px",
                marginTop: "66px",
              }}
            >
              View All Products
            </button>
          </div>
          <div
            className="border rounded-2 p-3"
            style={{ width: "100%", height: "100%" }}
          >
            <p className="fw-bold text-secondary" style={{ fontSize: "17px" }}>
              Used Products
            </p>
            <div className="rounded-2 bg-secondary-subtle mt-4 posterCont">
              <img
                src={img}
                className="w-100 h-100 rounded-2 object-fit-cover"
                alt=""
              />
            </div>

            <button
              className=" btn btn-outline-info border rounded-5 fw-bold px-4 py-2"
              style={{
                fontSize: "12px",
                width: "168px",
                height: "42px",
                marginTop: "66px",
              }}
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classifieds;
3;
