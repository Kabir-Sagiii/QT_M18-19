import { useRef } from "react";
import nameActionCreator from "../../actionscreators/nameActionCreator";
import mystore from "../../store/Store";
import { useSelector } from "react-redux";
function NameC() {
  const inputRef = useRef();
  const { user2 } = useSelector((storedata) => {
    return storedata;
  });

  const getInputData = () => {
    var actionObj = nameActionCreator(inputRef.current.value);
    mystore.dispatch(actionObj);
  };

  return (
    <div className="p-5 w-50 shadow m-4 bg-dark text-white">
      <h1>User 1</h1>
      <input ref={inputRef} type="text" className="form-control my-4" />
      <button className="px-5 btn btn-outline-primary" onClick={getInputData}>
        Submit
      </button>

      <h4 className="text-success mt-3">User 2 : {user2}</h4>
    </div>
  );
}

export default NameC;
