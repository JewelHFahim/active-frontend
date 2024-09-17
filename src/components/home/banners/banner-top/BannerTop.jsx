import img from "../../../../assets/images/mobile.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function BannerTop() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        loop={true}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {[...Array(4)].map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-100 bg-primary bg-opacity-50 d-flex justify-content-between align-items-center"
              style={{
                height: "344px",
                marginTop: "5.5%",
                padding: "0 8%",
                borderRadius: "8px",
              }}
            >
              <div>
                <h1
                  className="m-0 lh-sm text-center text-lg-start"
                  style={{
                    fontSize: "2.5rem",
                    fontFamily: "font-family-openSans",
                  }}
                >
                  Offers You Can’t Resist
                </h1>
                <p
                  className="m-0 text-center text-lg-start"
                  style={{
                    fontSize: "17px",
                    fontFamily: "font-family-lato",
                    color: "#3E3F52",
                  }}
                >
                  Fashion, Smartphones & more
                </p>

                <div
                  className="d-flex flex-column-reverse flex-lg-row align-items-center  gap-4 "
                  style={{ height: "100%", marginTop: "23px" }}
                >
                  <button
                    className="bg-secondary fw-bold text-white"
                    style={{
                      width: "120px",
                      height: "40px",
                      borderRadius: "8px",
                      fontFamily: "font-family-lato",
                      fontSize: "13px",
                      lineHeight: "40px",
                      padding: "0",
                    }}
                  >
                    Shop Now
                  </button>
                  <p
                    className="text-secondary fw-bold mb-0"
                    style={{
                      fontFamily: "font-family-lato",
                      fontSize: "13px",
                      lineHeight: "40px",
                    }}
                  >
                    Upto 60% Discount
                  </p>
                </div>
              </div>

              <div
                className="bg-white d-none d-lg-block"
                style={{ width: "45%", height: "320px" }}
              >
                <img
                  src={img}
                  className="w-100 h-100 rounded-2 object-fit-cover"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
