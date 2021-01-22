const pnn10 =  require("./index");

/**
 * The number can be this format
 * xxxxxxxx
 * +225xxxxxxxx
 * (+225)xxxxxxxx
 * (00225)xxxxxxxx
 * (00225)xxxxxxxx
 */
var converted_number = await pnn10.pnn10("(+225) 44 17 56 31");