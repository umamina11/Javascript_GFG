//You are given a string s consisting of multiple words. You need to count the total words in the string. Words are separated by a single space.
//Note: It is guaranteed that the last character of the given string is not a white space.

//Your Task:

//You only need to complet the function countWords() that takes s as parameter and returns the count of words in the string. 

//function only 

class Solution {
    countWords(str) {
        // write your code here
        const arr = str.split(' ');

  return arr.filter(word => word !== '').length;
    }
}