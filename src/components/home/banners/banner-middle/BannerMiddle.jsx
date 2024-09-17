import img from "../../../../assets/images/mobile.jpg";
const BannerMiddle = () => {
  return (
    <div className="mt-5 bg-secondary w-100" style={{ height: "216px" }}>
      <img
        src={img}
        className="w-100 h-100 object-fit-cover"
        alt=""
      />
    </div>
  );
};

export default BannerMiddle;
