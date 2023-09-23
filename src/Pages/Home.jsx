import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => res.json())
      .then((data) => {
        setRandomBeer(data);
      });
  }, []);

  return (
    <section className="home-section-container">
          <Link to="/all" className="home-article-container">
          <p>
          All Beers
          </p>
          </Link>
          <Link to={`/detail/${randomBeer._id}`} className="home-article-container">
          <p>
          Random Beer
          </p>
          </Link>
    </section>
  );
};

export default Home;
