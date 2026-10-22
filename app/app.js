const express = require("express");
const app = express();

const message = () =>
  `Hello from ${process.env.APP_ENV || "local"} | version ${process.env.APP_VERSION || "dev"}`;

app.get("/", (req, res) => res.send(message()));
app.get("/health", (req, res) => res.status(200).send("ok"));

if (require.main === module) app.listen(3000, () => console.log("listening on 3000"));
module.exports = { message };
