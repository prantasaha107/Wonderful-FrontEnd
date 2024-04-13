const express = require('express');
const path = require('path');
const content = require('./public/info');

const app= express();
const port= 3000;


// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Serve static files from the "public" directory

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.get('/submit', (req, res) => {
    res.render('content.ejs', { cards: content });
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});