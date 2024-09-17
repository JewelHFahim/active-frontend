import "./ShopByCategory.scss";
import img from "../../../assets/images/mobile.jpg";

const ShopByCategory = () => {
  return (
    <div
      className="w-100 p-5 ShopByCategory"
      style={{ height: "480px", backgroundColor: "#FAFAFC", marginTop: "48px" }}
    >
      <div className="d-flex justify-content-center">
        <h2
          className="text-info"
          style={{ fontSize: "30px", fontWeight: "900" }}
        >
          Shop by Categories
        </h2>
      </div>

      <div className="container mt-4">
        <div className="row">
          {[...Array(16)].map((item, i) => (
            <div key={i} className="col-xl-8 col-lg-2 col-md-3 col-sm-6">
              <div className=" d-flex flex-column align-items-center gap-2 mb-4">
                <div className="bg-secondary-subtle rounded-2 products">
                  <img
                    src={img}
                    className="w-100 h-100 rounded-2 object-fit-cover"
                    alt=""
                  />
                </div>
                <p className="fw-bold" style={{ fontSize: "13px" }}>
                  Women’s Corner
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
