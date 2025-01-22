import { useState } from "react";
import "./CardContainer.css";
import Card from "../card/Card";
import axios from "axios";
function CardContainer() {
  const [state, setState] = useState([]); //state=[]

  const getUsers = () => {
    var promise = axios.get("https://randomuser.me/api/?results=50");
    promise
      .then((res) => {
        // console.log(res.data.results);
        setState(res.data.results);
        //state=[{},{},{},---]
      })
      .catch((error) => {
        alert("Something went wrong while accessing users data");
        console.log(error);
      });
  };

  const getUsersBasedOnGender = (event) => {
    // var selectDomElement = event.target;
    // alert(selectDomElement.value);

    axios
      .get(
        `https://randomuser.me/api/?gender=${event.target.value}&&results=50`
      )
      .then((res) => {
        setState(res.data.results);
      })
      .catch((error) => {
        alert("error while getting the data");
      });
  };

  return (
    <div className="cardContainer">
      <h2>Users Information</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
        aliquam tempora quidem animi, sunt unde itaque iste recusandae fuga,
        quibusdam optio cupiditate quis voluptate assumenda illo. Asperiores,
        nemo aliquid consequatur praesentium dolorum libero atque esse harum
        labore ipsum! Nihil dolores commodi exercitationem quam fugit ex tenetur
        nulla ea quae, porro, minima laudantium natus molestias modi perferendis
        sapiente. Perferendis, pariatur similique? Mollitia maxime animi ab
        nostrum ratione? Inventore eum temporibus, debitis consequatur animi
        iure commodi neque! Perferendis ipsum illum harum. Quaerat, consectetur?
        Accusantium nemo odit dolor adipisci aut earum sapiente quidem beatae
        architecto laborum eligendi, doloribus at harum consequuntur laboriosam
        amet?
      </p>
      <button onClick={getUsers}>Get Users</button>

      <div
        style={{
          width: "500px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {state.length > 0 && (
          <div className="filterUser">
            <select>
              <option>50</option>
              <option>40</option>
              <option>30</option>
              <option>20</option>
              <option>10</option>
            </select>
          </div>
        )}

        {state.length > 0 && (
          <div className="filterUser">
            <select onChange={getUsersBasedOnGender}>
              <option>all</option>
              <option>male</option>
              <option>female</option>
            </select>
          </div>
        )}
      </div>

      <div>
        {state.length > 0 ? (
          <div className="containerCard">
            {state.map((user) => {
              return <Card user={user} />;
            })}
          </div>
        ) : (
          <h1 className="nouser">No Users Data</h1>
        )}
      </div>
    </div>
  );
}

export default CardContainer;
