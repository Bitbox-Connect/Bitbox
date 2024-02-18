const express = require('express');
var jwt = require('jsonwebtoken');
const User = require('../Models/User')
const bcrypt = require('bcrypt');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
require('dotenv').config()
const { body, validationResult } = require('express-validator')

const JWT_SECRET = "mern$Open$SourceProject";

// ROUTE 1 : Create a User using : POST: "/api/auth/createuser". No login required
router.post('/createuser', [
    // Creating check vadilation for user credentials like name, email and password  

    // Name must be at least 3 chars long
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    // Email must be an email
    body('email', 'Enter a valid email').isEmail(),
    // Password must be at least 5 chars long
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),

], async (req, res) => {
    let success = false;

    // For request into the body - Go to thunderclient and select in header the content type and application/json
    // console.log(req.body)    
    // const user = User(req.body)
    // user.save()

    try {
        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        // If data is empty or not filled
        if (!errors.isEmpty()) {
            // Return a status 400 and return json of error in the array form
            return res.status(400).json({ success, errors: errors.array() });
        }

        // Below line is promise so await it
        let user = await User.findOne({ email: req.body.email });
        // If there is user with same credentials
        if (user) {
            return res.status(400).json({ success, error: "Sorry a user with this email already exists" })
        }

        // Below line is promise so await it
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // Create a new user. This code return a promise --> Check whether the user with this mail exists already 
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        })

        // Define the data to sign the data with JWT_SECRET
        const data = {
            user: {
                id: user.id
            }
        }

        // Sign the data and give the authtoken to the user
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken })
    }
    catch (error) {
        // Give internal server error (500)
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }

    // // Takes user argument send response json of user --> When creates a new user
    // .then((user) => res.json(user)).
    // catch((error)=>{
    //     // If user existing then send the error
    //     {console.log(error)
    //     // Send the error in json (error, message) --> If user existing
    //     res.json({error: "Please Enter an unique value for email", message: error.message})}
    // })
})

// ROUTE 2 : Create a User using : POST: "/api/auth/login". No login required
router.post('/login', [
    // Creating check vadilation for user credentials like name, email and password  

    // Email must be an email
    body('email', 'Enter a valid email').isEmail(),
    // Password must be at least 5 chars long
    body('password', 'Password cannot be blank').exists(),

], async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Return a status 400 and return json of error in the array form
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // Below line is promise so await it
        let user = await User.findOne({ email });
        // If user is not available in database
        if (!user) {
            success = false;
            return res.status(400).json({ success, error: "Please try to login with correct credentials" })
        }

        // Below line is promise so await it
        const passwordCompare = await bcrypt.compare(password, user.password);
        // If password does'nt matches with original password
        if (!passwordCompare) {
            success = false;
            return res.status(400).json({ success, error: "Please try to login with correct credentials" })
        }

        // Define the data to sign the data with JWT_SECRET
        const data = {
            user: {
                id: user.id
            }
        }

        // Sign the data and give the authtoken to the user
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken })

    }
    catch (error) {
        // Give internal server error (500)
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})

// ROUTE 3 : Get Loggedin User Details : GET: "/api/auth/getuser". Login required
router.get('/getuser', fetchuser, async (req, res) => {
    try {
        let userId = req.user.id
        // Below line is promise so await it. Find the user from id and select from the password
        const user = await User.findById(userId).select("-password")
        res.send(user)
    }
    catch (error) {
        // Give internal server error (500)
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router 