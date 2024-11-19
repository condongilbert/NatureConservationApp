require("dotenv").config(); // Load environment variables from .env

console.log({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Database and Models
const sequelize = require("./database");
const Task = require("./models/Task");

// Sync database
(async () => {
  try {
    await sequelize.sync({ force: true }); // Use `force: true` to recreate tables on every start (useful for development)
    console.log("Database synced.");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
})();

// Routes
app.get("/", (req, res) => {
  res.send("Hello, Nature Conservation App!");
});

// API route to get tasks
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

// API route to create a task
app.post("/api/tasks", async (req, res) => {
  try {
    const { title, points } = req.body;
    const task = await Task.create({ title, points });
    res.json(task);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ error: "Failed to create task" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});