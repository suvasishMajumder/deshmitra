import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import ProductContactForm from "../components/ProductContactForm";
import { motion } from "framer-motion";
import NotFound from "./NotFound";
import type { RootState } from "../redux/store";
import type { Catalog, Category } from "../types/types";

type RouteParams = {
  productName: string;
};

export default function CategoryPage() {
  const catalogs = useSelector((state: RootState) => state.catalog.catalogs);
  const { productName } = useParams<RouteParams>();
  const navigate = useNavigate();

  const decodedName: string = decodeURIComponent(productName ?? "").replace(
    /-/g,
    " "
  );
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const product: Catalog | undefined = catalogs.find(
    (item) => item.name.toLowerCase() === decodedName.toLowerCase()
  );

  if (!product) {
    return <NotFound searchTerm={decodedName} />;
  }

  const handleBackButtonClick = () => {
    if (selectedCategory) {
      setSelectedCategory(null);
    } else {
      navigate("/");
    }
  };

  return (
    <main className="container mx-auto mt-35 px-25">
      <div className="pt-5">
        <div className="flex justify-between items-center mb-4 mt-4">
          <div>
            <nav aria-label="breadcrumb">
              <ol className="flex space-x-2 text-sm">
                <li>
                  <Link
                    to="/"
                    className="no-underline text-gray-600 hover:text-blue-600"
                  >
                    Home /
                  </Link>
                </li>
                <li className="text-gray-900 font-semibold">{product.name}</li>
              </ol>
            </nav>
            <h1 className="font-bold text-5xl mt-2">{product.name}</h1>
          </div>
          <button
            className="flex items-center px-3 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 mt-10"
            onClick={handleBackButtonClick}
          >
            <FaArrowLeft className="mr-2" />
            {selectedCategory ? "Back to Categories" : "Back to Home"}
          </button>
        </div>

        {selectedCategory ? (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-3xl">
                {selectedCategory.name}
              </h2>
              <button
                className="text-sm px-3 py-1 border border-gray-500 text-gray-500 rounded-lg hover:bg-gray-100"
                onClick={() => setSelectedCategory(null)}
              >
                View All Categories
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5">
              {selectedCategory?.subItems.map((item, index) => (
                <div key={item.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3 },
                    }}
                    className="rounded-2xl overflow-hidden shadow-md bg-white cursor-pointer "
                    onClick={() =>
                      navigate(
                        `/category/${product.name
                          .toLowerCase()
                          .replace(/\s/g, "-")}/${selectedCategory.name
                          .toLowerCase()
                          .replace(/\s/g, "-")}/${index}`
                      )
                    }
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement | null;
                          if (target) {
                            target.src =
                              "https://via.placeholder.com/200x200?text=Product";
                          }
                        }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[rgba(33,37,41,0.7)]  text-white px-2 py-1 rounded-full text-xs">
                          {item.priceRange}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h5 className="text-white font-bold">{item.name}</h5>
                      </div>
                    </div>

                    <div className="p-4">
                      <p className="text-gray-600 text-sm mb-3">
                        {item.description.length > 120
                          ? `${item.description.substring(0, 120)}...`
                          : item.description}
                      </p>

                      <div className="flex justify-between items-center">
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                          Premium Quality
                        </span>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                          <FaArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}

              <div className="col-span-full mt-5">
                <ProductContactForm
                  productName={`${product.name} - ${selectedCategory.name}`}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
            {product.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div
                  className="rounded-2xl shadow-md hover:shadow-xl bg-white text-center p-4 cursor-pointer transition-all duration-300 h-full min-h-[350px] flex flex-col"
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className="overflow-hidden rounded-lg mb-3 h-40">
                    <motion.img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500"
                      whileHover={{
                        scale: 1.15,
                        transition: { duration: 0.7 },
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement | null;
                        if (target) {
                          target.src =
                            "https://via.placeholder.com/150?text=Category";
                        }
                      }}
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between mt-5">
                    <div>
                      <h5 className="text-lg font-bold text-gray-800 font-poppins uppercase">
                        {category.name}
                      </h5>
                      {category.description && (
                        <p className="text-gray-600 text-sm leading-6 mt-1">
                          {category.description}
                        </p>
                      )}
                    </div>

                    <motion.button
                      className="mt-4 px-4 py-2 bg-gradient-to-r from-[#3a7bfc] to-[#165ed3] text-white rounded-lg text-sm self-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Products
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        {!selectedCategory && (
          <div className="text-center mt-10 mb-20">
            <Link
              to="/"
              className="px-4 py-2 bg-gradient-to-r from-[#3a7bfc] to-[#165ed3] text-white rounded-lg hover:bg-blue-700"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
