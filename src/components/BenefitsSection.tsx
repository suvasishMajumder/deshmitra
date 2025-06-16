import { FaUsers, FaLeaf, FaGlobe } from "react-icons/fa6";
import { motion } from "framer-motion";
import type { TBenefits } from "../types/types";
import { MdWorkspacePremium } from "react-icons/md";

export default function BenefitsSection() {
  const benefits: TBenefits[] = [
    {
      icon: FaLeaf,
      title: "Quality Products",
      description: "We source directly from trusted producers to ensure maximum quality and freshness.",
      color: "#28a745",
      delay: 0,
    },
    {
      icon: MdWorkspacePremium,
      title: "Premium Quality",
      description: "Every product meets our high standards for excellence, durability, and sustainability.",
      color: "#dc3545",
      delay: 0.1,
    },
    {
      icon: FaUsers,
      title: "Family Essentials",
      description: "Our products are selected to provide quality options for the entire family.",
      color: "#fd7e14",
      delay: 0.2,
    },
    {
      icon: FaGlobe,
      title: "Eco-Friendly",
      description: "We prioritize sustainable practices in our sourcing and packaging.",
      color: "#3a7bfc",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-10 relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(216,241,230,0.46)_0%,rgba(233,226,226,0.28)_110.2%)] z-0"></div>
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-5">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-blue-500/10 text-blue-500 font-medium px-3 py-2 rounded-full mb-3"
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            The Akdenar{" "}
            <span className="bg-gradient-to-r from-[#3a7bfc] to-[#0046c0] bg-clip-text text-transparent">
              Difference
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl mx-auto max-w-[700px]"
          >
            Experience shopping reimagined with our commitment to quality and service
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: benefit.delay }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="h-full"
              >
                <div
                  className="h-full bg-white border-none rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] transition-all duration-300"
                >
                  <div className="p-4 text-center">
                    <div className="relative mb-4">
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: benefit.delay + 0.2,
                          type: "spring",
                          stiffness: 200,
                        }}
                        style={{
                          width: "80px",
                          height: "80px",
                          backgroundColor: `${benefit.color}15`,
                          zIndex: 0,
                        }}
                      />
                      <motion.div
                        className="relative inline-flex items-center justify-center rounded-full"
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.2 },
                        }}
                        style={{
                          width: "70px",
                          height: "70px",
                          background: `linear-gradient(135deg, ${benefit.color}22, ${benefit.color}44)`,
                          boxShadow: `0 8px 20px ${benefit.color}33`,
                          zIndex: 1,
                        }}
                      >
                        <benefit.icon size={28} style={{ color: benefit.color }} />
                      </motion.div>
                    </div>

                    <motion.h5
                      className="font-bold mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: benefit.delay + 0.3 }}
                      style={{ color: benefit.color }}
                    >
                      {benefit.title}
                    </motion.h5>

                    <motion.p
                      className="text-gray-500"
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
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}