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
