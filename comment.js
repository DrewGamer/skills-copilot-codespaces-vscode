// Create web server
// Use express.js
// Create a web server that listens on port 3000 and serves a static file index.html
// Create a new route /comment to handle POST requests
// Read the comment from the request body and write it to a file comment.txt
// Respond with a 201 status code and an empty body
// Respond with a 400 status code if the comment is missing
// Respond with a 500 status code if the file write fails
// Use the following command to start the web server:
// node comment.js
// Use the following command to test the web server:
// curl -X POST -H "Content-Type: application/json" -d '{"comment":"hello"}' http://localhost:3000/comment

// Load the express module
const express = require('express');
const fs = require('fs');

// Create a new express application
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Parse JSON bodies
app.use(express.json());

// Handle POST requests to /comment
app.post('/comment', (req, res) => {
    // Read the comment from the request body
    const comment = req.body.comment;
    // Check if the comment is missing
    if (!comment) {
        // Respond with a 400 status code
        res.status(400).end();
        return;
    }
    // Write the comment to a file
    fs.writeFile('comment.txt', comment, (err) => {
        // Check if the file write fails
        if (err) {
            // Respond with a 500 status code
            res.status(500).end();
            return;
        }
        // Respond with a 201 status code
        res.status(201).end();
    });
});

// Start the web server on port 3000
app.listen(3000, () => {
    console.log('Web server started on http://localhost:3000');
});