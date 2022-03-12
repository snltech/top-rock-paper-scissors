// 0 is  paper 1 is scissors and 2 is rock

const hand = ["Paper", "Scissors", "Rock"];

let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    return hand[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){
    playerHand = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
        //Player IMG
    const playerImage = document.querySelector(`img[alt = "${playerSelection}"]`).getAttribute('src');
    console.log(document.querySelector('.playerImg').firstElementChild);
    if(document.querySelector('.playerImg').firstElementChild != null)
    {
        document.querySelector('.playerImg').removeChild(document.querySelector('.playerImg').firstElementChild);
    }
    document.querySelector('.playerImg').appendChild(document.createElement('img')).src = playerImage;

        //Computer IMG
    const computerImage = document.querySelector(`img[alt = "${computerSelection}"]`).getAttribute('src');
    console.log(document.querySelector('.computerImg').firstElementChild);
    if(document.querySelector('.computerImg').firstElementChild != null)
    {
        document.querySelector('.computerImg').removeChild(document.querySelector('.computerImg').firstElementChild);
    }
    document.querySelector('.computerImg').appendChild(document.createElement('img')).src = computerImage;

        //Round Text
    if(playerHand == "Rock"){
        if(computerSelection == "Rock"){
            return "It's a Tie!";
        }
        else if(computerSelection == "Scissors"){
            playerScore += 1;
            return "You Win! Rock beats Scissors";
        }
        else{
            computerScore += 1;
            return "You Lose! Paper beats Rock";
        }
    }
    else if(playerHand == "Paper"){
        if(computerSelection == "Rock"){
            playerScore += 1;
            return "You Win! Paper beats Rock";
        }
        else if(computerSelection == "Scissors"){
            computerScore += 1;
            return "You Lose! Scissors beats Paper";
        }
        else{
            return "It's a Tie!";
        }
    }
    else if(playerHand == "Scissors"){
        if(computerSelection == "Rock"){
            computerScore += 1;
            return "You Lose! Rock beats Scissors";
        }
        else if(computerSelection == "Scissors"){
            return "It's a Tie!";
        }
        else{
            playerScore += 1;
            return "You Win! Scissors beats Paper";
        }
    }
}

function game(e){
        let playerSelection = this.getAttribute('value');
        let computerSelection = computerPlay();
        document.querySelector('.roundResult').innerHTML = playRound(playerSelection, computerSelection);
        document.querySelector('.playerScore').textContent = `Player: ${playerScore}`;
        document.querySelector('.computerScore').textContent = `Computer: ${computerScore}`;
        if (computerScore < 5 && playerScore < 5)
        {
            document.querySelector('.gameResult').innerHTML = "";
        }
        if (computerScore == 5)
        {
            document.querySelector('.gameResult').innerHTML = `End Result:<br>Computer Wins! <br>Start a new game`;
            computerScore = 0;
            playerScore = 0;
        }
        if (playerScore == 5)
        {
            document.querySelector('.gameResult').innerHTML = `End Result:<br>Player Wins! <br>Start a new game`;
            computerScore = 0;
            playerScore = 0;
        }
}

document.querySelector('.playerScore').textContent = `Player: ${playerScore}`;
document.querySelector('.computerScore').textContent = `Computer: ${computerScore}`;

const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', game));