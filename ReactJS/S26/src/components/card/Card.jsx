import "./Card.css";
import { Link } from "react-router-dom";
import axios from "axios";
function Card({ data }) {
  const { image, title, price, rating, id } = data;

  const addToCart = () => {
    axios
      .post("http://localhost:3000/addtocart", data)
      .then(() => {
        alert("Added Product in Cart");
      })
      .catch(() => {
        alert("Failed to add Product in Cart");
      });
  };

  return (
    <div className="card">
      <img src={image} width="100%" height={200} />
      <h4 className="h5 text-warning">{title.slice(0, 20)}</h4>
      <p>${price}</p>
      <p>{rating.rate}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to={`/productdetails/${id}`}>
          <button>Product Details</button>
        </Link>
        <button className="btn btn-danger" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
