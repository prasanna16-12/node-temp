//modules

const names = require('./name-module');
const sayHi = require('./utils');


// console.log(names);
/**
 * o/p 
 * { 
 * prasanna: 'prasanna', 
 * Rudrang: 'rudrang', 
 * Chirag: 'chirag' 
 * }
 */
// console.log(sayHi);

sayHi('threr');
sayHi(names.prasanna);
sayHi(names.Chirag);
/**
 * o/p
 * hi, threr
 * hi, prasanna
 * hi, chirag
 */