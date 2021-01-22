const pnn10 =  require("./index");

/**
 * The number can be this format
 * xxxxxxxx
 * +225xxxxxxxx
 * (+225)xxxxxxxx
 * (00225)xxxxxxxx
 * (00225)xxxxxxxx
 */
var converted_number = await pnn10.phone_number("(+225) 44 17 56 31");

var converted_number = await pnn10.fixe_number("(+225) 44 17 56 31");