import img from "../../../assets/images/mobile.jpg";

const Auctions = () => {
  return (
    <div className="mt-5 w-100">
      <div>
        <h2
          className="text-info m-0"
          style={{ fontSize: "30px", fontWeight: "900" }}
        >
          Auctions
        </h2>
        <p className="mt-2" style={{ fontSize: "17px", color: "#3E3F51" }}>
          Bid, Win, Smile: Your Ultimate Auction Experience
        </p>
      </div>

      <div
        className="mt-4 d-flex flex-column flex-lg-row align-items-center gap-3"
        style={{ height: "504px" }}
      >
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
          className="d-flex flex-column gap-3"
          style={{ width: "100%", height: "100%", minHeight: "50%" }}
        >
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
            className="bg-secondary-subtle rounded-2"
            style={{ width: "100%", height: "100%" }}
          >
            <img
              src={img}
              className="w-100 h-100 rounded-2 object-fit-cover"
              alt=""
            />
          </div>
        </div>

        <div
          className="d-flex flex-column gap-3"
          style={{ width: "100%", height: "100%" }}
        >
          <div
            className="rounded-2 p-3"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#FAFAFC",
            }}
          >
            <p className="text-secondary fw-bold" style={{ fontSize: "17px" }}>
              Auctions About to End
            </p>

            <div className="d-flex flex-wrap flex-md-nowrap justify-content-between align-items-center gap-2">
              {[...Array(3)].map((item, i) => (
                <div key={i} className="d-flex flex-column align-items-center">
                  <div
                    className="bg-secondary-subtle rounded-2"
                    style={{ width: "120px", height: "120px" }}
                  >
                    <img
                      src={img}
                      className="w-100 h-100 rounded-2 object-fit-cover"
                      alt=""
                    />
                  </div>
                  <p
                    className="fw-bold text-secondary mt-2"
                    style={{ fontSize: "13px" }}
                  >
                    Women’s Corner
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2 p-3"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#FAFAFC",
            }}
          >
            <p className="text-secondary fw-bold" style={{ fontSize: "17px" }}>
              Auctions About to End
            </p>

            <div className="d-flex flex-wrap flex-md-nowrap justify-content-between align-items-center gap-2">
              {[...Array(3)].map((item, i) => (
                <div key={i} className="d-flex flex-column align-items-center">
                  <div
                    className="bg-secondary-subtle rounded-2"
                    style={{ width: "120px", height: "120px" }}
                  >
                    <img
                      src={img}
                      className="w-100 h-100 rounded-2 object-fit-cover"
                      alt=""
                    />
                  </div>
                  <p
                    className="fw-bold text-secondary mt-2"
                    style={{ fontSize: "13px" }}
                  >
                    Women’s Corner
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auctions;
