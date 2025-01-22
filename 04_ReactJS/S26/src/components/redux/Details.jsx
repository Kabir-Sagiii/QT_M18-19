import React from "react";
import { useSelector } from "react-redux";
function Details() {
  //   let storeData = useSelector((store) => {
  //     return store;
  //   });
  return (
    <div className="p-5 mt-5">
      <h2>Details Component</h2>
      {/* <p className="text-danger">NAME:{storeData}</p> */}
    </div>
  );
}

export default Details;
