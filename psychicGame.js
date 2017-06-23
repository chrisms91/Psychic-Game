var winDisplay = document.querySelector("#winDisplay");
var loseDisplay = document.querySelector("#loseDisplay");
var numGuessDisplay = document.querySelector("#numGuessDisplay");
var guessListDisplay = document.querySelector("#guessListDisplay");

var numWin = 0;
var numLose = 0;
var numGuessLeft = 9;	//default is 9
var guessList = [];

//generating array for all letters in alphabet
var alpha = "abcdefghijklmnopqrstuvwxyz";
var computerChoices = alpha.split("");

//pick random letter from alphabet array
var computerGuess = pickLetter();

document.onkeyup = function(event) {

var userGuess = event.key;

// Alerts the key the user pressed (userGuess).
console.log("User guess: " + userGuess);
// Alerts the Computer's guess.
console.log("Computer guess: " + computerGuess);

// if user types lowercase letter
if(isLetter(userGuess)){

	//insert user input into array and display array
	insert(userGuess);

	//decrement numGuessLeft
	--numGuessLeft;

	//update numGuessLeft
	numGuessDisplay.textContent = numGuessLeft;

	if(userGuess.match(computerGuess)){

		//increment numWin
		++numWin;

		//update winDisplay
		winDisplay.textContent = numWin;

		//pick different letter randomly
		computerGuess = pickLetter();

		reset();
	}

	if(numGuessLeft === 0){
	  ++numLose;
	  loseDisplay.textContent = numLose;

	  reset();
	}

} else {
	console.log("please type only lowercase letters!");
}

};





// validate user input (only lowercase letters)
function isLetter(userGuess) {  
   var letters = /^[a-z]+$/;  
   if(userGuess.match(letters)){  
    return true;  
   } else {    
     return false;
   }  
}  

function pickLetter(){
	var randNum = Math.floor(Math.random() * computerChoices.length);
	var computerGuess = computerChoices[randNum];
	return computerGuess;
}

function insert(userGuess){
	guessList.push(userGuess);

	display();
}

function display(){
	guessListDisplay.textContent = guessList.join(", ");
}

function reset(){
	numGuessLeft = 9;
  numGuessDisplay.textContent = numGuessLeft;
  guessList = [];
  guessListDisplay.textContent = "";
}







