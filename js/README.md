## Gioco dei dadi (Logic process):
### Console first:
1. **Inizializzare due variabili per contenere il risultato del lancio dei dadi.**

1. **Assegnare alle due variabili il rispettivo valore del lancio dei giocatori**

1. **Stampare il risultato del lancio dei due giocatori.**

1. **Inizializzare una variabile di appoggio "result".**

1. **Determinare il vincitore sfruttando la variabile di appoggio:**

    - **SE:**
        - risultato giocatore 1 maggiore del risultato giocatore 2
        - variabile di appoggio = messaggio "1 Hai vinto!"
    
    - **ALTRIMENTI SE:**
        - risultato giocatore 2 maggiore del risultato giocatore 1
        - variabile di appoggio = messaggio "2 Hai vinto!"
    
    - **ALTRIMENTI:**
        - variabile di appoggio = messaggio "Avete pareggiato"

1. **Stampare in console variabile di appoggio**

## Login Finta (Logic process):
### Console first:

1. **Inizializzare e assegnare una variabile array con le email degli utenti verificati.**

1. (PROVVISORIO) **Inizializzare una variabile che contenga la email dell'utente che vuole accedere, assegnandola con un prompt**

1. **Scorrere i valori all'interno dell'array finchè uno non corrisponde a quello inserito dall'utente.** (o non finisce l'array? TODO: ricerca!)

    3.1 (Come tracciare lo stato della ricerca nell'array per interrompere il ciclo?)

1. **Stampare un messagio** (PROVVISORIAMENTE IN CONSOLE) **di benvenuto se la email dell'utente viene trovata, di rifiuto se invece non è presente nell'array**

    **SE:**
    - email utente = trovata
    - stampa "Benvenuto"

    **ALTRIMENTI:**
    - stampa **Mi dispiace, la tua email non risulta tra quelle registrate**

        
