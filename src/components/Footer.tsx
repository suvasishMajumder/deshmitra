

//New footer cpde by dev:


import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaLocationDot,
  FaPhoneFlip,
  FaEnvelope,
} from "react-icons/fa6";
import type { TFooterLinks, TSocialLinks } from "../types/types";

function Footer() {
  const footerLinks: TFooterLinks[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/category" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/contact" },
  ];

  const socialLinks: TSocialLinks[] = [
    { Icon: FaFacebookF, href: "https://www.facebook.com/share/1AmuCTSfNp/" },
    { Icon: FaInstagram, href: "https://www.instagram.com/akdenar/" },
    { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/akdenar2" },
    { Icon: FaYoutube, href: "https://www.youtube.com/@Akdenar" },
  ];

  const [currentYear] = useState<number | string>(new Date().getFullYear());
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  return (
    <footer className="py-12 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 border-t border-gray-700 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="no-underline">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                Akdenar
              </h2>
            </Link>

            <p className="mb-6 text-gray-300 leading-relaxed">
              India's premier goods provider bringing quality products directly
              to your doorstep since 2024.
            </p>

            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onHoverStart={() => setHoveredSocial(index)}
                  onHoverEnd={() => setHoveredSocial(null)}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                    hoveredSocial === index
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/40"
                      : "bg-white/10 text-white"
                  }`}
                >
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Products Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1"
          >
            <h5 className="font-bold mb-6 text-white relative pb-2">
              <span className="invisible sm:visible absolute bottom-0 left-0 w-8 h-0.5 bg-blue-500 rounded"></span>
             <span className="font-poppins text-[20px] font-bold">Products</span> 
            </h5>
            <ul className="list-disc pl-3.5 text-white sm:list-none m-0 p-0">
              {["Rice", "Salt", "Sugar", "Spices", "Dry Fruits", "Oil"].map(
                (item, index) => (
                <motion.li
                  key={index}
                  className="mb-3"
                  onHoverStart={() => setHoveredLink(`product-${index}`)}
                  onHoverEnd={() => setHoveredLink(null)}
                >
                  <Link
                    to={`/category/${item.toLowerCase()}`}
                    className={`no-underline flex items-center py-1 transition-all ${
                      hoveredLink === `product-${index}`
                        ? "text-blue-500 translate-x-2"
                        : "text-gray-300"
                    }`}
                  >
                    <span
                      className={`mr-2 transition-opacity ${
                        hoveredLink === `product-${index}` ? "opacity-100" : "opacity-0"
                      }`}
                    > 
                      › 
                    </span>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h5 className="font-bold mb-6 text-white relative pb-2">
              <span className="invisible sm:visible absolute bottom-0 left-0 w-8 h-0.5 bg-blue-500 rounded"></span>
              <span className="font-poppins text-[20px] font-bold">Contact</span>
            </h5>
            <ul className="list-none m-0 p-0 mb-6 ">
              <motion.li
                className="mb-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center">
                  <div className="w-9 h-9 rounded-full bg-blue-500/15 flex items-center justify-center mr-4">
                    <FaLocationDot size={16} className="text-blue-500" />
                  </div>
                  <a
                    href="https://maps.google.com/?q=Third Floor, 69, New Manglapuri, New Delhi, Delhi 110030, India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 leading-normal no-underline transition-colors hover:text-blue-500"
                  >
                    Third Floor, 69, New Manglapuri, New Delhi, Delhi 110030,
                    India
                  </a>
                </div>
              </motion.li>

              <motion.li
                className="mb-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center">
                  <div className="w-9 h-9 rounded-full bg-blue-500/15 flex items-center justify-center mr-4">
                    <FaPhoneFlip size={16} className="text-blue-500" />
                  </div>
                  <a
                    href="tel:+919220852922"
                    className="text-gray-300 no-underline transition-colors hover:text-blue-500"
                  >
                    +91-92208 52922
                  </a>
                </div>
              </motion.li>

              <motion.li
                className="mb-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center">
                  <div className="w-9 h-9 rounded-full bg-blue-500/15 flex items-center justify-center mr-4">
                    <FaEnvelope size={16} className="text-blue-500" />
                  </div>
                  <a
                    href="mailto:customercare@akdenar.com"
                    className="text-gray-300 no-underline transition-colors hover:text-blue-500"
                  >
                    support@akdenar.com
                  </a>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        {/* Copyright and Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear}{" "}
              <span className="text-gray-300">Akdenar Products</span>. All rights
              reserved.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <ul className="flex flex-wrap justify-center gap-2">
              {footerLinks.map((link, index) => (
                <li key={index} className="flex items-center">
                  <Link
                    to={link.href}
                    className="text-gray-400 text-sm no-underline transition-colors hover:text-blue-500"
                  >
                    {link.name}
                  </Link>
                  {index < footerLinks.length - 1 && (
                    <span className="mx-2 text-gray-600 text-xs">•</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
