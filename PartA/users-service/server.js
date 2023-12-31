// imports
const express = require("express");
const morgan = require("morgan");
const { sendMsg } = require("./lib/rmq");

// init express app
const app = express();
const DATA_QUEUE_NAME = "data";

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// ! USERS CRUD OPERATIONS
app.get("/users", (req, res) => {
  res.send("GET USERS");
});

app.post("/users", (req, res) => {
  sendMsg(DATA_QUEUE_NAME, req.body);

  res.send("POST USERS");
});

app.put("/users", (req, res) => {
  res.send("PUT USERS");
});

app.delete("/users", (req, res) => {
  res.send("DELETE USERS");
});

app.listen(5003);
