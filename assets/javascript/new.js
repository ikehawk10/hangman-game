// Defined variables ===============
const wordsArray = ["anonymous", "backdoor", "blackhat", "botnet", "ddos", "malware", "phishing", "spoofing", "virus", "whitehat", "attack"]

let guessNumber, randomWord, randomWordArr, hiddenWord
let attemptedGuesses = []
let lettersGuessed = document.getElementById('lettersGuessed');
let numberDisplay = document.getElementById('guessesLeft');
let chosenWord = document.getElementById('chosenWord')
let message = document.getElementById('message');
let guessesLeft = document.getElementById('guessesLeft');
let resetButton = document.getElementById('reset-button');
let surrenderButton = document.getElementById('surrender');
let inputField = document.getElementById('input')



function newWord() {
	generateRandomWord()
	newMessage()
	resetGuesses()
	surrenderButton.style.display = 'block';
	inputField.disabled = false
	return randomWord
}

function generateRandomWord(){
	randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
	hideWord(randomWord);
	console.log(randomWord)
}

//reset the message content to nothing
function newMessage(){
	message.innerHTML = "";
}

function loserMessage(){
	message.innerHTML = "<h3>You Lose!</h3>";
}

function resetGuesses() {
	guessNumber = 10;
	numberDisplay.innerHTML = guessNumber;
}


//reveal current word
function surrender(){
	loserMessage();
	showWord(randomWord)
	freezeGame()
}

function winner(){
	message.innerHTML = "<h3>You won!</h3>";
}

function lostGame(){
	message.innerHTML = "You ran out of guesses! You Lose!"
}

function letterGuess(e) {
	let guess = e.target.value
	attemptedGuesses.push(guess)
	generateWordArray()
	if ( randomWordArr.includes(guess) ) {
		console.log("hit!")
		correctGuess(guess)
	} else (
		wrongGuess()
	)

	if ( guessNumber <= 0 ){
		lostGame()
	}


	e.target.value = ""
	guessesLeft.innerHTML = guessNumber
	console.log(attemptedGuesses)
	lettersGuessed.innerHTML = attemptedGuesses.join('')
}

function correctGuess(guess){
	for ( var i = 0; i < randomWordArr.length; i++ ){
			if ( randomWordArr[i] === guess ){
				hiddenWord[i] = randomWordArr[i]
				chosenWord.innerHTML = hiddenWord.join('')
			}
		}
	if (hiddenWord.join('') === randomWord) {
		message.innerHTML = `You won with ${guessNumber} guesses remaining! Great job!`;
		freezeGame()

	}
}

function freezeGame(){
	surrenderButton.style.display = 'none';
	inputField.disabled = true
	numberDisplay.innerHTML = ""
}

function wrongGuess(){
	guessNumber--
}

function generateWordArray(){
	randomWordArr = randomWord.split('')
	return randomWordArr
}

function hideWord(word){
	hiddenWord = word.split('').map(letter => {
		return letter = "<span>*</span>";
	})
	chosenWord.innerHTML = hiddenWord.join('');
}

function showWord(word){
	chosenWord.innerHTML = word;
}

//check to see whether the inputed letter has already been guessed
function testLetter(letter){
	if ( attemptedGuesses.includes(letter)) {
		return true
	}
}


//add event listeners to buttons
resetButton.addEventListener('click', newWord);
surrenderButton.addEventListener('click', surrender);
inputField.addEventListener('keyup', letterGuess)


newWord()









