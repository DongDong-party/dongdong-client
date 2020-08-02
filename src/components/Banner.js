import React from "react";

function Banner({ store }) {
  return (
    <div className="banner-container">
      <div className="banner-wrapper">Banner</div>
      <style jsx>{`
        .banner-container {
          width: 100%;
          height: 100px;
          border-bottom: 1px solid black;
        }
      `}</style>
    </div>
  );
}

export default Banner;
