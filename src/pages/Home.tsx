import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import HeroCarousel from "../components/HeroCarousel";
import FeaturedCategories from "../components/FeaturedCategories";
import BenefitsSection from "../components/BenefitsSection";
import SupplyChainDiagram from "../components/SupplyChainDiagram";
import ContactForm from "../components/ContactForm";
import Testimonials from "../components/Testimonials";

export default function Home() {
  useEffect(() => {
    sessionStorage.removeItem("hasSeenLoader");
  }, []);

  const [animate, setAnimate] = useState(() => {
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");
    return hasSeenLoader !== "true";
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (animate) {
      const progressInterval: number = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + (100 - prev) * 0.1;
          return newProgress > 99 ? 99 : newProgress;
        });
      }, 100);

      const timer = setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setAnimate(false);
          sessionStorage.setItem("hasSeenLoader", "true");
        }, 400);
      }, 2100);

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
              className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#3a7bfc] to-[#6f42c1] z-[10000] shadow-[0_0_10px_rgba(58,123,252,0.5)]"
              style={{ width: `${progress}%` }}
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeOut" }}
            />

            <motion.div
              key="loader"
              className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white/98 backdrop-blur-sm z-[9999]"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                className="text-center max-w-[90%] w-[400px]"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex justify-center items-center"
                >
                  <img
                    src="/logo.webp"
                    alt="Akdenar Logo"
                    className="max-h-[100px] w-auto mb-4"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement | null;
                      if (target) {
                        target.src = 'Akdenar'
                          // "https://via.placeholder.com/200x80?text=Akdenar"; //This is causing issues
                      }
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <p className="text-[#3a7bfc] text-[1.2rem] font-medium tracking-[0.8px] mb-0 px-2 py-1 rounded">
                    Serving India's Basic Needs
                  </p>
                </motion.div>

                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="h-2 rounded-full overflow-hidden shadow-[0_2px_10px_rgba(58,123,252,0.3)]">
                    <div
                      className="h-full bg-gradient-to-r from-[#3a7bfc] via-[#6f42c1] to-[#e83e8c] transition-all duration-100"
                      style={{ width: `${progress}%` }}
                      role="progressbar"
                      aria-valuenow={progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-500">
                    {Math.round(progress)}% Loading...
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main>
        <div className="container pt-2 mx-auto">
          <HeroCarousel />
        </div>

        <FeaturedCategories />
        <BenefitsSection />
        <SupplyChainDiagram />
        <Testimonials />

        <section className="py-10 px-[6rem] space-around my-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3a7bfc]/90 to-[#0046c0]/95 z-0"></div>

          <div className="container relative z-[1] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
              <div className="lg:col-span-7">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 text-white"
                >
                  Ready to Experience <br />
                  <span className="text-white">Premium Shopping?</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-white/70 mb-4 max-w-[600px]"
                >
                  Join thousands of satisfied customers who trust Akdenar for
                  their everyday needs.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-3"
                >
                  {/* <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="bg-white text-gray-900 text-lg font-medium px-5 py-3 rounded-full"
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
                className="lg:col-span-5 hidden lg:block"
              >
                <img
                  src="/GETREADYFORSHOPPING.webp"
                  alt="Grocery Delivery"
                  className="w-full rounded-lg shadow-lg rotate-2"
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
