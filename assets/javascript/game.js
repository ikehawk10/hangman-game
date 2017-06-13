

// Defined variables ===============
var wordsArray = ["anonymous", "backdoor", "blackhat", "botnet", "ddos", "malware", "phishing", "spoofing", "virus", "whitehat", "attack"],
		randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)],
		blankWord = document.getElementById('subject'),
		guessesLeft = document.getElementById('guessesLeft'),
		guessNumber = 10,
		blanks = [],
		astricks,
		randomWordArr = randomWord.split(''),
		keyboardKeys = document.querySelectorAll('.keyboard-keys'),
		keyNumber = "";

guessesLeft.innerHTML = guessNumber;
blankWord.innerHTML = randomWord;

//functions ========================

function newWord() {
	randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]
  for (var i = 0; i < randomWord.length; i++) {
    blanks[i] = "<span>*</span>";
  }
  astricks = blanks.join(" ");
  return blankWord.innerHTML = astricks	 ;
}

function checkClick(){
	keyNumber = this.getAttribute("id");
		
	for (var i = 0; i < randomWordArr.length; i++) {
		if (keyNumber === randomWord[i]) {
			console.log("matched " + keyNumber);
			this.classList.add('guessed');
			document.getElementById('subject').children[i].innerHTML = keyNumber;
		}
	}
}

function resetWord(){
	newWord();	
	console.log(randomWord);
}

// //Add event listener on keyboard keys
for (var i = 0; i <keyboardKeys.length; i++) {
	keyboardKeys[i].addEventListener('click', checkClick);
}


document.getElementById('reset-button').addEventListener('click', resetWord);
document.getElementById('surrender').addEventListener('click', function() {
	var z = document.getElementById('subject');
	var guessNumber = document.getElementById('guessesLeft');
	var blanks = [];
	z.innerHTML = randomWord;
	var s;
});

newWord();









