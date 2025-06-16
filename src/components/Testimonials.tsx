import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import type { TTestimonials } from "../types/types";

const testimonials: TTestimonials[] = [
  { quote: "Their products are my family's favorite - everything is premium quality!", image: "https://picsum.photos/120/120?random=1", name: "Dipanjana Nandi", location: "Bengaluru", rating: 5 },
  { quote: "Akdenar makes shopping so convenient with fast delivery and excellent service!", image: "https://picsum.photos/120/120?random=2", name: "Shalini Bardhan", location: "Kolkata", rating: 5 },
  { quote: "Absolutely love their selection! Everything arrives in perfect condition.", image: "https://picsum.photos/120/120?random=3", name: "Rukma Dakshy", location: "Kolkata", rating: 4 },
  { quote: "I've never had a delivery service better than Akdenar!", image: "https://picsum.photos/120/120?random=4", name: "Bitu Mazumder", location: "Kolkata", rating: 5 },
  { quote: "Their premium selection is worth every penny - quality you can trust!", image: "https://picsum.photos/120/120?random=5", name: "Alfateh Mustafa", location: "Bengaluru", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-5 bg-gray-100 mt-[70px]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#3a7bfc_1px,transparent_1px),radial-gradient(#3a7bfc_1px,transparent_1px)] bg-[length:40px_40px] bg-[0_0,20px_20px] opacity-5 z-0"></div>

      <div className="absolute top-0 left-0 w-[20%] h-1/2 opacity-5 z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#3a7bfc" d="M47.5,-61.7C59.9,-53.5,67.3,-37.6,70.8,-21.5C74.3,-5.5,73.8,10.6,67.1,23.5C60.4,36.4,47.5,46.1,33.3,53.6C19.1,61.1,3.5,66.4,-14.8,68.2C-33.1,70.1,-54.1,68.5,-63.4,56.9C-72.7,45.3,-70.3,23.6,-68.5,3.4C-66.7,-16.7,-65.4,-35.4,-55.6,-44C-45.9,-52.7,-27.7,-51.4,-11.7,-52.8C4.3,-54.2,35.1,-69.9,47.5,-61.7Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-1/4 h-[40%] opacity-5 z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#3a7bfc" d="M45.3,-59.4C58.8,-51.3,70.1,-38,73.7,-22.9C77.3,-7.8,73.3,9.1,66.4,24.1C59.5,39.1,49.8,52.2,37,60.1C24.1,68,8.2,70.8,-7.4,69.9C-23,69,-38.3,64.5,-47.3,54.3C-56.4,44.1,-59.2,28.2,-63.3,11.9C-67.4,-4.5,-72.8,-21.2,-67.9,-33.1C-63,-45.1,-47.9,-52.2,-33.8,-60C-19.7,-67.8,-6.5,-76.2,6.8,-75.9C20.1,-75.7,40.1,-67,45.3,-59.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container relative mx-auto px-4 z-[1]">
        {/* Section header */}
        <div className="text-center mb-5">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-blue-500/10 text-blue-500 font-medium px-3 py-2 rounded-full mb-3"
          >
            Customer Stories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            What Our Customers{" "}
            <span className="bg-gradient-to-r from-[#3a7bfc] to-[#0046c0] bg-clip-text text-transparent">
              Love
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl mx-auto max-w-[700px]"
          >
            Real experiences from people who trust our selection every day
          </motion.p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="testimonialSwiper py-4"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="h-full"
                whileHover={{ y: -10 }}
              >
                <div className="h-full border-none rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 bg-[radial-gradient(150%_100%_at_100%_0%,#ffffff_0%,#f7f9fc_100%)]">
                  <div className="relative p-5">
                    <div className="absolute top-0 left-0 p-4 opacity-10">
                      <svg width="50" height="50" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5 13.5H13.5C11.0147 13.5 9 15.5147 9 18V27C9 29.4853 11.0147 31.5 13.5 31.5H18C20.4853 31.5 22.5 33.5147 22.5 36V38.25C22.5 41.5637 19.8137 44.25 16.5 44.25C15.2574 44.25 14.25 43.2426 14.25 42C14.25 40.7574 15.2574 39.75 16.5 39.75C17.7426 39.75 18.75 38.7426 18.75 37.5V36C18.75 35.5858 18.4142 35.25 18 35.25H13.5C8.94835 35.25 5.25 31.5517 5.25 27V18C5.25 13.4483 8.94835 9.75 13.5 9.75H22.5C27.0517 9.75 30.75 13.4483 30.75 18V27C30.75 29.4853 28.7353 31.5 26.25 31.5C24.9869 31.5 23.8989 30.8204 23.25 29.8144C22.6011 30.8204 21.5131 31.5 20.25 31.5C17.7647 31.5 15.75 29.4853 15.75 27V18C15.75 17.1716 16.4216 16.5 17.25 16.5C18.0784 16.5 18.75 17.1716 18.75 18V27C18.75 27.8284 19.4216 28.5 20.25 28.5C21.0784 28.5 21.75 27.8284 21.75 27V18C21.75 17.1716 22.4216 16.5 23.25 16.5C24.0784 16.5 24.75 17.1716 24.75 18V27C24.75 27.8284 25.4216 28.5 26.25 28.5C27.0784 28.5 27.75 27.8284 27.75 27V18C27.75 15.1005 25.3995 12.75 22.5 12.75H13.5C10.6005 12.75 8.25 15.1005 8.25 18V27C8.25 29.8995 10.6005 32.25 13.5 32.25H18C21.7279 32.25 24.75 35.2721 24.75 39V41.25C24.75 42.9474 23.3674 44.33 21.6711 44.33C21.6237 44.33 21.5869 44.2932 21.5869 44.2458C21.5869 44.1984 21.6237 44.1616 21.6711 44.1616C23.2742 44.1616 24.5816 42.8542 24.5816 41.25V39C24.5816 35.3763 21.6253 32.42 18.0016 32.42H13.5C10.6924 32.42 8.42 30.1476 8.42 27.34V18.34C8.42 15.5324 10.6924 13.26 13.5 13.26H22.5C25.3076 13.26 27.58 15.5324 27.58 18.34V27.34C27.58 30.1476 25.3076 32.42 22.5 32.42H21.1553C20.5051 32.42 19.9079 32.1367 19.509 31.6461L18.1675 30.0281C18.0614 29.9012 18.0777 29.7124 18.2046 29.6063C18.3316 29.5002 18.5203 29.5165 18.6264 29.6435L19.9679 31.2614C20.2683 31.6307 20.7238 31.845 21.2058 31.8464C21.2057 31.8464 21.2056 31.8464 21.2055 31.8464L22.5 31.8463C25.0317 31.8463 27.0863 29.7917 27.0863 27.26V18.26C27.0863 15.7283 25.0317 13.6737 22.5 13.6737H13.5C10.9683 13.6737 8.91366 15.7283 8.91366 18.26V27.26C8.91366 29.7917 10.9683 31.8463 13.5 31.8463H18C21.6253 31.8463 24.5816 35.3763 24.5816 39V41.25C24.5816 42.9474 23.3674 44.33 21.6711 44.33C21.6237 44.33 21.5869 44.2932 21.5869 44.2458C21.5869 44.1984 21.6237 44.1616 21.6711 44.1616C23.2742 44.1616 24.5816 42.8542 24.5816 41.25V39C24.5816 35.3763 21.6253 32.42 18.0016 32.42H13.5C10.6924 32.42 8.42 30.1476 8.42 27.34V18.34C8.42 15.5324 10.6924 13.26 13.5 13.26H22.5C25.3076 13.26 27.58 15.5324 27.58 18.34V27.34C27.58 30.1476 25.3076 32.42 22.5 32.42H25.2C25.3906 32.42 25.5458 32.003 25.5464 32.1935C25.547 32.3842 25.3928 32.5401 25.2022 32.5412L13.5 32.5489C9.80213 32.5489 6.8 29.5467 6.8 25.8489V16.8489C6.8 13.1511 9.80213 10.1489 13.5 10.1489H22.5C26.1979 10.1489 29.2 13.1511 29.2 16.8489V25.8489C29.2 28.0328 27.9962 29.9336 26.25 30.9235C24.5038 29.9336 23.3 28.0328 23.3 25.8489V16.8489C23.3 16.6591 23.4539 16.5052 23.6437 16.5052C23.8335 16.5052 23.9874 16.6591 23.9874 16.8489V25.8489C23.9874 27.866 25.2329 29.5811 26.9953 30.3367C26.9968 30.3373 26.9984 30.3378 27 30.3384C27.0016 30.3378 27.0032 30.3373 27.0047 30.3367C28.7671 29.5811 30.0126 27.866 30.0126 25.8489V16.8489C30.0126 12.6895 26.6594 9.33631 22.5 9.33631H13.5C9.34063 9.33631 5.98742 12.6895 5.98742 16.8489V25.8489C5.98742 30.0083 9.34063 33.3615 13.5 33.3615H22.5C26.6594 33.3615 30.0126 30.0083 30.0126 25.8489V16.8489C30.0126 16.6591 30.1665 16.5052 30.3563 16.5052C30.5461 16.5052 30.7 16.6591 30.7 16.8489V25.8489C30.7 30.3318 27.0329 33.9831 22.5495 33.9978C22.5495 33.9999 22.5479 34 22.5463 34C18.0513 34 14.4421 30.3715 14.4421 25.8621V16.8621C14.4421 16.6724 14.5959 16.5179 14.7857 16.5173C14.9763 16.5167 15.1321 16.6713 15.1321 16.8619V25.8619C15.1321 29.9895 18.4787 33.3273 22.6 33.3159C26.7249 33.3046 30.0621 29.9507 30.0621 25.8209V16.8209C30.0621 16.6304 30.2178 16.4752 30.4083 16.4757C30.599 16.4763 30.7536 16.6323 30.7532 16.823L30.7467 25.861C30.7467 30.3387 27.1057 33.9678 22.6221 33.9678L22.5 33.9677C17.9773 33.9677 14.3237 30.3172 14.3237 25.7977V16.7977C14.3237 16.6071 14.4781 16.4532 14.6687 16.4537C14.8548 16.454 15.0032 16.6015 15.0058 16.7876L15.0589 25.8277C15.0589 27.5851 15.7642 29.1733 16.8947 30.3039C18.0253 31.4344 19.6136 32.1397 21.371 32.1397H21.7189C19.8165 32.1236 18.11 31.3913 16.8947 30.1739C15.6811 28.9579 15 27.3055 15 25.5V18C15 15.0147 17.0147 13 20 13H23.25C26.2353 13 28.25 15.0147 28.25 18V25.5C28.25 27.3055 27.5689 28.9579 26.3553 30.1739C25.1417 31.39 23.3055 32.1397 21.5 32.1397" fill="#0D0D0D" />
                      </svg>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={18}
                          className="me-1"
                          style={{
                            color: i < testimonial.rating ? "#ffc107" : "#e0e0e0",
                          }}
                        />
                      ))}
                    </div>

                    <p className="mb-4 text-lg md:text-xl font-light min-h-[110px] leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex items-center">
                      <div
                        className="rounded-full mr-3 overflow-hidden w-[55px] h-[55px] border-2 border-[#3a7bfc]/20"
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement | null;
                            if (target) {
                              // target.src = "https://via.placeholder.com/50?text=User"; //It was creating issues
                              target.src = 'akdenar'
                            }
                          }}
                        />
                      </div>
                      <div>
                        <h6 className="mb-0 font-bold text-gray-800">{testimonial.name}</h6>
                        <p className="text-gray-500 text-sm mb-0">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-5"
        >
          <Link
            to="/testimonials"
            className="inline-flex items-center border border-blue-500 text-blue-500 rounded-full px-4 py-3 font-medium hover:bg-blue-500 hover:text-white transition-colors"
          >
            See More Reviews <FaArrowRight className="ml-2" size={14} />
          </Link>
        </motion.div>
      </div>

      <style>{`
        .testimonialSwiper .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }
        
        .testimonialSwiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(58, 123, 252, 0.3);
          opacity: 1;
          transition: all 0.3s;
        }
        
        .testimonialSwiper .swiper-pagination-bullet-active {
          background: #3a7bfc;
          width: 30px;
          border-radius: 10px;
        }
        
        .testimonialSwiper .swiper-button-next,
        .testimonialSwiper .swiper-button-prev {
          color: #3a7bfc;
          background: white;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
        }
        
        .testimonialSwiper .swiper-button-next:hover,
        .testimonialSwiper .swiper-button-prev:hover {
          background: #3a7bfc;
          color: white;
          transform: scale(1.1);
        }
        
        .testimonialSwiper .swiper-button-next::after,
        .testimonialSwiper .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }
        
        @media (max-width: 768px) {
          .testimonialSwiper .swiper-button-next,
          .testimonialSwiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}