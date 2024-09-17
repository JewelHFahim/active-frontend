import "./PopularCategories.scss";
import img from "../../../assets/images/mobile.jpg";

const PopularCategories = () => {
  return (
    <div className=" mt-4 w-100 border border-2 border-primary rounded-2 p-4 d-flex flex-column flex-lg-row justify-content-between align-items-center PopularCategories">
      {/*section infos */}
      <div>
        <p
          className="text-info m-0"
          style={{ fontSize: "20px", fontWeight: "900" }}
        >
          Popular Categories
        </p>
        <p className="text-info mt-2" style={{ fontSize: "17px" }}>
          What our customers find interesting
        </p>

        <button className="mt-2 bg-primary text-secondary rounded-2 border-0 fw-bold">
          All Popular Categories
        </button>
      </div>

      <div className="row g-4 mt-4 mt-lg-0">
        {[...Array(6)].map((item, index) => {
          return (
            <div
              key={index}
              className="col-12 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center"
            >
              <div className="rounded-2 products">
                <img
                  src={img}
                  className="w-100 h-100 rounded-2 object-fit-cover"
                  alt=""
                />
              </div>
              <p
                className="fw-bold text-secondary mt-3"
                style={{ fontSize: "13px" }}
              >
                Women’s Corner
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategories;
