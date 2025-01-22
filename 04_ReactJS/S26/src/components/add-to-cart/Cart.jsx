import { useEffect, useState } from "react";
import axios from "axios";
function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/addtocart")
      .then((res) => {
        setCart(res.data);
      })
      .catch(() => {
        alert("Failed to get cart data");
      });
  }, []);

  const removeCartProduct = (id) => {
    axios
      .delete(`http://localhost:3000/addtocart/${id}`)
      .then(() => {
        axios
          .get("http://localhost:3000/addtocart")
          .then((res) => {
            setCart(res.data);
          })
          .catch(() => {
            alert("Failed to get cart data");
          });
      })
      .catch(() => {
        alert("Failed to remove product from the cart");
      });
  };

  return (
    <div className="container mt-5 ">
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            return (
              <tr key={product.id}>
                <td>
                  <img src={product.image} width={80} height={80} />
                </td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>1</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      removeCartProduct(product.id);
                    }}
                  >
                    remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
