const checkGameWinner = (gameResultElementRef, playerScore, computerScore) => {
    if (playerScore === 3 || computerScore === 3) {
        if (playerScore > computerScore) {
            gameResultElementRef.innerHTML = `<h1>You are the winner!</h1>`;
        } else {
            gameResultElementRef.innerHTML = `<h1>The computer is winner!</h1>`;
        }
    }
}

export default checkGameWinner;
