import React from "react";

function Map() {
  var myData = [
    "Html",
    "Css",
    "Javascript",
    "React",
    "NodeJS",
    "ExpressJS",
    "Mongodb",
    "Java",
    ".net",
    "Python",
  ];
  return (
    <div>
      <h1>Map concept in React JS</h1>
      <ol>
        {myData.map(function (element, index) {
          return <li>{element}</li>; //[<li>html </li>]
        })}
      </ol>
    </div>
  );
}

export default Map;
