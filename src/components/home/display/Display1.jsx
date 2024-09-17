import img from "../../../assets/images/mobile.jpg";
const Display1 = () => {
  return (
    <div className="row g-3" style={{ marginTop: "47px" }}>
      {[...Array(3)].map((item, index) => (
        <div key={index} className="col-12 col-md-6 col-lg-4">
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
        </div>
      ))}
    </div>
  );
};

export default Display1;
