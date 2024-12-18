import React from "react";
import "../card/Card.css";
import Card from "../card/Card";
import { usersdata } from "../../data/usersdata";
function CardContainer() {
  return (
    <div className="cardContainer">
      {usersdata.results.map(function (user) {
        return <Card user={user} />;
      })}
    </div>
  );
}

export default CardContainer;
