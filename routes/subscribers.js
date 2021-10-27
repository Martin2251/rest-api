const express = require("express");
const router = express.Router();

//Getting All
router.get("/", (req, res) => {
  res.send("Hello World");
});

//Getting One
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});
//Creating One
router.post("/", (req, res) => {});
//Updateing One
router.patch("/:id", (req, res) => {});
//Deleting One
router.delete("/:id", (req, res) => {
  req.params.id;
});
module.exports = router;
