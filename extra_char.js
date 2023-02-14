//Given two strings which are of lengths n and n+1. The second string contains all the character of the first string, but there is one extra character. Your task to find the extra character in the second string. 

//Your Task:

//You only need to complete the function extraChar() that takes s1 and s2 as parameters and returns that extra character. 


'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputString='';
let currentLine=0;

process.stdin.on('data', inputStdin=>{
    inputString+=inputStdin;
});

process.stdin.on('end',_=>{
    inoutString=inputString.trim().split('\n').map(string=>{
        return string.trim();
    });
    main()
});

function readLine(){
    return inputString[currentLine++];
}
function main(){
    let t= parseInt(readLine());
    let i=0;
    for(; i<t;i++){
        let str1=readLine();
        let str2=readLine();
        let obj=new Solution();
        console.log(obj.extraChar(str,Str2));
    }
}
//User function Template for javascript

class Solution {
    extraChar(s1, s2) {
        // write your code here
          let result = 0;
  for (let i = 0; i < s1.length; i++) {
    result ^= s1.charCodeAt(i);
    result ^= s2.charCodeAt(i);
  }
  result ^= s2.charCodeAt(s2.length - 1);
  return String.fromCharCode(result);
}
    }