const express = require('express');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Function to validate an email using regex
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

app.post('/validate-email', (req, res) => {
    const { email } = req.body;

    // Check if the email is valid using the custom function
    if (isValidEmail(email)) {
        res.json({ valid: true, message: 'Valid email address.' });
    } else {
        res.json({ valid: false, message: 'Invalid email address.' });
    }
});

app.listen(PORT, '0.0.0.0' ,() => {
    console.log(`Server is running on port ${PORT}`);
});
