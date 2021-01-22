const pnn10 =  require("../index");

/**
 * The number can be this format
 * xxxxxxxx
 * +225xxxxxxxx
 * (+225)xxxxxxxx
 * (00225)xxxxxxxx
 * (00225)xxxxxxxx
 */
var converted_number =  pnn10.phone_number("(+225)08 - 17 - 56 - 31");
console.log(converted_number);


var converted_fixe_number =  pnn10.fixe_number("20 30 09 09");
console.log(converted_fixe_number);