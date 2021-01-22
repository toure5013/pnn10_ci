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

var converted_both_phone_number_fixe_number =  pnn10.both_phone_number_fixe_number("08175631");
console.log(converted_both_phone_number_fixe_number);