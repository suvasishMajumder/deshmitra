import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import { debounce } from "lodash";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import type { Catalog } from "../types/types";

const CategoriesPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredCategories, setFilteredCategories] = useState<Catalog[]>([]);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const catalogs = useSelector((state: RootState) => state.catalog.catalogs);

  // Debounced filtering to prevent lag
  const debouncedFilter = useCallback(
    debounce((category: string, term: string) => {
      setIsLoading(true);

      setTimeout(() => {
        let filtered: Catalog[] = [...catalogs];

        // Filter by search term
        if (term) {
          filtered = filtered.filter(
            (cat) =>
              cat.name.toLowerCase().includes(term.toLowerCase()) ||
              cat.categories.some(
                (subCat) =>
                  subCat.name.toLowerCase().includes(term.toLowerCase()) ||
                  subCat.description?.toLowerCase().includes(term.toLowerCase())
              )
          );
        }

        // Filter by category type (if not 'all')
        if (category !== "all") {
          filtered = filtered.filter(
            (cat) => cat.name.toLowerCase() === category.toLowerCase()
          );
        }

        setFilteredCategories(filtered);
        setIsLoading(false);
      }, 10); // Small timeout to allow UI to breathe
    }, 250),
    []
  );

  const filterCategories = useCallback(
    (category: string, term: string = searchTerm) => {
      if (category !== activeCategory) {
        setActiveCategory(category);
      }
      debouncedFilter(category, term);
    },
    [activeCategory, debouncedFilter, searchTerm]
  );

  useEffect(() => {
    // Force scroll to top when component mounts
    window.scrollTo(0, 0);

    // Set initial filtered categories
    setFilteredCategories([...catalogs]);
  }, []);

  return (
    <div className="pt-16 overflow-x-hidden lg:px-20">
      {/* Hero Section */}
      <section className="bg-white pb-20 pt-30 md:pt-30 lg:pt-34 relative rounded-b-3xl shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(58,123,252,0.03)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(111,66,193,0.03)_0%,transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-center">
            <div className="text-center max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-6xl font-bold mb-4"
              >
                Browse Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Premium Collection
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg md:text-xl text-gray-600 mb-6"
              >
                Explore our extensive range of high-quality products from
                trusted producers worldwide
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="py-16 bg-white min-h-[60vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20 text-center min-h-[50vh]"
              >
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600">
                  Finding the best matches...
                </p>
              </motion.div>
            ) : filteredCategories.length > 0 ? (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {filteredCategories.map((category, index) => (
                  <div key={index} className="mb-16 last:mb-0">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, delay: index * 0.1 }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                        <div className="flex flex-col">
                          <h2 className="text-2xl md:text-3xl font-bold mb-2">
                            <span
                              className="bg-clip-text text-transparent"
                              style={{
                                backgroundImage: `linear-gradient(to right, ${category.colors[0]}, ${category.colors[1]})`,
                              }}
                            >
                              {category.name}
                            </span>
                          </h2>
                          <span className="text-gray-600 font-medium text-sm">
                            {category.categories.length} varieties
                          </span>
                        </div>
                        <Link
                          to={`/category/${category.name
                            .toLowerCase()
                            .replace(/\s/g, "-")}`}
                          className="inline-flex items-center bg-white text-blue-600 border-2 border-blue-100 px-4 py-2 rounded-xl font-medium hover:bg-blue-600 hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-md"
                        >
                          View All <FaArrowRight className="ml-2" size={12} />
                        </Link>
                      </div>

                      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {category.categories
                          .slice(0, 4)
                          .map((subCategory, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ y: -10 }}
                              transition={{ duration: 0.3 }}
                              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                              onMouseEnter={() =>
                                setHoveredItem(
                                  `${category.name}-${subCategory.name}`
                                )
                              }
                              onMouseLeave={() => setHoveredItem(null)}
                            >
                              <Link
                                to={`/category/${category.name
                                  .toLowerCase()
                                  .replace(/\s/g, "-")}`}
                                className="flex flex-col h-full no-underline text-inherit"
                              >
                                <div className="relative h-48 overflow-hidden">
                                  <img
                                    src={subCategory.image}
                                    alt={subCategory.name}
                                    className={`w-full h-full object-cover transition-transform duration-600 ${
                                      hoveredItem ===
                                      `${category.name}-${subCategory.name}`
                                        ? "scale-110"
                                        : "scale-100"
                                    }`}
                                  />
                                  <div
                                    className={`absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 transition-opacity duration-400 ${
                                      hoveredItem ===
                                      `${category.name}-${subCategory.name}`
                                        ? "opacity-100"
                                        : "opacity-70"
                                    }`}
                                  ></div>
                                  <div className="absolute bottom-0 left-0 p-5 w-full z-10">
                                    <h5 className="text-white font-semibold mb-2 text-shadow-md">
                                      {subCategory.name}
                                    </h5>
                                    <div className="flex items-center">
                                      {[...Array(5)].map((_, i) => (
                                        <FaStar
                                          key={i}
                                          size={12}
                                          className="mr-1"
                                          style={{
                                            color:
                                              i < 4 ? "#ffc107" : "#e0e0e0",
                                          }}
                                        />
                                      ))}
                                      <span className="text-white/90 text-xs ml-1">
                                        (4.0)
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
                                    {subCategory.description}
                                  </p>
                                  <div className="flex justify-between items-center mt-auto">
                                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                                      {subCategory.subItems.length} Products
                                    </span>
                                    <span className="text-blue-600 font-medium text-sm flex items-center gap-1">
                                      Explore <FaArrowRight size={10} />
                                    </span>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="noResults"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20 text-center min-h-[50vh]"
              >
                <img
                  src="/no-results.svg"
                  alt="No results found"
                  className="max-w-[180px] mb-6 opacity-60"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement | null;
                    if (target) {
                      target.src =
                        "https://via.placeholder.com/200x200?text=No+Results";
                    }
                  }}
                />
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  No categories found
                </h3>
                <p className="text-gray-600 max-w-sm mb-6">
                  We couldn't find any categories matching your search criteria.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => {
                    setSearchTerm("");
                    filterCategories("all", "");
                  }}
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;
