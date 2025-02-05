const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.text());

function wordcounter(text) {
    const wordAndFrequency = {};
    // split text into words
    const lowerText = text.toLowerCase().split('.').join("");
    const words = lowerText.split(/\s+/).filter(word => word.length > 0);
    
    // count the frequency of each word
    words.forEach(word => {
        if (word) {
            // if word is already in the object, increment the count
            wordAndFrequency[word] = wordAndFrequency[word] ? wordAndFrequency[word] + 1 : 1;
        }
    });

    // sort the words by frequency
    const sortedWords = Object.entries(wordAndFrequency).sort((a, b) => b[1] - a[1]);
    
    // get the top 10 words
    const top10Words = (Object.fromEntries(sortedWords.slice(0, 10)));

    return top10Words;
}

// API-endpoint
app.post("/count", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: "No text have been provided" });
    }

    const text = req.body;
    // Call the wordcounter function
    const top_10_count = wordcounter(text);

    res.json(top_10_count);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
  });
