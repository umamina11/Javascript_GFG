/** 
 * NESTED FOR LOOP  
 */

//printing the mathematical tables 
// 1 * 1 = 1
// 1 * 2 = 2
//.
//.
// 2 * 1 = 2
// 2 * 2 = 4
// .
// .
// 3 * 1 = 3
// 3 * 2 = 6


for( let i=1; i<= 10; i++){
    for( let j= 1; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
    console.log("--------------")
}
