console.log('Ciao Peppe');


/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

var listaccess = ['forklein@gmail.com', 'ciccio@gmail.com', 'pippo@gmail.com', 'marcolanci@gmail.com'];
// var mailuser = prompt('Inserisci la tua email: ');

var validmail = 'La tua mail può accedere!';
var invalidmail = 'La tua mail non può accedere!';


for(var i = 0; i < listaccess.length -1; i++){
    console.log(listaccess[i]);
    if(listaccess[i] != mailuser){
        console.log(invalidmail);
    }else{
        console.log(validmail);
    }
}




/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.
*/


