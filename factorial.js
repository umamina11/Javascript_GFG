/**Given a positive integer, N. Find the factorial of N.
  */


const readlineSync=require("readline-sync");

const n=Number( readlineSync.question ("Enter a number"));

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }
    else if(n > 1){
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }
    else{
      return "number has to be positive."
    }  
  }

  answer = factorial(n)
  console.log("Factorial of " + n + " : " + answer);


