/** 
 * fubctions prevents the number of developers to write the piece of code over and over again 
 * SYNTAX
 * function name_of_the_function(){
 * body
 * }
 * 
 * // calling the function 
 * name_of_the _function();
 */


// printing the greating message using the function 
function greetmessage(){                                                             // this will allocate memory to this fucntion that whenever the function calls this piece of code need to be executed
    console.log("hello coders... keeping going u all are doing good ");
}

const num=5;
if(num ===5){
    greetmessage();
}

greetmessage();

// write a function which can print the sum of the all the umber whihc are there in foor loop

function calculateSum(min,max){
    for(let i=1; i<=min; i++){
        for(let j=1; j<=max; j++){
            console.log(`Sum ${i+j}`)
        }
}
}
calculateSum(1,10);



