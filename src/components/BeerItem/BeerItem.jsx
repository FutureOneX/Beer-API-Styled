import { Link } from "react-router-dom"
import "./BeerItem.css"

const BeerItem = (props) => {
  return ( 
  <Link className="Beer-item" to={`/detail/${props.id}`}>
    <img src={props.image} alt="Beer Image" />
    <div>
      {/* <h2>{props.name}</h2> */}
      <h3>{props.tagline}</h3>
      <p>Created by: {props.name}</p>
    </div>
  </Link> 
  );
}
 
export default BeerItem;