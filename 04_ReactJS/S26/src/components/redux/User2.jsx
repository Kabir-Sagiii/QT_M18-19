import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import user2ActionCreator from "../../actionscreators/user2ActionCreator";
function NameC() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { user1 } = useSelector((storedata) => {
    return storedata;
  });

  const getUser2 = () => {
    const actionObj = user2ActionCreator(inputRef.current.value);
    dispatch(actionObj);
  };
  return (
    <div
      className="p-5 w-50  m-4 bg-light text-dark"
      style={{ boxShadow: "0 0 10px green" }}
    >
      <h1>User 2</h1>
      <input ref={inputRef} type="text" className="form-control my-4" />
      <button className="px-5 btn btn-outline-primary" onClick={getUser2}>
        Submit
      </button>

      <h4 className="text-success mt-3">User 1 : {user1}</h4>
    </div>
  );
}

export default NameC;
