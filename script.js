var result = document.getElementById("result");
var rpsInput;
var userChoice;

function init() {
	// reference to button using button's id
	var playButton = document.getElementById("playButton");
	playButton.onclick = handlePlayButton;
}

function handlePlayButton() {
	// code to get the value from the form
	rpsInput = document.getElementById("rpsInput");
	userChoice = rpsInput.value.toLowerCase();
	
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	} else if (computerChoice < 0.67) {
		computerChoice = "paper";
	} else {
		computerChoice = "scissors";
	}

	var computer = document.getElementById("computer");
	computer.innerHTML = "The computer chooses " + computerChoice;

	function compare(choice1, choice2) {
		if (choice1 === choice2) {
			result.innerHTML = "The result is a tie!";
		} else if (choice1 === "rock") {
			if (choice2 === "scissors") {
				result.innerHTML = "You win!";
			} else {
				result.innerHTML = "Paper wins!";
			}
		} else if (choice1 === "paper") {
			if (choice2 === "rock") {
				result.innerHTML = "You win!";
			} else {
				result.innerHTML = "Scissors wins!";
			}
		} else if (choice1 === "scissors") {
			if (choice2 === "rock") {
				result.innerHTML = "Rock wins!";
			} else {
				result.innerHTML = "Scissors wins!";
			}
		}
	}
	compare(userChoice, computerChoice);
}

window.onload = init;