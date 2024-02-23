const pokemon = require('pokemon');
const clc = require('cli-color');

console.log(clc.black.bgYellow(pokemon.getName(25)), clc.yellow.bgRed(pokemon.getName(4)), clc.blue.bgWhite(pokemon.getName(7)), clc.green.bgBlue(pokemon.getName(1)));

console.log(pokemon.random());
