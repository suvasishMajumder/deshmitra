import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
// import "swiper/css";
import 'bootstrap';
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
import type {THeroCarouselItem} from "../types/types";


import { motion } from "framer-motion";




const carouselItems: THeroCarouselItem[] = [
  {
    keyword: "Premium Products",
    description: "Explore our selection of high-quality everyday essentials",
    image: "/11.webp",
    color: "#66a3ff"
  },
  {
    keyword: "Quality Selection",
    description: "From producer to your doorstep, with care and quality",
    image: "/14.webp",
    color: "#7cb8ff"
  },
  {
    keyword: "Organic Goods",
    description: "Naturally grown and ethically sourced products",
    image: "/13.webp",
    color: "#7cb8ff"
  },
  {
    keyword: "Global Reach",
    description: "Serving customers worldwide with premium quality products",
    image: "/12.webp",
    color: "#7cb8ff"
  },
  {
    keyword: "Sustainable Future",
    description: "Committed to eco-friendly practices and sustainable sourcing",
    image: "/15.webp",
    color: "#7cb8ff"
  }
];

export default function HeroCarousel() {
  return (
    <div className="position-relative hero-carousel-wrapper overflow-hidden rounded-4" style={{ marginTop: "150px" }}>
      <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        effect="fade"
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop
        className="hero-swiper"
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="position-relative hero-slide" style={{ height: "520px", padding: '0px 0px 0px 50px' }}>
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 7, ease: "easeInOut" }}
                className="w-100 h-100 position-absolute top-0 start-0"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.85)"
                }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background: `linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.4) 100%)`,
                  zIndex: 1
                }}
              />

              <div className="container h-100 position-relative" style={{ zIndex: 2 }}>
                <div className="row h-100 align-items-center">
                  <div className="col-lg-6">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-white p-4"
                    >

                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="display-4 fw-bold mb-3"
                        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
                      >
                        {item.keyword}
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="lead mb-4"
                        style={{ maxWidth: "500px", fontSize: "1.3rem", fontWeight: "300" }}
                      >
                        {item.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="d-flex gap-3 flex-wrap"
                      >
                        {/* <motion.button
                          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          className="btn px-4 py-2 rounded-pill"
                          style={{
                            background: `linear-gradient(45deg, ${item.color}, ${item.color}dd)`,
                            border: "none",
                            color: "#fff",
                            fontSize: "1.1rem",
                            fontWeight: "500"
                          }}
                        >
                          Shop Now
                        </motion.button> */}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .hero-carousel-wrapper {
          margin-top: 20px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }
        
        .hero-swiper .swiper-pagination {
          bottom: 25px;
        }
        
        .hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s;
        }
        
        .hero-swiper .swiper-pagination-bullet-active {
          background: #ffffff;
          width: 30px;
          border-radius: 8px;
        }
        
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.25);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .hero-swiper .swiper-button-next:hover,
        .hero-swiper .swiper-button-prev:hover {
          background: #3a7bfc;
          transform: scale(1.1);
        }
        
        .hero-swiper .swiper-button-next::after,
        .hero-swiper .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }
        
        @media (max-width: 768px) {
          .hero-slide {
            height: 450px !important;
            padding: 0 20px !important;
          }
          
          .hero-swiper .swiper-button-next,
          .hero-swiper .swiper-button-prev {
            width: 40px;
            height: 40px;
          }
          
          .hero-swiper .swiper-button-next::after,
          .hero-swiper .swiper-button-prev::after {
            font-size: 16px;
          }
        }
        
        @media (max-width: 576px) {
          .hero-slide {
            height: 350px !important;
          }
        }
      `}</style>
    </div>
  );
}