//You are given a string s. You need to find if the string is a panagram or not.
//A panagram contains all the letters of english alphabet at least once.
//Your Task:

//You only need to complete the function isPanagram() that takes s as parameter and returns either true or false. (the driver's code print 1 if the returned value is true, otherwise 0)

// function only 


class Solution {
    isPanagram(str){
       //code here
       let strArr = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  for (let i = 0; i < alphabet.length; i++) {
    if(strArr.indexOf(alphabet[i]) < 0){
      return false;
    }
  }
  return true;
    }
}