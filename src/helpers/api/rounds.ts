export const playGame = (chosenGesture) => {
    let result;
    let parseGesture = JSON.parse(chosenGesture);
    let playerGesture = parseGesture.gesture;

    const n = Math.floor(Math.random() * 5);     //  create a random number for the computer choice

    let computerChoices = [
        "rock",
        "paper",
        "scissors",
        "lizard",
        "spock"
    ];

    const computerGesture = computerChoices[n];     //  randomise choice

    //  logic for what beats the other/draws, could clean this (thanks for twisting my lemon)
    if (playerGesture === "rock" && computerGesture === "rock") {
        result = "draw!";
    } else if (playerGesture === "rock" && (computerGesture === "scissors" || computerGesture === "lizard")) {
        result = "player wins!";
    } else if (playerGesture === "rock" && (computerGesture === "paper" || computerGesture === "spock")) {
        result = "computer wins!";
    } else if (playerGesture === "paper" && computerGesture === "paper") {
        result = "draw!";
    } else if (playerGesture === "paper" && (computerGesture === "rock" || computerGesture === "spock")) {
        result = "player wins!";
    } else if (playerGesture === "paper" && (computerGesture === "scissors" || computerGesture === "lizard")) {
        result = "computer wins!";
    } else if (playerGesture === "scissors" && computerGesture === "scissors") {
        result = "draw!";
    } else if (playerGesture === "scissors" && (computerGesture === "paper" || computerGesture === "lizard")) {
        result = "player wins!";
    } else if (playerGesture === "scissors" && (computerGesture === "rock" || computerGesture === "spock")) {
        result = "computer wins!";
    } else if (playerGesture === "lizard" && computerGesture === "lizard") {
        result = "draw!";
    } else if (playerGesture === "lizard" && (computerGesture === "spock" || computerGesture === "paper")) {
        result = "player wins!";
    } else if (playerGesture === "lizard" && (computerGesture === "rock" || computerGesture === "scissors")) {
        result = "computer wins!";
    } else if (playerGesture === "spock" && computerGesture === "spock") {
       result = "draw!";
    } else if (playerGesture === "spock" && (computerGesture === "rock" || computerGesture === "scissors")) {
        result = "player wins!";
    } else if (playerGesture === "spock" && (computerGesture === "lizard " || computerGesture === "paper")) {
        result = "computer wins!";
    } else {
        result = "Looks like another draw!"
    }

    return result;
};
