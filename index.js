//NODE JS and EXPRESS
const express = require("express");
const shortid = require("shortid");
const cors = require("cors");

const server = express();
const PORT = 5000;

let users = []

server.use(express.json());
server.use(cors());

server.get("/hello", (req, res) => {
  res.status(200).json({ hello: "Jason" });
});

server.post("/api/users", (req, res) => {
  const usersInfo = req.body;
  usersInfo.id = shortid.generate();
  users.push(usersInfo);
  res.status(201).json(usersInfo);
});

server.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

server.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const hub = users.find((hub) => hub.id == id);

  if (hub) {
    res.json(hub);
  } else {
    res.status(404).json({ message: "No hub found" });
  }
});

server.listen(PORT, () =>
  console.log(`\n ** API on http://localhost:${PORT}  **\n`)
);
