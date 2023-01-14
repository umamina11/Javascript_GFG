/** A string that reads the 3 strings and print the smallest string
 * 
 */
//declaring the strings 
const first = " Football";
const second="chess";
const third= "badmintion";

//find length of the string 
const fstr= first.length;
const sstr= second.length;
const tstr= third.length;
if ( fstr< sstr && fstr< tstr){
    console.log(`${first} is the smallest string`);
} else if( sstr<fstr && sstr<tstr){
    console.log(`${second} is the smallest string`);
}else if (tstr<fstr && tstr< sstr){
    console.log(`${third} is the smallest string`);
}else {
    console.log(" two strings have the same ")
}