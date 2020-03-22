const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

const sendGrid = require("@sendGrid/mail");

const app = express();

const PORT = process.env.PORT || 3030;

dotenv.config();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api", (req, res, next) => {
  res.send("API Status: Im ok.");
});

app.post("/api/email", (req, res, next) => {
  sendGrid.setApiKey(
    process.env.apiKey
  );
  const msg = {
    to: "piwom80757@mailernam.com",
    from: req.body.email,
    subject: "Website Contact",
    text: req.body.message
  };

  sendGrid
    .send(msg)
    .then(result => {
      res.status(200).json({
        success: true
      });
    })
    .catch(err => {
      console.log("erros:", err);
      res.status(401).json({
        success: false
      });
    });
});

app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
})

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
