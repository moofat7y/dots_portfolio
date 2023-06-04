import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../scss/app.css";

// import required modules
import { Pagination } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Slider = ({ data, isLoading }) => {
  SwiperCore.use([Autoplay]);

  const images_list = data?.map((image, index) => {
    return (
      <SwiperSlide key={image._id}>
        <div className="outer-img px-2 bg-primary px-md-0">
          <LazyLoadImage
            effect="blur"
            src={image.secure_url}
            className="ratio ratio-1x3 rounded-3"
            alt=""
          />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="my-5">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          440: {
            slidesPerView: 2,
          },
          576: {
            // width: 576,
            slidesPerView: 2,
          },
          768: {
            // width: 768,
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay
        pagination={{
          clickable: true,
        }}
        initialSlide={Math.round(data?.length / 2)}
        modules={[Pagination]}
        className="mySwiper"
      >
        {isLoading ? (
          <>
            <SwiperSlide>
              <div className="outer-img loading px-2 bg-primary px-md-0">
                <div className="ratio ratio-1x3 rounded-3"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="outer-img loading px-2 bg-primary px-md-0">
                <div className="ratio ratio-1x3 rounded-3"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="outer-img loading px-2 bg-primary px-md-0">
                <div className="ratio ratio-1x3 rounded-3"></div>
              </div>
            </SwiperSlide>
          </>
        ) : (
          images_list
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
