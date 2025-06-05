
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import CategoriesPage from "./pages/CategoriesPage";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import SearchResults from "./pages/SearchResults";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TestimonialsPage from "./pages/TestimonialsPage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Helmet>
        {/* Fonts moved to tailwind.config.js or external CSS */}
        <style>
          {`
            /* Custom Scrollbar */
            ::-webkit-scrollbar {
              width: 8px;
              height: 8px;
            }
            
            ::-webkit-scrollbar-track {
              background: #f1f1f1;
            }
            
            ::-webkit-scrollbar-thumb {
              background: #c5d1eb;
              border-radius: 10px;
            }
            
            ::-webkit-scrollbar-thumb:hover {
              background: #3a7bfc;
            }
            
            /* Float Animation */
            .float-animation {
              animation: float 6s ease-in-out infinite;
            }
            
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
              100% { transform: translateY(0px); }
            }
          `}
        </style>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 text-gray-800 overflow-x-hidden font-inter">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Akdenar - Premium Quality Products | Home</title>
                  <meta
                    name="description"
                    content="Discover Akdenar's premium selection of high-quality products including rice, salt, sugar, spices, dry fruits, and cooking oil. Shop the best quality products at competitive prices."
                  />
                  <meta
                    name="keywords"
                    content="Akdenar, premium products, rice, salt, sugar, spices, dry fruits, cooking oil, quality products, online store"
                  />
                  <meta property="og:title" content="Akdenar - Premium Quality Products" />
                  <meta
                    property="og:description"
                    content="Discover Akdenar's premium selection of premium products. Shop the best quality products at competitive prices."
                  />
                  <meta property="og:type" content="website" />
                </Helmet>
                <Home />
              </>
            }
          />
          <Route
            path="/category"
            element={
              <>
                <Helmet>
                  <title>Akdenar - Browse All Categories</title>
                  <meta
                    name="description"
                    content="Browse through Akdenar's complete collection of premium products across all categories. Find everything from rice and salt to spices and dry fruits."
                  />
                  <meta
                    name="keywords"
                    content="Akdenar categories, product categories, all categories, rice, salt, sugar, spices, dry fruits, cooking oil"
                  />
                  <meta property="og:title" content="Akdenar - Browse All Categories" />
                  <meta property="og:description" content="Explore our complete collection of premium products across all categories." />
                  <meta property="og:type" content="website" />
                </Helmet>
                <CategoriesPage />
              </>
            }
          />
          <Route
            path="/category/:productName"
            element={
              <>
                <Helmet>
                  <title>Akdenar - Product Categories</title>
                  <meta
                    name="description"
                    content="Browse through Akdenar's extensive collection of premium products. Find detailed information about our various product categories and their specifications."
                  />
                  <meta name="keywords" content="Akdenar categories, product categories, premium products, quality products" />
                  <meta property="og:title" content="Akdenar - Product Categories" />
                  <meta property="og:description" content="Browse through Akdenar's extensive collection of premium products." />
                  <meta property="og:type" content="website" />
                </Helmet>
                <CategoryPage />
              </>
            }
          />
          <Route
            path="/category/:productName/:categoryName/:productId"
            element={
              <>
                <Helmet>
                  <title>Akdenar - Product Details</title>
                  <meta
                    name="description"
                    content="View detailed information about Akdenar's premium products. Get specifications, pricing, and availability information for our high-quality products."
                    />
                    <meta name="keywords" content="Akdenar products, product details, specifications, pricing, premium-quality products" />
                  <meta property="og:title" content="Akdenar - Product Details" />
                  <meta property="og:description" content="View detailed information about Akdenar's premium products." />
                  <meta property="og:type" content="website" />
                </Helmet>
                <ProductDetail />
              </>
            }
          />
            <Route
            path="/search-results"
            element={
              <>
                <Helmet>
                  <title>Akdenar - Search Results</title>
                    <meta name="description" content="Find the products you're looking for at Akdenar. Browse through our search results to discover premium quality products that match your requirements." />
                    <meta name="keywords" content="Akdenar search, product search results, find products, premium products" />
                    <meta property="og:title" content="Akdenar - Search Results" />
                    <meta property="og:description" content="Find the products you're looking for at Akdenar." />
                    <meta property="og:type" content="website" />
                </Helmet>
                <SearchResults />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <title>Akdenar - About Us</title>
                    <meta name="description" content="Learn about Akdenar's journey, mission, and commitment to providing premium quality products. Discover our story and values." />
                    <meta name="keywords" content="Akdenar about, company story, mission, values, premium products" />
                    <meta property="og:title" content="Akdenar - About Us" />
                    <meta property="og:description" content="Learn about Akdenar's journey and commitment to quality." />
                    <meta property="og:type" content="website" />
                </Helmet>
                <About />
              </>
            }
          />
            <Route
            path="/contact"
            element={
              <>
                <Helmet>
                  <title>Akdenar - Contact Us</title>
                    <meta name="description" content="Get in touch with Akdenar. Contact us for any inquiries about our products, services, or business opportunities. We're here to help!" />
                    <meta name="keywords" content="Akdenar contact, customer support, business inquiries, product inquiries" />
                    <meta property="og:title" content="Akdenar - Contact Us" />
                    <meta property="og:description" content="Get in touch with Akdenar for any inquiries about our products and services." />
                    <meta property="og:type" content="website" />
                </Helmet>
                <Contact />
              </>
            }
          />
          <Route
            path="/testimonials"
            element={
              <>
                <Helmet>
                  <title>Akdenar - Customer Testimonials</title>
                    <meta name="description" content="Read what our customers have to say about Akdenar's products and services. Discover real experiences and reviews from satisfied customers." />
                    <meta name="keywords" content="Akdenar testimonials, customer reviews, product reviews, customer feedback" />
                    <meta property="og:title" content="Akdenar - Customer Testimonials" />
                    <meta property="og:description" content="Read what our customers have to say about Akdenar's products and services." />
                    <meta property="og:type" content="website" />
                </Helmet>
                <TestimonialsPage />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Helmet>
                  <title>Akdenar - Page Not Found</title>
                    <meta name="description" content="The page you're looking for doesn't exist. Please navigate back to Akdenar's homepage or use our search function to find what you need." />
                    <meta name="robots" content="noindex" />
                    <meta property="og:title" content="Akdenar - Page Not Found" />
                    <meta property="og:description" content="The page you're looking for doesn't exist." />
                    <meta property="og:type" content="website" />
                </Helmet>
                <NotFound />
              </>
            }
          />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}