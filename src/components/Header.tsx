import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaShoppingBasket,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchFocused, setSearchFocused] = useState<boolean>(false);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const catalogs = useSelector((state: RootState) => state.catalog.catalogs);

  const announcements: string[] = [
    "Serving India's Basic Needs",
    "Spices | Rice | Sugar | Salt | Dry Fruits",
    "Premium quality products | Nationwide shipping available",
    "Quality-assured products | Customized solutions for businesses",
    "Explore our range of organic products | Available now",
    "Bulk orders available | Customer satisfaction guaranteed",
    "Explore our wide range of products | Get a quote today!",
  ];
  const [currentAnnouncement, setCurrentAnnouncement] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);


  //We remove it when deployed to vercel. We will have to check whether any deployment error will come due to it or not
  useEffect(()=>{


    if(isAnimating === true || isAnimating === false){
   console.log('')
    }else{

       console.log(isAnimating);
    }

  },[]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
        setIsAnimating(false);
      }, 600);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 10;
      if (window.scrollY > scrollThreshold) {
        if (!isScrolled) setIsScrolled(true);
      } else {
        if (isScrolled) setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search-results?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setSearchFocused(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (index: string) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleProductHover = (index: number) => {
    setHoveredProduct(index);
  };

  return (
    <header
      className={`fixed top-0 w-full  z-[9998] transition-all duration-300 ${
        isScrolled ? "shadow-[0_5px_30px_rgba(0,0,0,0.1)]" : ""
      }`}
    >
      <div className="bg-gradient-to-r from-[#3a7bfc] to-[#6f42c1] py-2 text-center text-white text-[0.85rem] 
      tracking-wider overflow-hidden relative">
        <div className="container mx-auto">
          <div className="min-h-6 flex items-center justify-center py-0.5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentAnnouncement}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col  items-center text-shadow-[0_1px_2px_rgba(0,0,0,0.1)] font-medium"
              >
                <span className="bg-white/15 px-2 py-0.5 rounded animate-pulse">
                  {announcements[currentAnnouncement]}
                </span>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {announcements.map((_, index) => (
                    <span
                      key={index}
                      className={`w-1.5 h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                        currentAnnouncement === index
                          ? "bg-white w-[15px] rounded"
                          : "bg-white/40"
                      } hover:bg-white/80 hover:scale-125`}
                      onClick={() => {
                        setIsAnimating(true);
                        setTimeout(() => {
                          setCurrentAnnouncement(index);
                          setIsAnimating(false);
                        }, 300);
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="bg-white/98 backdrop-blur-md transition-all duration-300">
        <nav
          className={`py-4 transition-all duration-300 ${
            isScrolled ? "py-2.5" : ""
          }`}
        >
          <div className="container mx-auto px-2 sm:px-3 md:px-4 flex items-center justify-between">
            {/* Logo */}
            <Link className="flex items-center" to="/">
              <motion.div
                className="flex items-center gap-2.5"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/logo.webp"
                  alt="Akdenar Logo"
                  className={`h-[40px] sm:h-[70px] w-auto object-contain transition-all duration-300 ${
                    isScrolled ? "h-10" : ""
                  }`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement | null;
                    if (target) {
                      target.src = "/logo.webp";
                    }
                  }}
                />
                <div className="flex flex-col">
                  <span className="font-poppins font-extrabold text-lg md:text-xl lg:text-2xl animate-gradient-text mb-[-3px]">
                    Akdenar
                  </span>
                  <span className="text-[0.6rem] sm:text-[0.7rem]  ss:text-[0.8rem] font-semibold text-[#3c3d3f] tracking-tight">
                    Premium Quality Products
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Search Bar and Navigation */}
            <div className="hidden lg:flex items-center flex-grow gap-4 ">
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="flex-grow">
                <div
                  className={`relative mx-10 w-100 rounded-full overflow-hidden border border-gray-200 bg-gray-100 flex items-center transition-all duration-300 ${
                    searchFocused
                      ? "shadow-[0_0_0_4px_rgba(58,123,252,0.15)] border-[#3a7bfc] bg-white"
                      : ""
                  }`}
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setSearchQuery(e.target.value)
                    }
                    placeholder="Search products..."
                    className="w-full px-5 py-3 bg-transparent text-[0.95rem] border-none focus:outline-none placeholder:text-gray-500"
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                  />
                  <motion.button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#3a7bfc] to-[#6f42c1] text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-[0_4px_10px_rgba(58,123,252,0.3)] transition-all duration-300 hover:bg-gradient-to-br hover:from-[#6f42c1] hover:to-[#3a7bfc] hover:shadow-[0_6px_15px_rgba(58,123,252,0.4)] hover:-translate-x-0.5 focus:outline-none focus:shadow-[0_0_0_3px_rgba(58,123,252,0.2),0_6px_15px_rgba(58,123,252,0.4)] active:scale-95"
                  >
                    <FaSearch aria-label="search product" />
                  </motion.button>
                </div>
              </form>

              {/* Navigation */}
              <ul className="flex items-center gap-1.5">
                <li className="relative">
                  <Link
                    className={`text-[0.95rem] font-medium text-gray-700 px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#3a7bfc] hover:bg-[#3a7bfc]/10 hover:-translate-y-0.5 ${
                      location.pathname === "/"
                        ? "text-[#3a7bfc] font-semibold"
                        : ""
                    }`}
                    to="/"
                  >
                    Home
                    {location.pathname === "/" && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-5 bg-gradient-to-r from-[#3a7bfc] to-[#6f42c1] rounded"
                        layoutId="navIndicator"
                      />
                    )}
                  </Link>
                </li>
                <li className="relative">
                  <Link to="/category" className="no-underline">
                    <div
                      className={`text-[0.95rem] font-medium text-gray-700 px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#3a7bfc] hover:bg-[#3a7bfc]/10 hover:-translate-y-0.5 cursor-pointer flex items-center ${
                        catalogs.some((c) =>
                          location.pathname.includes(
                            `/category/${c.name
                              .toLowerCase()
                              .replace(/\s/g, "-")}`
                          )
                        )
                          ? "text-[#3a7bfc] font-semibold"
                          : ""
                      }`}
                      onMouseEnter={() => setActiveDropdown("products")}
                      onMouseLeave={() => {
                        setTimeout(() => {
                          if (
                            !document.querySelector(".products-dropdown:hover")
                          ) {
                            setActiveDropdown(null);
                          }
                        }, 100);
                      }}
                    >
                      Products
                      <FaChevronDown size={14} className="ml-1" />
                      {catalogs.some((c) =>
                        location.pathname.includes(
                          `/category/${c.name
                            .toLowerCase()
                            .replace(/\s/g, "-")}`
                        )
                      ) && (
                        <motion.div
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-5 bg-gradient-to-r from-[#3a7bfc] to-[#6f42c1] rounded"
                          layoutId="navIndicator"
                        />
                      )}
                    </div>
                  </Link>
                  <AnimatePresence>
                    {activeDropdown === "products" && (
                      <motion.div
                        className="absolute left-1/2 -translate-x-1/2 mt-2.5 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-4 min-w-[500px] z-[1000] products-dropdown"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setActiveDropdown("products")}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="grid grid-cols-12 gap-4">
                          <div className="col-span-5 border-r border-gray-100 max-h-[350px] overflow-y-auto pr-2.5 scrollbar-thin scrollbar-thumb-[#3a7bfc]/30 scrollbar-track-transparent">
                            {catalogs.map((category, index) => (
                              <Link
                                key={index}
                                className={`flex items-center px-4 py-2.5 text-[0.9rem] text-gray-600 rounded-lg transition-all duration-200 hover:bg-[#3a7bfc]/10 hover:text-[#3a7bfc] hover:translate-x-0.5 mb-0.5 ${
                                  hoveredProduct === index
                                    ? "bg-[#3a7bfc]/10 text-[#3a7bfc]"
                                    : ""
                                }`}
                                to={`/category/${category.name
                                  .toLowerCase()
                                  .replace(/\s/g, "-")}`}
                                onMouseEnter={() => handleProductHover(index)}
                              >
                                <span
                                  className="w-2.5 h-2.5 rounded-full me-2"
                                  style={{
                                    backgroundColor: category.colors[0],
                                  }}
                                ></span>
                                {category.name}
                              </Link>
                            ))}
                          </div>
                          <div className="col-span-7 flex items-center justify-center p-2.5">
                            {hoveredProduct !== null && (
                              <motion.div
                                className="text-center w-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="w-full h-40 overflow-hidden rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.08)] mb-3">
                                  <img
                                    src={catalogs[hoveredProduct].image}
                                    alt={catalogs[hoveredProduct].name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                  />
                                </div>
                                <h6 className="font-semibold text-gray-800 mb-1.5">
                                  {catalogs[hoveredProduct].name}
                                </h6>
                                <p className="text-sm text-gray-500 mb-2">
                                  {catalogs[hoveredProduct].categories.length}{" "}
                                  varieties available
                                </p>
                                <div className="flex flex-wrap justify-center gap-1.5">
                                  {catalogs[hoveredProduct].categories
                                    .slice(0, 3)
                                    .map((category, idx) => (
                                      <span
                                        key={idx}
                                        className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                                      >
                                        {category.name}
                                      </span>
                                    ))}
                                  {catalogs[hoveredProduct].categories.length >
                                    3 && (
                                    <span className="text-xs px-2 py-1 rounded-full bg-[#3a7bfc]/10 text-[#3a7bfc]">
                                      +
                                      {catalogs[hoveredProduct].categories
                                        .length - 3}
                                    </span>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
                <li className="relative">
                  <Link
                    className={`text-[0.95rem] font-medium text-gray-700 px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#3a7bfc] hover:bg-[#3a7bfc]/10 hover:-translate-y-0.5 ${
                      location.pathname === "/about"
                        ? "text-[#3a7bfc] font-semibold"
                        : ""
                    }`}
                    to="/about"
                  >
                    About
                    {location.pathname === "/about" && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-5 bg-gradient-to-r from-[#3a7bfc] to-[#6f42c1] rounded"
                        layoutId="navIndicator"
                      />
                    )}
                  </Link>
                </li>
                <li className="relative">
                  <Link
                    className={`text-[0.95rem] font-medium text-gray-700 px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#3a7bfc] hover:bg-[#3a7bfc]/10 hover:-translate-y-0.5 ${
                      location.pathname === "/testimonials"
                        ? "text-[#3a7bfc] font-semibold"
                        : ""
                    }`}
                    to="/testimonials"
                  >
                    Testimonials
                    {location.pathname === "/testimonials" && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-5 bg-gradient-to-r from-[#3a7bfc] to-[#6f42c1] rounded"
                        layoutId="navIndicator"
                      />
                    )}
                  </Link>
                </li>
                <li className="relative">
                  <Link
                    className={`text-[0.95rem] font-medium text-gray-700 px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#3a7bfc] hover:bg-[#3a7bfc]/10 hover:-translate-y-0.5 ${
                      location.pathname === "/contact"
                        ? "text-[#3a7bfc] font-semibold"
                        : ""
                    }`}
                    to="/contact"
                  >
                    Contact
                    {location.pathname === "/contact" && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-5 bg-gradient-to-r from-[#3a7bfc] to-[#6f42c1] rounded"
                        layoutId="navIndicator"
                      />
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-5 py-2 font-medium text-[0.95rem] 
             bg-gradient-to-r from-[#3a7bfc] to-[#165ed3] text-white 
             rounded-lg shadow-[0_4px_12px_rgba(58,123,252,0.2)] 
             transition-all duration-300 hover:-translate-y-1 
             hover:shadow-[0_8px_20px_rgba(58,123,252,0.4)] whitespace-nowrap"
                  >
                    <FaShoppingBasket className="me-1 md:me-2 xl:me-2" />
                    <span className="cta-text">Get Quote</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden bg-[#3a7bfc]/10 p-2.5 flex items-center justify-center text-[#3a7bfc] rounded-lg transition-all duration-300 hover:bg-[#3a7bfc]/20 focus:bg-[#3a7bfc]/20 focus:outline-none"
              type="button"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? "close" : "menu"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? (
                    <FaTimes size={24} />
                  ) : (
                    <FaBars size={24} />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="bg-white border-t border-gray-100/20 overflow-y-auto max-h-[calc(100vh-120px)]  md:px-20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="container mx-auto py-3">
                <form onSubmit={handleSearch} className="mb-4">
                  <div className="relative rounded-[30px] overflow-hidden border border-gray-200 bg-gray-100">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products..."
                      className="w-full px-5 py-3.5 bg-transparent text-[0.95rem] border-none focus:outline-none placeholder:text-gray-500"
                    />
                    <motion.button
                      type="submit"
                      className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#3a7bfc] to-[#6f42c1] text-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer shadow-[0_4px_10px_rgba(58,123,252,0.2)] transition-all duration-300 hover:bg-gradient-to-br hover:from-[#6f42c1] hover:to-[#3a7bfc] hover:shadow-[0_6px_15px_rgba(58,123,252,0.3)]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaSearch />
                    </motion.button>
                  </div>
                </form>

                <ul className="list-none p-0 m-0 mb-4">
                  <li
                    className={`rounded-xl overflow-hidden ${
                      location.pathname === "/"
                        ? "bg-gradient-to-r from-[#3a7bfc]/10 to-transparent"
                        : ""
                    }`}
                  >
                    <Link
                      to="/"
                      className={`flex items-center justify-between px-4 py-3.5 text-gray-700 font-medium rounded-xl transition-all duration-200 hover:bg-[#3a7bfc]/5 hover:text-[#3a7bfc] min-h-[52px] ${
                        location.pathname === "/"
                          ? "text-[#3a7bfc] font-semibold"
                          : ""
                      }`}
                    >
                      <span className="mr-3 text-[1.2rem]">🏠</span>
                      Home
                    </Link>
                  </li>

                  <li
                    className={`rounded-xl overflow-hidden ${
                      catalogs.some((c) =>
                        location.pathname.includes(
                          `/category/${c.name
                            .toLowerCase()
                            .replace(/\s/g, "-")}`
                        )
                      )
                        ? "bg-gradient-to-r from-[#3a7bfc]/10 to-transparent"
                        : ""
                    }`}
                  >
                    <div
                      className="flex items-center justify-between px-4 py-3.5 text-gray-700 font-medium rounded-xl transition-all duration-200 hover:bg-[#3a7bfc]/5 hover:text-[#3a7bfc] min-h-[52px] cursor-pointer"
                      onClick={() => toggleDropdown("products")}
                    >
                      <Link
                        to="/category"
                        className="no-underline flex items-center"
                      >
                        <span className="mr-3 text-[1.2rem]">🛒</span>
                        Products
                      </Link>
                      <motion.div
                        animate={{
                          rotate: activeDropdown === "products" ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaChevronDown size={14} />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {activeDropdown === "products" && (
                        <motion.ul
                          className="list-none p-0 pl-4 m-0 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#3a7bfc]/30 scrollbar-track-gray-100"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {catalogs.map((category, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                to={`/category/${category.name
                                  .toLowerCase()
                                  .replace(/\s/g, "-")}`}
                                className="flex items-center px-4 py-3 text-gray-600 text-[0.95rem] rounded-lg transition-all duration-200 hover:bg-[#3a7bfc]/5 hover:text-[#3a7bfc] mb-0.5"
                              >
                                <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 border border-black/10 me-2">
                                  <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                {category.name}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>

                  <li
                    className={`rounded-xl overflow-hidden ${
                      location.pathname === "/about"
                        ? "bg-gradient-to-r from-[#3a7bfc]/10 to-transparent"
                        : ""
                    }`}
                  >
                    <Link
                      to="/about"
                      className={`flex items-center justify-between px-4 py-3.5 text-gray-700 font-medium rounded-xl transition-all duration-200 hover:bg-[#3a7bfc]/5 hover:text-[#3a7bfc] min-h-[52px] ${
                        location.pathname === "/about"
                          ? "text-[#3a7bfc] font-semibold"
                          : ""
                      }`}
                    >
                      <span className="mr-3 text-[1.2rem]">ℹ️</span>
                      About
                    </Link>
                  </li>

                  <li
                    className={`rounded-xl overflow-hidden ${
                      location.pathname === "/testimonials"
                        ? "bg-gradient-to-r from-[#3a7bfc]/10 to-transparent"
                        : ""
                    }`}
                  >
                    <Link
                      to="/testimonials"
                      className={`flex items-center justify-between px-4 py-3.5 text-gray-700 font-medium rounded-xl transition-all duration-200 hover:bg-[#3a7bfc]/5 hover:text-[#3a7bfc] min-h-[52px] ${
                        location.pathname === "/testimonials"
                          ? "text-[#3a7bfc] font-semibold"
                          : ""
                      }`}
                    >
                      <span className="mr-3 text-[1.2rem]">⭐</span>
                      Testimonials
                    </Link>
                  </li>

                  <li
                    className={`rounded-xl overflow-hidden ${
                      location.pathname === "/contact"
                        ? "bg-gradient-to-r from-[#3a7bfc]/10 to-transparent"
                        : ""
                    }`}
                  >
                    <Link
                      to="/contact"
                      className={`flex items-center justify-between px-4 py-3.5 text-gray-700 font-medium rounded-xl transition-all duration-200 hover:bg-[#3a7bfc]/5 hover:text-[#3a7bfc] min-h-[52px] ${
                        location.pathname === "/contact"
                          ? "text-[#3a7bfc] font-semibold"
                          : ""
                      }`}
                    >
                      <span className="mr-3 text-[1.2rem]">📞</span>
                      Contact
                    </Link>
                  </li>
                </ul>

                <div className="text-center mt-4 pb-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3.5 font-medium text-white bg-[#3a7bfc] rounded-full shadow-[0_4px_15px_rgba(58,123,252,0.25)] transition-all duration-300"
                  >
                    <FaShoppingBasket className="me-2" />
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {isScrolled && (
        <motion.div
        style={{transformOrigin:'left'}}
          className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#3a7bfc] to-[#6f42c1]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </header>
  );
};

export default Header;
