import { swiperSlides } from "@/data/features";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
export default function About() {
  return (
    <section className="flat-spacing-2 about-us-main pb-0">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <div className="heading-section text-center spacing-2">
              <h1 className="wow fadeInUp">We Are Talukder</h1>
              <p
                className="text-body-1 text_secondary wow fadeInUp"
                data-wow-delay="0.1s" 
              > 
                Talukder Group of Industries had started its journey since July, 1973. Founder chairman Mr. Nurul Islam Talukder established Talukder foundry Ltd (TFL) 
                with a vision of large-scale Industrialization. Now Talukder Group is a successful brand name as well as a flagship corporate name in corporate world 
                with great achievement with the dedicated service to all her stakeholders and partners. Under the leadership of Managing Director Mr. Samsul Arifin, 
                Talukder Group of Industries becomes the largest partner of LGED, JICA and PEDP4 in furnishing Primary Schools all over the Country. 
              </p> 
            </div> 
          </div>
          <div className="col-12"> 
            <div className="img-wrap"> 
              <img
                className="lazyload effect-paralax" 
                src="/images/section/section-about.jpg" 
                data-=""
                alt="" 
                width={1935} 
                height={1089}
              />
            </div>
            <div className="main-content">
              <div className="left">
                <h3 className="mb_11 wow fadeInUp">Our Mission</h3>
                <p
                  className="text_secondary text-body-1 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Our mission is to ensure the best-suited products for our customers, meeting their needs without causing any dissatisfaction.
                  We strive to create job opportunities for our people by providing the right platform to discover and utilize their potential.
                  As we believe that human resources are the most valuable asset of any organization, we are committed to ensuring the highest
                  level of employee satisfaction.
                </p>
              </div> 
              <div className="right">
                <h3 className="mb_11 wow fadeInUp">Our Vision</h3>
                <p
                  className="text_secondary text-body-1 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Furniture industry is a fast-growing sector of Bangladesh in terms of employment and production. 
                  The main objective of Talukder group is to serve the customers with best quality of products and
                  provide employment facility. The objective of Group is to grow equally in accordance with market
                  demand and always be viable technically, financially and in environmental aspects. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <Swiper
              dir="ltr"
              className="swiper tf-sw-iconbox"
              spaceBetween={15}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd22",
              }}
            >
              {swiperSlides.map((slide, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="tf-box-icon">
                    <div className="icon">
                      <i className={slide.iconClass} />
                    </div>
                    <div className="content">
                      <h5 className="title">{slide.title}</h5>
                      <p>{slide.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="sw-pagination-iconbox sw-dots type-circle d-flex justify-content-center spd22" /> 
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
