// What is NPM? Node Package Manager

// What is NPM for? To download packages created by other developers to make your life easier or more fun

const pokemon = require('pokemon');
const clc = require('cli-color');

console.log(pokemon.random());

console.log(clc.black.bgYellow(pokemon.getName(25)), clc.yellow.bgRed(pokemon.getName(4)), clc.blue.bgWhite(pokemon.getName(7)), clc.green.bgBlue(pokemon.getName(1)));
