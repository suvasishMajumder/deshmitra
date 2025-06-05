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
  //const { token } = useParams<{token?: string}>();
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

  // Get related products from the same category
  const getRelatedProducts = () => {
    // Filter out the current product and take up to 4 related products
    return category.subItems
      .filter((_, index) => index !== parseInt(productId))
      .slice(0, 4);
  };

  const relatedProducts = getRelatedProducts();

  const handleBackNavigation = () => {
    navigate(`/category/${productName}`);
  };

  // Get specifications based on product type
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
    <main className="container mt-5">
      <div className="pt-5">
        <nav aria-label="breadcrumb" className="mt-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link
                to={`/category/${productName}`}
                className="text-decoration-none"
              >
                {product.name}
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link
                to="#"
                className="text-decoration-none"
                onClick={handleBackNavigation}
              >
                {category.name}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {item.name}
            </li>
          </ol>
        </nav>

        <div className="d-flex justify-content-end mb-4">
          <button
            className="btn btn-outline-primary d-flex align-items-center px-3 py-2"
            style={{ marginTop: "10px " }}
            onClick={handleBackNavigation}
          >
            <FaArrowLeft className="me-2" />
            Back to {category.name}
          </button>
        </div>

        <div className="row g-5 mb-5">
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="position-relative"
            >
              <div
                className="product-image-wrapper rounded-4 overflow-hidden bg-light shadow-sm"
                style={{ height: "500px" }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-100 h-100 object-fit-cover"
                  // onError={(e) => (e.target.src = "https://via.placeholder.com/500x500?text=Product")}
                />
              </div>

              <div className="position-absolute top-0 start-0 m-3">
                <span className="badge bg-primary px-3 py-2 rounded-pill">
                  Premium
                </span>
              </div>

              <div className="position-absolute bottom-0 end-0 m-3">
                <span className="badge bg-white text-dark fw-medium px-3 py-2 rounded-pill shadow-sm">
                  {category.name}
                </span>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="fw-bold mb-1">{item.name}</h1>
              <p className="text-muted mb-3">
                {product.name} › {category.name}
              </p>

              <div className="d-flex align-items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={16}
                    className="me-1"
                    style={{ color: i < 4 ? "#ffc107" : "#e0e0e0" }}
                  />
                ))}
                <span className="ms-2 text-muted small">
                  (4.0 | 24 reviews)
                </span>
              </div>

              <div className="mb-4">
                <h3 className="text-primary fw-bold mb-1">{item.priceRange}</h3>
                <p className="text-muted small">Price includes all taxes</p>
              </div>

              <div className="mb-4">
                <p>{item.description}</p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold mb-3">Product Specifications</h4>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <tbody>
                      {specifications.map((spec, index) => (
                        <tr key={index}>
                          <th scope="row" style={{ width: "40%" }}>
                            {spec.label}
                          </th>
                          <td>{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-3 bg-light rounded-3 mb-4">
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="d-flex align-items-center">
                      <div className="me-2">🚚</div>
                      <div>
                        <h6 className="mb-0 small fw-semibold">
                          {" "}
                          Nationwide Delivery
                        </h6>
                        <p className="mb-0 small text-muted">
                          Fast & reliable across India
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex align-items-center">
                      <div className="me-2">🔄</div>
                      <div>
                        <h6 className="mb-0 small fw-semibold">
                          {" "}
                          Customer Support
                        </h6>
                        <p className="mb-0 small text-muted">
                          9am–6pm, Mon–Sat
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex align-items-center">
                      <div className="me-2">✅</div>
                      <div>
                        <h6 className="mb-0 small fw-semibold">
                          Quality Assured
                        </h6>
                        <p className="mb-0 small text-muted">
                          100% Authentic Products
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Product Tabs Section - Description, Specifications, Reviews */}
        <div className="mb-5">
          <ul className="nav nav-tabs mb-4" id="productTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  activeTab === "description" ? "active" : ""
                }`}
                onClick={() => setActiveTab("description")}
                type="button"
              >
                Description
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  activeTab === "specifications" ? "active" : ""
                }`}
                onClick={() => setActiveTab("specifications")}
                type="button"
              >
                Specifications
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  activeTab === "reviews" ? "active" : ""
                }`}
                onClick={() => setActiveTab("reviews")}
                type="button"
              >
                Reviews
              </button>
            </li>
          </ul>

          <div
            className="tab-content p-4 bg-light rounded-3"
            id="productTabContent"
          >
            {activeTab === "description" && (
              <div>
                <h4 className="fw-bold mb-3">Product Description</h4>
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
                  <h5 className="fw-bold mb-3">Key Features:</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-transparent">
                      Premium quality {product.name.toLowerCase()}
                    </li>
                    <li className="list-group-item bg-transparent">
                      Sourced from trusted farmers
                    </li>
                    <li className="list-group-item bg-transparent">
                      Naturally processed
                    </li>
                    <li className="list-group-item bg-transparent">
                      No artificial additives
                    </li>
                    <li className="list-group-item bg-transparent">
                      Rich in natural flavor
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h4 className="fw-bold mb-3">Product Specifications</h4>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <th scope="row" style={{ width: "30%" }}>
                          Product Name
                        </th>
                        <td>{item.name}</td>
                      </tr>
                      <tr>
                        <th scope="row">Category</th>
                        <td>{category.name}</td>
                      </tr>
                      <tr>
                        <th scope="row">Price Range</th>
                        <td>{item.priceRange}</td>
                      </tr>
                      {specifications.map((spec, index) => (
                        <tr key={`spec-${index}`}>
                          <th scope="row">{spec.label}</th>
                          <td>{spec.value}</td>
                        </tr>
                      ))}
                      {product.name.toLowerCase() === "rice" && (
                        <>
                          <tr>
                            <th scope="row">Usage</th>
                            <td>
                              Suitable for all rice dishes, biryani, pulao, etc.
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Cooking Time</th>
                            <td>Approximately 15-20 minutes</td>
                          </tr>
                          <tr>
                            <th scope="row">Aroma</th>
                            <td>
                              Natural fragrance characteristic of premium
                              basmati
                            </td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>

                {product.name.toLowerCase() === "rice" &&
                  item.name.toLowerCase().includes("1121") && (
                    <div className="mt-4">
                      <h5 className="fw-bold mb-3">
                        1121 Sella Basmati Rice Processing
                      </h5>
                      <p>
                        Our 1121 Sella Basmati Rice undergoes a specialized
                        parboiling process that enhances its nutritional value
                        while maintaining the authentic aroma. The process
                        involves:
                      </p>
                      <ol className="list-group list-group-numbered">
                        <li className="list-group-item border-0 bg-transparent">
                          Soaking the paddy in water
                        </li>
                        <li className="list-group-item border-0 bg-transparent">
                          Steaming to gelatinize the starch
                        </li>
                        <li className="list-group-item border-0 bg-transparent">
                          Drying to reduce moisture content
                        </li>
                        <li className="list-group-item border-0 bg-transparent">
                          Milling to remove husks
                        </li>
                        <li className="list-group-item border-0 bg-transparent">
                          Sorting and grading for quality
                        </li>
                      </ol>
                    </div>
                  )}
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h4 className="fw-bold mb-3">Customer Reviews</h4>
                <div className="row align-items-center mb-4">
                  <div className="col-md-4 text-center">
                    <h2 className="display-4 fw-bold mb-0">4.0</h2>
                    <div className="d-flex justify-content-center my-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={20}
                          className="mx-1"
                          style={{ color: i < 4 ? "#ffc107" : "#e0e0e0" }}
                        />
                      ))}
                    </div>
                    <p className="text-muted">Based on 24 reviews</p>
                  </div>
                  <div className="col-md-8">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div
                        key={rating}
                        className="d-flex align-items-center mb-2"
                      >
                        <div style={{ width: "60px" }} className="me-3">
                          {rating} stars
                        </div>
                        <div
                          className="progress flex-grow-1"
                          style={{ height: "10px" }}
                        >
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
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
                            aria-valuenow={
                              rating === 4
                                ? 65
                                : rating === 5
                                ? 25
                                : rating === 3
                                ? 10
                                : 0
                            }
                            aria-valuemin={0}
                            aria-valuemax={0}
                          ></div>
                        </div>
                        <div style={{ width: "50px" }} className="ms-3">
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

                <div className="border-top pt-4">
                  <div className="mb-4">
                    <div className="d-flex">
                      <img
                        src="https://picsum.photos/50/50?random=1"
                        alt="User"
                        className="rounded-circle me-3"
                        style={{ width: "50px", height: "50px" }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement | null;
                          if (target) {
                            target.src =
                              "https://via.placeholder.com/50?text=User";
                          }
                        }}
                      />
                      <div>
                        <h6 className="mb-1 fw-bold">Rahul Sharma</h6>
                        <div className="d-flex align-items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              size={12}
                              className="me-1"
                              style={{ color: i < 5 ? "#ffc107" : "#e0e0e0" }}
                            />
                          ))}
                          <span className="ms-2 text-muted small">
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
                    <div className="d-flex">
                      <img
                        src="https://picsum.photos/50/50?random=2"
                        alt="User"
                        className="rounded-circle me-3"
                        style={{ width: "50px", height: "50px" }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement | null;
                          if (target) {
                            target.src =
                              "https://via.placeholder.com/50?text=User";
                          }
                        }}
                      />
                      <div>
                        <h6 className="mb-1 fw-bold">Priya Patel</h6>
                        <div className="d-flex align-items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              size={12}
                              className="me-1"
                              style={{ color: i < 4 ? "#ffc107" : "#e0e0e0" }}
                            />
                          ))}
                          <span className="ms-2 text-muted small">
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
                      className="btn btn-outline-primary rounded-pill px-4"
                    >
                      View All Reviews
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 mb-5">
          <h3 className="fw-bold mb-4">Interested in this product?</h3>
          <ProductContactForm
            productName={`${product.name} - ${category.name} - ${item.name}`}
          />
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="related-products mb-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-bold">Related Products</h3>
              <Link
                to={`/category/${productName}`}
                className="btn btn-outline-primary rounded-pill"
              >
                View All <FaArrowRight className="ms-2" size={12} />
              </Link>
            </div>

            <div className="row g-4">
              {relatedProducts.map((relatedItem, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3 },
                    }}
                    className="card h-100 border-0 shadow-sm"
                    style={{
                      borderRadius: "16px",
                      overflow: "hidden",
                    }}
                  >
                    <Link
                      to={`/category/${productName}/${categoryName}/${category.subItems.findIndex(
                        (subItem) => subItem.name === relatedItem.name
                      )}`}
                      className="text-decoration-none"
                    >
                      <div style={{ height: "180px", overflow: "hidden" }}>
                        <img
                          src={relatedItem.image}
                          alt={relatedItem.name}
                          className="card-img-top"
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                          }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement | null;

                            if (target) {
                              target.src =
                                "https://via.placeholder.com/180x180?text=Product";
                            }
                          }}
                        />
                      </div>
                      <div className="card-body p-3">
                        <h5 className="card-title fw-semibold text-dark mb-2">
                          {relatedItem.name}
                        </h5>
                        <p
                          className="card-text text-muted small mb-3"
                          style={{ height: "40px", overflow: "hidden" }}
                        >
                          {relatedItem.description.substring(0, 70)}...
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="badge bg-light text-primary">
                            {relatedItem.priceRange}
                          </span>
                          <span className="text-primary fw-medium small">
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
