//Pedra, papel ou tesoura
//Duas pessoas estão jogando pedra, papel ou tesoura. Você deve imprimir o nome da jogada vencedora, ou "empate", em caso de empate.

//Capturar escolha do(a) primeiro(a) jogador(a)
let jogadaA = prompt("Bem-vindo(a) ao jogo player 1! Escolha: papel, pedra ou tesoura?");
jogadaA = jogadaA.toLowerCase(); //convert all to lowercase.

//Capturar escolha do(a) segundo(a) jogador(a)
let jogadaB = prompt("Bem-vindo(a) ao jogo player 2! Escolha: papel, pedra ou tesoura?");
jogadaB = jogadaB.toLowerCase(); //convert all to lowercase.

if (jogadaA == jogadaB) {
	result = "empate";
} else if (
	(
		jogadaA == "tesoura" && jogadaB == "papel" ||
		jogadaA == "pedra" && jogadaB == "tesoura" ||
		jogadaA == "papel" && jogadaB == "pedra"
	)
) {
	result = "O ganhador é o jogador 1! Parabéns!"
} else {
	result = "O ganhador é o jogador 2! Parabéns!"
}

alert(result);