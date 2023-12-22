console.log('JS OK');

/* Adding event listener on button element */
document.getElementById('btn-verify').addEventListener('click', function () {
    /* Assigning email DOM element as value of the emailElement variable */
    const emailElement = document.getElementById('email');


    /* Recovery value of emailElement variable and assigning as value of userEmail variable */
    const userEmail = emailElement.value.trim();
    /* Variable userEmail value check */
    console.log("Valore attuale di userEmail:" + " " + userEmail);

    /* Verify email field if empty */
    if (userEmail.trim() === '') {
        /* Initializing resultMessage variable and assigning DOM class as value */
        const resultMessage = document.querySelector('.result-message');
        resultMessage.innerText = "Mi dispiace, devi inserire un'email per far si che venga verificata";
        /* Exit function if email field is empty */
        return; 
    }

    /* Initializing and assigning array variable as registered emails */
    const emailList = ["fake_email1@emailfake.it", "fake_email2@emailfake.it", "fake_email3@emailfake.it", "fake_email4@emailfake.it", "fake_email5@emailfake.it", "lorenzo1997chierisini@gmail.com"];
    /*Variable array value check */
    console.table(emailList);

    /* Initializing boolean variable for tracking user email presence */
    let emailFound = false;

    /* Checking user email presence */
    for (let i = 0; i < emailList.length && emailFound === false; i++) {
        if (emailList[i] === userEmail) {
            emailFound = true;
        }
    }


    /* Initializing resultMessage variable and assigning DOM class as value  */
    const resultMessage = document.querySelector('.result-message');
    /* Verrifying emailFound value and assigning matching value of resultMessage variable  */
    if (emailFound) {
        resultMessage.innerText = "La tua email è verificata, bentornato!";
    } else {
        resultMessage.innerText = "Mi dispiace, la tua email non risulta tra quelle registrate...";
    }
});