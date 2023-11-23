const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();

// Connection URI
const uri = process.env.MONGODB_URI;

// Connect to the MongoDB server with useNewUrlParser and useUnifiedTopology options
mongoose.connect(uri);

// Get the default connection
const db = mongoose.connection;

// Event handlers for the MongoDB connection
db.on('error', (error) => {
  console.error('Connection error:', error);
});

db.once('open', () => {
  console.log('Connected to the database');
});

// Event handler for when the Node process exits
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Disconnected from the database due to app termination');
    process.exit(0);
  });
});

module.exports = db;
