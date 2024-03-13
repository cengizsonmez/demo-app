import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./styles.css";

const Header: React.FC = () => {
  const location = useLocation();

  let pageTitle = "";
  switch (location.pathname) {
    case "/":
      pageTitle = "Home";
      break;
    case "/series":
      pageTitle = "Series";
      break;
    case "/movies":
      pageTitle = "Movies";
      break;
    default:
      pageTitle = "";
      break;
  }

  return (
    <div className="header">
      <nav className="nav-bar">
        <Link to="/" className="header-title">
          DEMO app
        </Link>
        <div style={{ float: "right" }}>
          <button onClick={() => {}}className="login-button">Login</button>
        </div>
      </nav>

      <div className="sub-title">{pageTitle}</div>
    </div>
  );
};

export default Header;
