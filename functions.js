function wordcounter(text) {
    const lowerText = text.toLowerCase().split('.').join("");
    const words = lowerText.split(/\s+/).filter(word => word.length > 0);

    if (!text) { return null;}

    words.sort();

    console.log(words);
    const wordsFrequency = {};
        
    words.forEach(element => {
        if (wordsFrequency[element]) {
            wordsFrequency[element]++;
        } else {
            wordsFrequency[element] = 1;
        }
    });

    console.log(wordsFrequency);

    const sortedWords = Object.keys(wordsFrequency).sort((a, b) => wordsFrequency[b] - wordsFrequency[a]);
    console.log(sortedWords);


    return words.length;
}

const text = "This is a safari. This safari has an elephant and a lion. This elephant is big. This lion is fast. This animal is an elephant. This animal is a lion. A safari is for animals. This safari has many animals. An elephant loves this safari. A lion runs in this safari. This is a good safari.";
const svenckaText = "Banan Äpple Katt Hund Banan Hund Katt Hund";
console.log(wordcounter(text));
console.log(wordcounter(svenckaText));
