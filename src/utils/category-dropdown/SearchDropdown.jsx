import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchDropdown.css";

const SearchBarWithCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="d-flex align-items-center search-bar-container position-relative">
      {/* Category Dropdown */}
      <div className="dropdown">
        <button
          className="btn btn-white dropdown-toggle no-outline fw-bold"
          type="button"
          id="categoryDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            height: "40px",
            borderRadius: "20px 0 0 20px",
            backgroundColor: "#fff",
            zIndex: 1,
            fontSize: "13px",
            opacity: "60%"
          
          }}
        >
          {selectedCategory}
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="categoryDropdown"
          style={{
            position: "absolute",
            top: "40px", // Position it right below the dropdown button
            left: "0",
            zIndex: 10,
            width: "100%",
          }}
        >
          <li>
            <button
              className="dropdown-item no-outlin"
              type="button"
              onClick={() => handleCategoryChange("All Categories")}
              
            >
              All Categories
            </button>
          </li>
          <li>
            <button
              className="dropdown-item no-outline"
              type="button"
              onClick={() => handleCategoryChange("Electronics")}
            >
              Electronics
            </button>
          </li>
          <li>
            <button
              className="dropdown-item no-outline"
              type="button"
              onClick={() => handleCategoryChange("Fashion")}
            >
              Fashion
            </button>
          </li>
        </ul>
      </div>

      {/* Search Input */}
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search for products, brands and more..."
        style={{
          height: "40px",
          flexGrow: 1,
          borderRadius: "0",
          marginLeft: "0",
          zIndex: 0,
        }}
      />

      {/* Search Icon */}
      <button
        className="btn btn-white no-outline"
        style={{
          height: "40px",
          borderRadius: "0 20px 20px 0",
          backgroundColor: "#fff",
          zIndex: 0,
          opacity: "50%"
        }}
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBarWithCategory;
