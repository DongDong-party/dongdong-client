import React from "react";

function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="search-bar-wrapper">
        <input type="text" className="search-bar"></input>
        <span className="search-icon-wrapper">
          <i className="fa fa-search"></i>
        </span>
      </div>

      <style jsx>{`
        .search-bar-container {
          width: 100%;
          height: 50px;
          text-align: center;
        }

        .search-bar-container .search-bar-wrapper {
          width: 40%;
          height: 50%;
          border-radius: 5px;
          border: 0.3px solid rgba(0, 0, 0, 0.4);
          box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2);
          display: inline-block;
        }

        .search-bar-container .search-bar-wrapper .search-bar {
          border-radius: 5px;
          width: 90%;
          height: 100%;
          border: none;
          background: transparent;
        }

        .search-bar:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
}

export default SearchBar;
