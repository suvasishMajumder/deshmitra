import { useState } from "react";
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import type { RootState } from "../redux/store";

export default function FeaturedCategories() {
  const catalogs = useSelector((state: RootState) => state.catalog.catalogs);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section className="mt-20 py-5 my-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 z-[-1]"></div>

      <div className="container  mx-auto px-4">
        <div className="text-center mb-5">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-blue-500/10 text-blue-500 font-medium px-3 py-2 rounded-full mb-3"
          >
            Explore Our Selection
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-2"
          >
            Premium Categories
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl mx-auto max-w-[700px]"
          >
            From organic rice to premium spices, discover quality in every product
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center lg:px-30 mt-[50px]">
          {catalogs?.map((category, index) => (
            <div key={index} className="w-full max-w-[380px]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCategory(index)}
                onHoverEnd={() => setHoveredCategory(null)}
                whileHover={{ y: -10 }}
                className="relative h-full"
              >
                <Link
                  to={`/category/${category.name.toLowerCase().replace(/\s/g, '-')}`}
                  className="no-underline"
                >
                  <motion.div
                    className="h-full border-none rounded-[20px] overflow-hidden"
                    style={{
                      boxShadow: hoveredCategory === index
                        ? `0 20px 30px ${category.colors[0]}33`
                        : "0 10px 20px rgba(0,0,0,0.07)",
                    }}
                  >
                    <div className="relative overflow-hidden h-[280px]">
                      <motion.div
                        className="w-full h-full bg-cover bg-center"
                        animate={{
                          scale: hoveredCategory === index ? 1.08 : 1,
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                          backgroundImage: `url(${category.image})`,
                        }}
                      />

                      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent h-[70%]">
                        <motion.div
                          animate={{
                            y: hoveredCategory === index ? 0 : 10,
                            opacity: hoveredCategory === index ? 1 : 0.8,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="font-poppins text-white font-bold mb-2 text-3xl md:text-4xl">{category.name}</h3>
                          <p className="text-white/70 mb-0">{category.categories.length} varieties</p>
                        </motion.div>
                      </div>

                      <motion.div
                        className="absolute top-4 right-4 bg-gradient-to-br px-4 py-2 rounded-[30px] text-white text-xs font-medium tracking-[0.5px] shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
                        style={{
                          background: `linear-gradient(135deg, ${category.colors[0]}, ${category.colors[1]})`,
                        }}
                        animate={{
                          scale: hoveredCategory === index ? 1.1 : 1,
                          y: hoveredCategory === index ? -5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        Premium Quality
                      </motion.div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          {category.categories.slice(0, 3).map((subcat, idx) => (
                            <motion.div
                              key={idx}
                              className="rounded-full border-2 border-white overflow-hidden"
                              style={{
                                width: "35px",
                                height: "35px",
                                marginLeft: idx > 0 ? "-10px" : "0",
                                zIndex: 3 - idx,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                              }}
                              whileHover={{ scale: 1.1, zIndex: 4 }}
                            >
                              <img
                                src={subcat.image}
                                alt={subcat.name}
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-500 mb-4 text-[0.95rem] leading-relaxed">
                        Discover our premium selection of {category.name.toLowerCase()} sourced from trusted producers.
                      </p>

                      <motion.div
                        className="flex items-center"
                        animate={{
                          x: hoveredCategory === index ? 5 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="font-medium me-auto">View Collection</span>
                        <div
                          className="flex items-center justify-center rounded-full bg-red-100 text-red-600"
                          style={{
                            width: "35px",
                            height: "35px",
                            // background: `linear-gradient(135deg, ${category.colors[0]}22, ${category.colors[0]}44)`,
                            color: category.colors[0],
                          }}
                        >
                          <FaArrowRight className="text-red-600" size={14} />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}