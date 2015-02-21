var result = document.getElementById("result");
var rpsInput = document.getElementById("rpsInput");
var userChoice;
var computerChoice;
var computer = document.getElementById("computer");


document.getElementById("playButton").onclick = function() {
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

