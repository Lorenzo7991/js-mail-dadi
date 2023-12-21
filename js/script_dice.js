/* DOM - JS sheet test response */
console.log('JS OK');



/* Initializing dice throw variables and assigning randomize value */
const playerOne = Math.floor(Math.random() * 6) + 1;
const playerTwo = Math.floor(Math.random() * 6) + 1;
/* variables value checking */
console.log(`Giocatore 1: (${playerOne})   Giocatore 2: (${playerTwo})`); 

/* Initializing result support variable */
let result = '';

/* Establishing winner */
if(playerOne > playerTwo){
    result = "Ha vinto il giocatore 1!"
} else if (playerOne < playerTwo){
    result = "Ha vinto il giocatore 2!"
} else {
    result = "E' un pareggio! lancia di nuovo."
}

/* variable result cheking */
console.log(result);

/* Recovering DOM elements and assigning JS variables values */
document.querySelector('.throw-player-one').textContent = playerOne;
document.querySelector('.throw-player-two').textContent = playerTwo;
document.querySelector('.result-message').textContent = result;

//TODO: add btn event listener for user interaction