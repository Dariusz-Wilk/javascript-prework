let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('comp-score');
let playerWin = 0;
let computerWin = 0;

function playGame(playerInput) {
	clearMessages();
	function getMoveName(argMoveId) {
		if (argMoveId == 1) {
			return 'kamień';
		} else if (argMoveId == 2) {
			return 'papier';

			// computer will choose scissors 75% of the time
		} else if (argMoveId >= 3 && argMoveId <= 8) {
			return 'nożyce';
		}

		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
	}

	function displayResult(argComputerMove, argPlayerMove) {
		console.log('moves:', argComputerMove, argPlayerMove);
		if (
			(argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
			(argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
			(argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
		) {
			printMessage('WYGRAŁEŚ :)');
			playerWin++;
			playerScore.textContent = playerWin;
		} else if (
			(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') ||
			(argComputerMove == 'papier' && argPlayerMove == 'kamień') ||
			(argComputerMove == 'nożyce' && argPlayerMove == 'papier')
		) {
			printMessage('PRZEGRAŁEŚ :(');
			computerWin++;
			computerScore.textContent = computerWin;
		} else if (argComputerMove == argPlayerMove) {
			printMessage('REMIS');
		} else if (argPlayerMove == 'nieznany ruch') {
			printMessage('Wprowadzono niepoprawne dane!');
		}
	}

	let randomNumber = Math.floor(Math.random() * 8 + 1);
	console.log('Wylosowana liczba to: ' + randomNumber);

	let computerMove = getMoveName(randomNumber);
	let playerMove = getMoveName(playerInput);

	printMessage('Mój ruch to: ' + computerMove);

	console.log('Gracz wpisał: ' + playerInput);

	printMessage('Twój ruch to: ' + playerMove);

	displayResult(computerMove, playerMove);
}

// The function simulates 1000 rounds by selecting a rock
function thousandPlays() {
	for (let i = 0; i < 1000; i++) {
		playGame(1);
	}
}

function resetGame() {
	playerWin = 0;
	computerWin = 0;
	playerScore.textContent = '0';
	computerScore.textContent = '0';
	clearMessages();
	printMessage('Nowa Gra!');
	printMessage('Wybierz swój ruch');
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

document
	.getElementById('play-thousand')
	.addEventListener('click', thousandPlays);

document.getElementById('reset-game').addEventListener('click', resetGame);
