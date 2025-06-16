import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeftLong, FaHouse, FaMagnifyingGlass } from "react-icons/fa6";

function NotFound({ searchTerm = "" }) {
  const navigate = useNavigate();

  return (
    <main className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 mt-8 pt-30">
      <div className="flex justify-center mb-10">
        <div className="w-full md:w-2/3 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <div className="mb-6">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src="https://i.imgur.com/qIufhof.webp"
                  alt="Not Found"
                  className="max-w-[200px] mb-3 mx-auto"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-bold text-blue-600 mb-3 text-2xl sm:text-5xl"
              >
                {searchTerm
                  ? `No results found for "${searchTerm}"`
                  : "Page Not Found"}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-500 mb-6 text-sm sm:text-base"
              >
                {searchTerm
                  ? "We couldn't find any products or categories matching your search."
                  : "The page you are looking for doesn't exist or has been moved."}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 hover:shadow-md transition-all duration-300"
                onClick={() => navigate(-1)}
              >
                <FaArrowLeftLong className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" /> Go Back
              </motion.button>

              <Link
                to="/"
                className="group flex items-center px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 hover:shadow-md transition-all duration-300"
              >
                <FaHouse className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" /> Home Page
              </Link>

              {searchTerm && (
                <Link
                  to="/category"
                  className="group flex items-center px-4 py-2 border border-gray-500 text-gray-500 rounded-full hover:bg-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <FaMagnifyingGlass className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" /> Browse Categories
                </Link>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default NotFound;