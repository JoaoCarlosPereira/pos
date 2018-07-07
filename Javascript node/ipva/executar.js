var GetCarro = require('./carro.js');
var GetFormula = require('./formula.js');

console.log(GetFormula.generator(GetCarro.generator('Volks', 'Fox', 30000, 2010, false)));
console.log('==========================================================================');
console.log(GetFormula.generator(GetCarro.generator('Volks', 'Gol', 20000, 1980, false)));

