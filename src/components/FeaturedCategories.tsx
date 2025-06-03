import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

import type { RootState } from "../redux/store";

export default function FeaturedCategories() {

     {/* Is state ka type ekbar check kar lo  */}
  const catalogRed= useSelector((state:RootState) => state.catalog.catalogs);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section className="py-5 my-4 position-relative overflow-hidden">
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        zIndex: -1
      }}></div>

      <div className="container">
        <div className="text-center mb-5">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="badge bg-primary bg-opacity-10 text-primary fw-medium px-3 py-2 rounded-pill mb-3 d-inline-block"
          >
            Explore Our Selection
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="fw-bold mb-2 display-4"
          >
            Premium Categories
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted mx-auto fs-5"
            style={{ maxWidth: "700px" }}
          >
            From organic rice to premium spices, discover quality in every product
          </motion.p>
        </div>

        <div className="row g-4 justify-content-center">

       
          {catalogRed?.map((category, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-10" style={{ maxWidth: "380px" }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCategory(index)}
                onHoverEnd={() => setHoveredCategory(null)}
                whileHover={{ y: -10 }}
                className="position-relative h-100"
              >
                <Link
                  to={`/category/${category.name.toLowerCase().replace(/\s/g, '-')}`}
                  className="text-decoration-none"
                >
                  <motion.div
                    className="card border-0 h-100 overflow-hidden"
                    style={{
                      borderRadius: "20px",
                      boxShadow: hoveredCategory === index
                        ? `0 20px 30px ${category.colors[0]}33`
                        : "0 10px 20px rgba(0,0,0,0.07)",
                    }}
                  >
                    <div
                      className="category-image position-relative overflow-hidden"
                      style={{ height: "280px" }}
                    >
                      <motion.div
                        className="w-100 h-100"
                        animate={{
                          scale: hoveredCategory === index ? 1.08 : 1
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                          backgroundImage: `url(${category.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center"
                        }}
                      />

                      <div
                        className="position-absolute bottom-0 start-0 w-100 p-4"
                        style={{
                          background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)`,
                          height: "70%"
                        }}
                      >
                        <motion.div
                          animate={{
                            y: hoveredCategory === index ? 0 : 10,
                            opacity: hoveredCategory === index ? 1 : 0.8
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-white fw-bold mb-2 display-6">{category.name}</h3>
                          <p className="text-white-50 mb-0">{category.categories.length} varieties</p>
                        </motion.div>
                      </div>

                      <motion.div
                        className="position-absolute top-4 end-4 badge"
                        style={{
                          background: `linear-gradient(135deg, ${category.colors[0]}, ${category.colors[1]})`,
                          padding: "8px 16px",
                          borderRadius: "30px",
                          fontSize: "12px",
                          fontWeight: "500",
                          letterSpacing: "0.5px",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                        }}
                        animate={{
                          scale: hoveredCategory === index ? 1.1 : 1,
                          y: hoveredCategory === index ? -5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        Premium Quality
                      </motion.div>
                    </div>

                    <div className="card-body p-4">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          {category.categories.slice(0, 3).map((subcat, idx) => (
                            <motion.div
                              key={idx}
                              className="rounded-circle border-2 border-white overflow-hidden"
                              style={{
                                width: "35px",
                                height: "35px",
                                marginLeft: idx > 0 ? "-10px" : "0",
                                zIndex: 3 - idx,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                              }}
                              whileHover={{ scale: 1.1, zIndex: 4 }}
                            >
                              <img
                                src={subcat.image}
                                alt={subcat.name}
                                className="w-100 h-100 object-fit-cover"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <p className="text-muted mb-4" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                        Discover our premium selection of {category.name.toLowerCase()} sourced from trusted producers.
                      </p>

                      <motion.div
                        className="d-flex align-items-center"
                        animate={{
                          x: hoveredCategory === index ? 5 : 0
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="fw-medium me-auto">View Collection</span>
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle"
                          style={{
                            width: "35px",
                            height: "35px",
                            background: `linear-gradient(135deg, ${category.colors[0]}22, ${category.colors[0]}44)`,
                            color: category.colors[0]
                          }}
                        >
                          <FaArrowRight size={14} />
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