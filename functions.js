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

const text = "This is a safari. This safari has an elephant and a lion. This elephant is big. This lion is fast. This animal is an elephant. This animal is a lion. A safari is for animals. This safari has many animals. An elephant loves this safari. A lion runs in this safari. This is a good safari.";
const svenckaText = "Banan Äpple Katt Hund Banan Hund Katt Hund";
console.log(wordcounter(text));
console.log(wordcounter(svenckaText));
