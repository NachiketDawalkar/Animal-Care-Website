const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Contact form page
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Form submission handler
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Form Submitted:', { name, email, message });
  res.send('Thank you! We received your message.');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
