import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaBox, FaComment, FaPaperPlane, FaCheck, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import type {IFormDataProductContactForm , IFocusedProductContactForm} from '../types/types';

type ProductContactFormProps = {
    productName?: string;
}

const ProductContactForm: React.FC<ProductContactFormProps> = ({ productName = "" }) => {
    const [formData, setFormData] = useState<IFormDataProductContactForm>({
        fname: "",
        email: "",
        phone: "",
        companyName: "",
        productName: productName || "",
        message: ""
    });

    const [focused, setFocused] = useState<IFocusedProductContactForm>({
        fname: false,
        email: false,
        phone: false,
        companyName: false,
        productName: false,
        message: false
    });

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFocus = (field: keyof IFocusedProductContactForm) => {
        setFocused({ ...focused, [field]: true });
    };

    const handleBlur = (field: keyof IFocusedProductContactForm) => {
        setFocused({ ...focused, [field]: false });
    };

    const isFieldValid = (field: string) => {
        if (field === "fname") return formData.fname.length >= 2;
        if (field === "email") return /^\S+@\S+\.\S+$/.test(formData.email);
        if (field === "phone") return /^\+?[0-9]{10,15}$/.test(formData.phone.replace(/\s/g, ''));
        if (field === "companyName") return true;
        if (field === "productName") return formData.productName.length >= 2;
        if (field === "message") return formData.message.length >= 10;
        return true;
    };

    const isFormValid = () => {
        return (
            isFieldValid("fname") &&
            isFieldValid("email") &&
            isFieldValid("phone") &&
            isFieldValid("productName") &&
            isFieldValid("message")
        );
    };

    const contactFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isFormValid()) {
            setFocused({
                fname: true,
                email: true,
                phone: true,
                companyName: false,
                productName: true,
                message: true
            });

            toast.error("Please correct all errors in the form before submitting.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });

            return;
        }

        setIsSubmitting(true);

        try {
            console.log("Sending email with data:", formData);

            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/send`,
                {
                    name: formData.fname,
                    phone: formData.phone,
                    email: formData.email,
                    message: formData.message,
                    companyName: formData.companyName,
                    productName: formData.productName
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": import.meta.env.VITE_API_KEY
                    },
                }
            );

            if (response.status === 200) {
                setSubmitStatus("success");

                setFormData({
                    fname: "",
                    email: "",
                    phone: "",
                    companyName: "",
                    productName: productName || "",
                    message: ""
                });

                setFocused({
                    fname: false,
                    email: false,
                    phone: false,
                    companyName: false,
                    productName: false,
                    message: false
                });

                toast.success("Your inquiry has been sent successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });

                setTimeout(() => {
                    setSubmitStatus(null);
                }, 5000);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setSubmitStatus('error');

            let errorMessage = "Failed to send inquiry. Please try again later.";
           
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    if (error.response.status === 429) {
                        errorMessage = "Too many attempts. Please try again later.";
                    } else if (error.response.data && error.response.data.message) {
                        errorMessage = error.response.data.message;
                    }
                } else if (error.request) {
                    errorMessage = "No response from server. Please check your internet connection.";
                }
            }
            toast.error(errorMessage, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });

            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
        >
            <div className="p-6 bg-[linear-gradient(rgba(13,110,253,0.9),rgba(13,110,253))] text-white">
                <h3 className="font-bold text-3xl mb-2">Interested in this product?</h3>
                <p className="mb-0 text-lg">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <div className="p-6">
                <form onSubmit={contactFormSubmit}>
                    <AnimatePresence>
                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-green-100 text-green-800 p-4 rounded-lg flex items-center mb-4"
                                role="alert"
                            >
                                <FaCheck className="mr-2" />
                                <div>Your inquiry has been sent successfully! We'll contact you soon.</div>
                            </motion.div>
                        )}

                        {submitStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-red-100 text-red-800 p-4 rounded-lg flex items-center mb-4"
                                role="alert"
                            >
                                <FaTimes className="mr-2" />
                                <div>There was an error sending your inquiry. Please try again.</div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <motion.div
                                className="mb-4"
                                initial={{ x: -10, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="relative flex items-center">
                                    <span className="absolute left-3">
                                        <FaUser className={`${focused.fname || formData.fname ? 'text-blue-600' : 'text-gray-400'}`} />
                                    </span>
                                    <input
                                        type="text"
                                        name="fname"
                                        value={formData.fname}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('fname')}
                                        onBlur={() => handleBlur('fname')}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${!isFieldValid('fname') && (focused.fname || formData.fname) ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                {!isFieldValid('fname') && (focused.fname || formData.fname) && (
                                    <div className="text-red-500 text-xs mt-1 ml-2">
                                        Please enter your name (at least 2 characters)
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        <div>
                            <motion.div
                                className="mb-4"
                                initial={{ x: 10, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                <div className="relative flex items-center">
                                    <span className="absolute left-3">
                                        <FaEnvelope className={`${focused.email || formData.email ? 'text-blue-600' : 'text-gray-400'}`} />
                                    </span>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('email')}
                                        onBlur={() => handleBlur('email')}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${!isFieldValid('email') && (focused.email || formData.email) ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                                {!isFieldValid('email') && (focused.email || formData.email) && (
                                    <div className="text-red-500 text-xs mt-1 ml-2">
                                        Please enter a valid email address (e.g., name@example.com)
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        <div>
                            <motion.div
                                className="mb-4"
                                initial={{ x: -10, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <div className="relative flex items-center">
                                    <span className="absolute left-3">
                                        <FaPhone className={`${focused.phone || formData.phone ? 'text-blue-600' : 'text-gray-400'}`} />
                                    </span>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('phone')}
                                        onBlur={() => handleBlur('phone')}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${!isFieldValid('phone') && (focused.phone || formData.phone) ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Your Phone Number"
                                        required
                                    />
                                </div>
                                {!isFieldValid('phone') && (focused.phone || formData.phone) && (
                                    <div className="text-red-500 text-xs mt-1 ml-2">
                                        Please enter a valid phone number (10-15 digits)
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        <div>
                            <motion.div
                                className="mb-4"
                                initial={{ x: 10, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                            >
                                <div className="relative flex items-center">
                                    <span className="absolute left-3">
                                        <FaBuilding className={`${focused.companyName || formData.companyName ? 'text-blue-600' : 'text-gray-400'}`} />
                                    </span>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('companyName')}
                                        onBlur={() => handleBlur('companyName')}
                                        className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                        placeholder="Company Name (Optional)"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <motion.div
                                className="mb-4"
                                initial={{ y: 10, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                            >
                                <div className="relative flex items-center">
                                    <span className="absolute left-3">
                                        <FaBox className={`${focused.productName || formData.productName ? 'text-blue-600' : 'text-gray-400'}`} />
                                    </span>
                                    <input
                                        type="text"
                                        name="productName"
                                        value={formData.productName}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('productName')}
                                        onBlur={() => handleBlur('productName')}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${!isFieldValid('productName') && (focused.productName || formData.productName) ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Product Name"
                                        required
                                    />
                                </div>
                                {!isFieldValid('productName') && (focused.productName || formData.productName) && (
                                    <div className="text-red-500 text-xs mt-1 ml-2">
                                        Please enter the product name (at least 2 characters)
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <motion.div
                                className="mb-4"
                                initial={{ y: 10, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                            >
                                <div className="relative">
                                    <span className="absolute left-3 top-3">
                                        <FaComment className={`${focused.message || formData.message ? 'text-blue-600' : 'text-gray-400'}`} />
                                    </span>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('message')}
                                        onBlur={() => handleBlur('message')}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${!isFieldValid('message') && (focused.message || formData.message) ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Your Message"
                                        rows={4}
                                        required
                                    ></textarea>
                                </div>
                                {!isFieldValid('message') && (focused.message || formData.message) && (
                                    <div className="text-red-500 text-xs mt-1 ml-2">
                                        Please enter a message with at least 10 characters
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="bg-gradient-to-r from-blue-600 to-blue-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                                            <span>Sending inquiry...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center">
                                            <span>Submit Inquiry</span>
                                            <FaPaperPlane className="ml-2" size={16} />
                                        </div>
                                    )}
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default ProductContactForm;