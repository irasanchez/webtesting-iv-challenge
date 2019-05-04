const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

server.post("/", (req, res) => {
  res.status(201).json({ api: "post successful" });
});

server.delete("/", (req, res) => {
  res.status(200).json({ api: "delete successful" });
});

module.exports = server;
