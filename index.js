const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.text());
;

// API-endpoint
app.post("/count", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: "No text have provided" });
    }

    const text = req.body;
    // Call the wordcounter function
    // const top_10_count = wordcounter(text);

    res.json({
        text: text,
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
  });
