import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import ProductContactForm from "../components/ProductContactForm";
import NotFound from "./NotFound";
import type { RootState } from "../redux/store";

export default function ProductDetail() {
  const catalogs = useSelector((state: RootState) => state.catalog.catalogs);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("description");
  const params = useParams<{
    productName?: string;
    categoryName?: string;
    productId?: string;
  }>();
  const { productName, categoryName, productId } = params;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productName, categoryName, productId]);

  if (!productName || !categoryName || !productId) {
    return <NotFound searchTerm="Invalid product route" />;
  }

  const decodedProductName = decodeURIComponent(productName)
    .replace(/-/g, " ")
    .toLowerCase();
  const decodedCategoryName = decodeURIComponent(categoryName)
    .replace(/-/g, " ")
    .toLowerCase();
  const product = catalogs.find(
    (c) => c.name.toLowerCase() === decodedProductName
  );

  if (!product) {
    return <NotFound searchTerm={decodedProductName} />;
  }

  const category = product.categories.find(
    (c) => c.name.toLowerCase() === decodedCategoryName
  );

  if (!category) {
    return <NotFound searchTerm={decodedCategoryName} />;
  }

  const item = category.subItems[parseInt(productId)];

  if (!item) {
    return <NotFound />;
  }

  const getRelatedProducts = () => {
    return category.subItems
      .filter((_, index) => index !== parseInt(productId))
      .slice(0, 4);
  };

  const relatedProducts = getRelatedProducts();

  const handleBackNavigation = () => {
    navigate(`/category/${productName}`);
  };

  const getSpecifications = () => {
    if (product.name.toLowerCase() === "rice") {
      return [
        { label: "Purity", value: "95%" },
        { label: "Natural Admixture", value: "5%" },
        {
          label: "Average Grain Length",
          value: item.name.toLowerCase().includes("8.35")
            ? "8.35 MM"
            : "As specified",
        },
        { label: "Moisture", value: "12.5% Max" },
        { label: "Broken Grain", value: "1% Max." },
        { label: "Damage/Discolour Grain", value: "1% Max" },
        { label: "Immature Grain", value: "1% Max" },
        { label: "Foreign Matter", value: "Nil" },
        {
          label: "Packaging Type",
          value: "Jute bag, PP bag, Non-woven bag or as per requirement",
        },
      ];
    } else if (product.name.toLowerCase() === "salt") {
      return [
        { label: "Purity", value: "99.5%" },
        { label: "Moisture Content", value: "< 0.5%" },
        { label: "Sodium Chloride", value: "> 98%" },
        { label: "Anti-caking Agent", value: "Present" },
        {
          label: "Packaging Type",
          value: "Available in various packaging options",
        },
      ];
    } else if (product.name.toLowerCase() === "spices") {
      return [
        { label: "Origin", value: "India" },
        { label: "Freshness", value: "100% Fresh" },
        {
          label: "Processing",
          value: item.name.toLowerCase().includes("whole") ? "Whole" : "Ground",
        },
        { label: "Packaging", value: "Moisture-resistant packaging" },
        { label: "Shelf Life", value: "24 months from packaging" },
      ];
    }
    return [
      { label: "Quality", value: "Premium" },
      { label: "Origin", value: "India" },
      { label: "Packaging", value: "Available in various sizes" },
      {
        label: "Storage Instructions",
        value: "Store in a cool, dry place away from direct sunlight",
      },
      { label: "Shelf Life", value: "12 months from date of packaging" },
    ];
  };

  const specifications = getSpecifications();

  return (
    <main className="mx-auto max-w-7xl mt-8 px-4 sm:px-30 lg:px-8">
      <div className="pt-30">
        <nav aria-label="breadcrumb" className="mt-4">
          <ol className="flex space-x-2 text-sm">
            <li>
              <Link to="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link
                to={`/category/${productName}`}
                className="text-gray-600 hover:text-blue-600"
              >
                {product.name}
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link
                to="#"
                className="text-gray-600 hover:text-blue-600"
                onClick={handleBackNavigation}
              >
                {category.name}
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900">{item.name}</li>
          </ol>
        </nav>

        <div className="flex justify-end mb-6">
          <button
            className="flex items-center px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition"
            onClick={handleBackNavigation}
          >
            <FaArrowLeft className="mr-2" />
            Back to {category.name}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* IMAGE SECTION */}
          <div className="lg:col-span-5 w-full max-w-[500px] mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden bg-gray-100 shadow-md h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                <span className="bg-blue-600 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                  Premium
                </span>
              </div>

              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
                <span className="bg-white text-gray-800 font-medium px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm rounded-full shadow-sm">
                  {category.name}
                </span>
              </div>
            </motion.div>
          </div>

          {/* DETAILS SECTION */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                {item.name}
              </h1>
              <p className="text-gray-500 mb-4 text-sm sm:text-base">
                {product.name} › {category.name}
              </p>

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={16}
                    className="mr-1"
                    style={{ color: i < 4 ? "#ffc107" : "#e0e0e0" }}
                  />
                ))}
                <span className="ml-2 text-gray-500 text-xs sm:text-sm">
                  (4.0 | 24 reviews)
                </span>
              </div>

              <div className="mb-4">
                <h3 className="text-blue-600 font-bold text-lg sm:text-xl mb-1">
                  {item.priceRange}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Price includes all taxes
                </p>
              </div>

              <div className="mb-4">
                <p className="text-sm">{item.description}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-bold text-base sm:text-lg mb-3">
                  Product Specifications
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 text-sm">
                    <tbody>
                      {specifications.map((spec, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-gray-200" : "bg-white"
                          }
                        >
                          <th className="text-left px-3 py-2 font-semibold align-top w-1/3 text-sm">
                            {spec.label}
                          </th>
                          <td className="px-3 py-2 text-gray-800 text-sm">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-4 bg-gray-100 rounded-lg mb-4 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      icon: "🚚",
                      title: "Nationwide Delivery",
                      desc: "Fast & reliable across India",
                    },
                    {
                      icon: "🔄",
                      title: "Customer Support",
                      desc: "9am–6pm, Mon–Sat",
                    },
                    {
                      icon: "✅",
                      title: "Quality Assured",
                      desc: "100% Authentic Products",
                    },
                  ].map((info, idx) => (
                    <div className="flex items-center" key={idx}>
                      <div className="mr-3">{info.icon}</div>
                      <div>
                        <h6 className="font-semibold text-sm mb-0">
                          {info.title}
                        </h6>
                        <p className="text-gray-500 text-xs mb-0">
                          {info.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Product Tabs Section - Description, Specifications, Reviews */}
        <div className="mb-8">
          <ul className="flex border-b mb-4" role="tablist">
            <li className="mr-4">
              <button
                className={`pb-2 px-4 text-sm font-medium ${
                  activeTab === "description"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                onClick={() => setActiveTab("description")}
                type="button"
              >
                Description
              </button>
            </li>
            <li className="mr-4">
              <button
                className={`pb-2 px-4 text-sm font-medium ${
                  activeTab === "specifications"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                onClick={() => setActiveTab("specifications")}
                type="button"
              >
                Specifications
              </button>
            </li>
            <li>
              <button
                className={`pb-2 px-4 text-sm font-medium ${
                  activeTab === "reviews"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                onClick={() => setActiveTab("reviews")}
                type="button"
              >
                Reviews
              </button>
            </li>
          </ul>

          <div className="p-6 bg-gray-100 rounded-lg">
            {activeTab === "description" && (
              <div>
                <h4 className="font-bold text-lg mb-3">Product Description</h4>
                <p>{item.description}</p>
                <p>
                  This premium {product.name.toLowerCase()} is sourced from the
                  finest producers and undergoes rigorous quality checks to
                  ensure you receive only the best product. Our{" "}
                  {item.name.toLowerCase()}
                  is known for its exceptional quality and authentic flavor
                  profile.
                </p>
                <p>
                  Whether you're cooking for your family or hosting a special
                  occasion, our
                  {item.name.toLowerCase()} will elevate your culinary creations
                  to new heights.
                </p>
                <div className="my-4">
                  <h5 className="font-bold mb-3">Key Features:</h5>
                  <ul className="space-y-2">
                    <li>Premium quality {product.name.toLowerCase()}</li>
                    <li>Sourced from trusted farmers</li>
                    <li>Naturally processed</li>
                    <li>No artificial additives</li>
                    <li>Rich in natural flavor</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h4 className="font-bold text-lg mb-3">
                  Product Specifications
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 text-sm">
                    <tbody>
                      {[
                        { label: "Product Name", value: item.name },
                        { label: "Category", value: category.name },
                        { label: "Price Range", value: item.priceRange },
                        ...specifications,
                        ...(product.name.toLowerCase() === "rice"
                          ? [
                              {
                                label: "Usage",
                                value:
                                  "Suitable for all rice dishes, biryani, pulao, etc.",
                              },
                              {
                                label: "Cooking Time",
                                value: "Approximately 15–20 minutes",
                              },
                              {
                                label: "Aroma",
                                value:
                                  "Natural fragrance characteristic of premium basmati",
                              },
                            ]
                          : []),
                      ].map((row, index) => (
                        <tr
                          key={`row-${index}`}
                          className={`border-b border-gray-200 ${
                            index % 2 === 0 ? "bg-gray-200" : "bg-white"
                          }`}
                        >
                          <th className="text-left px-4 py-3 font-semibold w-1/3">
                            {row.label}
                          </th>
                          <td className="px-4 py-3 text-gray-800">
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {product.name.toLowerCase() === "rice" &&
                  item.name.toLowerCase().includes("1121") && (
                    <div className="mt-4">
                      <h5 className="font-bold mb-3">
                        1121 Sella Basmati Rice Processing
                      </h5>
                      <p>
                        Our 1121 Sella Basmati Rice undergoes a specialized
                        parboiling process that enhances its nutritional value
                        while maintaining the authentic aroma. The process
                        involves:
                      </p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Soaking the paddy in water</li>
                        <li>Steaming to gelatinize the starch</li>
                        <li>Drying to reduce moisture content</li>
                        <li>Milling to remove husks</li>
                        <li>Sorting and grading for quality</li>
                      </ol>
                    </div>
                  )}
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h4 className="font-bold text-lg mb-3">Customer Reviews</h4>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
                  <div className="md:col-span-4 text-center">
                    <h2 className="text-4xl font-bold mb-2">4.0</h2>
                    <div className="flex justify-center my-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={20}
                          className="mx-1"
                          style={{ color: i < 4 ? "#ffc107" : "#e0e0e0" }}
                        />
                      ))}
                    </div>
                    <p className="text-gray-500">Based on 24 reviews</p>
                  </div>
                  <div className="md:col-span-8">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center mb-2">
                        <div className="w-16 mr-3 text-sm">{rating} stars</div>
                        <div className="flex-grow">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-yellow-400 h-2.5 rounded-full"
                              style={{
                                width: `${
                                  rating === 4
                                    ? 65
                                    : rating === 5
                                    ? 25
                                    : rating === 3
                                    ? 10
                                    : 0
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="w-12 ml-3 text-sm">
                          {rating === 4
                            ? 15
                            : rating === 5
                            ? 6
                            : rating === 3
                            ? 3
                            : 0}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="mb-4">
                    <div className="flex">
                      <img
                        src="https://picsum.photos/50/50?random=1"
                        alt="User"
                        className="rounded-full mr-3 w-12 h-12"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement | null;
                          if (target) {
                            target.src =
                              "https://via.placeholder.com/50?text=User";
                          }
                        }}
                      />
                      <div>
                        <h6 className="font-bold mb-1">Rahul Sharma</h6>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              size={12}
                              className="mr-1"
                              style={{ color: i < 5 ? "#ffc107" : "#e0e0e0" }}
                            />
                          ))}
                          <span className="ml-2 text-gray-500 text-xs">
                            2 months ago
                          </span>
                        </div>
                        <p className="mb-0">
                          Exceptional quality! I've been using this product for
                          months and it's consistently excellent. The flavor is
                          unmatched compared to other brands.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex">
                      <img
                        src="https://picsum.photos/50/50?random=2"
                        alt="User"
                        className="rounded-full mr-3 w-12 h-12"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement | null;
                          if (target) {
                            target.src =
                              "https://via.placeholder.com/50?text=User";
                          }
                        }}
                      />
                      <div>
                        <h6 className="font-bold mb-1">Priya Patel</h6>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              size={12}
                              className="mr-1"
                              style={{ color: i < 4 ? "#ffc107" : "#e0e0e0" }}
                            />
                          ))}
                          <span className="ml-2 text-gray-500 text-xs">
                            1 month ago
                          </span>
                        </div>
                        <p className="mb-0">
                          Great product for the price. Delivery was prompt and
                          packaging was secure. I would definitely recommend it
                          to others.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <Link
                      to="/testimonials"
                      className="inline-block px-5 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition"
                    >
                      View All Reviews
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 mb-8">
          <h3 className="font-bold text-3xl mb-4">
            Interested in this product?
          </h3>
          <ProductContactForm
            productName={`${product.name} - ${category.name} - ${item.name}`}
          />
        </div>

        {relatedProducts.length > 0 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-xl">Related Products</h3>
              <Link
                to={`/category/${productName}`}
                className="inline-block px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition"
              >
                View All <FaArrowRight className="ml-2 inline" size={12} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((relatedItem, index) => (
                <div key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-shadow transition-transform"
                  >
                    <Link
                      to={`/category/${productName}/${categoryName}/${category.subItems.findIndex(
                        (subItem) => subItem.name === relatedItem.name
                      )}`}
                      className="block"
                    >
                      <div style={{ height: "180px", overflow: "hidden" }}>
                        <img
                          src={relatedItem.image}
                          alt={relatedItem.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement | null;
                            if (target) {
                              target.src =
                                "https://via.placeholder.com/180x180?text=Product";
                            }
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">
                          {relatedItem.name}
                        </h5>
                        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                          {relatedItem.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="bg-gray-100 text-blue-600 px-2 py-1 rounded">
                            {relatedItem.priceRange}
                          </span>
                          <span className="text-blue-600 font-medium text-sm">
                            View Details
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
