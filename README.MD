## PNN10

  The number can be this format
 * xxxxxxxx
 * +225xxxxxxxx
 * (+225)xxxxxxxx
 * (00225)xxxxxxxx
 * (00225)xxxxxxxx


<code>
const pnn10 =  require("./index");


var number = "(+225) 44 17 56 31"
var converted_number = await pnn10.phone_number(number);
</code>