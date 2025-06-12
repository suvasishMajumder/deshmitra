import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import type { TContactInfo, TSocialMedia } from "../types/types";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import type { IFAQ } from "../types/types";

const Contact = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("page-contact");
    return () => {
      document.body.classList.remove("page-contact");
    };
  }, []);

  const contactInfo: TContactInfo[] = [
    {
      icon: FaMapMarkerAlt,
      title: "Office Address",
      details: [
        "Third Floor, 69, New Manglapuri, New Delhi, Delhi 110030, India",
        "Village Puraina Siwan Bihar 841232",
        "Plot NO.57/58 Gidc Halvad, Surendranagar, Gujarat 363330",
      ],
      color: "#034AD8",
      ariaLabel:
        "Office address including three locations in Delhi, Bihar, and Gujarat",
    },
    {
      icon: FaPhone,
      title: "Phone Number",
      details: ["+91-9220852922", "+91-7999824772"],
      color: "#186329",
      ariaLabel: "Company phone numbers, primary and secondary lines",
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      details: ["hr@akdenar.com", "support@akdenar.com"],
      color: "#fd7e14",
      ariaLabel: "HR and support email addresses for inquiries",
    },
    {
      icon: FaClock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
      ],
      color: "#dc3545",
      ariaLabel: "Business operating hours Monday through Saturday",
    },
  ];

  const socialMedia: TSocialMedia[] = [
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/share/1AmuCTSfNp",
      color: "#1877F2",
      name: "Facebook",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/akdenar",
      color: "#E4405F",
      name: "Instagram",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/company/akdenar2",
      color: "#0A66C2",
      name: "LinkedIn",
    },
  ];

  const faqs: IFAQ[] = [
    {
      question: "How can I place a bulk order?",
      answer: (
        <>
          For bulk orders, please contact our sales team directly at{" "}
          <a href="tel:+919220852922" className="text-blue-600 hover:underline">
            +91-92208 52922
          </a>{" "}
          or email us at{" "}
          <a
            href="mailto:support@akdenar.com"
            className="text-blue-600 hover:underline"
          >
            support@akdenar.com
          </a>
          . We offer special pricing and shipping arrangements for bulk
          purchases.
        </>
      ),
    },
    {
      question: "What areas do you deliver to?",
      answer:
        "We currently deliver to major cities across India including Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, and more. For a complete list of delivery areas, please check our delivery information page. We Deliver All Over the Globe",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on the shipping carrier's site. If you have any issues, feel free to contact our support team.",
    },
    {
      question: "What is your return policy?",
      answer:
        "Currently, we do not offer a return policy. However, if you face any issues with your order, please reach out to our customer support team—we’re here to help resolve any concerns.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we do offer international shipping for select products. Shipping costs and delivery times vary by destination. Please contact our support team for specific information about international orders.",
    },
  ];

  return (
    <div className="pt-[165px]">
      {/* Hero Section */}
      <section
        className="bg-white/98 rounded-b-3xl flex justify-center items-center flex-col relative overflow-hidden
                   min-h-[300px] sm:min-h-[415px] shadow-md py-3 sm:py-5"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-5">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ fontWeight: "bolder" }}
              className="text-3xl sm:text-4xl md:text-6xl  mb-4"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-center md:text-xl mb-0"
            >
              We're here to help with any questions about our products,
              services, or anything
              <br />
              else you might want to know.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section
        className="my-12 md:py-3 bg-gray-100  sm:h-auto md:h-[80vh] 
      ss:h-[70vh] lg:h-[60vh] sm:py-2 flex justify-center items-center"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid w-full  grid-cols-1  md:grid-cols-2 ss:grid-cols-4 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <motion.div
                aria-label={info.ariaLabel}
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="py-7 px-4 shadow-xs  rounded-2xl bg-white"
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: { duration: 0.6, ease: "easeOut" },
                }}
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.1 + 0.3,
                    }}
                    className="rounded-full flex items-center justify-center mb-3 w-[70px] h-[70px] mx-auto"
                    style={{
                      background: `linear-gradient(135deg, ${info.color}22, ${info.color}44)`,
                    }}
                  >
                    <info.icon size={28} style={{ color: info.color }} />
                  </motion.div>

                  <motion.h4
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    className="font-poppins font-[900] mb-3 text-2xl"
                    style={{ color: info.color }}
                  >
                    {info.title}
                  </motion.h4>

                  {info.details.map((detail, idx) => {
                    let linkElement: React.ReactNode = detail;
                    if (info.title === "Email Address") {
                      linkElement = (
                        <a
                          href={`mailto:${detail}`}
                          className="text-inherit font-inter no-underline ease-in-out hover:text-[#fd7e14] 
                          transition-colors  duration-500"
                        >
                          {detail}
                        </a>
                      );
                    } else if (info.title === "Phone Number") {
                      linkElement = (
                        <a
                          href={`tel:${detail.replace(/\s/g, "")}`}
                          className="text-inherit no-underline hover:text-[#28a745] ease-in-out transition-colors duration-500"
                        >
                          {detail}
                        </a>
                      );
                    } else if (info.title === "Office Address") {
                      linkElement = (
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(
                            detail
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-inherit no-underline hover:text-[#3a7bfc] ease-in-out transition-colors duration-500"
                        >
                          {detail}
                        </a>
                      );
                    }
                    return (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + 0.8 + idx * 0.1,
                        }}
                        className={`mb-${
                          idx === info.details.length - 1 ? "0" : "2"
                        }`}
                      >
                        {linkElement}
                      </motion.p>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="py-3 sm:py-5"
        style={{
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="lg:w-10/12 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl shadow-sm p-5 md:p-6"
              >
                <h2 className="font-bold mb-5 text-center text-2xl sm:text-3xl md:text-4xl">
                  Send Us a Message
                </h2>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Frequently Asked Questions
            </h2>
            <motion.div
              className="bg-blue-600 mx-auto mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ height: "3px" }}
            />
            <p className="text-gray-600 text-base sm:text-lg">
              Find quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-5xl  mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-xl  shadow overflow-hidden`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className={`w-full flex items-center ${
                      idx === openIndex
                        ? "bg-[#cfe2ff] shadow-sm shadow-blue-400"
                        : "bg-white"
                    }
                     justify-between cursor-pointer p-4 sm:p-6 text-left focus:outline-none`}
                  >
                    <span className="font-[600] text-gray-800">
                      {faq.question}
                    </span>
                    <span className="ml-2 text-gray-500">
                      {isOpen ? (
                        <HiChevronUp size={20} />
                      ) : (
                        <HiChevronDown size={20} />
                      )}
                    </span>
                  </button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      isOpen
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-4 sm:px-6 overflow-hidden"
                  >
                    <div className="py-4 text-gray-700 text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-3 sm:py-5 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="font-bold mb-4 text-2xl sm:text-3xl">
              Visit Our Office
            </h2>
            <p className="text-base sm:text-lg mb-0">
              Come see us in person! We'd love to meet you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-lg h-[300px] sm:h-[400px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.3702865186397!2d77.14772287504702!3d28.55683178059798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d0f343048e5%3A0x5a19c1a6a62e6e9!2sNew%20Manglapuri%2C%20New%20Delhi%2C%20Delhi%20110030!5e0!3m2!1sen!2sin!4v1686919234343!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Akdenar Office Location"
              ></iframe>
            </div>
          </motion.div>

          <div className="mt-5 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-bold mb-4 text-xl sm:text-2xl">
                Connect With Us
              </h3>
              <div className="flex gap-8 justify-center flex-wrap">
                {socialMedia.map((social, index) => (
                  <motion.a
                  aria-label={`open ${social.name} in a completely new tab`}
                  rel="noopener noreferrer"
                  target="_blank"
                    key={index}
                    href={social.link}
                    className="flex items-center justify-center w-[50px] h-[50px] rounded-full"
                    style={{ background: social.color }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: `0 4px 20px ${social.color}66`,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <social.icon focusable='false' aria-hidden='true' size={24} className="text-white" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
