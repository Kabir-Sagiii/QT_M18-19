import { useReducer } from "react";
import { reducer } from "./reducer";

function UseReducer() {
  //30000
  const [state, dispatch] = useReducer(reducer, 0); //state =0
  return (
    <div style={{ padding: "30px" }}>
      <h2 className="my-3">Count Value : {state}</h2>
      <button
        className="btn btn-success mx-2"
        onClick={() => {
          //   reducer(); we cannot call reducer() function directly
          dispatch({
            type: "LIKE",
          }); //action object
        }}
      >
        like
      </button>
      <button
        className="btn btn-danger mx-2"
        onClick={() => {
          dispatch({
            type: "DISLIKE",
          });
        }}
      >
        dislike
      </button>
      <button
        className="btn btn-info mx-2"
        onClick={() => {
          dispatch({
            type: "RESET",
          });
        }}
      >
        reset
      </button>
    </div>
  );
}

export default UseReducer;
