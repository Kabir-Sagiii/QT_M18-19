import "./Card.css";
import { Link } from "react-router-dom";
function Card({ data }) {
  const { image, title, price, rating } = data;
  return (
    <div className="card">
      <img src={image} width="100%" height={200} />
      <h4 className="h5 text-warning">{title.slice(0, 20)}</h4>
      <p>${price}</p>
      <p>{rating.rate}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="/productdetails">
          <button>Product Details</button>
        </Link>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;
