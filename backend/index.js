const express = require('express')
const connectToMongo = require('./db')
var cors = require('cors')
// const editUserRouter = require('./editprofile');
// Connect call to Mongo Database
connectToMongo();

const app = express();
app.use(cors())
const port = 5000;

// Use the middleware to not show undefined in console and send the request in thunderclient
app.use(express.json())

// Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/projects', require('./routes/projects'))
app.use('/api/profile', require('./routes/profile'));

// Litenting port in http://localhost:5000
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
