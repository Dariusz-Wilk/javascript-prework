{
	const playerScore = document.getElementById('player-score');
	const computerScore = document.getElementById('comp-score');
	const inputPlayNums = document.getElementById('play-nums');
	let playerWin = 0;
	let computerWin = 0;

	const playGame = function (playerInput) {
		clearMessages();
		const getMoveName = function (argMoveId) {
			if (argMoveId == 1) {
				return 'kamień';
			} else if (argMoveId == 2) {
				return 'papier';

				// computer will choose scissors 75% of the time
			} else if (argMoveId >= 3 && argMoveId <= 8) {
				return 'nożyce';
			}
		};

		const displayResult = function (argComputerMove, argPlayerMove) {
			console.log('moves:', argComputerMove, argPlayerMove);
			if (
				(argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
				(argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
				(argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
			) {
				printMessage('WYGRAŁEŚ :)');
				playerWin++;
				playerScore.textContent = playerWin;
			} else if (argComputerMove == argPlayerMove) {
				printMessage('REMIS');
			} else {
				printMessage('PRZEGRAŁEŚ :(');
				computerWin++;
				computerScore.textContent = computerWin;
			}
		};

		const randomNumber = Math.floor(Math.random() * 8 + 1);

		const computerMove = getMoveName(randomNumber);
		const playerMove = getMoveName(playerInput);

		printMessage('Mój ruch to: ' + computerMove);
		printMessage('Twój ruch to: ' + playerMove);

		displayResult(computerMove, playerMove);
	};

	// The function simulates 1000 rounds by selecting a rock
	const multiPlays = function () {
		for (let i = 0; i < inputPlayNums.value; i++) {
			playGame(1);
		}
	};

	const resetGame = function () {
		playerWin = 0;
		computerWin = 0;
		playerScore.textContent = '0';
		computerScore.textContent = '0';
		clearMessages();
		printMessage('Nowa Gra!');
		printMessage('Wybierz swój ruch');
	};

	document.getElementById('play-rock').addEventListener('click', function () {
		playGame(1);
	});
	document.getElementById('play-paper').addEventListener('click', function () {
		playGame(2);
	});
	document
		.getElementById('play-scissors')
		.addEventListener('click', function () {
			playGame(3);
		});

	document
		.getElementById('play-thousand')
		.addEventListener('click', multiPlays);

	inputPlayNums.addEventListener('change', () => {
		document.getElementById('play-nums-value').textContent =
			inputPlayNums.value;
	});
	document.getElementById('reset-game').addEventListener('click', resetGame);
}
