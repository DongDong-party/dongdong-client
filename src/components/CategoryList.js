import React, { useState, useEffect } from 'react';
import CategoryApi from '../api/category-api';
import { Link } from 'react-router-dom';
import '../assets/scss/components/category_list.scss';

function CategoryItem({ id, name }) {
  return (
    <Link to={{ pathname: '/search', state: { categoryId: id } }}>
      <button className="category-item-container">
        <div className="category-item">Category Item is {name}</div>
      </button>
    </Link>
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
