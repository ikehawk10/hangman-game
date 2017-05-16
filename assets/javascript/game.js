

// Defined variables ===============
var wordsArray = ["anonymous", "backdoor", "blackhat", "botnet", "ddos", "malware", "phishing", "spoofing", "virus", "whitehat", "attack"];

var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

var blankWord = document.getElementById('subject');
var guessesLeft = document.getElementById('guessesLeft');
var guessNumber = 10;
guessesLeft.innerHTML = guessNumber;
var blanks = [];

blankWord.innerHTML = randomWord;
var s;

var randomWordArr = randomWord.split('');

//functions ========================

function newWord() {

  for (var i = 0; i < randomWord.length; i++) {
    blanks[i] = "<span>*</span>";
  }
   s = blanks.join(" ");
  blankWord.innerHTML = s ;
}


//Get the individual letters from the word
//Test the user's choice again the letters from the word
function testWord () {
	for (var i = 0; i < randomWord.length; i++) {
	}
}

//when keyboard keys are clicked, log the id value
var keyboardKeys = document.querySelectorAll('.keyboard-keys');
var keyNumber = "";


	for (var i = 0; i <keyboardKeys.length; i++) {
		keyboardKeys[i].addEventListener('click', function() {
			keyNumber = this.getAttribute("id");
			

	    	for (var i = 0; i < randomWordArr.length; i++) {
					if (keyNumber === randomWord[i]) {
						console.log("matched " + keyNumber);
						this.classList.add('guessed');
						document.getElementById('subject').children[i].innerHTML = keyNumber;
					}
				}

		})
	}


document.getElementById('reset-button').addEventListener('click', function() {
		var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

		var z = document.getElementById('subject');
		var guessNumber = document.getElementById('guessesLeft');
		var blanks = [];

		z.innerHTML = randomWord;
		var s;
		  for (var i = 0; i < randomWord.length; i++) {
	    blanks[i] = "*";
	  }
	   s = blanks.join(" ");
	  blankWord.innerHTML = s;
	
	});


document.getElementById('surrender').addEventListener('click', function() {

		var z = document.getElementById('subject');
		var guessNumber = document.getElementById('guessesLeft');
		var blanks = [];

		z.innerHTML = randomWord;
		var s;
	});


newWord();









