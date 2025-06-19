import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaBox, FaComment, FaPaperPlane, FaCheck, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { TextField, InputAdornment } from "@mui/material";
import type { IFormDataProductContactForm, IFocusedProductContactForm } from '../types/types';

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
    const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFocus = (field: keyof IFocusedProductContactForm) => {
        setFocused({ ...focused, [field]: true });
    };

    const handleBlur = (field: keyof IFocusedProductContactForm) => {
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
        setHasSubmitted(true);

        if (!isFormValid()) {
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
                setHasSubmitted(false);

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
                        {[
                            { name: "fname", icon: FaUser, placeholder: "Your Name", type: "text", error: "Please enter your name (at least 2 characters)", delay: 0 },
                            { name: "email", icon: FaEnvelope, placeholder: "Your Email", type: "email", error: "Please enter a valid email address (e.g., name@example.com)", delay: 0.1 },
                            { name: "phone", icon: FaPhone, placeholder: "Your Phone Number", type: "tel", error: "Please enter a valid phone number (10-15 digits)", delay: 0.2 },
                            { name: "companyName", icon: FaBuilding, placeholder: "Company Name (Optional)", type: "text", error: "", delay: 0.3 },
                            { name: "productName", icon: FaBox, placeholder: "Product Name", type: "text", error: "Please enter the product name (at least 2 characters)", delay: 0.4, colSpan: true },
                            { name: "message", icon: FaComment, placeholder: "Your Message", type: "textarea", error: "Please enter a message with at least 10 characters", delay: 0.5, colSpan: true },
                        ].map((field) => (
                            <motion.div
                                key={field.name}
                                className={`mb-4 ${field.colSpan ? "col-span-1 md:col-span-2" : ""}`}
                                initial={{ x: field.colSpan ? 0 : field.name === "email" || field.name === "companyName" ? 10 : -10, opacity: 0, y: field.colSpan ? 10 : 0 }}
                                whileInView={{ x: 0, y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: field.delay }}
                            >
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type={field.type === "textarea" ? "text" : field.type}
                                    name={field.name}
                                    value={formData[field.name as keyof IFormDataProductContactForm]}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus(field.name as keyof IFocusedProductContactForm)}
                                    onBlur={() => handleBlur(field.name as keyof IFocusedProductContactForm)}
                                    onKeyPress={field.type === "tel" ? handleKeyPress : undefined}
                                    placeholder={field.placeholder}
                                    multiline={field.type === "textarea"}
                                    rows={field.type === "textarea" ? 4 : undefined}
                                    required={field.name !== "companyName"}
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
                                                    className={`${
                                                        focused[field.name as keyof IFocusedProductContactForm] || formData[field.name as keyof IFormDataProductContactForm]
                                                            ? "text-blue-600"
                                                            : "text-gray-400"
                                                    } ${field.type === "textarea" ? "mt-2" : ""}`}
                                                />
                                            </InputAdornment>
                                        ),
                                        sx: {
                                            fontSize: "1rem",
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: hasSubmitted && !isFieldValid(field.name) ? "red" : "gray",
                                                transition: "border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                                            },
                                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#3b82f6", // blue-500
                                            },
                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#3b82f6",
                                                boxShadow: "0 0 0 1px #3b82f6",
                                            },
                                        },
                                    }}
                                    InputLabelProps={{
                                        sx: {
                                            fontSize: "1rem",
                                            color: focused[field.name as keyof IFocusedProductContactForm] || formData[field.name as keyof IFormDataProductContactForm] ? "#3b82f6" : "gray",
                                            "&.Mui-focused": {
                                                color: "#3b82f6",
                                            },
                                        },
                                    }}
                                    error={hasSubmitted && !isFieldValid(field.name)}
                                    helperText={hasSubmitted && !isFieldValid(field.name) ? field.error : ""}
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
                            className="col-span-1 md:col-span-2 text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="bg-gradient-to-r from-blue-600 to-blue-900 text-white px-5 ds:px-8 py-3 ds:py-4 rounded-full font-medium text-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
                </form>
            </div>
        </motion.div>
    );
};

export default ProductContactForm;