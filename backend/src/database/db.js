// Import Mongoose
const mongoose = require('mongoose');

// Define the MongoDB URI
const mongoURI = 'mongodb://localhost:27017/Learning-Dashboard';  

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

// Event listeners for connection success or error
const db = mongoose.connection;

// On connection success
db.on('connected', () => {
  console.log(`MongoDB connected successfully to ${mongoURI}`);
});

// On connection error
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

// On disconnection
db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});