// Given two strings a and b consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, act and tac are an anagram of each other.

//Note :- If the strings are anagrams you have to return True or else return False
//Your Task:
//You don't need to read input or print anything. Your task is to complete the function isAnagram() which takes the string a and string b as input parameter and check if the two strings are an anagram of each other. The function returns true if the strings are anagram else it returns false.
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
        let input_line = readLine().split(' ');
        let a= input_line[0];
        let b= input_line[1];
        let obj= new Solution();
        if(obj.isAnagram(a,b))
        console.log("YES");
        else
        console.log("NO");
    }
}
/**
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
*/
 
class Solution 
{
    //Function is to check whether two strings are anagram of each other or not.
    isAnagram(a, b)
    // code here
    {
         if (a.length !== b.length) {
    return false;
  }
  let charCounts = {};
  for (let i = 0; i < a.length; i++) {
    let char = a.charAt(i);
    if (charCounts[char]) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }
  for (let i = 0; i < b.length; i++) {
    let char = b.charAt(i);
    if (!charCounts[char]) {
      return false;
    }
    charCounts[char]--;
  }
  return true;
}


        
    }

