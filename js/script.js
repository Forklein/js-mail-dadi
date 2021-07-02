console.log('Ciao Peppe');


/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/


/* Create variable */
var listaccess = ['forklein@gmail.com', 'ciccio@gmail.com', 'pippo@gmail.com', 'marcolanci@gmail.com'];
var mailuser = prompt('Inserisci la tua email: ');
var validmail = 'La tua mail può accedere!';
var invalidmail = 'La tua mail non può accedere!';

/* Create variable */
var success = false;

/* Create for cicle */
for(var i = 0; i <= listaccess.length - 1; i++){
    if(listaccess[i] === mailuser){
        var position = i;
        success = true;
        console.log(validmail);
    }else{
        console.log(invalidmail);
    }
}

/* InnerHTML if success = True */
if(success){
    document.getElementById('success').innerHTML = validmail;
    console.log(position);
}else{
    document.getElementById('success').innerHTML = invalidmail;
}
 

/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.
*/

/* Create variable */
var player1 = Math.floor(Math.random() * 6 + 1);
var player2 = Math.floor(Math.random() * 6 + 1);
var winner = ['Giocatore 1', 'Giocatore 2'];

/* Create variable for html */
var winnertext = document.getElementById('winner');
var player1text = document.getElementById('player1');
var player2text = document.getElementById('player2');

/* Condition */

if(player1 > player2){
    winnertext.innerHTML = 'Ha vinto il ' + winner[0];
    player1text.innerHTML = 'Il Giocatore 1 ha totalizzato ' + player1 + ' punti';
    player2text.innerHTML = 'Il Giocatore 2 ha totalizzato ' + player2 + ' punti';
}else if(player1 < player2){
    winnertext.innerHTML = 'Ha vinto il ' + winner[1];
    player1text.innerHTML = 'Il Giocatore 1 ha totalizzato ' + player1 + ' punti';
    player2text.innerHTML = 'Il Giocatore 2 ha totalizzato ' + player2 + ' punti';
}else{
    winnertext.innerHTML = 'Pareggio!'
    player1text.innerHTML = 'Il Giocatore 1 ha totalizzato ' + player1 + ' punti';
    player2text.innerHTML = 'Il Giocatore 2 ha totalizzato ' + player2 + ' punti';
}