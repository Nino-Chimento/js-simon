var listaNumeri = [1,2,3,4,5];
var listaNumeriUtente = [];
var punteggio = 0;
var listaNumeriIndovinati = [];
// creo lista numeri da msotrare
// for (var i = 0; i < 5; i++) {
//   listaNumeri.push(getRandomInt(1,50))
// }
alert(listaNumeri);
console.log(inRange (5,1,10));
// inizio funzione asincrona
setTimeout(function () {
  for (var i = 0; i < 5; i++) {
    var numeroUtente = parseInt(prompt("inserisci un numero visto in precedenza "));

    listaNumeriUtente.push(numeroUtente);

  }
  for (var i = 0; i < listaNumeriUtente.length; i++) {
    if (inArray(listaNumeri,listaNumeriUtente[i])) {
      listaNumeriIndovinati.push(listaNumeriUtente[i])
      punteggio++
    }
  }
  console.log(listaNumeriIndovinati,punteggio);
}, 1000);
// inizio funzioni
function inArray(array,num) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == num) {
      return true;
    }
    else {
      return false
    }
  }
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}
function inRange (num,min,max){
  if (num =>min && num <= max) {
    return true
  }
  else {
    return false
  }
}
