import React from "react";

class SearchBar extends React.Component {
  // ====생성메서드==== //
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
    this.enterkey = this.enterkey.bind(this);
  }

  // ===이벤트핸들러=== //
  enterkey = (e) => {
    if (window.event.keyCode == 13) {
      const inputBox = document.getElementById("searchInput");
      this.setState({ keyword: inputBox.value });
      this.props.handleSearch({ keyword: inputBox.value });
      e.preventDefault();
    }
  };

  // =====렌더링===== //
  render() {
    return (
      <div className="search-bar-container">
        <div className="search-bar-wrapper">
          <input
            onKeyPress={this.enterkey}
            id="searchInput"
            type="text"
            className="search-bar"
          ></input>
          <span className="search-icon-wrapper">
            <i className="fa fa-search"></i>
          </span>
        </div>

        <style jsx>{`
          .search-bar-container {
            width: 100%;
            height: 50px;
            text-align: center;
            border-bottom: 1px solid black;
          }

          .search-bar-container .search-bar-wrapper {
            width: 40%;
            height: 50%;
            border-radius: 5px;
            border: 0.3px solid #707070;
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
}

export default SearchBar;
