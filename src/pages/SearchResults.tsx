
import { useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import NotFound from "./NotFound";
import { FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import type { RootState } from "../redux/store";

export default function SearchResults() {
  const catalogs = useSelector((state: RootState) => state.catalog.catalogs);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const navigate = useNavigate();

  // If no search query, display not found
  if (!query) {
    return <NotFound />;
  }

  // Enhanced search function with weighted results and category-specific boosting
  const getSearchResults = () => {

 




  let results = [];
    const searchTerms = query
      .toLowerCase()
      .split(" ")
      .filter((term) => term.length > 2);

    // Search through all catalogs with weighted scoring
    for (const product of catalogs) {
      // Check if product name matches
      const productName = product.name.toLowerCase();
      const productNameMatches = searchTerms.filter((term) =>
        productName.includes(term)
      );
      const productExactMatch = productName === query.toLowerCase();

      // Search through categories
      for (const category of product.categories) {
        const categoryName = category.name.toLowerCase();
        const categoryMatches = searchTerms.filter((term) =>
          categoryName.includes(term)
        );
        const categoryExactMatch = categoryName === query.toLowerCase();

        // Search through subcategories (subItems)
        for (let i = 0; i < category.subItems.length; i++) {
          const subItem = category.subItems[i];
          const subItemName = subItem.name.toLowerCase();
          const subItemDescription = subItem.description.toLowerCase();

          const subItemNameMatches = searchTerms.filter((term) =>
            subItemName.includes(term)
          );
          const subItemDescMatches = searchTerms.filter((term) =>
            subItemDescription.includes(term)
          );
          const subItemExactMatch = subItemName === query.toLowerCase();

          // Skip if there's absolutely no match anywhere
          if (
            productNameMatches.length === 0 &&
            categoryMatches.length === 0 &&
            subItemNameMatches.length === 0 &&
            subItemDescMatches.length === 0 &&
            !productExactMatch &&
            !categoryExactMatch &&
            !subItemExactMatch
          ) {
            continue;
          }

          // Calculate relevance score (higher = more relevant)
          let score = 0;

          // Exact matches get highest priority
          if (productExactMatch) score += 150;
          else if (categoryExactMatch) score += 140;
          else if (subItemExactMatch) score += 130;

          // Partial matches get proportional scores
          score += productNameMatches.length * 30;
          score += categoryMatches.length * 25;
          score += subItemNameMatches.length * 20;
          score += subItemDescMatches.length * 10;

          // Boost specific categories when they're relevant to the search
          if (
            query.toLowerCase().includes("oil") &&
            product.name.toLowerCase().includes("oil")
          ) {
            score += 100; // Heavily boost oil products when searching for oil
          }

          if (
            query.toLowerCase().includes("salt") &&
            product.name.toLowerCase().includes("salt")
          ) {
            score += 100; // Heavily boost salt products when searching for salt
          }

          // Penalize irrelevant categories

          // Add more scoring logic as needed

          // Add to results if score is high enough
          if (score > 0) {
            results.push({
              product,
              category,
              subItem,
              index: i,
              type: "product",
              score,
            });
          }
        }
      }
    }

    // Sort by relevance score (highest first)
    results.sort((a, b) => b.score - a.score);

    return results;
  };

  const results = getSearchResults();

  // If no results found after searching
  if (results.length === 0) {
    return <NotFound searchTerm={query} />;
  }

  return (
    <main className="container mt-5 pt-5">
      <div className="py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="d-flex justify-content-between align-items-center mb-4"
        >
          <h2 className="fw-bold">Search Results for "{query}"</h2>
          <button
            className="btn btn-outline-primary rounded-pill d-flex align-items-center"
            style={{ marginTop: "15px" }}
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="me-2" /> Back
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted mb-4"
        >
          Found {results.length} result{results.length !== 1 ? "s" : ""}
        </motion.p>

        <div className="row g-4">
          {results.map((result, idx) => {
            const { product, category, subItem, index, type, score } = result;
            const productSlug = product.name.toLowerCase().replace(/\s/g, "-");
            const categorySlug = category.name
              .toLowerCase()
              .replace(/\s/g, "-");

            return (
              <motion.div
                key={`${productSlug}-${categorySlug}-${index}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="col-lg-4 col-md-6"
              >
                <Link
                  to={
                    type === "product"
                      ? `/category/${productSlug}/${categorySlug}/${index}`
                      : `/category/${productSlug}`
                  }
                  className="text-decoration-none"
                >
                  <div className="card h-100 shadow-sm border-0 hover-elevation">
                    <div className="position-relative">
                      <img
                        src={subItem.image || category.image}
                        alt={subItem.name}
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement | null;
                          if (target) {
                            target.src =
                              "https://via.placeholder.com/200x200?text=Product";
                          }
                        }}
                      />
                      <div className="position-absolute top-0 end-0 m-2">
                        <span
                          className={`badge ${
                            type === "product" ? "bg-primary" : "bg-secondary"
                          }`}
                        >
                          {type === "product" ? "Product" : "Category"}
                        </span>
                      </div>
                      {score > 75 && (
                        <div className="position-absolute top-0 start-0 m-2">
                          <span className="badge bg-success">Best Match</span>
                        </div>
                      )}
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{subItem.name}</h5>
                      <p className="text-muted small mb-2">
                        {product.name} › {category.name}
                      </p>
                      <p className="card-text small">
                        {subItem.description.substring(0, 80)}...
                      </p>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <span className="text-primary fw-bold">
                          {subItem.priceRange}
                        </span>
                        <span className="btn btn-sm btn-outline-primary rounded-pill">
                          View Details
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
