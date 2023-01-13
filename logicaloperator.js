/** logial operators: constional statement 
 * 1. OR= ||
 * 2. AND= &&  here all conditions need to be true then it will give the nested message and action otherwise it will move to check other condition 
 * 3. NOT= !
 * 4. NULLISH COALESCING= ??
 * 
 */

const phy=90;
const math= 97;
const chem= 80;
const bio= 70;

/** student need 85 above marks in every subject to get into the course
 * write the conditonal statement to check whether student is eligible or not
here you will use the AND operator  
*/
if( phy>85 && math> 85 && chem > 85){
    console.log("Student is eligible");
}else 
console.log("Student is not eligible");


/**marks above 40 in all subjects (english , maths, science, hindi, social science) then 
 * the student will get promoted to the next class else not
 * write this code using the OR operator
 * 
 */
const eng= 92;
const mat= 33;
const sci= 71;
const hin= 60;
const soc= 20;
 if( eng> 40 || mat> 40 || sci> 40 || hin>40 || soc>40){
    console.log("congralutations you make it ");
 }else{
console.log(" sorry try next time work hard to make it  ")
 }
