import axios from "axios";

//business logic in Client app
export const getProductsData = (setProducts, url) => {
  axios
    .get(url)
    .then((res) => {
      setProducts(res.data);
    })
    .catch((error) => {
      alert("Error while getting the data");
    });
};
