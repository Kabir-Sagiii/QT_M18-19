import "./Card.css";

function Card({ user }) {
  return (
    <div className="card">
      <img src={user.picture.medium} width={"100%"} height={200} />
      <h3>
        {user.name.title}. {user.name.first} {user.name.last}
      </h3>
      <p>{user.gender}</p>
      <p>{user.email}</p>
      <div>
        <button>Profile Details</button>
      </div>
    </div>
  );
}

export default Card;
