import { useRef } from "react";

function DOMRef() {
  let myh2ref = useRef();
  let btnRef = useRef();

  const changeContent = () => {
    var h2DomElement = myh2ref.current;
    h2DomElement.innerText = "New Data Updated";
    h2DomElement.style.color = "Red";

    var btnDomElement = btnRef.current;
    btnDomElement.innerText = "Submited Data";
    btnDomElement.style.color = "orange";
  };

  return (
    <div className="mt-5 p-5">
      <h2 ref={myh2ref}>DOM Manipulation</h2>
      <button ref={btnRef} onClick={changeContent} className="btn btn-success">
        click me
      </button>
    </div>
  );
}

export default DOMRef;
