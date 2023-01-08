/** read data from user */
const readlineSync = require('readline-sync');  
const userName = readlineSync.question("what is user name?")
console.log(userName);
const userAge = 21;

console.log( "welcome " + userName); // using concationation
console.log('welcome ${userName}');

const year_of_birth = 2001 + Number(userAge);

console.log('my birth year is ${year_of_birth}' );



