import React from "react";
import "../assets/scss/components/search_bar.scss";

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
    const inputBox = document.getElementById("searchInput");
    const value = inputBox.value;

    if (window.event.keyCode == 13) {
      this.setState({ keyword: value });
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
      </div>
    );
  }
}

export default SearchBar;
