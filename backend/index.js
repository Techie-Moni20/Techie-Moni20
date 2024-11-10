
import express from 'express';   
import app from './app.js';
 

// Initialize the app (this would be necessary if app is not imported from another file)
const port = process.env.PORT || 3000;  // Port number, either from environment or 3000

// Middleware (Optional - Add your middlewares here if needed)
app.use(express.json());  // Middleware to parse JSON

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});