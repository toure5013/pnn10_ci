const pnn10 =  require("../index");

/**
 * For mobile number (with - or . or space) : 

- xxxxxxxx
- +225xxxxxxxx
- (+225)xxxxxxxx
- (00225)xxxxxxxx
  
- xx.xx.xx.xx
- (+225)xx.xx.xx.xx
- +225xx.xx.xx.xx

- xx xx xx xx
- (+225)xx xx xx xx
- +225 xx xx xx xx

 */

var converted_number =  pnn10.phone_number("(+225)08 - 17 - 56 - 31");
// console.log(converted_number);




/**
 * For fixe number (with - or . or space) :
- xxxxxxxx
- +225xxxxxxxx
- (+225)xxxxxxxx
- (00225)xxxxxxxx
  
- xx.xx.xx.xx
- (+225)xx.xx.xx.xx
- +225xx.xx.xx.xx

- xx xx xx xx
- (+225)xx xx xx xx
- +225 xx xx xx xx

 */

var converted_fixe_number =  pnn10.fixe_number("20 30 09 09");
// console.log(converted_fixe_number);






/**
 * For both fixe number Or mobile Number (with - or . or space) :
- xxxxxxxx
- +225xxxxxxxx
- (+225)xxxxxxxx
- (00225)xxxxxxxx
  
- xx.xx.xx.xx
- (+225)xx.xx.xx.xx
- +225xx.xx.xx.xx

- xx xx xx xx
- (+225)xx xx xx xx
- +225 xx xx xx xx

 */


// let usernumber = "(+225)  08,17,56,31";
// let usernumber = "(+225)  08.17.56.31";
// let usernumber = "(+225)  08 17 56 31";
// let usernumber = "(+225)  08-17-56-31";
// let usernumber = "(+225)  08175631";
// let usernumber = "08-17-56-31";
// let usernumber = "08.17.56.31";
// let usernumber = "08 17 56 31";
let usernumber_pnn8 = "+22570175631";
var converted_both_phone_number_fixe_number =  pnn10.both_phone_number_fixe_number(usernumber_pnn8);
 console.log(converted_both_phone_number_fixe_number);





/**
 * ROLLBACK :::::: For both fixe number Or mobile Number (with - or . or space) :
- xxxxxxxx
- +225xxxxxxxxxx
- (+225)xxxxxxxxxx
- (00225)xxxxxxxxxx
  
- xx.xx.xx.xx.xx
- (+225)xx.xx.xx.xx.xx
- +225xx.xx.xx.xx.xx

- xx xx xx xx xx
- (+225)xx xx xx xx xx
- +225 xx xx xx xx xx

 */

var pnn10_number = "+2250708175631"
var rollback_result = pnn10.rollback(pnn10_number)
console.log(rollback_result);

