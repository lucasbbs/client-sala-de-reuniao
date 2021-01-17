// //Install express server
// const express = require("express");
// const path = require("path");

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + "/dist/<name-of-app>"));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname + "/dist/<name-of-app>/index.html"));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

const express = require("express");
const path = require("path");
const nomeApp = process.env.npm_package_name;

const cors = require("cors");
const app = express();

app.use(express.static(`${__dirname}/dist/${nomeApp}`));
app.use(cors());

app.get("/*", (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
});

app.listen(process.env.PORT || 8080);
