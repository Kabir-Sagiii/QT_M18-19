import { useRef } from "react";

function UseRef() {
  let refObj = useRef("Sagar");

  //refObj = {current:"Sagar"}

  const changeRef = () => {
    console.log(refObj.current);
    refObj.current = "Aish";
    console.log(refObj.current);
  };

  return (
    <div className="p-5 my-3">
      <h2>UseRef Concept </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem
        nesciunt, velit tempore voluptate mollitia beatae, quos a consectetur
        fugiat nihil voluptates, error cum earum magnam! Blanditiis totam sed
        esse a.
      </p>

      <button className="mt-1 btn btn-primary" onClick={changeRef}>
        Change Value
      </button>
    </div>
  );
}

export default UseRef;
