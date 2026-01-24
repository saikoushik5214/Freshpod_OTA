const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

// version endpoint
app.get("/version", (req, res) => {
  res.send("4"); // change number when new update
});

// firmware endpoint
app.get("/firmware.bin", (req, res) => {
  res.sendFile(path.join(__dirname, "firmware.bin"));
});

app.listen(PORT, () => {
  console.log("Freshpod OTA Server running on port", PORT);
});
