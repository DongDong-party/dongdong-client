import React, { useState, useEffect } from "react";
import CategoryApi from "../api/category-api";
import { Link } from "react-router-dom";
import QueryManager from "../modules/query-manager";

function CategoryItem({ id, name }) {
  const queryParams = QueryManager.makeQueryString({ categoryId: id });
  const searchLink = "/search?" + queryParams;
  return (
    <div className="category-item-container">
      <Link to={searchLink}>
        <div className="category-item">Category Item is {name}</div>
      </Link>
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
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const init = async () => {
      const { data } = await CategoryApi.getList();
      setCategoryList(data);
    };
    init();
  }, []);

  return (
    <div className="category-list-container">
      <div>옆으로 넘겨 주세요 ></div>
      <div className="categories">
        {categoryList.map((category) => {
          return (
            <CategoryItem
              key={category.categoryId}
              id={category.categoryId}
              name={category.name}
            />
          );
        })}
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
