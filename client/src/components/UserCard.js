import React, { useState, useEffect } from "react";
import axios from "axios";

const UserCards = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    age: "",
  });

//   const getUsers = () => {
//     return axios
//       .get("localhost:5000/api/users")
//       .then((res) => {
//         console.log(res);
//         setUsers(res.data);
//       })
//       .catch((err) => {
//         console.log("This is getUsers", err);
//       });
//   };

//   const getUserById = (id) => {
//     const userId = users.id;
//     if (userId == id) {
//       return axios
//         .get(`localhost:5000/api/users/${id}`)
//         .then((res) => {
//           console.log(res);
//           return res.data;
//         })
//         .catch((err) => console.log(err));
//     }
//   };

  const onChange = (e) => {
    e.preventDefault();
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const makeUser = user => {
    return axios
      .post("http://localhost:5000/api/users", user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(console.log("This is makeUsers", err));
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeUser(newUser);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            <p>{newUser.name}</p>
            <p>{newUser.age}</p>

      </div>
    </>
  );
};

export default UserCards;
