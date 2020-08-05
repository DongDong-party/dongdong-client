import React from "react";
import { Link } from "react-router-dom";

function Navigation({ store }) {
  return (
    <div className="navigation-container">
      <div className="navigation">
        <Link to="/">홈</Link>
        <Link to="/login">로그인</Link>
      </div>
    </div>
  );
}

export default Navigation;
