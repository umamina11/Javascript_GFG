// aaray- sort method : arrange in a pattern 
// exmaple - ascending, descidning, alphabetical etc

const fruits=["mango","apple","kiwi","jackfruit","cherry"];
fruits.sort();

console.log(fruits);


const numbers=[2,4,6,2,6,0,23,7,9];
numbers.sort();                                    // if we do like this it will change the number in the unicode and then arrange them according that why direct sort method is not used in the numbers method

console.log(numbers);

//in ascending order
function sortInAscendingOrder(a,b){
    return a-b;
}
 numbers.sort(sortInAscendingOrder);
 console.log(numbers);

 //in descending order

 function sortInDescendingOrder(a,b){
    return b-a;
}
 numbers.sort(sortInDescendingOrder);
 console.log(numbers);
