const express = require("express");
const crypto = require("crypto");
const app = express();

app.get("/", (req, res) => {
  const start = new Date();
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("Hash:", Date.now() - start);
  });

  res.status(200).send();
});

app.get("/fast", (req, res) => {
  res.send("This was fast!");
});

app.listen(3005);
