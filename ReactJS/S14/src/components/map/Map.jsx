import React from "react";

function Map() {
  var info = [<li>hyd</li>, <li>pune</li>, <li>js</li>, <li>cdjkscb</li>];
  var data = [10, 20, 30];
  var dummy = [<p>hi</p>, <h1>hello</h1>];
  var mydata = ["html", "css", "js", "react"];

  return (
    <div>
      <h1>Map concept in React JS</h1>
      <ol>
        {mydata.map(function (element, index) {
          return <li>{element}</li>;
        })}
      </ol>
    </div>
  );
}

export default Map;
