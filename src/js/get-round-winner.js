const getRoundWinner = (playerChoice, computerChoice, winnerElementRef, round) => {
    let winnerName = 'none';

    if (playerChoice === computerChoice) {
        winnerElementRef.innerHTML = `<h3>Round ${round}, ${playerChoice} vs ${computerChoice}, It's a draw!</h3>`;
    } else {
        if (playerChoice === 'Rock') {
            if (computerChoice === 'Scissors') {
                winnerElementRef.innerHTML = `<h3>Round ${round}, ${playerChoice} vs ${computerChoice}, You WON!</h3>`;
                winnerName = 'player';
            } else {
                winnerElementRef.innerHTML = `<h3>Round ${round}, ${playerChoice} vs ${computerChoice}, You LOST!</h3>`;
                winnerName = 'computer';
            }
        }

        if (playerChoice === 'Paper') {
            if (computerChoice === 'Scissors') {
                winnerElementRef.innerHTML = `<h3>Round ${round}, ${playerChoice} vs ${computerChoice}, You LOST!</h3>`;
                winnerName = 'computer';
            } else {
                winnerElementRef.innerHTML = `<h3>Round ${round}, ${playerChoice} vs ${computerChoice}, You WON!</h3>`;
                winnerName = 'player';
            }
        }

        if (playerChoice === 'Scissors') {
            if (computerChoice === 'Rock') {
                winnerElementRef.innerHTML = `<h3>Round ${round}, ${playerChoice} vs ${computerChoice}, You LOST!</h3>`;
                winnerName = 'computer';
            } else {
                winnerElementRef.innerHTML = `<h3>Round ${round}, ${playerChoice} vs ${computerChoice}, You WON!</h3>`;
                winnerName = 'player';
            }
        }
    }

    return winnerName;
}

export default getRoundWinner;
