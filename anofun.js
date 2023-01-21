/**
 * Anonymous functions 
 * which have no identity
 * 
 */

let anonymousFunction=function(){
    console.log("hii there");
}


console.log(typeof anonymousFunction);

anonymousFunction();                           // we can acess the functions beffore the initialisation but not 
                                               // in case of anonymous function we need to initialise it first and then access it otherwise it will give u an error
                                               