const express = require('express')
const connectToMongo = require('./db')
var cors = require('cors')
const bodyParser = require('body-parser'); // Import bodyParser
const Avatar = require('./Models/Avatar');
// Connect call to Mongo Database
connectToMongo();

const app = express();
app.use(cors())
const port = 5000;

// Increase payload limits for body-parser
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// Use the middleware to not show undefined in console and send the request in thunderclient
app.use(express.json());

// For Uploading Photo
app.post('/uploadAvatarImage', async (req, res) => {
  try {
    // Find and delete the previous image, if any
    await Avatar.deleteMany(); // Delete all documents in the collection

    // Save new image
    const result = await Avatar.create({ image: req.body.image }); // Assuming the image data is sent in the request body
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/getAvatarImage', async (req, res) => {
  try {
    const avatar = await Avatar.find();
    res.json(avatar);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/projects', require('./routes/projects'))
app.use('/api/profile', require('./routes/profile'));

// Litenting port in http://localhost:5000
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
