const express = require("express");
const router = express.Router();
const twitter = require("twitter");
require("dotenv").config();

// const twitterA = new twitter({
//   consumer_key: process.env.TWITTER_API_KEY,
//   consumer_secret: process.env.TWITTER_API_SECRET,
//   access_token_key: process.env.TWITTER_API_ACCESS_TOKEN,
//   access_token_secret: process.env.TWITTER_API_ACCESS_TOKEN_SECRET,
// });

// Show Route for showing all the current tweets
router.get("/", async (req, res) => {
  res.send("Crud Applcation");
});


// app.get("/new", (req, res) => {
//   res.send("Show a New Tweets form");
// });

// Create Route for creating the new tweets
router.post("/new", (req, res) => {
  res.send("Creates a New Tweet");
});

// Update Route for updating the tweets
router.put("/update", (req, res) => {
  res.send("Updates the Tweet");
});

// Delete Route for deleting the tweets
router.delete("/delete", (req, res) => {
  res.send("Delete the Tweet");
});

module.exports = router;
