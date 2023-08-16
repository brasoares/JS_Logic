//Rock, paper, scissors games
//Capture first player's choice
let moveA = prompt("Welcome player 2! Which is your choice: rock, paper or scissors?");
moveA = moveA.toLowerCase(); //convert all to lowercase.

//Capture second player's choice
let moveB = prompt("Welcome player 2! Which is your choice: rock, paper or scissors?");
moveB = moveB.toLowerCase(); //convert all to lowercase.

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
