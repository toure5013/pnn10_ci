class Pnn10class {

      pnn10(user_number) {
        var is_number_valid = false;
        var reguex_ivory_coast_number = /^(\(+225\)|\+225|00225|225|)[0-9]{8}$/
        var reg_orange = /^\d{1}[7-9]{1}\d{6}$/;
        var reg_mtn = /^\d{1}[4-6]{1}\d{6}$/;
        var reg_moov = /^\d{1}[1-3]{1}\d{6}$/;


        
        //convert to string
        var user_number_string = user_number.toString();

        //clean the data by removing (. , - espace)
        while(user_number_string.includes("-")){
            user_number_string =  user_number_string.replace("-", "")
        }
        while(user_number_string.includes(" ")){
            user_number_string =  user_number_string.replace(" ", "")
            console.log(user_number_string);
        }
        while(user_number_string.includes(".")){
            user_number_string =  user_number_string.replace(".", "")
        }
        while(user_number_string.includes(",")){
            user_number_string =  user_number_string.replace(".", "")
        }
        while(user_number_string.includes("(")){
            user_number_string =  user_number_string.replace("(", "")
        }
        while(user_number_string.includes(")")){
            user_number_string =  user_number_string.replace(")", "")
        }


        var user_number_string_length = user_number_string.length;

        //stock user number after removing the prefix
        var user_final_number = "";


        //stock user new number information
        var type_network = ""
        var number_converted_national = ""
        var number_converted_international = ""


        if (user_number_string_length > 8) {
            //check if it's a valid number
            var is_ivory_coast_number = reguex_ivory_coast_number.test(user_number_string)
            var number_of_caracter_to_delete = user_number_string_length - 8;

            if (is_ivory_coast_number) {
                console.log("Numero valid ✅")
                is_number_valid = true;
            } else {
                is_number_valid = false;
            }

            var user_number_height_caracter = [];
            var caracter_to_delete;
            if (is_number_valid) {
                for (var i = 0; i < user_number_string_length; i++) {
                    if (i >= number_of_caracter_to_delete) {
                        user_number_height_caracter.push(user_number_string[i]);
                    } else {
                        console.log(" ❌  : " + user_number_string[i])
                        if (i == 0) {
                            caracter_to_delete = user_number_string[i];
                        } else {
                            caracter_to_delete = caracter_to_delete + "" + user_number_string[i];

                        }
                    }
                }
                //delete the indicatifs and keep 8 caracter
                user_final_number = user_number_string.replace(caracter_to_delete, "");
                console.log(caracter_to_delete);
                console.log("String  ✅   :" + user_final_number);
            }


        } else if (user_number_string.length == 8) {
            console.log("Numero valid  ✅  à  8️⃣  chiffre")
            user_final_number = user_number_string.toString();
            is_number_valid = true;

        } else {
            console.log("Ceci n'est pas un numéro valid")
            is_number_valid = false;
        }


        if (is_number_valid) {
            //Appliquer les reguex pour trouver l'operateur
            if (reg_orange.test(user_final_number)) {
                //Un numéro Orange
                type_network = "Orange"
                number_converted_national = "07" + user_final_number
                number_converted_international = "+22507" + user_final_number
            } else if (reg_mtn.test(user_final_number)) {
                //Un numéro MTN
                type_network = "MTN"
                number_converted_national = "05" + user_final_number
                number_converted_international = "+22505" + user_final_number
            } else if (reg_moov.test(user_final_number)) {
                //Un numéro MOOV
                type_network = "MOOV"
                number_converted_national = "01" + user_final_number
                number_converted_international = "+22501" + user_final_number
            } else {
                console.log("Ceci n'est pas un numéro ivoirien📣🛑")
                is_number_valid = false;
            }
            if (is_number_valid) {
                return {
                    error: false,
                    message: "Le numéro " + user_number_string + " est numéro " + type_network + " valid  ✅",
                    type_network,
                    number_converted_national :  number_converted_national,
                    number_converted_international :   number_converted_international
                }
            }

        } else {
            return {
                error: true,
                message: "🛑  Le numéro " + user_number_string + ", n'est pas un numéro valid",
                type_network,
                number_converted_national,
                number_converted_international
            }
        }
    }
}


module.exports = new Pnn10class()
