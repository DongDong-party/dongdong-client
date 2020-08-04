import React, { useState, useEffect } from "react";

import ImageLoader from "../modules/ImageLoader";
import StoreApi from "../api/StoreApi";

function StoreItem({ store }) {
  return (
    <div className="store-component">
      <div className="store-image-section">
        <img
          className="store-cover-image"
          src={
            ImageLoader.getPath() +
            "cf8b8554-09ab-406b-845f-2e55a8630386KakaoTalk_Photo_2020-07-17-14-29-52.png"
          }
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

      <style jsx>{`
        .store-component {
          position: relative;
          width: 30%;
          height: 0;
          overflow: hidden;
          padding-bottom: 20%;
          margin: 5px;
          box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2);
        }

        .store-component .store-image-section {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 70%;
        }

        .store-component .store-image-section .store-cover-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .store-component .store-info-section {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30%;
          background-color: white;
        }

        .store-name {
          font-family: PAYW-Pro-Bold;
          font-size: 20px;
          margin: 0;
        }

        .store-info-section .store-info-base {
          position: absolute;
          float: left;
          :left: 0;
          width: 70%;
          padding: 10px 0px 0px 15px;
        }

        .store-info-section .store-info-etc {
          position: absolute;
          right: 0;
        }
      `}</style>
    </div>
  );
}

function StoreList({ query }) {
  const [storeList, setStoreList] = useState([]);
  console.log("리스트 ", query);

  useEffect(() => {
    const init = async () => {
      const { data } = await StoreApi.getData(query);
      setStoreList(data);
    };
    init();
  }, []);

  return (
    <div className="store-list-container">
      <div className="stores">
        {storeList.map((store) => {
          return <StoreItem key={store.storeId} store={store} />;
        })}
      </div>

      <style jsx>{`
        .stores {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-content: center;
        }
      `}</style>
    </div>
  );
}

export default StoreList;
