//Given a string S, check if it is palindrome or not.

//Your Task:
//You don't need to read input or print anything. Complete the function isPalindrome()which accepts string S and returns an integer value 1 or 0.




'use strict';
ProcessingInstruction.stdin.resume();
ProcessingInstruction.stdin.setEncoding('utf-8');
 
let inputString='';
let currentLine=0;

ProcessingInstruction.stdin.on('data',inputstdin=>{
    inputString += inputstdin;
});

ProcessingInstruction.stdin.on('end',_=>{
    inputString = inputString.trim().split('\n').map(string=>{
        return string.trim();
    });
    main();
});
function readLine(){
    return inputString[currentLine++];
}

function main(){
    
}

let count = 0;

let arr = S.split('');

let str = arr.reverse();

for(let i = 1;i<=arr.length;i++){

    if(arr[arr.length-(i)] == (str[i -1])){

        count++;

    }

}

if(count == arr.length){

    return 1;

}

else{

    return 0;

}