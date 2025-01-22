import "./Profile.css";
import { useState } from "react";
function Profile() {
  const [name, setName] = useState("Yash Sharma");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("Yash@gmail.com");
  const [image, setImage] = useState(
    "https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg"
  );

  const getRiyaData = () => {
    setName("Riya Verma");
    setGender("female");
    setEmail("riya@gmail.com");
    setImage(
      "https://i.pinimg.com/originals/d2/91/0f/d2910fd5794ef00f0cb242a54cd04808.jpg"
    );
  };

  const getYashData = () => {
    setName("Yash Shamra");
    setGender("male");
    setEmail("yash@gmail.com");
    setImage(
      "https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg"
    );
  };

  return (
    <div className="profile">
      <div className="left">
        <img src={image} width={"100%"} height={"100%"} />
      </div>
      <div className="right">
        <dl>
          <dt>
            <b>User Name</b>
          </dt>
          <dd>{name}</dd>
          <br />

          <dt>
            <b>Gender</b>
          </dt>
          <dd>{gender}</dd>
          <br />

          <dt>
            <b>Email</b>
          </dt>
          <dd>{email}</dd>
          <br />

          <dt>
            <b>Description</b>
          </dt>
          <dd>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            corporis nulla facere adipisci ad quaerat blanditiis praesentium
            omnis dignissimos sint dolores nisi optio unde veritatis magni
            inventore, voluptatibus vero accusantium. Soluta, dolore repellat
            eius aliquid officiis nihil rem eum optio? inventore, voluptatibus
            vero accusantium. Soluta, dolore repellat eius aliquid officiis
            nihil rem eum optio?
          </dd>
        </dl>
        <br />
        <button onClick={getYashData}>Yash</button>
        <button onClick={getRiyaData}>Riya</button>
        <br />
        <br />

        <input type="checkbox" />
        <label>Check to Switch Dark Mode</label>
      </div>
    </div>
  );
}

export default Profile;
