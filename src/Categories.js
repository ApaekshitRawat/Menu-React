import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((list, index) => {
        return (
          <button
            className="filter-btn"
            type="button"
            key={index}
            onClick={() => filterItems(list)}
          >
            {list}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
