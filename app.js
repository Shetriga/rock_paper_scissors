let playerScore = 0,
computerScore = 0;
const computerSelection = () => {
    let possible_outcomes = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor( Math.random() * ( 2 - 0 + 1)) + 0;    // Generate random number between 0 and 2
    console.log("Computer Answer: " + possible_outcomes[randomNumber]); // which is the index of the computer choice
    return possible_outcomes[randomNumber];
}
const playerSelection = () => {
    return prompt("Type your selection ['Rock', 'Paper' or 'scissors']");
}
const playRound = (player_answer, computer_answer) => {
    if (player_answer === "rock") {
        if (computer_answer === "rock") {
            alert(`Tie\nplayer Score ${playerScore}  -  ${computerScore} Computer Score`);
        } else if (computer_answer === "paper") {
            computerScore++;
            alert(`You Lose! Paper beats rock\nplayer Score ${playerScore}  -  ${computerScore} Computer Score`);
        } else {
            playerScore++;
            alert(`You win! Rock beats scissors\nplayer Score ${playerScore}  -  ${computerScore} Computer Score`);
        }
    } else if (player_answer === "paper") {
        if (computer_answer === "rock") {
            playerScore++;
            alert(`You win! Paper beats rock\nplayer Score ${playerScore}  -  ${computerScore} Computer Score`)
        } else if (computer_answer === "paper") {
            alert(`Tie\nplayer Score ${playerScore}  -  ${computerScore} Computer Score`);
        } else {
            computerScore++;
            alert(`You lose! Scissors beat paper\nplayer Score ${playerScore}  -  ${computerScore} Computer Score`);
        }
    } else if (player_answer === "scissors") {
        if (computer_answer === "rock") {
            computerScore++;
            alert(`You lose! Rock beats scissors\nplayer Score ${playerScore}  -  ${computerScore} Computer Score`);
        } else if(computer_answer === "paper") {
            playerScore++;
            alert(`You win! Scissors beat paper\nplayer Score ${playerScore}  -  ${computerScore} Computer Score`);
        } else {
            alert(`Tie\nplayer Score ${playerScore}  -  ${computerScore} Computer Score`);
        }
    }
}
function game () {
    for(let i = 0;i < 5; i++) {
        playRound(playerSelection(), computerSelection());
    }
}
game();