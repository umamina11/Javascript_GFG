/** read data from user */
const readlineSync = require("readline-sync");  
const userName = readlineSync.question("what is user name?")
console.log( "welcome " + userName); // using concationation
console.log('welcome ${userName}');
