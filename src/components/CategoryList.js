import React from "react";

function CategoryItem() {
  return (
    <div className="category-item-container">
      <div className="category-item">Category Item</div>
      <style jsx>{`
        .category-item-container {
          width: 210px;
          height: 130px;
          border: 1px solid red;
          margin: 10px 17px;
          display: inline-block;
        }
        .category-item {
        }
      `}</style>
    </div>
  );
}

function CategoryList() {
  return (
    <div className="category-list-container">
      <div>옆으로 넘겨 주세요 ></div>
      <div className="categories">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
      <style jsx>{`
        .category-list-container {
          width: 100%;
          height: 170px;
          border-bottom: 1px solid black;
        }

        .categories {
          white-space: nowrap;
          overflow-x: auto;
          overflow-y: hidden;
          width: 80%;
          height: 150px;
          margin: 0 auto;
        }

        .categories::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default CategoryList;
