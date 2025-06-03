import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa6";
import ProductContactForm from '../components/ProductContactForm';
import { motion } from "framer-motion";
import NotFound from './NotFound';


export default function CategoryPage() {
  const catalogRed= useSelector((state) => state.catalog.catalogs);
  const { productName } = useParams();
  const navigate = useNavigate();
  const decodedName = decodeURIComponent(productName).replace(/-/g, ' ');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const product = catalogRed.find(
    (item) => item.name.toLowerCase() === decodedName.toLowerCase()
  );

  if (!product) {
    return <NotFound searchTerm={decodedName} />;
  }

  const handleBackButtonClick = () => {
    if (selectedCategory) {
      setSelectedCategory(null);
    } else {
      navigate('/');
    }
  };

  return (
    <main className="container mt-5">
      <div className="pt-5">
        <div className="d-flex justify-content-between align-items-center mb-4 mt-4">
          <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <LinK to="/" className="text-decoration-none">Home</LinK>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {product.name}
                </li>
              </ol>
            </nav>
            <h1 className="fw-bold display-6 mt-2">{product.name}</h1>
          </div>
          <button
            className="btn btn-outline-primary d-flex align-items-center px-3 py-2"
            style={{ marginTop: "40px" }}
            onClick={handleBackButtonClick}
          >
            <FaArrowLeft className="me-2" />
            {selectedCategory ? 'Back to Categories' : 'Back to Home'}
          </button>
        </div>

        {selectedCategory ? (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-semibold fs-2">{selectedCategory.name}</h2>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => setSelectedCategory(null)}
              >
                View All Categories
              </button>
            </div>

            <div className="row g-4 mb-5">
              {selectedCategory.subItems.map((item, index) => (
                <div key={index} className="col-md-4 col-sm-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3 }
                    }}
                    className="card h-100 border-0 shadow-sm"
                    style={{
                      borderRadius: "16px",
                      overflow: "hidden",
                      cursor: "pointer"
                    }}
                    onClick={() => navigate(`/category/${product.name.toLowerCase().replace(/\s/g, '-')}/${selectedCategory.name.toLowerCase().replace(/\s/g, '-')}/${index}`)}
                  >
                    <div className="position-relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                        onError={(e) => (e.target.src = "https://via.placeholder.com/200x200?text=Product")}
                      />
                      <div className="position-absolute top-0 start-0 m-3">
                        <span className="badge bg-dark bg-opacity-75 text-white px-2 py-1 rounded-pill">{item.priceRange}</span>
                      </div>
                      <div
                        className="position-absolute bottom-0 start-0 w-100"
                        style={{
                          background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                          padding: "50px 15px 15px"
                        }}
                      >
                        <h5 className="text-white fw-bold mb-0">{item.name}</h5>
                      </div>
                    </div>

                    <div className="card-body p-4">
                      <p className="card-text text-muted mb-3" style={{ fontSize: "0.9rem" }}>
                        {item.description.length > 120 ? `${item.description.substring(0, 120)}...` : item.description}
                      </p>

                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="badge rounded-pill" style={{ backgroundColor: "#f8f9fa", color: "#212529" }}>
                            Premium Quality
                          </span>
                        </div>
                        <div
                          className="d-flex align-items-center justify-content-center text-primary"
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(58, 123, 252, 0.1)"
                          }}
                        >
                          <FaArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}

              <div className="col-12 mt-5">
                <ProductContactForm productName={`${product.name} - ${selectedCategory.name}`} />
              </div>
            </div>
          </div>
        ) : (
          <div className="row g-4 mb-4">
            {product.categories.map((category, index) => (
              <motion.div
                key={index}
                className="col-md-4 col-sm-6 col-lg-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div
                  className="card h-100 shadow border-0 text-center p-3"
                  style={{
                    borderRadius: "15px",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className="overflow-hidden rounded-3 mb-3" style={{ height: "150px" }}>
                    <motion.img
                      src={category.image}
                      alt={category.name}
                      className="card-img-top mx-auto"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover"
                      }}
                      whileHover={{ scale: 1.15, transition: { duration: 0.7 } }}
                      onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=Category")}
                    />
                  </div>
                  <div className="card-body p-2">
                    <h5 className="card-title fw-semibold text-dark" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {category.name.toUpperCase()}
                    </h5>
                    {category.description && (
                      <p className="card-text text-muted" style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                        {category.description}
                      </p>
                    )}
                    <motion.button
                      className="btn btn-sm btn-primary mt-2"
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
          <div className="text-center mt-4 mb-5">
            <Link to="/" className="btn btn-primary">Back to Home</Link>
          </div>
        )}
      </div>
    </main>
  );
}