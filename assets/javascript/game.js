

var wordsArray = ["anonymous", "backdoor", "blackhat", "botnet", "ddos", "malware", "phishing", "spoofing", "virus", "whitehat", "attack"];

var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

var z = document.getElementById('subject');
var blanks = [];

z.innerHTML = randomWord;
var s;

function newWord() {
  for (var i = 0; i < randomWord.length; i++) {
    blanks[i] = "*";
  }
   s = blanks.join(" ");
  z.innerHTML = s;
}

newWord();



var guessNumber = document.getElementById('guessesLeft');
guessNumber.innerHTML = parseInt(randomWord.length / 3 * 2);




