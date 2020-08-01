import React from "react";
import PropTypes from "prop-types";

import ImageLoader from "../modules/ImageLoader";

function Store({ store }) {
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

export default Store;
