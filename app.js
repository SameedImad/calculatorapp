const express = require('express');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Addition
app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Error: Invalid numbers");
    }

    res.send(`Result: ${a + b}`);
});

// Subtraction
app.get('/sub', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Error: Invalid numbers");
    }

    res.send(`Result: ${a - b}`);
});

// Multiplication
app.get('/mul', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Error: Invalid numbers");
    }

    res.send(`Result: ${a * b}`);
});

// Division
app.get('/div', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Error: Invalid numbers");
    }

    if (b === 0) {
        return res.send("Error: Division by zero");
    }

    res.send(`Result: ${a / b}`);
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
