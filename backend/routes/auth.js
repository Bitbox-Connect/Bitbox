const express = require('express');
const User = require('../Models/User')
const router = express.Router();
// Create a User using : POST: "/api/auth". Does'nt require Auth
router.post('/', (req, res)=>{
    // For request into the body - Go to thunderclient and select in header the content type and application/json
    console.log(req.body)    
    const user = User(req.body)
    user.save()
    res.send(req.body)
})

module.exports = router 