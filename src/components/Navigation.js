import React from "react";

function Navigation({ store }) {
  return (
    <div className="navigation-container">
      <div className="navigation">Hello Navigation</div>
      <style jsx>{`
        .navigation {
          border-bottom: 1px solid black;
        }
      `}</style>
    </div>
  );
}

export default Navigation;
