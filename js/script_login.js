/* DOM - JS sheet test response */
console.log('JS OK');


/* Initializing and assigning array variable as registered emails */
const emailList = ["fake_email1@emailfake.it", "fake_email2@emailfake.it", "fake_email3@emailfake.it","fake_email4@emailfake.it", "fake_email5@emailfake.it", "lorenzo1997chierisini@gmail.com"  ];
/* array value check */
console.table(emailList);

/*Initializing and assigning variable as user email request */
const userEmail = prompt("Inserisci la tua email");

/* Initializing boolean variable for tracking usere email prensence */
let emailFound = false;


/* Checking user email presence */
for (let i = 0; i < emailList.length && emailFound === false; i++) {
    if (emailList[i] === userEmail) {
        emailFound = true;
    }
}

if(emailFound){
    console.log("Bentornato!");
} else {
    console.log("Mi dispiace, la tua email non risulta tra quelle registrate");
}