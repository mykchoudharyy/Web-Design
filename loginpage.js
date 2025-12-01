const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());

// ✅ public folder ko access dena
app.use(express.static("public"));

// ✅ loginpage.html ko load karna
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "loginpage.html"));
});

// ✅ form ka data receive karna
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("loginpage.html Node.js se connect ho gaya ✅");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
