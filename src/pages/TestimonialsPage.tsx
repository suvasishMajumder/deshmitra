//New code  6/5/2025

import { useEffect } from "react";
import { motion } from "framer-motion";
// import { FaStar } from "react-icons/fa6";
import type { ITestimonials } from "../types/types";

// Swiper imports (if you use them later)
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import fallbackImg from "../assets/fallbackImg.png";
// import StarRating from "../components/StarRating";
import Rating from "@mui/material/Rating";
import amitPatelRealImg from "../assets/amit_patel.webp";
import arjunReddyImg from "../assets/arjun_reddy.webp";
import chefRajeshKumarImg from "../assets/chef_rajesh_kumar.webp";
import drAnjaliSinghImg from "../assets/dr_anjali_singh.webp";
import mariafernandezImg from "../assets/maria_fernandez.webp";
import nehaGuptaImg from "../assets/neha_gupta.webp";
import priyaSharmaImg from "../assets/priya_sharma.webp";
import rahulVermaImg from "../assets/rahul_verma.webp";
import snehaIyerImg from "../assets/sneha_iyer.webp";
import vikramMalhotraImg from "../assets/vikram_malhotra.webp";




const testimonials: ITestimonials[] = [
  {
    quote:
      "Akdenar's premium rice varieties have transformed our restaurant's biryani. The 1121 Basmati is exceptional!",
    image: chefRajeshKumarImg,
    name: "Chef Rajesh Kumar",
    location: "Mumbai",
    rating: 4,
    role: "Executive Chef, Spice Garden",
  },
  {
    quote:
      "The quality of spices from Akdenar is unmatched. Their whole spices retain their aroma for months!",
    image: priyaSharmaImg,
    name: "Priya Sharma",
    location: "Delhi",
    rating: 4,
    role: "Home Chef & Food Blogger",
  },
  {
    quote:
      "As a food manufacturer, we trust Akdenar for consistent quality in all their products. Their supply chain is impeccable.",
    image: amitPatelRealImg,
    name: "Amit Patel",
    location: "Ahmedabad",
    rating: 4.5,
    role: "Quality Manager, FoodCorp",
  },
  {
    quote:
      "The variety of dry fruits they offer is outstanding. Premium quality at competitive prices.",
    image: nehaGuptaImg,
    name: "Neha Gupta",
    location: "Bangalore",
    rating: 4.6,
    role: "Health Food Store Owner",
  },
  {
    quote:
      "Their customer service is exceptional. They go above and beyond to ensure customer satisfaction.",
    image: rahulVermaImg,
    name: "Rahul Verma",
    location: "Kolkata",
    rating: 5,
    role: "Retail Store Owner",
  },
  {
    quote:
      "The organic products from Akdenar have helped us maintain our commitment to healthy living.",
    image: drAnjaliSinghImg,
    name: "Dr. Anjali Singh",
    location: "Pune",
    rating: 4.8,
    role: "Nutritionist",
  },
  {
    quote:
      "Their salt varieties are perfect for our food processing unit. Consistent quality and timely delivery.",
    image: vikramMalhotraImg,
    name: "Vikram Malhotra",
    location: "Chennai",
    rating: 5,
    role: "Production Manager, FoodTech",
  },
  {
    quote:
      "Akdenar's sugar products meet our bakery's high standards. The refined sugar is perfect for our confections.",
    image: mariafernandezImg,
    name: "Maria Fernandez",
    location: "Goa",
    rating: 5,
    role: "Pastry Chef",
  },
  {
    quote:
      "Their commitment to quality and sustainable sourcing aligns perfectly with our restaurant's values.",
    image: arjunReddyImg,
    name: "Arjun Reddy",
    location: "Hyderabad",
    rating: 5,
    role: "Restaurant Owner",
  },
  {
    quote:
      "The variety of cooking oils they offer is impressive. Each one maintains its quality consistently.",
    image: snehaIyerImg,
    name: "Sneha Iyer",
    location: "Kochi",
    rating: 4.5,
    role: "Culinary Instructor",
  },
];

const TestimonialsPage: React.FC = () => {
  useEffect(() => {
    // Force scroll to top when TestimonialsPage component mounts
    window.scrollTo(0, 0);

    // Add body class to prevent scroll issues on mobile
    document.body.classList.add("page-testimonials");

    return () => {
      document.body.classList.remove("page-testimonials");
    };
  }, []);

  return (
    <div className="testimonials-page-container ss:px-8 lg:px-10 xl:px-56 pt-[145px]">
      {/* Hero Section with proper padding-top to avoid navbar overlap */}
      <section
        className="testimonials-hero py-5 bg-white/95 backdrop-blur-md 
      rounded-b-[30px] relative overflow-hidden min-h-[220px] shadow-[0_5px_30px_rgba(0,0,0,0.05)]"
      >
        <div className="container mx-auto  pt-5 mt-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-5"
          >
            <h1
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="display-4 text-[#333333] 
  ds:text-[40px] md:text-[55px] ds:mb-4 leading-9 
  ds:leading-12 md:leading-14 mb-3 text-[2rem] font-black"
            >
              Our Customer Testimonials
            </h1>

            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="lead ds:text-[20px] text-muted text-[1rem] 
            font-normal p-1 text-[#212529BF]"
            >
              Read what our valued customers have to say about our products and
              services
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div
            style={{ fontFamily: "Inter, sans-serif" }}
            className="grid gap-2  grid-cols-1 md:grid-cols-2 ss:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="col-md-6 cursor-pointer p-[8px]  rounded-3xl"
              >
                <div
                  className="testimonial-card  h-full p-6 rounded-2xl shadow-sm bg-white border
                 border-black/10 transition-transform duration-300 ease-in-out hover:-translate-y-1.5"
                >
                  <div className="flex items-center mb-3">
                    <img
                      src={testimonial.image}
                      // alt={testimonial.name}
                      alt={fallbackImg}
                      loading="lazy"
                      className="rounded-full me-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        img.onerror = null; // prevents infinite loop
                        img.src = fallbackImg; // apply local fallback
                      }}
                    />
                    <div>
                      <h5
                        style={{ fontFamily: "Poppins , sans-serif" }}
                        className="text-[1.25rem]  font-[600]
                       text-[#333333] mr-[4px] mb-[4px]"
                      >
                        {testimonial.name}
                      </h5>
                      <p className="text-muted mb-0 text-[#212529BF]">
                        {testimonial.role}
                      </p>
                      <small className="text-muted text-[#212529BF]">
                        {testimonial.location}
                      </small>
                    </div>
                  </div>

                  {/*option 1 : passing rating as prop to a new component i.e, StarRating.tsx*/}
                  {/* <div className="mb-3">
                    <StarRating rating={testimonial.rating} size={20} />
                  </div> */}

                  {/*option 2*/}
                  <Rating
                    name="read-only" // just an identifier
                    value={testimonial.rating} // your dynamic rating
                    precision={0.1} // allows 4.1, 4.3, etc.
                    readOnly // disables user interaction
                  />
                  <p className="mb-0 italic text-[#212529BF]">
                    "{testimonial.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Swiper custom styling - you may also add these classes to your Tailwind config if needed */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #3a7bfc;
        }
        .swiper-pagination-bullet-active {
          background: #3a7bfc;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsPage;
