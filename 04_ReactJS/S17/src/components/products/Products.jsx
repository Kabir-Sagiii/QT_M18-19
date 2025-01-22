import { useEffect, useState } from "react";
import "./Products.css";
import Card from "../card/Card";
import { getProductsData } from "./services/ProductsService";
function Products({ url }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductsData(setProducts, url);
  }, []);

  return (
    <div className="products">
      <div className="adProductsContainer"></div>

      <div>
        <div className="priceSorting"></div>

        <div className="rateSorting"></div>
      </div>

      <div className="productsDataContainer">
        {products.map((productsData) => {
          return <Card data={productsData} />;
        })}
      </div>
    </div>
  );
}

export default Products;
