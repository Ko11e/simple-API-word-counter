const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const PORT = 3000;

app.use(bodyParser.text());


// API-endpoint
app.post("/count", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: "No text have provided" });
    }

    // const wordFrequencies = countWords(req.body);
    res.json({
        message: "The text has been received",
    });
});

// Starta servern
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
  });
