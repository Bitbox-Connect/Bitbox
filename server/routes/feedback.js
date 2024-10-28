const express = require("express");
const router = express.Router();
const { submitFeedback } = require("../Controllers/Feedback");

router.post("/submitFeedback", submitFeedback);


module.exports = router;