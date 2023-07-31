// imports
const express = require("express");
const morgan = require("morgan");
const { sendMsg } = require("./lib/rmq");

const DATA_QUEUE_NAME = "data";

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// ! BILLING OPERATIONS
app.get("/billing", (req, res) => {
  res.send("GET billing");
});

app.post("/billing", (req, res) => {
  console.log(req.body);

  sendMsg(DATA_QUEUE_NAME, req.body);

  res.send("POST BILLING");
});

app.put("/billing", (req, res) => {
  res.send("PUT billing");
});

app.delete("/billing", (req, res) => {
  res.send("DELETE billing");
});

app.listen(5004);
