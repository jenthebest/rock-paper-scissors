var result = document.getElementById("result");
var rpsInput;
var userChoice;
var computerChoice;

window.onload = function() {
	// reference to button using button's id
	var playButton = document.getElementById("playButton");
	playButton.onclick = handlePlayButton;
}

function handlePlayButton() {
	// code to get the value from the form
	rpsInput = document.getElementById("rpsInput");
	userChoice = rpsInput.value.toLowerCase();
	
	computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	} else if (computerChoice < 0.67) {
		computerChoice = "paper";
	} else {
		computerChoice = "scissors";
	}

	compare(userChoice, computerChoice);
	var computer = document.getElementById("computer");
	computer.innerHTML = "The computer chooses " + computerChoice;
}



function compare(choice1, choice2) {
	if (choice1 === choice2) {
		result.innerHTML = "The result is a tie!";
	} else if (choice1 === "rock") {
		if (choice2 === "scissors") {
			result.innerHTML = "You win! :)";
		} else {
			result.innerHTML = "The computer wins :(";
		}
	} else if (choice1 === "paper") {
		if (choice2 === "rock") {
			result.innerHTML = "You win! :)";
		} else {
			result.innerHTML = "The computer wins :(";
		}
	} else if (choice1 === "scissors") {
		if (choice2 === "rock") {
			result.innerHTML = "The computer wins :(";
		} else {
			result.innerHTML = "You win! :)";
		}
	}
}

