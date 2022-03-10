// 0 is  paper 1 is scissors and 2 is rock

const hand = ["Paper", "Scissors", "Rock"];

function computerPlay(){
    return hand[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){
    let playerHand= playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if(playerHand == "Rock"){
        if(computerSelection == "Rock"){
            return "It's a Tie!";
        }
        else if(computerSelection == "Scissors"){
            return "You Win! Rock beats Scissors";
        }
        else{
            return "You Lose! Paper beats Rock";
        }
    }
    else if(playerHand == "Paper"){
        if(computerSelection == "Rock"){
            return "You Win! Paper beats Rock";
        }
        else if(computerSelection == "Scissors"){
            return "You Lose! Scissors beats Paper";
        }
        else{
            return "It's a Tie!";
        }
    }
    else if(playerHand == "Scissors"){
        if(computerSelection == "Rock"){
            return "You Lose! Rock beats Scissors";
        }
        else if(computerSelection == "Scissors"){
            return "It's a Tie!";
        }
        else{
            return "You Win! Scissors beats Paper";
        }
    }
}

function game(e){
        let playerSelection = this.getAttribute('value');
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
}

const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', game));

