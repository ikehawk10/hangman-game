

// Defined variables ===============
var wordsArray = ["anonymous", "backdoor", "blackhat", "botnet", "ddos", "malware", "phishing", "spoofing", "virus", "whitehat", "attack"];

var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

var z = document.getElementById('subject');
var guessNumber = document.getElementById('guessesLeft');
var blanks = [];

z.innerHTML = randomWord;
var s;

//functions ========================

function newWord() {
  for (var i = 0; i < randomWord.length; i++) {
    blanks[i] = "*";
  }
   s = blanks.join(" ");
  z.innerHTML = s;
}

newWord();

//when keyboard keys are clicked, log the id value
var keyboardKeys = document.querySelectorAll('.keyboard-keys');
var keyNumber = "";

for (var i = 0; i <keyboardKeys.length; i++) {
	keyboardKeys[i].addEventListener('click', function() {
		console.log('clicked!');
		keyNumber = this.getAttribute("id");

    	for (var i = 0; i < randomWord.length; i++) {
			if (keyNumber === randomWord[i]) {
				console.log("matched " + keyNumber);
				this.classList.add('guessed');
				z.innerHTML = keyNumber;

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
		newWord();
	});


document.getElementById('surrender').addEventListener('click', function() {

		var z = document.getElementById('subject');
		var guessNumber = document.getElementById('guessesLeft');
		var blanks = [];

		z.innerHTML = randomWord;
		var s;
		randomWord.remove('guessed');
		newWord();
	});

// document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
// });




guessNumber.innerHTML = parseInt(randomWord.length / 3 * 2);




