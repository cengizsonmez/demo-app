import React from "react";
import { Link } from "react-router-dom";
import Item from "../../components/item";
import "./styles.css";

const Home: React.FC = () => {
  return (
    <div className="content-wrapper">
      <div className="item-wrapper">
        <Link to="/movies" className="custom-link">
          <Item
            title={"Movies"}
          />
        </Link>
      </div>
      <div className="item-wrapper">
        <Link to="/series" className="custom-link">
          <Item
            title={"Series"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
