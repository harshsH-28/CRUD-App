const express = require("express");
const bodyparser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/", require("./routes/twitterApi"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
