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
    console.log(error.name);// tell you the typr of error occured
    console.log(error.message);// show u message along with error like here "somefunction not defined"
    console.log(error.stack);    ///define the full location and descritpion about error
    console.log(error);
}finally{                            /// this will be execuated every time irrescpective try block or catch block runs
console.log(" finally executed");
}

console.log(userName);