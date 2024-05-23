// Create web server
// Create a new Express app
const express = require('express');
const app = express();

// Add a comment
app.post('/comments', (req, res) => {
    res.send('You sent a POST request');
});

// Get all comments
app.get('/comments', (req, res) => {
    res.send('You sent a GET request');
});

// Get a comment by ID
app.get('/comments/:id', (req, res) => {
    res.send('You sent a GET request for ID ' + req.params.id);
});

// Update a comment by ID
app.put('/comments/:id', (req, res) => {
    res.send('You sent a PUT request for ID ' + req.params.id);
});

// Delete a comment by ID
app.delete('/comments/:id', (req, res) => {
    res.send('You sent a DELETE request for ID ' + req.params.id);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});