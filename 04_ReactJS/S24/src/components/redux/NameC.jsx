import { useRef } from "react";
import nameActionCreator from "../../actionscreators/nameActionCreator";
import mystore from "../../store/Store";
function NameC() {
  const inputRef = useRef();

  const getInputData = () => {
    var actionObj = nameActionCreator(inputRef.current.value);
    mystore.dispatch(actionObj);
  };

  return (
    <div className="p-5 w-50 shadow m-4 bg-dark text-white">
      <h1>Name Compoenent</h1>
      <input ref={inputRef} type="text" className="form-control my-4" />
      <button className="px-5 btn btn-outline-primary" onClick={getInputData}>
        Submit
      </button>
    </div>
  );
}

export default NameC;
