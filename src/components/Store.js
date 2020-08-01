import React from "react";
import PropTypes from "prop-types";

function Store({ store }) {
  return (
    <div className="storeComponent">
      <div className="storeImageSection">There is IMG</div>
      <div className="storeInfoSection">
        <ul>
          <li>{store.storeId}</li>
          <li>{store.name}</li>
          <li>{store.category}</li>
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
        }

        .storeComponent .storeImageSection {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 67%;
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
