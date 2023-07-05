function playGame(playerInput) {
	clearMessages();
	function getMoveName(argMoveId) {
		if (argMoveId == 1) {
			return 'kamień';
		} else if (argMoveId == 2) {
			return 'papier';
		} else if (argMoveId == 3) {
			return 'nożyce';
		}

		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
	}

	function displayResult(argComputerMove, argPlayerMove) {
		console.log('moves:', argComputerMove, argPlayerMove);
		if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
			printMessage('WYGRAŁEŚ :)');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
			printMessage('WYGRAŁEŚ :)');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
			printMessage('WYGRAŁEŚ :)');
		} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
			printMessage('PRZEGRAŁEŚ :(');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
			printMessage('PRZEGRAŁEŚ :(');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
			printMessage('PRZEGRAŁEŚ :(');
		} else if (argComputerMove == argPlayerMove) {
			printMessage('REMIS');
		} else if (argPlayerMove == 'nieznany ruch') {
			printMessage('Wprowadzono niepoprawne dane!');
		}
	}

	let randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('Wylosowana liczba to: ' + randomNumber);

	let computerMove = getMoveName(randomNumber);
	let playerMove = getMoveName(playerInput);

	printMessage('Mój ruch to: ' + computerMove);

	console.log('Gracz wpisał: ' + playerInput);

	printMessage('Twój ruch to: ' + playerMove);

	displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function () {
	playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
	playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
	playGame(3);
});
