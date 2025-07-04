import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaComment,
  FaPaperPlane,
  FaCheck,
  FaTimes,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { TextField, InputAdornment } from "@mui/material";
import type { IFormData, IFocused } from "../types/types";

const ContactForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [focused, setFocused] = useState<IFocused>({
    name: false,
    email: false,
    phone: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field: keyof IFocused) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field: keyof IFocused) => {
    setFocused({ ...focused, [field]: false });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const char = e.key;
    const input = e.currentTarget as HTMLInputElement;
    const cursorPosition = input.selectionStart || 0;
    // Allow only digits, and a '+' only at the start
    if (
      !/[0-9]/.test(char) &&
      !(char === "+" && cursorPosition === 0 && !input.value.includes("+"))
    ) {
      e.preventDefault();
    }
  };

  const isFieldValid = (field: keyof IFormData) => {
    if (field === "name") return formData.name.length >= 2;
    if (field === "email") return /^\S+@\S+\.\S+$/.test(formData.email);
    if (field === "phone")
      return /^\+?[0-9]{10,15}$/.test(formData.phone.replace(/\s/g, ""));
    if (field === "message") return formData.message.length >= 10;
    return true;
  };

  const isFormValid = () => {
    return (
      isFieldValid("name") &&
      isFieldValid("email") &&
      isFieldValid("phone") &&
      isFieldValid("message")
    );
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (!isFormValid()) {
      setFocused({
        name: true,
        email: true,
        phone: true,
        message: true,
      });
      toast.error("Please correct all errors in the form before submitting.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Sending email with data:", formData);
      console.log("Server URL:", import.meta.env.VITE_SERVER_URL);
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/send`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": import.meta.env.VITE_API_KEY,
          },
        }
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        formRef.current?.reset();
        setFormData({ name: "", email: "", phone: "", message: "" });
        setFocused({
          name: false,
          email: false,
          phone: false,
          message: false,
        });
        setHasSubmitted(false);
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error: unknown) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");

      let errorMessage = "Failed to send message. Please try again later.";
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 429) {
            errorMessage = "Too many attempts. Please try again later.";
          } else if (
            typeof error.response.data === "object" &&
            error.response.data !== null &&
            "message" in error.response.data
          ) {
            errorMessage = (error.response.data as { message: string }).message;
          }
        } else if (error.request) {
          errorMessage =
            "No response from server. Please check your internet connection.";
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="my-5 rounded-3xl overflow-hidden relative bg-gradient-to-br from-white to-gray-50 shadow-[0_15px_35px_rgba(0,0,0,0.07),0_5px_15px_rgba(0,0,0,0.05)]"
    >
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[rgba(58,123,252,0.07)] to-[rgba(58,123,252,0.01)] -top-[150px] -right-[100px] z-0"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-br from-[rgba(58,123,252,0.05)] to-[rgba(58,123,252,0.01)] -bottom-[100px] -left-[50px] z-0"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />

      <div className="flex flex-col md:flex-row py-20">
        <div className="hidden md:block md:w-5/12 bg-gradient-to-br from-[#3a7bfc] to-[#0046c0] relative overflow-hidden">
          <motion.div
            className="h-full flex flex-col justify-center items-center p-4 z-10"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div className="text-center text-white p-4">
              <motion.h3
                className="font-bold mb-4 text-xl md:text-2xl"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Let's Connect
              </motion.h3>

              <motion.p
                className="mb-5 font-light text-base md:text-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </motion.p>

              <motion.div
                className="flex flex-col gap-4 mt-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9, staggerChildren: 0.1 }}
              >
                {[
                  {
                    icon: FaEnvelope,
                    label: "Email Us At",
                    text: "support@akdenar.com",
                    href: "mailto:support@akdenar.com",
                  },
                  {
                    icon: FaPhone,
                    label: "Call Us At",
                    text: "+91-9220852922",
                    href: "tel:+919220852922",
                  },
                  {
                    icon: FaMapMarkerAlt,
                    label: "Located At",
                    text: "Third Floor, 69, New Manglapuri, New Delhi, Delhi 110030, India",
                    href: "https://maps.google.com/?q=Third Floor, 69, New Manglapuri, New Delhi, Delhi 110030, India",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  >
                    <div className="rounded-full bg-white flex items-center justify-center mr-3 w-[42px] h-[42px] min-w-[42px]">
                      <item.icon className="text-[#3a7bfc]" size={18} />
                    </div>
                    <div className="text-left">
                      <h6 className="text-white mb-0 font-normal opacity-75 text-xs">
                        {item.label}
                      </h6>
                      <p className="text-white mb-0 text-sm">
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="hover:opacity-80 transition-opacity duration-300"
                        >
                          {item.text}
                        </a>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <div className="absolute top-5 left-5 w-[50px] h-[50px] rounded-full bg-white/10"></div>
            <div className="absolute bottom-8 right-10 w-[70px] h-[70px] rounded-full bg-white/10"></div>
            <div className="absolute top-1/2 right-5 w-[25px] h-[25px] rounded-full bg-white/10"></div>
          </motion.div>
        </div>

        <div className="w-full md:w-7/12 p-4 md:p-5 relative z-10">
          <motion.h2
            className="text-[#3a7bfc] font-bold mb-4 text-xl md:text-2xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>

          <form ref={formRef} onSubmit={sendEmail} className="relative">
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center bg-green-100 text-green-800 p-3 rounded mb-4"
                  role="alert"
                >
                  <FaCheck className="mr-2" />
                  <div>Your message has been sent successfully!</div>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center bg-red-100 text-red-800 p-3 rounded mb-4"
                  role="alert"
                >
                  <FaTimes className="mr-2" />
                  <div>
                    There was an error sending your message. Please try again.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {[
              {
                name: "name",
                icon: FaUser,
                placeholder: "Your Name",
                type: "text",
                error: "Please enter your name (at least 2 characters)",
              },
              {
                name: "email",
                icon: FaEnvelope,
                placeholder: "Your Email",
                type: "email",
                error:
                  "Please enter a valid email address (e.g., name@example.com)",
              },
              {
                name: "phone",
                icon: FaPhone,
                placeholder: "Your Phone Number",
                type: "tel",
                error: "Please enter a valid phone number (10-15 digits)",
              },
              {
                name: "message",
                icon: FaComment,
                placeholder: "Your Message",
                type: "textarea",
                error: "Please enter a message with at least 10 characters",
              },
            ].map((field, index) => (
              <motion.div
                key={field.name}
                className="mb-4"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <TextField
                  fullWidth={true}
                  variant="outlined"
                  type={field.type === "textarea" ? "text" : field.type}
                  name={field.name}
                  value={formData[field.name as keyof IFormData]}
                  onChange={handleChange}
                  onFocus={() => handleFocus(field.name as keyof IFocused)}
                  onBlur={() => handleBlur(field.name as keyof IFocused)}
                  onKeyPress={field.type === "tel" ? handleKeyPress : undefined}
                  placeholder={field.placeholder}
                  multiline={field.type === "textarea"}
                  rows={field.type === "textarea" ? 1 : undefined}
                  required
                  inputProps={
                    field.type === "tel"
                      ? {
                          inputMode: "numeric",
                        }
                      : {}
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <field.icon
                          className={`d-flex align-items-center ${
                            focused[field.name as keyof IFocused] ||
                            formData[field.name as keyof IFormData]
                              ? "text-[#3a7bfc]"
                              : "text-gray-400"
                          }${field.type === "textarea" ? "mt-2" : ""}`}
                        />
                      </InputAdornment>
                    ),
                    sx: {
                      fontSize: "1.125rem",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor:
                          hasSubmitted &&
                          !isFieldValid(field.name as keyof IFormData)
                            ? "red"
                            : "gray",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#3a7bfc",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#3a7bfc",
                        boxShadow: "0 0 0 1px #3a7bfc",
                      },
                    },
                  }}
                  error={
                    hasSubmitted && !isFieldValid(field.name as keyof IFormData)
                  }
                  helperText={
                    hasSubmitted && !isFieldValid(field.name as keyof IFormData)
                      ? field.error
                      : ""
                  }
                  sx={{
                    "& .MuiFormHelperText-root": {
                      marginLeft: "0.5rem",
                      fontSize: "0.75rem",
                      color: "red",
                    },
                  }}
                />
              </motion.div>
            ))}

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: "scale(0.05)" }}
                type="submit"
                className="bg-gradient-to-br from-[#3a7bfc] to-[#0046c0] text-white text-lg px-4 py-2 rounded-full shadow-[0_4px_20px_rgba(58,123,252,0.3)] hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center  justify-center">
                    <div className="animate-spin h-5 w-5 border-b-2 border-white border-t-transparent rounded-full mr-2"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <span>Send Message</span>
                    <FaPaperPlane className="ml-2" size={16} />
                  </div>
                )}
              </motion.button>
            </motion.div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
