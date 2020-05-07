const express = require("express");

const router = express.Router();

// router.get("/", (req, res) => {
//   throw new Error("This is a test error!");
//   res.render("index", { title: "Home" });
// });

router.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

module.exports = router;
