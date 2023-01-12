/**
 * 
 * 
 */
// Tradtitional method using if- else statement
const total_marks= 39;
if(total_marks<40){
    console.log("Fail");
}else
{
    console.log("Pass");}


    //using ternary operator
    (total_marks< 40)? console.log("need to work"): console.log("u have passed the exam")

    const result= total_marks< 40?"work hard" : "great job"
    console.log(result);