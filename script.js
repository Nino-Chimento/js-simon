var listaNumeri = [];
for (var i = 0; i < 5; i++) {
  listaNumeri.push(getRandomInt(1,50))
}
console.log(listaNumeri);





















function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}
