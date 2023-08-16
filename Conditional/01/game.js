//Rock, paper, scissors games
//Capture first player's choice
let jogadaA = prompt("Welcome player 2! Which is your choice: rock, paper or scissors?");
jogadaA = jogadaA.toLowerCase(); //convert all to lowercase.

//Capture second player's choice
let jogadaB = prompt("Welcome player 2! Which is your choice: rock, paper or scissors?");
jogadaB = jogadaB.toLowerCase(); //convert all to lowercase.

if (moveA == moveB) {
	result = "Draw";
} else if (
	(
		moveA == "scissors" && moveB == "paper" ||
		moveA == "rock" && moveB == "scissors" ||
		moveA == "paper" && moveB == "rock"
	)
) {
	result = "The winner is Player 1! Congratulations!"
} else {
	result = "The winner is Player 2! Congratulations!"
}

alert(result);
