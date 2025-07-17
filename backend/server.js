// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/dockerdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"));

app.get("/", (req, res) => {
  res.send("🚀 Backend running");
});

app.listen(3001, () => console.log("✅ Server running on port 3001"));
