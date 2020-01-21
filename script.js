var listaNumeri = [];
var listaNumeriUtente = [];
var punteggio = 0;
var listaNumeriIndovinati = [];
// creo lista numeri da msotrare
for (var i = 0; i < 5; i++) {
  listaNumeri.push(getRandomInt(1,50))
}
alert(listaNumeri);

// inizio funzione asincrona
setTimeout(function () {
  for (var i = 0; i < 5; i++) {
      var numeroUtente = parseInt(prompt("inserisci un numero visto in precedenza "));
    while (inRange(1,50,numeroUtente)== false || inArray(listaNumeriUtente,numeroUtente)) {
      numeroUtente = parseInt(prompt("inserisci un numero visto in precedenza compreso tra 1 e 50 "));
    }
    listaNumeriUtente.push(numeroUtente);

  }
  for (var i = 0; i < listaNumeriUtente.length; i++) {
    if (inArray(listaNumeri,listaNumeriUtente[i])) {
      listaNumeriIndovinati.push(listaNumeriUtente[i])
      punteggio++
    }
  }
  alert(" i numeri indovinati sono"+" "+ listaNumeriIndovinati);
  alert(" hai indovinato"+" "+ punteggio+" numeri")
}, 30000);
// inizio funzioni
function inArray(array,num) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == num) {
      return true;
    }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function inRange(numMin,numMax,num){
  if (num >= numMin && num <=numMax) {
      return true
    }
    else {
      return false
    }
}
