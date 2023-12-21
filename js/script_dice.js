/* DOM - JS sheet test response */
console.log('JS OK');

/* Initialize dice throw variables and assign randomize value */
const playerOne = Math.floor(Math.random() * 6) + 1;
const playerTwo = Math.floor(Math.random() * 6) + 1;
/* variables value checking */
console.log(`Giocatore 1: (${playerOne})   Giocatore 2: (${playerTwo})`); 

/* Initialize result support variable */
let result = '';

/* Establish winner */
if(playerOne > playerTwo){
    result = "Ha vinto il giocatore 1!"
} else if (playerOne < playerTwo){
    result = "Ha vinto il giocatore 2!"
} else {
    result = "E' un pareggio! lancia di nuovo."
}

/* Printing result variable */
console.log(result);