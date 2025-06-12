// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FaLeaf, FaCheck, FaUsers, FaGlobe, FaHeart } from "react-icons/fa6";
// import type { TValues } from "../types/types";

// const About = () => {
//   const [farmerCounter, setFarmerCounter] = useState<number>(0);
//   const [customerCounter, setCustomerCounter] = useState<number>(0);
//   useEffect(() => {
//     const id = setInterval(() => {
//       setFarmerCounter(prev => {
//         if (prev < 500) {
//           return prev + 1;
//         } else {
//           clearInterval(id);
//           return prev;
//         }
//       });
//     }, 100);

//     return () => clearInterval(id);
//   }, []);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCustomerCounter(prev => {
//         if (prev < 5000) {
//           return prev + 1;
//         } else {
//           clearInterval(id);
//           return prev;
//         }
//       });
//     }, 10);

//     return () => clearInterval(id);
//   }, []);


//   useEffect(() => {
//     window.scrollTo(0, 0);
//     document.body.classList.add("page-about");
//     return () => {
//       document.body.classList.remove("page-about");
//     };
//   }, []);

//   const values: TValues[] = [
//     {
//       icon: FaLeaf,
//       title: "Quality First",
//       description:
//         "We are committed to sourcing and providing the highest quality products that meet rigorous standards.",
//       color: "#28a745",
//     },
//     {
//       icon: FaHeart,
//       title: "Customer Focus",
//       description:
//         "Our customers are at the heart of everything we do, and we strive to exceed their expectations.",
//       color: "#dc3545",
//     },
//     {
//       icon: FaUsers,
//       title: "Collaborative Spirit",
//       description:
//         "We build strong relationships with farmers, suppliers and partners to ensure the best products.",
//       color: "#fd7e14",
//     },
//     {
//       icon: FaGlobe,
//       title: "Sustainability",
//       description:
//         "We are committed to sustainable practices that protect our environment for future generations.",
//       color: "#3a7bfc",
//     },
//   ];

//   //   const teamMembers = [
//   //     {
//   //       name: "Rajesh Kumar",
//   //       position: "Founder & CEO",
//   //       bio: "With over 20 years of experience in the agricultural sector, Rajesh founded Akdenar with a vision to bridge the gap between farmers and consumers.",
//   //       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//   //     },
//   //     {
//   //       name: "Priya Sharma",
//   //       position: "Chief Operations Officer",
//   //       bio: "Priya oversees the day-to-day operations, ensuring that our supply chain runs efficiently and that quality is maintained at every step.",
//   //       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//   //     },
//   //     {
//   //       name: "Amit Patel",
//   //       position: "Head of Procurement",
//   //       bio: "Amit works directly with farmers and suppliers to source the highest quality products while ensuring fair trade practices.",
//   //       image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//   //     },
//   //     {
//   //       name: "Sanjana Reddy",
//   //       position: "Quality Assurance Manager",
//   //       bio: "Sanjana leads our quality control team, implementing rigorous testing procedures to ensure only the best products reach our customers.",
//   //       image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//   //     }
//   //   ];

//   return (
//     <div className="pt-16 bg-white px-20">
//       {/* Hero Section */}
//       <section className="hero-section position-relative py-4">
//         {/* Remove background image div and keep clean white background */}
//         <div className="container py-5">
//           <div className="row align-items-center">
//             <div className="col-lg-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <section className="px-6 py-12 md:py-20 bg-red-800">
//                   <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
//                     {/* Left Content */}
//                     <div className="md:w-1/2">
//                       <h2 className="text-6xl font-bold text-gray-900 mb-4">
//                         Our Story
//                       </h2>
//                       <p className="text- 2xltext-gray-700 mb-6 font-sans">
//                         Founded in 2024, Akdenar has grown from a small trading
//                         company to become one of India's leading providers of
//                         premium quality products.
//                       </p>
//                       <p className="text-md text-gray-600 mb-8">
//                         Our journey began with a simple mission: to connect
//                         sellers directly with buyers, ensuring fair prices for
//                         producers and the highest quality for customers.
//                       </p>

//                       {/* Stats */}
//                       <div className="flex gap-12">
//                         <div>
//                           {/* <p className="text-2xl font-bold text-blue-600">500+</p> */}
//                           <p className="text-2xl font-bold text-blue-600">
//                             {farmerCounter}+
//                           </p>
//                           <p className="text-gray-600">Farmer Network</p>
//                         </div>
//                         <div>
//                           <p className="text-2xl font-bold text-blue-600">
//                             {customerCounter}+
//                           </p>
//                           <p className="text-gray-600">Happy Customers</p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Right Image */}
//                     <div className="md:w-1/2">
//                       <img
//                         src="https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                         alt="Farmer"
//                         className="w-full rounded-2xl shadow-lg object-cover"
//                       />
//                     </div>
//                   </div>
//                 </section>
//               </motion.div>
//             </div>
//             <div className="col-lg-6 d-none d-lg-block">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="rounded-4 overflow-hidden"
//               ></motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision Section */}
//       <section className="py-20 font-poppins bg-gray-50">
//         <div className="container mx-auto px-4 py-16">
//           <div className="flex justify-center mb-20">
//             <div className="w-full max-w-4xl text-center">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <h2 className="text-5xl font-bold mb-6">
//                   Our Mission & Vision
//                 </h2>
//                 <div className="bg-blue-500 mx-auto mb-6 h-1 w-20"></div>
//               </motion.div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="col-span-1">
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="card border-none h-full shadow-md rounded-2xl bg-white"
//               >
//                 <div className="p-8">
//                   <div
//                     className="inline-flex items-center justify-center mb-6 rounded-full w-14 h-14"
//                     style={{
//                       background:
//                         "linear-gradient(135deg, #3a7bfc22, #3a7bfc44)",
//                     }}
//                   >
//                     <FaLeaf size={24} className="text-blue-500" />
//                   </div>
//                   <h3 className="font-bold text-3xl mb-4">Our Mission</h3>
//                   <p className="font-sans text-xl mb-0">
//                     Empowering small dealers, wholesalers, and retailers to
//                     access quality manufacturers, solve bulk logistics
//                     challenges, and simplify B2B sourcing and exporting with a
//                     reliable, tech-driven platform.
//                   </p>
//                 </div>
//               </motion.div>
//             </div>

//             <div className="col-span-1">
//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="card border-none h-full shadow-md rounded-2xl bg-white"
//               >
//                 <div className="p-8">
//                   <div
//                     className="inline-flex items-center justify-center mb-6 rounded-full w-14 h-14"
//                     style={{
//                       background:
//                         "linear-gradient(135deg, #3a7bfc22, #3a7bfc44)",
//                     }}
//                   >
//                     <FaGlobe size={30} className="text-blue-500" />
//                   </div>
//                   <h3 className="font-bold text-3xl mb-4">Our Vision</h3>
//                   <p className="font-sans text-xl mb-0">
//                     To become the most trusted B2B platform enabling seamless
//                     trade, logistics, and exports between Indian manufacturers
//                     and global buyers through technology and transparency.
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-12 font-sans">
//         <div className="container mx-auto py-4 px-4">
//           <div className="flex justify-center mb-12">
//             <div className="w-full lg:w-8/12 text-center">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <h2 className="text-5xl font-bold mb-4">Our Core Values</h2>
//                 <div className="bg-blue-500 mx-auto mb-4 h-1 w-20"></div>
//                 <p className="text-xl text-gray-600">
//                   The principles that guide everything we do at Akdenar
//                 </p>
//               </motion.div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((value, index) => (
//               <div key={index} className="col-span-1">
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   className="card border-0 h-full shadow-sm bg-white rounded-2xl"
//                   whileHover={{
//                     y: -10,
//                     boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//                     transition: { duration: 0.3 },
//                   }}
//                 >
//                   <div className="card-body p-6 text-center">
//                     <div
//                       className="rounded-full inline-flex items-center justify-center mb-5 mx-auto"
//                       style={{
//                         width: "70px",
//                         height: "70px",
//                         background: `linear-gradient(135deg, ${value.color}22, ${value.color}44)`,
//                       }}
//                     >
//                       <value.icon size={28} style={{ color: value.color }} />
//                     </div>
//                     <h4
//                       className="font-bold mb-3 text-xl"
//                       style={{ color: value.color }}
//                     >
//                       {value.title}
//                     </h4>
//                     <p className="text-gray-600 mb-0">{value.description}</p>
//                   </div>
//                 </motion.div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto py-4 px-4 ">
//           <div className="flex flex-col lg:flex-row items-center">
//             <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 translate-x-20">
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <h2 className="text-5xl font-bold mb-4">Why Choose Akdenar?</h2>
//                 <div className="bg-blue-500 mb-4 h-1 w-20"></div>
//                 <p className="text-xl mb-6">
//                   We stand apart because of our unwavering commitment to
//                   quality, transparency, and customer satisfaction.
//                 </p>

//                 <div className="mb-4">
//                   {[
//                     "Direct sourcing from certified farms",
//                     "Rigorous quality control measures",
//                     "Eco-friendly packaging solutions",
//                     "Transparent supply chain",
//                     "Competitive pricing without compromising quality",
//                     "Dedicated customer support team",
//                   ].map((point, idx) => (
//                     <div key={idx} className="flex items-center mb-3">
//                       <div
//                         className="rounded-full flex items-center justify-center mr-3 flex-shrink-0"
//                         style={{
//                           width: "32px",
//                           height: "32px",
//                           background:
//                             "linear-gradient(135deg, #3a7bfc22, #3a7bfc44)",
//                         }}
//                       >
//                         <FaCheck size={14} className="text-blue-500" />
//                       </div>
//                       <p className="mb-0 text-gray-700">{point}</p>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//             <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-5/12 mx-auto">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//                 className="rounded-2xl overflow-hidden"
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                   alt="Quality Control at Akdenar"
//                   className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-2xl object-cover"
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;





//New About page:

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaCheck, FaUsers, FaGlobe, FaHeart } from "react-icons/fa6";
import type { TValues } from "../types/types";

const About = () => {
  const [farmerCounter, setFarmerCounter] = useState<number>(0);
  const [customerCounter, setCustomerCounter] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setFarmerCounter(prev => {
        if (prev < 500) return prev + 1;
        clearInterval(id);
        return prev;
      });
    }, 100);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCustomerCounter(prev => {
        if (prev < 5000) return prev + 1;
        clearInterval(id);
        return prev;
      });
    }, 10);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("page-about");
    return () => {
      document.body.classList.remove("page-about");
    };
  }, []);

  const values: TValues[] = [
    { icon: FaLeaf, title: "Quality First", description: "We are committed to sourcing and providing the highest quality products that meet rigorous standards.", color: "#28a745" },
    { icon: FaHeart, title: "Customer Focus", description: "Our customers are at the heart of everything we do, and we strive to exceed their expectations.", color: "#dc3545" },
    { icon: FaUsers, title: "Collaborative Spirit", description: "We build strong relationships with farmers, suppliers and partners to ensure the best products.", color: "#fd7e14" },
    { icon: FaGlobe, title: "Sustainability", description: "We are committed to sustainable practices that protect our environment for future generations.", color: "#3a7bfc" },
  ];

  return (
    <div className="min-w-[320px] bg-white pt-40">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <section className="py-2 ">
          <div className="flex flex-col lg:flex-row items-center gap-8">

            {/* Text Content */}
            <motion.div
              className="w-full lg:w-1/2  text-center lg:text-left  order-2 lg:order-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl text-center sm:text-5xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                Founded in 2024, Akdenar has grown from a small trading company to become one of India's leading providers of premium quality products.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Our journey began with a simple mission: to connect sellers directly with buyers, ensuring fair prices for producers and the highest quality for customers.
              </p>

              {/* Stats */}
              <div className="flex flex-col justify-center items-center  sm:flex-row sm:space-x-12 space-y-4 sm:space-y-0">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                    {farmerCounter}+
                  </p>
                  <p className="text-gray-600">Farmer Network</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                    {customerCounter}+
                  </p>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="w-full lg:w-1/2 order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Farmer"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-10 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Our Mission & Vision</h2>
            <div className="mx-auto bg-blue-500 h-1 w-16 mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <motion.div
              className="p-6 bg-white rounded-2xl shadow-md"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-blue-100">
                <FaLeaf size={24} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-sm sm:text-base">
                Empowering small dealers, wholesalers, and retailers to access quality manufacturers, solve bulk logistics challenges, and simplify B2B sourcing and exporting with a reliable, tech-driven platform.
              </p>
            </motion.div>
            {/* Vision */}
            <motion.div
              className="p-6 bg-white rounded-2xl shadow-md"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-blue-100">
                <FaGlobe size={24} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-sm sm:text-base">
                To become the most trusted B2B platform enabling seamless trade, logistics, and exports between Indian manufacturers and global buyers through technology and transparency.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Our Core Values</h2>
            <div className="mx-auto bg-blue-500 h-1 w-16 mb-4"></div>
            <p className="text-base text-gray-600">
              The principles that guide everything we do at Akdenar
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 mb-4 rounded-full flex items-center justify-center" style={{ background: `rgba(${value.color.slice(1,3)}, ${value.color.slice(3,5)}, ${value.color.slice(5,7)}, 0.2)` }}>
                    <value.icon size={24} style={{ color: value.color }} />
                  </div>
                  <h4 className="text-xl font-bold mb-2" style={{ color: value.color }}>
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 bg-white">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Akdenar?</h2>
              <div className="bg-blue-500 h-1 w-16 mb-4"></div>
              <p className="text-base mb-4">
                We stand apart because of our unwavering commitment to quality, transparency, and customer satisfaction.
              </p>
              <ul className="space-y-3">
                {[
                  "Direct sourcing from certified farms",
                  "Rigorous quality control measures",
                  "Eco-friendly packaging solutions",
                  "Transparent supply chain",
                  "Competitive pricing without compromising quality",
                  "Dedicated customer support team",
                ].map((point, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheck className="mt-1 mr-2 text-blue-500" />
                    <span className="text-gray-700 text-sm sm:text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Quality Control at Akdenar"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
