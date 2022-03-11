const express = require("express");
const path = require("path");

const app = express();

app.use(express.json()); // need to include if use JSON data
app.use(express.urlencoded({ extended: false })); // need to include if use Form data
app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.json({
  //   msg: "Hello",
  // });
  res.send(req.header("user-agent"));
});

app.post("/contact", (req, res) => {
  if (!req.body.name) {
    return res.status(400).send("Name is required");
  }

  // DATABASE STUFF

  res.status(201).send(`Thank you ${req.body.name}`);
});

app.post("/login", (req, res) => {
  if (!req.header("x-auth-token")) {
    return res.status(400).send("No Token");
  }

  if (req.header("x-auth-token") !== "123456") {
    return res.status(401).send("Not authorized");
  }

  res.send("Logged in");
});

app.put("/post/:id", (req, res) => {
  // DATABASE STUFF TO UPDATE THE POST DATA

  res.json({
    id: req.params.id, // access url
    title: req.body.title, // access data from Body of Request
  });
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
