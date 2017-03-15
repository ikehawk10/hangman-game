



var wordsArray = ["anonymous", "backdoor", "blackhat", "botnet", "ddos", "malware", "phishing", "spoofing", "virus", "whitehat"];
var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

var s;
var count = 0;
var answerArray = [];

function setUp() {
	for (var i = 0; i < randomWord.length; i++) {
		answerArray[i] = "_";
	}

	s = answerArray.join(" ");
	document.getElementById('guessNumber').innerHTML = s;
};











