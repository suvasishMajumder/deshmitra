import React from "react";
import {
  FaUsers,
  FaLeaf,
  FaHeart,
  FaGlobe,
} from "react-icons/fa6";
import { motion } from "framer-motion";
export default function BenefitsSection() {
  const benefits = [
    {
      icon: FaLeaf,
      title: "Quality Products",
      description: "We source directly from trusted producers to ensure maximum quality and freshness.",
      color: "#28a745",
      delay: 0
    },
    {
      icon: FaHeart,
      title: "Premium Quality",
      description: "Every product meets our high standards for excellence, durability, and sustainability.",
      color: "#dc3545",
      delay: 0.1
    },
    {
      icon: FaUsers,
      title: "Family Essentials",
      description: "Our products are selected to provide quality options for the entire family.",
      color: "#fd7e14",
      delay: 0.2
    },
    {
      icon: FaGlobe,
      title: "Eco-Friendly",
      description: "We prioritize sustainable practices in our sourcing and packaging.",
      color: "#3a7bfc",
      delay: 0.3
    }
  ];

  return (
    <section className="benefits-section py-5 position-relative overflow-hidden">
      <div className="position-absolute top-0 start-0 w-100 h-100 benefits-bg"></div>
      <div className="container position-relative">
        <div className="text-center mb-5">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="badge bg-primary bg-opacity-10 text-primary fw-medium px-3 py-2 rounded-pill mb-3 d-inline-block"
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="fw-bold mb-2 display-5"
          >
            The Akdenar <span className="text-gradient">Difference</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted mx-auto fs-5"
            style={{ maxWidth: "700px" }}
          >
            Experience shopping reimagined with our commitment to quality and service
          </motion.p>
        </div>

        <div className="row g-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: benefit.delay }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="h-100"
              >
                <div
                  className="card h-100 border-0 benefit-card"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="card-body p-4 text-center">
                    <div className="position-relative mb-4">
                      <motion.div
                        className="icon-bg position-absolute top-50 start-50 translate-middle rounded-circle"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: benefit.delay + 0.2,
                          type: "spring",
                          stiffness: 200
                        }}
                        style={{
                          width: "80px",
                          height: "80px",
                          backgroundColor: `${benefit.color}15`,
                          zIndex: 0
                        }}
                      />
                      <motion.div
                        className="icon-wrapper d-inline-flex align-items-center justify-content-center position-relative"
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.2 }
                        }}
                        style={{
                          width: "70px",
                          height: "70px",
                          borderRadius: "50%",
                          background: `linear-gradient(135deg, ${benefit.color}22, ${benefit.color}44)`,
                          zIndex: 1,
                          boxShadow: `0 8px 20px ${benefit.color}33`
                        }}
                      >
                        <benefit.icon size={28} style={{ color: benefit.color }} />
                      </motion.div>
                    </div>

                    <motion.h5
                      className="card-title fw-bold mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: benefit.delay + 0.3 }}
                      style={{ color: benefit.color }}
                    >
                      {benefit.title}
                    </motion.h5>

                    <motion.p
                      className="card-text text-muted"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: benefit.delay + 0.4 }}
                    >
                      {benefit.description}
                    </motion.p>

                    <motion.div
                      className="mt-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: benefit.delay + 0.5 }}
                    >
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .benefits-section {
          background-color: #f9fafb;
        }
        
        .benefits-bg {
          background: radial-gradient(circle at 10% 20%, rgba(216, 241, 230, 0.46) 0%, rgba(233, 226, 226, 0.28) 110.2%);
          z-index: 0;
        }
        
        .text-gradient {
          background: linear-gradient(120deg, #3a7bfc, #0046c0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .benefit-card {
          background: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .benefit-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        
        @media (max-width: 768px) {
          .benefit-card {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
}