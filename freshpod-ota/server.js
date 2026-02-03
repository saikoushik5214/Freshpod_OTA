const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.get("/version", (req, res) => {
  res.send("7"); 
});

app.get("/firmware.bin", (req, res) => {
  res.sendFile(path.join(__dirname, "firmware.bin"));
});

app.listen(PORT, () => {
  console.log("Freshpod OTA Server running on port", PORT);
});
