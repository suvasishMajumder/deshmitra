import { motion } from "framer-motion";
import type { TSupplyChainItems } from "../types/types";

function SupplyChainDiagram() {
  const supplyChainItems: TSupplyChainItems[] = [
    {
      title: "Product Sourcing from Farms",
      description: "Fresh groceries from healthy farms",
      image: "/FARMTOHOME1.webp",
      color: "#28a745",
      shadow: "rgba(40, 167, 69, 0.3)",
      emoji: "🌱",
    },
    {
      title: "Quality Checked for Standards",
      description: "Ensuring freshness and purity",
      image: "/FARMTOHOME2.webp",
      color: "#3a7bfc",
      shadow: "rgba(58, 123, 252, 0.3)",
      emoji: "✓",
    },
    {
      title: "International and National Delivery",
      description: "Fast and reliable service",
      image: "/FAMTOHOME3.webp",
      color: "#fd7e14",
      shadow: "rgba(253, 126, 20, 0.3)",
      emoji: "🚚",
    },
  ];

  const cities: string[] = [
    "Chennai",
    "Bangalore",
    "Pune",
    "Chandigarh",
    "Gorakhpur",
    "Patna",
    "Ahmedabad",
    "Surat",
    "Guntur",
    "Delhi NCR",
    "Hyderabad",
    "Jaipur",
    "Kolkata",
    "Lucknow",
    "Mumbai",
    "Mysore",
    "Nashik",
    "Pune",
    "Udaipur",
    "Agra",
    "Bhopal",
    "Indore",
    "Nagpur",
    "Jabalpur",
    "Darbhanga",
    "Vijayawada",
    "Jammu",
    "Kashmir",
    "Telangana",
  ];

  return (
    <section className="my-5 relative overflow-hidden py-5 mx-4 rounded-[30px] md:mx-0 md:rounded-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f9ff] to-[rgba(214,240,253,0.5)] z-[-1]"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 hidden lg:block w-[20%] h-[20%] opacity-10 z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#28a745"
            d="M47.5,-61.7C59.9,-53.5,67.3,-37.6,70.8,-21.5C74.3,-5.5,73.8,10.6,67.1,23.5C60.4,36.4,47.5,46.1,33.3,53.6C19.1,61.1,3.5,66.4,-14.8,68.2C-33.1,70.1,-54.1,68.5,-63.4,56.9C-72.7,45.3,-70.3,23.6,-68.5,3.4C-66.7,-16.7,-65.4,-35.4,-55.6,-44C-45.9,-52.7,-27.7,-51.4,-11.7,-52.8C4.3,-54.2,35.1,-69.9,47.5,-61.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 hidden lg:block w-[15%] h-[15%] opacity-10 z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#3a7bfc"
            d="M45.3,-59.4C58.8,-51.3,70.1,-38,73.7,-22.9C77.3,-7.8,73.3,9.1,66.4,24.1C59.5,39.1,49.8,52.2,37,60.1C24.1,68,8.2,70.8,-7.4,69.9C-23,69,-38.3,64.5,-47.3,54.3C-56.4,44.1,-59.2,28.2,-63.3,11.9C-67.4,-4.5,-72.8,-21.2,-67.9,-33.1C-63,-45.1,-47.9,-52.2,-33.8,-60C-19.7,-67.8,-6.5,-76.2,6.8,-75.9C20.1,-75.7,40.1,-67,45.3,-59.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container relative mx-auto px-4 z-[1]">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-3xl md:text-4xl font-bold mb-2"
        >
          From{" "}
          <span className="bg-gradient-to-r from-[#28a745] to-[#3a7bfc] bg-clip-text text-transparent">
            Farm to You
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-500 font-medium text-center text-lg md:text-xl mx-auto mb-5 max-w-[700px]"
        >
          Fresh products delivered directly from producers to your doorstep
        </motion.p>

        <div className="relative flex justify-evenly items-center flex-wrap gap-4 my-5">
          {/* Connecting line */}
          <motion.div
            className="absolute hidden ls:flex top-1/2 left-0 right-0 h-[3px] bg-gradient-to-r from-[#28a745] via-[#3a7bfc] to-[#fd7e14] z-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ transform: "translateY(-50%)" }}
          />

          {/* Animated dots on the line */}
          <motion.div
            className="absolute hidden ls:flex top-1/2 left-0 right-0  justify-between z-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ transform: "translateY(-50%)" }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="rounded-full w-[10px] h-[10px] bg-white border-2 border-[#3a7bfc] shadow-[0_0_10px_rgba(58,123,252,0.5)]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + i * 0.15,
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}
              />
            ))}
          </motion.div>

          {supplyChainItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className="text-center relative z-[2] max-w-[260px]"
            >
              <div className="mb-4">
                <motion.div
                  className="mx-auto relative w-[150px] h-[150px] rounded-3xl bg-gradient-to-br from-white to-gray-100 shadow-[0_15px_30px] flex items-center justify-center overflow-hidden z-[1]"
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: [0, -5, 5, -5, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 10px 25px ${item.shadow}`,
                  }}
                  style={{ boxShadow: `0 15px 30px ${item.shadow}` }}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br z-[-1]"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}22, ${item.color}11)`,
                    }}
                  ></div>

                  <div className="flex items-center justify-center w-[110px] h-[110px] rounded-[20px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] overflow-hidden">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                      className="w-full h-full"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement | null;
                          if (target) {
                            target.src = "https://via.placeholder.com/150?text=Supply";
                          }
                        }}
                      />
                    </motion.div>
                  </div>

                  <div
                    className="absolute top-0 right-0 flex items-center justify-center m-2 w-9 h-9 rounded-xl text-white text-lg shadow-[0_4px_10px]"
                    style={{
                      background: item.color,
                      boxShadow: `0 4px 10px ${item.shadow}`,
                    }}
                  >
                    {item.emoji}
                  </div>

                  <div
                    className="absolute top-0 left-0 m-2 bg-white text-xs font-bold shadow-[0_2px_8px_rgba(0,0,0,0.1)] px-2 py-1 rounded"
                    style={{ color: item.color }}
                  >
                    Step {index + 1}
                  </div>
                </motion.div>

                <div className="mt-4 px-2">
                  <motion.h5
                    className="font-bold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </motion.h5>
                  <motion.p
                    className="text-gray-500 mb-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 pt-4 text-center">
          <motion.h5
            className="font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            We Deliver In
          </motion.h5>

          <motion.div
            className="flex justify-center items-center flex-wrap gap-2 mx-auto mt-3 max-w-[800px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {cities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + index * 0.05,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                }}
                className="px-4 py-2 rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] text-sm font-medium cursor-pointer transition-all duration-300"
                style={{
                  color:
                    index % 3 === 0
                      ? "#28a745"
                      : index % 3 === 1
                      ? "#3a7bfc"
                      : "#fd7e14",
                }}
              >
                {city}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SupplyChainDiagram;