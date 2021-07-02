console.log('Ciao Peppe');


/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

var listaccess = ['forklein@gmail.com', 'ciccio@gmail.com', 'pippo@gmail.com', 'marcolanci@gmail.com'];
var mailuser = prompt('Inserisci la tua email: ');
var validmail = 'La tua mail può accedere!';
var invalidmail = 'La tua mail non può accedere!';



if(listaccess[0] == mailuser){
    console.log(validmail);
}else if(listaccess[1] == mailuser){
    console.log(validmail);
}else if(listaccess[2] == mailuser){
    console.log(validmail);
}else if(listaccess[3] == mailuser){
    console.log(validmail);
}else{
    console.log(invalidmail);
}




/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.
*/


