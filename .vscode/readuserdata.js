/** read data from user */
const readlineSync = require("readline-sync");  // inasatinf the module
const userName = readlineSync.question("what is user name?")
console.log( "welcome " + userName);