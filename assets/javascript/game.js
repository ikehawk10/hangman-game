

// Defined variables ===============
let wordsArray = ["anonymous", "backdoor", "blackhat", "botnet", "ddos", "malware", "phishing", "spoofing", "virus", "whitehat", "attack"],
		randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)],
		blankWord = document.getElementById('subject'),
		guessesLeft = document.getElementById('guessesLeft'),
		guessNumber = 10,
		blanks = [],
		astricks,
		randomWordArr = randomWord.split(''),
		keyboardKeys = document.querySelectorAll('.keyboard-keys'),
		keyNumber = "";

//display the number of guesses
guessesLeft.innerHTML = guessNumber;
//display the random word
blankWord.innerHTML = randomWord;

 //generate new word and replace each letter with an astricks
	function newWord() {
		randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]
		blanks = [];
		guessNumber = 10;
		//replaces each letter with an astricks
		for (var i = 0; i < randomWord.length; i++) {
		  blanks[i] = "<span>*</span>";
		}
		astricks = blanks.join(" ");
		guessesLeft.innerHTML = guessNumber;
		return blankWord.innerHTML = astricks;
	}

//check if user selected a correct letter
function checkClick(){
	keyNumber = this.getAttribute("id");
	guessNumber--;
	for (var i = 0; i < randomWordArr.length; i++) {
		if (keyNumber === randomWord[i]) {
			console.log("matched " + keyNumber);
			guessNumber++;
			blankWord.children[i].innerHTML = keyNumber;
		}
		if (guessNumber <= 0) {
			return surrender();
		}
	} return guessesLeft.innerHTML = guessNumber;
}

//generate new word on reset
function resetWord(){
	newWord();	
}

//reveal current word
function surrender(){
	blankWord.innerHTML = randomWord;
	guessesLeft.innerHTML = "<h3>Better Luck Next Time!</h3>";
}

function winner(){
	guessesLeft.innerHTML = "<h3>You won!</h3>";
}

// //Add event listener on keyboard keys
	keyboardKeys.forEach(key => {
		key.addEventListener('click', checkClick);
	});

//add event listeners to buttons
document.getElementById('reset-button').addEventListener('click', resetWord);
document.getElementById('surrender').addEventListener('click', surrender);

//start with the first word
newWord();










