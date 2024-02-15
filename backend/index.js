const connectToMongo = require('./db')
const express = require('express')
connectToMongo();
const app = express();
const port = 5000;
// Use the middleware to not show undefined in console and send the request in thunderclient
app.use(express.json())

// Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/projects', require('./routes/projects'))

// Litenting port in http://localhost:3000
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
