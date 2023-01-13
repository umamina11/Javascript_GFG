/** using the simple else if staements to print the grades 
 * 
 */



const marks_obtained = 89;

if(marks_obtained<40){
    console.log("need to work hard");
}
else if(marks_obtained<60){
    console.log("YOu can do much better");
}
else if(marks_obtained<75){
    console.log("better");
}else if ( marks_obtained< 85){
    console.log("good");

}else if( marks_obtained<95){
console.log("excellent");
}
else{
    console.log("Ammazinf"); 
}

/** using the ternary operators */
const result = marks_obtained < 40 ? " bad " : marks_obtained < 60 ? " better " : marks_obtained < 75 ? " good " : 
marks_obtained < 85 ? " very good " : marks_obtained < 95 ? " excellent " : "genius";
console.log(result);