import "./ImageC.css";
import { useState } from "react";

function ImageC() {
  const [image, setImage] = useState(
    "https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png"
  );

  const changeToNode = () => {
    setImage(
      "https://cdn.mos.cms.futurecdn.net/dSLsz4Aqa4zWZdn5hSFRBS-1024-80.jpg"
    );
  };

  function changeToReact() {
    setImage(
      "https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png"
    );
  }

  return (
    <div className="imageContainer">
      <h2>React Image</h2>
      <img src={image} width="500" height={300} /> <br />
      <button onClick={changeToReact}>React JS</button>
      <button onClick={changeToNode}>NodeJS</button>
    </div>
  );
}

export default ImageC;
