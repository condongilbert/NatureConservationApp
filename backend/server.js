// backend/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, Nature Conservation App!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// backend/server.js
app.use(express.json()); // Middleware to parse JSON

// Example: Get all tasks
app.get('/api/tasks', (req, res) => {
  res.json([{ id: 1, task: 'Identify a plant', points: 10 }]);
});

// Example: Post a new task
app.post('/api/tasks', (req, res) => {
  const newTask = req.body;
  // Here, you’d normally save to a database
  res.status(201).json(newTask);
});