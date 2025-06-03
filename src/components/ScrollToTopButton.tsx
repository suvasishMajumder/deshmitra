import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      className="scroll-to-top"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        bottom: "30px",
        left: "30px",
        zIndex: 1000,
        display: isVisible ? "block" : "none"
      }}
    >
      <button
        onClick={scrollToTop}
        className="btn btn-primary rounded-circle shadow"
        style={{
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          background: "linear-gradient(135deg, #3a7bfc, #0046c0)",
          border: "none",
          boxShadow: "0 4px 15px rgba(58, 123, 252, 0.4)",
          cursor: "pointer",
          marginBottom: "10px"
        }}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
        </svg>
      </button>
    </motion.div>
  );
}