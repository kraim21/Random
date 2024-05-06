const express = require('express');
const cors = require('cors');

// Create an Express application
const app = express();

// Middleware
app.use(cors()); // Enable All CORS Requests
app.use(express.json()); // Parse JSON request body

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});