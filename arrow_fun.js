/** arrow fucntion = syntatical sugar over regular functions
 * represenent by =>
*/
// normal function defining and calling
const calculateSum=function(x,y){
    return x+y;
}

console.log(calculateSum(12,4));


// function definiing using arrow and then calling it using the console.log
const calculateaddition=(x,y)=>{
    return x+y;
}

console.log(calculateaddition(11,9));
// or we can define the function directly. for instance
const calculateSub=(x,y)=> x-y;

console.log(calculateSub(12,2));


//  subtracting the number only if the first number(x) is greater than the second number (y)
const calSub= (x,y)=> {
    if(x>y){
        return x-y;
    }
    else console.log("first number should be greater than the second number")
}
 console.log(calSub(1, 9));
 console.log(calSub(11, 5));
