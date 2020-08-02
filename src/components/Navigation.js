import React from "react";
import { Link } from "react-router-dom";

function Navigation({ store }) {
  return (
    <div className="navigation-container">
      <div className="navigation">
        <Link to="/">홈</Link>
        <Link to="/login">로그인</Link>
      </div>

      <style jsx>{`
        .navigation-container {
          width: 100%;
          height: 50px;
          border-bottom: 1px solid black;
        }
      `}</style>
    </div>
  );
}

export default Navigation;
