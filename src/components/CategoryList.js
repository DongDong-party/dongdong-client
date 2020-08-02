import React from "react";

function CategoryList() {
  return (
    <div className="category-list-container">
      <span>Category List</span>
      <style jsx>{`
        .category-list-container {
          width: 100%;
          height: 150px;
          border: 1px solid black;
        }
      `}</style>
    </div>
  );
}

export default CategoryList;
