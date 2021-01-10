import '../styles/main.scss';
import checkGameWinner from './check-game-winner';
import getRoundWinner from './get-round-winner';

const winnerElementRef = document.querySelector('.winner');
const gameResultElementRef = document.querySelector('.game-result');
const optionsElements = document.querySelectorAll('.options button');
const resetElementRef = document.querySelector('.reset-button');

let round = 0;
let playerScore = 0;
let computerScore = 0;
const computerOptions = ['Rock', 'Paper', 'Scissors'];

resetElementRef.addEventListener('click', function () {
    round = 0;
    playerScore = 0;
    computerScore = 0;
    winnerElementRef.innerHTML = `<h2>Game was reset</h2>`;
    gameResultElementRef.innerHTML = '';
});

optionsElements.forEach((option) => {
    option.addEventListener('click', (e) => {
        if (playerScore < 3 && computerScore < 3) {
            round++;

            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            const roundWinnerName = getRoundWinner(e.target.innerText, computerChoice, winnerElementRef, round);

            if (roundWinnerName === 'player') {
                playerScore++;
            }
            if (roundWinnerName === 'computer') {
                computerScore++;
            }

            checkGameWinner(gameResultElementRef, playerScore, computerScore);
        }
    });
});
