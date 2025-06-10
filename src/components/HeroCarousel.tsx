import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import type { THeroCarouselItem } from "../types/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const carouselItems: THeroCarouselItem[] = [
  {
    keyword: "Premium Products",
    description: "Explore our selection of high-quality everyday essentials",
    image: "/11.webp",
    color: "#66a3ff",
  },
  {
    keyword: "Quality Selection",
    description: "From producer to your doorstep, with care and quality",
    image: "/14.webp",
    color: "#7cb8ff",
  },
  {
    keyword: "Organic Goods",
    description: "Naturally grown and ethically sourced products",
    image: "/13.webp",
    color: "#7cb8ff",
  },
  {
    keyword: "Global Reach",
    description: "Serving customers worldwide with premium quality products",
    image: "/12.webp",
    color: "#7cb8ff",
  },
  {
    keyword: "Sustainable Future",
    description: "Committed to eco-friendly practices and sustainable sourcing",
    image: "/15.webp",
    color: "#7cb8ff",
  },
];

export default function HeroCarousel() {
  return (
    <div className="relative mx-2.5 ds:mx-20 mt-[150px] overflow-hidden rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
      <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        effect="fade"
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="hero-swiper"
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[375px] md:h-[450px] sm:h-[350px] pl-[50px] sm:pl-5">
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 7, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center brightness-[0.85]"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/40 z-[1]"
              />

              <div className="container relative z-[2] h-full mx-auto px-4">
                <div className="flex items-center h-full">
                  <div className="lg:w-1/2 text-white p-4">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-4xl md:text-5xl font-bold mb-3 text-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
                    >
                      {item.keyword}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-lg md:text-[1.3rem] font-light mb-4 max-w-[500px]"
                    >
                      {item.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="flex flex-wrap gap-3"
                    >
                      {/* <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="px-4 py-2 rounded-full text-white text-[1.1rem] font-medium"
                        style={{
                          background: `linear-gradient(45deg, ${item.color}, ${item.color}dd)`,
                          border: "none",
                        }}
                      >
                        Shop Now
                      </motion.button> */}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
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
      `}</style>
    </div>
  );
}