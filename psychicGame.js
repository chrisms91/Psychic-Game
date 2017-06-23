var winDisplay = document.querySelector("#winDisplay");
var loseDisplay = document.querySelector("#loseDisplay");
var numGuessDisplay = document.querySelector("#numGuessDisplay");

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

  if(isLetter(userGuess)){


  	if(userGuess.match(computerGuess)){

  		//increment numWin
  		++numWin;

  		//update winDisplay
  		winDisplay.textContent = numWin;

  		//pick different letter randomly
  		computerGuess = pickLetter();

  	} else {
  		++numLose;
  		loseDisplay.textContent = numLose;
  	}
  	
  } else {
  	
  }

};


// validate user input (only lowercase letters)
function isLetter(userGuess) {  
   var letters = /^[a-z]+$/;  
   if(userGuess.match(letters)){  
    return true;  
   } else {  
     console.log("please type only lowercase letters!");  
     return false;
   }  
}  

function pickLetter(){
	var randNum = Math.floor(Math.random() * computerChoices.length);
	var computerGuess = computerChoices[randNum];
	return computerGuess;
}