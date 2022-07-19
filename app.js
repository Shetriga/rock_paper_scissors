const computerSelection = () => {
    let possible_outcomes = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor( Math.random() * ( 2 - 0 + 1)) + 0;  // Generate random number between 0 and 2
    console.log("Computer Answer: " + possible_outcomes[randomNumber]);
    return possible_outcomes[randomNumber];                           // which is the index of the computer choice
}
// const none = computerSelection();
const playerSelection = () => {
    return prompt("Type your selection ['Rock', 'Paper' or 'scissors']");
}
const playRound = (player_answer, computer_answer) => {
    if (player_answer === "rock") {
        if (computer_answer === "rock") {
            alert("Tie");
        } else if (computer_answer === "paper") {
            alert("You Lose! Paper beats rock");
        } else {
            alert("You win! Rock beats scissors");
        }
    } else if (player_answer === "paper") {
        if (computer_answer === "rock") {
            alert("You win! Paper beats rock")
        } else if (computer_answer === "paper") {
            alert("Tie");
        } else {
            alert("You lose! Scissors beat paper")
        }
    } else if (player_answer === "scissors") {
        if (computer_answer === "rock") {
            alert("You lose! Rock beats scissors");
        } else if(computer_answer === "paper") {
            alert("You win! Scissors beat paper");
        } else {
            alert("Tie");
        }
    }
}
function game () {
    for(let i = 0;i < 5; i++) {
        playRound(playerSelection(), computerSelection());
    }
}
game();