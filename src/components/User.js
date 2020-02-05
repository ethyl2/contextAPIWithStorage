import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function User() {
  const { user, changeUser } = useContext(UserContext);
  const [person, setPerson] = useState({
    firstName: "",
    lastName: ""
  });

  const handleChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    changeUser(person);
  };

  return (
    <div>
      <div className="profile">
        {user.lastName}, {user.firstName}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder=" First name"
          value={person.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder=" Last name"
          value={person.lastName}
          onChange={handleChange}
        />
        <button type="submit">Change Name</button>
      </form>
    </div>
  );
}

export default User;
