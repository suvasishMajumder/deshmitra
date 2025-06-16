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
    const results = [];
    const searchTerms = query
      .toLowerCase()
      .split(" ")
      .filter((term) => term.length > 2);

    for (const product of catalogs) {
      const productName = product.name.toLowerCase();
      const productNameMatches = searchTerms.filter((term) =>
        productName.includes(term)
      );
      const productExactMatch = productName === query.toLowerCase();

      for (const category of product.categories) {
        const categoryName = category.name.toLowerCase();
        const categoryMatches = searchTerms.filter((term) =>
          categoryName.includes(term)
        );
        const categoryExactMatch = categoryName === query.toLowerCase();

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

          let score = 0;

          if (productExactMatch) score += 150;
          else if (categoryExactMatch) score += 140;
          else if (subItemExactMatch) score += 130;

          score += productNameMatches.length * 30;
          score += categoryMatches.length * 25;
          score += subItemNameMatches.length * 20;
          score += subItemDescMatches.length * 10;

          if (
            query.toLowerCase().includes("oil") &&
            product.name.toLowerCase().includes("oil")
          ) {
            score += 100;
          }

          if (
            query.toLowerCase().includes("salt") &&
            product.name.toLowerCase().includes("salt")
          ) {
            score += 100;
          }

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

    results.sort((a, b) => b.score - a.score);

    return results;
  };

  const results = getSearchResults();

  if (results.length === 0) {
    return <NotFound searchTerm={query} />;
  }

  return (
    <main className="mx-auto max-w-7xl mt-30 px-4 sm:px-8 lg:px-8">
      <div className="py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-6"
        >
          <h2 className="text-3xl font-bold">Search Results for "{query}"</h2>
          <button
            className="group flex items-center px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 hover:shadow-md transition-all duration-300 mt-4"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 mb-6"
        >
          Found {results.length} result{results.length !== 1 ? "s" : ""}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                className="col-span-1 group"
              >
                <Link
                  to={
                    type === "product"
                      ? `/category/${productSlug}/${categorySlug}/${index}`
                      : `/category/${productSlug}`
                  }
                  className="block"
                >
                  <div className="bg-white h-full rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-400">
                    <div className="relative overflow-hidden">
                      <img
                        src={subItem.image || category.image}
                        alt={subItem.name}
                        className="w-full h-[200px] object-cover rounded-t-2xl "
                        onError={(e) => {
                          const target = e.target as HTMLImageElement | null;
                          if (target) {
                            target.src =
                              "https://via.placeholder.com/200x200?text=Product";
                          }
                        }}
                      />
                      <div className="absolute top-2 right-2">
                        <span
                          className={`inline-block px-2 py-1 text-xs font-medium text-white rounded ${
                            type === "product" ? "bg-blue-600" : "bg-gray-500"
                          }`}
                        >
                          {type === "product" ? "Product" : "Category"}
                        </span>
                      </div>
                      {score > 75 && (
                        <div className="absolute top-2 left-2">
                          <span className="inline-block px-2 py-1 text-xs font-medium text-white bg-green-600 rounded">
                            Best Match
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h5 className="text-lg font-bold group-hover:text-blue-600 transition-colors duration-300">
                        {subItem.name}
                      </h5>
                      <p className="text-gray-500 text-sm mb-2">
                        {product.name} › {category.name}
                      </p>
                      <p className="text-sm line-clamp-2">
                        {subItem.description}
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-blue-600 font-bold group-hover:scale-105 transition-transform duration-300">
                          {subItem.priceRange}
                        </span>
                        <span className="inline-block px-3 py-1 text-sm border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 hover:shadow-sm transition-all duration-300">
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