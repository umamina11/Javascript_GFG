// While loop and do while loop 
let i=0;
/** 
while (i<10){     // ends in infinite loop 

    console.log(i);
}
**/

while (i<10){     

    console.log(i);
    i=i+1;               // increase the value of i it will end when i=10
}




/**
 * Do while loop
 * SYNTAX
 * do{
 * body }
 * while (condition) 
 */
let p=0;
do{
    console.log(p +" hi");
    p++;
}while(p<10)