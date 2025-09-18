import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
const sliderData = [
  {
    imgSrc: "/images/slider/slider-home3-1.jpg",
    title: "Ergonomic Seating Solutions",
    description: "Boost comfort and productivity with ergonomic seating.",
  },
  {
    imgSrc: "/images/slider/slider-home3-2.jpg",
    title: (
      <>
        Modern <br /> Office Desks
      </>
    ),
    description: "Enhance your workspace with sleek, functional office desks.",
  },
  {
    imgSrc: "/images/slider/slider-home3-3.jpg",
    title: "Innovative Storage Solutions",
    description:
      "Keep your office organized with smart and stylish storage options.",
  },
];
export default function Hero() {
  return (
    <div className="tf-slideshow style-3 slider-effect-fade">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
          el: ".spd13",
        }}
        navigation={{
          prevEl: ".snbp13",
          nextEl: ".snbn13",
        }}
        spaceBetween={15}
        dir="ltr"
        className="swiper tf-sw-slideshow"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className="wrap-slider">
              <div className="img-style">
                <img
                  className="lazyload"
                  data-src={slide.imgSrc}
                  alt="banner-cls"
                  src={slide.imgSrc}
                  width={1840}
                  height={840}
                />
              </div>
              <div className="box-content">
                <div className="box-title">
                  <div className="text-white text-display fade-item fade-item-1">
                    {slide.title}
                  </div>
                  <p className="text-body-1 text-white fade-item fade-item-2">
                    {slide.description}
                  </p>
                </div>
                <div className="fade-item fade-item-3">
                  <a href="#" className="tf-btn btn-white mx-auto">
                    Explore Collection <i className="icon-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="wrap-pagination">
          <div className="container">
            <div className="sw-dots sw-pagination-slider type-circle white-circle-line justify-content-center spd13" />
          </div>
        </div>
        <div className="sw-button swiper-button-next navigation-next-slider snbp13" />
        <div className="sw-button swiper-button-prev navigation-prev-slider snbn13" />
      </Swiper>
    </div>
  );
}
