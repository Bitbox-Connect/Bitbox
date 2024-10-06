const express = require('express');
const { Server } = require('socket.io'); // Import Server class from socket.io
const connectToMongo = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');
const Avatar = require('./Models/Avatar');
const authRoutes = require("./routes/auth"); 
// Connect to MongoDB
connectToMongo();

const app = express();
const port = 5000;

// Set up CORS middleware
app.use(cors());

// Increase payload limits for body-parser
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Middleware to parse JSON requests
app.use(express.json());


// Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/profile', require('./routes/profile'));

// Set up socket.io server
const httpServer = require('http').createServer(app); // Create HTTP server
const io = new Server(httpServer, {
    cors: {
        origin: '*',
    },
});

const users = {};

io.on('connection', socket => {
    // If any new user joins, let others users connected to the server know.
    socket.on('new-user-joined', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    // If someone sends a message, broadcast it to other people.
    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
    });

    // If someone leaves the chat, let other people know.
    socket.on('disconnect', () => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
});

// For uploading Avatar image
app.post('/uploadAvatarImage', async (req, res) => {
    try {
        // Find and delete the previous image, if any
        await Avatar.deleteMany(); // Delete all documents in the collection

        // Save new image
        const result = await Avatar.create({ image: req.body.image });
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get Avatar image
app.get('/getAvatarImage', async (req, res) => {
    try {
        const avatar = await Avatar.find();
        res.json(avatar);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start HTTP server
httpServer.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
