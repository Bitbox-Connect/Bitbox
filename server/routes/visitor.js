const express = require("express");
const router = express.Router();
const visitorController = require("../Controllers/visitorController");

// Route to get current visitor count
router.get("/count", visitorController.getVisitorCount);

// Route to increment visitor count
router.post("/increment", visitorController.incrementVisitorCount);

module.exports = router;
