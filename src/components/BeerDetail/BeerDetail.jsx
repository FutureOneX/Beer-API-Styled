import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BeerDetail.css"
import { Link } from "react-router-dom";


const BeerDetail = () => {
  const [allBeerDetail, setAllBeerDetail] = useState([])

  const params = useParams()

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
    .then(res => res.json())
    .then(data => setAllBeerDetail(data))
  }, [])

  const filteredBeer = allBeerDetail.filter((beer) => {
    return beer._id === params.id
  })


  return ( 
    <section className="beer-detail-section">
      {filteredBeer.map((beer) =>
      <div key={beer._id} className="beer-detail-div">
      <img src={beer.image_url} alt="Beer Image" />
      <h2>{beer.name}</h2>
      <h3>{beer.tagline}</h3>
      <p className="beer-details">First brewed: {beer.first_brewed}</p>
      <p className="beer-details">Attenuation level: {beer.attenuation_level}</p>
      <p className="beer-description">{beer.description}</p>
      <Link to="/all" className="back-button">Back to Beer List</Link>
      </div>
      )}
    </section>
  );
}

export default BeerDetail;