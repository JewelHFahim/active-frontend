import "./Display.scss";
import img from "../../../assets/images/mobile.jpg";

const Display2 = () => {
  return (
    <div
      className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3 display2"
      style={{ marginTop: "47px" }}
    >
      <div className="bg-secondary-subtle rounded-2 boxLeft">
        <img
          src={img}
          className="w-100 h-100 rounded-2 object-fit-cover"
          alt=""
        />
      </div>

      <div className="d-flex gap-3 boxright">
        <div
          className="bg-secondary-subtle rounded-2"
          style={{ width: "50%", height: "344px" }}
        >
          <img
            src={img}
            className="w-100 h-100 rounded-2 object-fit-cover"
            alt=""
          />
        </div>

        <div
          className="d-flex flex-column gap-3"
          style={{ width: "50%", height: "344px" }}
        >
          <div
            className="bg-secondary-subtle rounded-2"
            style={{ width: "100%", height: "50%" }}
          >
            <img
              src={img}
              className="w-100 h-100 rounded-2 object-fit-cover"
              alt=""
            />
          </div>

          <div
            className="bg-secondary-subtle rounded-2"
            style={{ width: "100%", height: "50%" }}
          >
            <img
              src={img}
              className="w-100 h-100 rounded-2 object-fit-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display2;
