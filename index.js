const express = require('express');
const app = express();
const port = 3100;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the home page
app.get('/', (req, res) => {
    res.render('index', { pageTitle: 'Home' });
});

app.get('/tools', (req, res) => {
    res.render('tools', { pageTitle: 'Tools' });
});

// Define a route for tools
app.get('/tools/arithmetic', (req, res) => {
    res.render('tools/arithmetic');
});

// Define a route for tools
app.get('/tools/scientific', (req, res) => {
    res.render('tools/scientific');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
