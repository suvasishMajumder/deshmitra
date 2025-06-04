
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import CategoriesPage from './pages/CategoriesPage';
import ProductDetail from './pages/ProductDetail';
import CategoryPage from './pages/CategoryPage';
import SearchResults from './pages/SearchResults';
import About from './pages/About';
import Contact from './pages/Contact';
import TestimonialsPage from './pages/TestimonialsPage';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTopButton from './components/ScrollToTopButton';
import Home from './pages/Home';



export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style>
          {`
            body {
              font-family: 'Inter', sans-serif;
              overflow-x: hidden;
              background: linear-gradient(135deg, #ffffff, #f8f9fa);
              color: #333;
            }
            
            h1, h2, h3, h4, h5, h6, .fw-bold {
              font-family: 'Poppins', sans-serif;
            }
            
            .hover-elevation {
              transition: transform 0.4s ease, box-shadow 0.4s ease;
            }
            
            .hover-elevation:hover {
              transform: translateY(-8px);
              box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
            }
            
            .text-gradient {
              background: linear-gradient(120deg, #3a7bfc, #0046c0);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            
            .btn {
              transition: all 0.3s ease;
              font-weight: 500;
            }
            
            .btn-primary {
              background: linear-gradient(135deg, #3a7bfc, #0046c0);
              border: none;
              box-shadow: 0 4px 15px rgba(58, 123, 252, 0.3);
            }
            
            .btn-primary:hover {
              background: linear-gradient(135deg, #0046c0, #003494);
              transform: translateY(-3px);
              box-shadow: 0 8px 20px rgba(58, 123, 252, 0.4);
            }
            
            .btn-outline-primary {
              border-color: #3a7bfc;
              color: #3a7bfc;
            }
            
            .btn-outline-primary:hover {
              background: linear-gradient(135deg, #3a7bfc, #0046c0);
              border-color: transparent;
              transform: translateY(-3px);
              box-shadow: 0 8px 20px rgba(58, 123, 252, 0.2);
            }
            
            .card {
              border-radius: 20px;
              overflow: hidden;
              transition: all 0.3s ease;
            }
            
            .badge {
              font-weight: 500;
              padding: 0.5em 1em;
            }
            
            .rounded-4 {
              border-radius: 20px !important;
            }
            
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
            
            /* Custom animation classes */
            .float-animation {
              animation: float 6s ease-in-out infinite;
            }
            
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
              100% { transform: translateY(0px); }
            }
            
            /* Responsive adjustments */
            @media (max-width: 768px) {
              .display-4 {
                font-size: 2.5rem;
              }
              
              .display-5 {
                font-size: 2rem;
              }
            }
            
            @media (max-width: 576px) {
              .display-4 {
                font-size: 2rem;
              }
              
              .display-5 {
                font-size: 1.8rem;
              }
              
              .lead {
                font-size: 1rem !important;
              }
            }
          `}
        </style>
      </Helmet>
      <div style={{
        background: "linear-gradient(135deg, #ffffff, #f8f9fa)",
        minHeight: "100vh"
      }}>
        <Header />
        <Routes>

          <Route path="/" element={
            <>
              <Helmet>
                <title>Akdenar - Premium Quality Products | Home</title>
                <meta name="description" content="Discover Akdenar's premium selection of high-quality products including rice, salt, sugar, spices, dry fruits, and cooking oil. Shop the best quality products at competitive prices." />
                <meta name="keywords" content="Akdenar, premium products, rice, salt, sugar, spices, dry fruits, cooking oil, quality products, online store" />
                <meta property="og:title" content="Akdenar - Premium Quality Products" />
                <meta property="og:description" content="Discover Akdenar's premium selection of high-quality products. Shop the best quality products at competitive prices." />
                <meta property="og:type" content="website" />
              </Helmet>              <Home />
            </>
          } />
          <Route path="/category" element={
            <>
              <Helmet>
                <title>Akdenar - Browse All Categories</title>
                <meta name="description" content="Browse through Akdenar's complete collection of premium products across all categories. Find everything from rice and salt to spices and dry fruits." />
                <meta name="keywords" content="Akdenar categories, product categories, all categories, rice, salt, sugar, spices, dry fruits, cooking oil" />
                <meta property="og:title" content="Akdenar - Browse All Categories" />
                <meta property="og:description" content="Explore our complete collection of premium products across all categories." />
                <meta property="og:type" content="website" />
              </Helmet>
              <CategoriesPage />
            </>
          } />
          <Route path="/category/:productName" element={
            <>
              <Helmet>
                <title>Akdenar - Product Categories</title>
                <meta name="description" content="Browse through Akdenar's extensive collection of premium products. Find detailed information about our various product categories and their specifications." />
                <meta name="keywords" content="Akdenar categories, product categories, premium products, quality products" />
                <meta property="og:title" content="Akdenar - Product Categories" />
                <meta property="og:description" content="Browse through Akdenar's extensive collection of premium products." />
                <meta property="og:type" content="website" />
              </Helmet>              <CategoryPage />
            </>
          } />
          <Route path="/category/:productName/:categoryName/:productId" element={
            <>
              <Helmet>
                <title>Akdenar - Product Details</title>
                <meta name="description" content="View detailed information about Akdenar's premium products. Get specifications, pricing, and availability information for our high-quality products." />
                <meta name="keywords" content="Akdenar products, product details, specifications, pricing, premium products" />
                <meta property="og:title" content="Akdenar - Product Details" />
                <meta property="og:description" content="View detailed information about Akdenar's premium products." />
                <meta property="og:type" content="website" />
              </Helmet>              <ProductDetail />
            </>
          } />
          <Route path="/search-results" element={
            <>
              <Helmet>
                <title>Akdenar - Search Results</title>
                <meta name="description" content="Find the products you're looking for at Akdenar. Browse through our search results to discover premium quality products that match your requirements." />
                <meta name="keywords" content="Akdenar search, product search, find products, premium products" />
                <meta property="og:title" content="Akdenar - Search Results" />
                <meta property="og:description" content="Find the products you're looking for at Akdenar." />
                <meta property="og:type" content="website" />
              </Helmet>              <SearchResults />
            </>
          } />
          <Route path="/about" element={
            <>
              <Helmet>
                <title>Akdenar - About Us</title>
                <meta name="description" content="Learn about Akdenar's journey, mission, and commitment to providing premium quality products. Discover our story and values." />
                <meta name="keywords" content="Akdenar about, company story, mission, values, premium products" />
                <meta property="og:title" content="Akdenar - About Us" />
                <meta property="og:description" content="Learn about Akdenar's journey and commitment to quality." />
                <meta property="og:type" content="website" />
              </Helmet>              <About />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Helmet>
                <title>Akdenar - Contact Us</title>
                <meta name="description" content="Get in touch with Akdenar. Contact us for any inquiries about our products, services, or business opportunities. We're here to help!" />
                <meta name="keywords" content="Akdenar contact, customer support, business inquiries, product inquiries" />
                <meta property="og:title" content="Akdenar - Contact Us" />
                <meta property="og:description" content="Get in touch with Akdenar for any inquiries about our products and services." />
                <meta property="og:type" content="website" />
              </Helmet>              <Contact />
            </>
          } />
          <Route path="/testimonials" element={
            <>
              <Helmet>
                <title>Akdenar - Customer Testimonials</title>
                <meta name="description" content="Read what our customers have to say about Akdenar's products and services. Discover real experiences and reviews from satisfied customers." />
                <meta name="keywords" content="Akdenar testimonials, customer reviews, product reviews, customer feedback" />
                <meta property="og:title" content="Akdenar - Customer Testimonials" />
                <meta property="og:description" content="Read what our customers have to say about Akdenar's products and services." />
                <meta property="og:type" content="website" />
              </Helmet>              <TestimonialsPage />
            </>
          } />
          <Route path="*" element={
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
          } />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

