/** 
 * try-catch block 
 * try{
 * code
 * } catch(error){
 * console.log(error);
 * }
 */

const userName =" UMA ";
try {
    someFunction();
    console.log("myname");
}catch(error){
    console.log(error.name);
    console.log(error);
}

console.log(userName);