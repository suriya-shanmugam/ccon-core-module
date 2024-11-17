// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, QuantumBots!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
