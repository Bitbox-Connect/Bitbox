
const express = require("express");
var jwt = require("jsonwebtoken");
const {login,createAdmin}= require("../Controllers/adminController")
const User = require("../Models/Admin.js");
const bcrypt = require("bcrypt");
const router = express.Router();
require("dotenv").config();
const { body, validationResult } = require("express-validator");
const { OAuth2Client } = require("google-auth-library");
const rateLimit = require("express-rate-limit");
require('dotenv').config(); // Load environment variables from .env file

  
router.post("/login",login)
router.post("/create",createAdmin)

module.exports = router;