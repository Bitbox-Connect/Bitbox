var jwt = require('jsonwebtoken');
const JWT_SECRET = "mern$Open$SourceProject";

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }

    try {
        // Veriy the auth-token to the JWT_SECRET
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        // Call next to verify the user
        next()
    }
    catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
}

module.exports = fetchuser;
