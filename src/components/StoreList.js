import React, { useState, useEffect } from "react";

import ImageLoader from "../modules/image-loader";
import StoreApi from "../api/store-api";
import "../assets/scss/components/store_list.scss";

function StoreItem({ store }) {
  return (
    <div className="store-component">
      <div className="store-image-section">
        <img
          className="store-cover-image"
          src={
            ImageLoader.getPath() +
            "2cb5912e-82ec-437c-992f-54750aadfebcKakaoTalk_Photo_2020-07-17-14-29-52.png"
          }
          alt=""
        />
      </div>
      <div className="store-info-section">
        <div className="store-info-base">
          <h1 className="store-name">{store.name}</h1>
          <div>{store.address.city}</div>
          <div>{store.category}</div>
          <p>{store.description}</p>
        </div>
        <div className="store-info-etc"></div>
      </div>
    </div>
  );
}

function StoreList({ query }) {
  console.log(query);
  const [storeList, setStoreList] = useState([]);

  useEffect(() => {
    const init = async () => {
      const { data } = await StoreApi.getData(query);
      setStoreList(data);
    };
    init();
  }, [query]);

  return (
    <div className="store-list-container">
      <div className="stores">
        {storeList.map((store) => {
          return <StoreItem key={store.storeId} store={store} />;
        })}
      </div>
    </div>
  );
}

export default StoreList;
