const express = require("express");
const { Server } = require("socket.io");
const connectToMongo = require("./db");
const cors = require("cors");
const Avatar = require("./Models/Avatar");

// Connect to MongoDB
connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, req.body);
  next();
});

// Set up CORS middleware
app.use(cors({
  origin: "*", // Update to specific origins in production
  methods: ['GET', 'POST', 'OPTIONS'],
}));

// Middleware to parse JSON requests
app.use(express.json());

// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/projects", require("./routes/projects"));
app.use("/api/profile", require("./routes/profile"));

// Set up socket.io server
const httpServer = require("http").createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*", // Update to specific origins in production
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  },
});

const users = {};

io.on("connection", (socket) => {
  // Notify other users when a new user joins
  socket.on("new-user-joined", (name) => {
    try {
      users[socket.id] = name;
      socket.broadcast.emit("user-joined", name);
    } catch (error) {
      console.error("Error handling new user join:", error);
    }
  });

  // Broadcast messages to other users
  socket.on("send", (message) => {
    try {
      socket.broadcast.emit("receive", {
        message: message,
        name: users[socket.id],
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  });

  // Notify other users when someone leaves the chat
  socket.on("disconnect", () => {
    try {
      if (users[socket.id]) {
        socket.broadcast.emit("left", users[socket.id]);
        delete users[socket.id];
      }
    } catch (error) {
      console.error("Error handling user disconnect:", error);
    }
  });
});

// Endpoint for uploading avatar image
app.post("/uploadAvatarImage", async (req, res) => {
  try {
    await Avatar.deleteMany(); // Delete all previous images in the collection
    const result = await Avatar.create({ image: req.body.image });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint for getting avatar image
app.get("/getAvatarImage", async (req, res) => {
  try {
    const avatar = await Avatar.find();
    res.json(avatar);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start HTTP server
httpServer.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});

// Centralized error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
