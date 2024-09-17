import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img from "../../../assets/images/mobile.jpg";

export default function PopularSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {[...Array(20)].map((item, i) => (
          <SwiperSlide key={i}>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
