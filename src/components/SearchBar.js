import React from 'react';
import '../assets/scss/components/search_bar.scss';

class SearchBar extends React.Component {
  // ====생성메서드==== //
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
    this.enterkey = this.enterkey.bind(this);
  }

  // ===이벤트핸들러=== //
  enterkey = e => {
    const inputBox = document.getElementById('searchInput');
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
        <input
          onKeyPress={this.enterkey}
          id="searchInput"
          type="text"
          className="search-bar"
          placeholder="검색 ' \ ' 눌러서 포커스 "
        />
        <div className="search-icon-wrapper">
          <svg
            width="128"
            height="128"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M73.5924 73.5919C83.2929 63.8914 83.2929 48.1638 73.5924 38.4634C63.8919 28.7629 48.1643 28.7629 38.4638 38.4634C28.7634 48.1638 28.7634 63.8914 38.4638 73.5919C48.1643 83.2924 63.8919 83.2924 73.5924 73.5919ZM78.5422 78.5417C90.9763 66.1075 90.9763 45.9478 78.5422 33.5136C66.108 21.0794 45.9483 21.0794 33.5141 33.5136C21.0799 45.9478 21.0799 66.1075 33.5141 78.5417C45.9483 90.9758 66.108 90.9758 78.5422 78.5417Z"
              fill="#6F55FF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M83.1813 83.178C84.9386 81.4206 87.7879 81.4206 89.5452 83.178L97.1913 90.8241C98.9487 92.5814 98.9487 95.4307 97.1913 97.188C95.434 98.9454 92.5847 98.9454 90.8274 97.188L83.1813 89.542C81.4239 87.7846 81.4239 84.9353 83.1813 83.178Z"
              fill="#6F55FF"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default SearchBar;
