import React, { useState, useEffect } from "react";

import ImageLoader from "../modules/ImageLoader";
import StoreApi from "../api/StoreApi";

function StoreItem({ store }) {
  return (
    <div className="storeComponent">
      <div className="storeImageSection">
        <img
          className="storeCoverImage"
          src={
            ImageLoader.getPath() +
            "cf8b8554-09ab-406b-845f-2e55a8630386KakaoTalk_Photo_2020-07-17-14-29-52.png"
          }
        />
      </div>
      <div className="storeInfoSection">
        <ul>
          <li>{store.name}</li>
          <li>{store.address.city}</li>
          <li>{store.category}</li>
          <li>{store.description}</li>
        </ul>
      </div>

      <style jsx>{`
        .storeComponent {
          position: relative;
          width: 30%;
          height: 0;
          overflow: hidden;
          padding-bottom: 20%;
          margin: 5px;
          border-radius: 5px;
          box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2);
        }

        .storeComponent .storeImageSection {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 67%;
        }

        .storeComponent .storeImageSection .storeCoverImage {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .storeComponent .storeInfoSection {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 33%;
          background-color: white;
        }
      `}</style>
    </div>
  );
}

function StoreList() {
  const [storeList, setStoreList] = useState([]);

  useEffect(() => {
    const init = async () => {
      const { data } = await StoreApi.getList();
      setStoreList(data);
    };
    init();
  }, []);

  return (
    <div className="storeListContainer">
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
