var listaNumeri = [];
var listaNumeriUtente = [];
// creo lista numeri da msotrare
for (var i = 0; i < 5; i++) {
  listaNumeri.push(getRandomInt(1,50))
}
alert(listaNumeri);
console.log(inArray(listaNumeri,5));
setTimeout(function () {

  for (var i = 0; i < 5; i++) {
    var numeroUtente = parseInt(prompt("inserisci un numero visto in precedenza "));
    listaNumeriUtente.push(numeroUtente);
    console.log(listaNumeriUtente);
  }
}, 3000);















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
// function quest(){
//   for (var i = 0; i < 5; i++) {
//     var numeroUtente = parseInt(prompt("INserisci un numero visto in precedenza "))
//     var listaNumeriUtente = [];
//     listaNumeriUtente.push(numeroUtente);
//   }
//   return listaNumeriUtente
// }
