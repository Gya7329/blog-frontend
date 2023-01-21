import React from "react";
import { Link } from "react-router-dom";
import Card from "../../component/Card";
import newblog from "../../component/assets/newblog.png";
import "./style.css";
const Home = () => {
  return (
    <div>
      <div>
        <Card />
      </div>
      <div className="mainNewBlogSec">
        <div className="newBlogSec">
          <Link to="/new-blog">
            <img src={newblog} height={50} width={40} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
