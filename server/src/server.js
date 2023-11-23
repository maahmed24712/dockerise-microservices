const express = require('express');
const app = express();
const db = require('./db');
const phoneRoutes = require('./routes/phoneRoutes');

// Middleware to parse JSON in requests
app.use(express.json());

// Use the phone routes
app.use('/phones', phoneRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
