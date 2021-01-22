## PNN10

  The number can be this format
 * xxxxxxxx
 * +225xxxxxxxx
 * (+225)xxxxxxxx
 * (00225)xxxxxxxx
 * (00225)xxxxxxxx


<code>
const pnn10 =  require("./index");
</code>
<br>

<code>
    var number = "(+225) 44 17 56 31";
</code>
<br>

<code>
    var converted_number = await pnn10.phone_number(number);
</code>