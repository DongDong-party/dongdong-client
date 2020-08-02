import React from "react";

function Banner({ store }) {
  return (
    <div className="banner-container">
      <div className="banner-wrapper">Banner</div>
      <style jsx>{`
        .banner-wrapper {
          width: 100%;
          height: 30px;
        }
      `}</style>
    </div>
  );
}

export default Banner;
