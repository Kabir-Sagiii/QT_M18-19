import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PRoductDetails.css";

function ProductDetails() {
  const [product, setProduct] = useState({
    id: 0,
    category: "",
    image: "",
    title: "",
    price: 0,
    description: "",
    rating: { rate: 0, count: 0 },
  });
  var { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((error) => {
        alert("error while getting the data");
      });
  }, []);
  return (
    <div className="productDetailsContainer">
      <div className="leftDiv">
        <img src={product.image} width={"100%"} height={400} />
      </div>
      <div className="rightDiv">
        <dl>
          <dt>
            <b>Product Id</b>
          </dt>
          <dd>
            <h6>{product.id}</h6>
          </dd>
          <dt>
            <b>Product Name</b>
          </dt>
          <dd>
            <h6 className="h6">{product.title}</h6>
          </dd>
          <dt>
            <b>Price</b>
          </dt>
          <dd>
            <h6 className="h6">{product.price}</h6>
          </dd>
          <dt>
            <b>Category</b>
          </dt>
          <dd>
            <h6 className="h6">{product.category}</h6>
          </dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>
            <h6 className="h6">{product.description}</h6>
          </dd>
          <dt>
            <b>Rating</b>
          </dt>
          <dd>
            <h6 className="h6">{product.rating.rate}</h6>
          </dd>
        </dl>

        <button className="btn btn-outline-primary mx-2">Add to Cart</button>
        <button className="btn btn-outline-success mx-2">
          Back to Products
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
