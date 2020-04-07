import React, { useState, useEffect } from "react";
import axios from "axios";

const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    age: "",
  });

  const getUsers = () => {
    return axios
      .get("localhost:5000/api/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("This is getUsers", err);
      });
  };

  const getUserById = (id) => {
    const userId = users.id;
    if (userId == id) {
      return axios
        .get(`localhost:5000/api/users/${id}`)
        .then((res) => {
          console.log(res);
          return res.data;
        })
        .catch((err) => console.log(err));
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const makeUser = (user) => {
    return axios
      .put("localhost:5000/api/users", user)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(console.log("This is makeUsers", err));
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    makeUser(newUser);
    setNewUser({});
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={onChange}
        />

        <input
          type="text"
          name="age"
          placeholder="Age"
          value={newUser.age}
          onChange={onChange}
        />

        <input type="submit" />
      </form>

      <div>
        {users.map((user) => (
          <>
            <p>{user.name}</p>
            <p>{user.age}</p>
          </>
        ))}
      </div>
    </>
  );
};

export default UserCards;
