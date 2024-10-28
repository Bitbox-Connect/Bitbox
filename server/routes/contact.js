const express = require("express");
const router = express.Router();
const { submitQueery, sayHello } = require("../Controllers/contact");

router.post("/submitContactForm", submitQueery);
router.get("/contactHello", sayHello)


module.exports = router;
