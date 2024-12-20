import axios from "axios";

//business logic in Client app
export const getElectronicsData = (setElectronics) => {
  axios
    .get("http://localhost:3000/electronics")
    .then((res) => {
      setElectronics(res.data);
    })
    .catch((error) => {
      alert("Error while getting the data");
    });
};
