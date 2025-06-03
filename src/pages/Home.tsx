import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import HeroCarousel from '../components/HeroCarousel';
import FeaturedCategories from '../components/FeaturedCategories';
import BenefitsSection from '../components/BenefitsSection';
import SupplyChainDiagram from '../components/SupplyChainDiagram';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';


export default function Home() {
  useEffect(() => {
    sessionStorage.removeItem('hasSeenLoader');
  }, []);

  const [animate, setAnimate] = useState(() => {
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    return hasSeenLoader !== 'true';
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (animate) {
      let progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + (100 - prev) * 0.1; // Increased speed slightly
          return newProgress > 99 ? 99 : newProgress;
        });
      }, 100);

      // Set timer to approximately 2.5 seconds (2100ms)
      const timer = setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setAnimate(false);
          sessionStorage.setItem('hasSeenLoader', 'true');
        }, 400);
      }, 2100); // Reduced from 2600ms to 2100ms

      return () => {
        clearInterval(progressInterval);
        clearTimeout(timer);
      };
    }
  }, [animate]);

  return (
    <>
      <AnimatePresence>
        {animate && (
          <>
            <motion.div
              className="position-fixed top-0 start-0"
              style={{
                height: "3px",
                width: `${progress}%`,
                background: "linear-gradient(to right, #3a7bfc, #6f42c1)",
                zIndex: 10000,
                boxShadow: "0 0 10px rgba(58, 123, 252, 0.5)"
              }}
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeOut" }}
            />

            <motion.div
              key="loader"
              className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
              style={{
                zIndex: 9999,
                background: "rgba(255, 255, 255, 0.98)",
                backdropFilter: "blur(5px)"
              }}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                className="text-center"
                style={{ maxWidth: "90%", width: "400px" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img
                    src="/logo.webp"
                    alt="Akdenar Logo"
                    className="img-fluid mb-4"
                    style={{ maxHeight: "100px", width: "auto" }}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/200x80?text=Akdenar";
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <p className="lead text-center mb-0" style={{
                    color: "#3a7bfc",
                    fontWeight: 500,
                    letterSpacing: "0.8px",
                    fontSize: "1.2rem",
                  }}>
                    <span className="px-2 py-1 rounded">
                      Serving India's Basic Needs
                    </span>
                  </p>
                </motion.div>

                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="progress rounded-pill overflow-hidden"
                    style={{ height: "8px", boxShadow: "0 2px 10px rgba(58, 123, 252, 0.3)" }}>
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{
                        width: `${progress}%`,
                        background: "linear-gradient(to right, #3a7bfc, #6f42c1, #e83e8c)"
                      }}
                      aria-valuenow={progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="text-center mt-2 small text-muted">
                    {Math.round(progress)}% Loading...
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main>
        <div className="container pt-2">
          <HeroCarousel />
        </div>

        <FeaturedCategories />
        <BenefitsSection />
        <SupplyChainDiagram />
        <Testimonials />

        <section className="py-5 my-5 position-relative overflow-hidden cta-section">
          <div className="position-absolute top-0 start-0 w-100 h-100 cta-bg"></div>
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: "linear-gradient(135deg, rgba(58, 123, 252, 0.9) 0%, rgba(0, 70, 192, 0.95) 100%)",
              zIndex: 0
            }}
          ></div>

          <div className="container position-relative" style={{ zIndex: 1 }}>
            <div className="row align-items-center">
              <div className="col-lg-7">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="fw-bold mb-4 text-white display-4"
                >
                  Ready to Experience <br />
                  <span className="text-white-highlight">Premium Shopping?</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lead mb-4 text-white-50 fs-4"
                  style={{ maxWidth: "600px" }}
                >
                  Join thousands of satisfied customers who trust Akdenar for their everyday needs.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="d-flex flex-wrap gap-3"
                >
                  {/* <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-medium"
                              >
                                Shop Now
                              </motion.button> */}

                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="col-lg-5 d-none d-lg-block"
              >
                <img
                  src="/GETREADYFORSHOPPING.webp"
                  alt="Grocery Delivery"
                  className="img-fluid rounded-4 shadow"
                  style={{ transform: "rotate(2deg)" }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
    </>
  );
}
