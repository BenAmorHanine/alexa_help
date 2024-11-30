// Add this to your server.js file

const express = require('express');
const bodyParser = require('body-parser');
const skill = require('./skill'); // Import the Alexa skill

// Initialize Express App
const app = express();
app.use(bodyParser.json());

// Define the route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, world! Your server is running.');
});

// Define the route for Alexa requests
app.post('/alexa', async (req, res) => {
    try {
        console.log("Incoming Request:", JSON.stringify(req.body, null, 2));
        const response = await skill.invoke(req.body); // Invoke the Alexa skill
        res.json(response); // Send the skill's response back to Alexa
    } catch (err) {
        console.error('Error handling the request:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
