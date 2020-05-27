// // L’utente inserisce due parole in successione, con due prompt.
// // Il software stampa prima la parola più corta, poi la parola più lunga.
//
// // Creo la variabile per l'elemento html
// var message = document.getElementById('message');
//
// // Chiedo le parole all'utente
//
// // Creo i due prompt
//
// while ((!isNaN(parolaUno) || (!isNaN(parolaDue)) || (parolaUno.length == 0 || parolaDue == 0)) {
//   var parolaUno = prompt('Inserisci la prima parola');
//   var parolaDue = prompt('Inserisci la seconda parola');
// }
//
// // var parolaUno = prompt('Inserisci la prima parola');
// console.log(parolaUno);
//
// // var parolaDue = prompt('Inserisci la seconda parola');
// console.log(parolaDue);
//
// // Stampo le parole in ordine di lunghezza crescente
//
// // Controllo la lunghezza delle parole
// if (parolaUno.length > parolaDue.length) {
//   // console.log(parolaDue + ' , ' + parolaUno);
//   message.innerHTML = parolaDue + ' , ' + parolaUno;
// } else {
//   // console.log(parolaUno + ' , ' + parolaDue);
//   message.innerHTML = parolaUno + ' , ' + parolaDue;
// }


 // Il software deve chiedere per 5 volte all’utente di inserire un numero.
 // Il programma stampa la somma di tutti i numeri inseriti.
 // Esegui questo programma in due versioni, con il for e con il while.


// var somma = 0;
// for (var i = 0; i < 5; i++) {
//   var numero = parseInt(prompt('Inserisci il numero'));
//   somma += numero;
// }
//
// console.log(somma);


// Esercizio fizzBuzz

// Creo la variabile per l'elemento
var message = document.getElementById('message');

// Creo i numeri da 1 a 100
for (var i = 1; i <= 100; i++) {

  // Creo la variabile per stampare la lista corretta
  var list = i;

  // Controllo se i numeri sono multipli di 3, 5 o di entrambi
  if (i % 15 == 0) {
    list = 'fizzbuzz';
  } else if (i % 3 == 0) {
    list = 'fizz';
  } else if (i % 5 == 0) {
    list = 'buzz';
  }

  // Stampo a video la lista
  message.innerHTML += '<li>' + list + '<\li>';
}
