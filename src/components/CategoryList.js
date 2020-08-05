import React, { useState, useEffect } from "react";
import CategoryApi from "../api/category-api";
import { Link } from "react-router-dom";
import "../assets/scss/components/category_list.scss";

function CategoryItem({ id, name }) {
  return (
    <div className="category-item-container">
      <Link to={{ pathname: "/search", state: { categoryId: id } }}>
        <div className="category-item">Category Item is {name}</div>
      </Link>
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
    </div>
  );
}

export default CategoryList;
