import img from "../../../assets/images/mobile.jpg";

const Display3 = () => {
  return (
    <div className="container-fluid mt-5 w-100 gap-3 diplay3">
      {/* First Column */}
      <div className="bg-secondary-subtle rounded-2" style={{ height: "100%" }}>
        <img
          src={img}
          className="w-100 h-100 rounded-2 object-fit-cover"
          alt=""
        />
      </div>

      {/* Second Column */}
      <div className="d-flex flex-lg-column flex-row gap-2 gap-lg-3 seconddColumn">
        <div className="bg-secondary-subtle rounded-2 box1">
          <img
            src={img}
            className="w-100 h-100 rounded-2 object-fit-cover"
            alt=""
          />
        </div>
        <div className="bg-secondary-subtle rounded-2 box1">
          <img
            src={img}
            className="w-100 h-100 rounded-2 object-fit-cover"
            alt=""
          />
        </div>
      </div>

      {/* Third Column */}

      <div className="d-flex flex-lg-column flex-row gap-2 gap-lg-3 seconddColumn">
        <div className="bg-secondary-subtle rounded-2 box1">
          <img
            src={img}
            className="w-100 h-100 rounded-2 object-fit-cover"
            alt=""
          />
        </div>
        <div className="bg-secondary-subtle rounded-2 box1">
          <img
            src={img}
            className="w-100 h-100 rounded-2 object-fit-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Display3;
