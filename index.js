class Pnn10class {

    phone_number(user_number) {
        var is_number_valid = false;
        var reguex_ivory_coast_number = /^(\(+225\)|\+225|00225|225|)[0-9]{8}$/
        var reg_orange = /^\d{1}[7-9]{1}\d{6}$/;
        var reg_mtn = /^\d{1}[4-6]{1}\d{6}$/;
        var reg_moov = /^\d{1}[1-3]{1}\d{6}$/;


        //convert to string
        var user_number_string = user_number.toString();

        //clean the data by removing (. , - espace)
        var clean_regex = /[.\-*\(\), ]+/;

        while (user_number_string.match(clean_regex)) {
            user_number_string = user_number_string.replace(clean_regex, "")
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
                // console.log("Numero valid ✅")
                is_number_valid = true;
            } else {
                is_number_valid = false;
            }

            var user_number_height_caracter = [];
            var caracter_to_delete;
            if (is_number_valid) {
                // change by regex
                for (var i = 0; i < user_number_string_length; i++) {
                    if (i >= number_of_caracter_to_delete) {
                        user_number_height_caracter.push(user_number_string[i]);
                    } else {
                        // console.log(" delete this number ❌  : " + user_number_string[i])
                        if (i == 0) {
                            caracter_to_delete = user_number_string[i];
                        } else {
                            caracter_to_delete = caracter_to_delete + "" + user_number_string[i];

                        }
                    }
                }
                //delete the indicatifs and keep 8 caracter
                user_final_number = user_number_string.replace(caracter_to_delete, "");
                // console.log(caracter_to_delete);
                // console.log("String  ✅   :" + user_final_number);
            }


        } else if (user_number_string.length == 8) {
            // console.log("Numero valid  ✅  à  8️⃣  chiffre")
            user_final_number = user_number_string.toString();
            is_number_valid = true;

        } else {
            // console.log("Ceci n'est pas un numéro valid   ❌")
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
                // console.log("Ceci n'est pas un numéro ivoirien   ❌")
                is_number_valid = false;
            }
            if (is_number_valid) {
                return {
                    error: false,
                    message: "Le numéro " + user_number_string + " est un numéro " + type_network + " valid  ✅",
                    type_network,
                    number_type: "Mobile",
                    number_converted_national: number_converted_national,
                    number_converted_international: number_converted_international
                }
            }else {
                return {
                    error: true,
                    message: "🛑  Le numéro " + user_number_string + ", n'est pas un numéro valid",
                    type_network,
                    number_converted_national,
                    number_converted_international
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



    fixe_number(user_number) {
        var is_number_valid = false;
        var reguex_ivory_coast_number = /^(\(+225\)|\+225|00225|225|)[0-9]+$/

        var reg_orange = /^[3]{1}[0-9]{1}[8]{1}[0-9]+$/; //pour le cas ou le 3eme chiffre est 8 le premier chiffre est 3
        var reg_orange_1 = /^[1-9]{1}[0-9]{1}[2345679]{1}[0-9]+$/; //3 eme chiffre 2,3,4,5,6,7,9 
        var reg_mtn = /^[3]{1}[0-9]{1}[0]{1}[0-9]+$/; //Troisième chiffre à 0 :  
        var reg_moov = /^[2]{1}[0-9]{1}[8]{1}[0-9]+$/; //debute par 2 et le 3eme chiffre est 8 = 


        //convert to string
        var user_number_string = user_number.toString();

        //clean the data by removing (. , - espace)
        var clean_regex = /[.\-*\(\), ]+/;
        while (user_number_string.match(clean_regex)) {
            user_number_string = user_number_string.replace(clean_regex, "")
        }


        var user_number_string_length = user_number_string.length;
        var user_final_number = ""
        if (user_number_string_length > 8) {
            //check if it's a valid number
            var is_ivory_coast_number = reguex_ivory_coast_number.test(user_number_string)
            var number_of_caracter_to_delete = user_number_string_length - 8;

            if (is_ivory_coast_number) {
                // console.log("Numero valid ✅")
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
                        if (i == 0) {
                            caracter_to_delete = user_number_string[i];
                        } else {
                            caracter_to_delete = caracter_to_delete + "" + user_number_string[i];

                        }
                    }
                }
                //delete the indicatifs and keep 8 caracter
                user_final_number = user_number_string.replace(caracter_to_delete, "");
            }


        } else if (user_number_string.length == 8) {
            // console.log("Numero valid  ✅  à  8️⃣  chiffre")
            user_final_number = user_number_string.toString();
            is_number_valid = true;

        } else {
            // console.log("Ceci n'est pas un numéro valid")
            is_number_valid = false;
        }
        //stock user new number information
        var type_network = ""
        var number_converted_national = ""
        var number_converted_international = ""


        //remove (225, +225, 00225)
        if (is_number_valid) {
            //Appliquer les reguex pour trouver l'operateur
            if (reg_orange.test(user_final_number)) {
                //Un numéro Orange
                type_network = "Orange"
                number_converted_national = "25" + user_final_number
                number_converted_international = "+22525" + user_final_number
            } else if (reg_orange_1.test(user_final_number)) {
                //Un numéro Orange
                type_network = "Orange"
                number_converted_national = "27" + user_final_number
                number_converted_international = "+22527" + user_final_number
            } else if (reg_mtn.test(user_final_number)) {
                //Un numéro MTN
                type_network = "MTN"
                number_converted_national = "25" + user_final_number
                number_converted_international = "+22525" + user_final_number
            } else if (reg_moov.test(user_final_number)) {
                //Un numéro MOOV
                type_network = "MOOV"
                number_converted_national = "21" + user_final_number
                number_converted_international = "+22521" + user_final_number
            } else {
                // console.log("Ceci n'est pas un numéro ivoirien📣🛑")
                is_number_valid = false;
            }
            if (is_number_valid) {
                return {
                    error: false,
                    message: "Le numéro " + user_number_string + " est un numéro " + type_network + " valid  ✅",
                    type_network,
                    number_type: "fixe",
                    number_converted_national: number_converted_national,
                    number_converted_international: number_converted_international
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

    both_phone_number_fixe_number(user_number) {

        var is_number_valid = false;
        var reguex_ivory_coast_number = /^(\(+225\)|\+225|00225|225|)[0-9]+$/

        var reg_orange = /^[3]{1}[0-9]{1}[8]{1}[0-9]+$/; //pour le cas ou le 3eme chiffre est 8 le premier chiffre est 3
        var reg_orange_1 = /^[1-9]{1}[0-9]{1}[2345679]{1}[0-9]+$/; //3 eme chiffre 2,3,4,5,6,7,9 
        var reg_mtn = /^[3]{1}[0-9]{1}[0]{1}[0-9]+$/; //Troisième chiffre à 0 :  
        var reg_moov = /^[2]{1}[0-9]{1}[8]{1}[0-9]+$/; //debute par 2 et le 3eme chiffre est 8 = 


        //convert to string
        var user_number_string = user_number.toString();

        //clean the data by removing (. , - espace)
        var clean_regex = /[.\-*\(\), ]+/;
        while (user_number_string.match(clean_regex)) {
            user_number_string = user_number_string.replace(clean_regex, "")
        }


        var user_number_string_length = user_number_string.length;
        var user_final_number = ""

        if (user_number_string_length > 8) {
            //check if it's a valid number
            var is_ivory_coast_number = reguex_ivory_coast_number.test(user_number_string)
            var number_of_caracter_to_delete = user_number_string_length - 8;

            if (is_ivory_coast_number) {
                // console.log("Numero valid ✅")
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
                        if (i == 0) {
                            caracter_to_delete = user_number_string[i];
                        } else {
                            caracter_to_delete = caracter_to_delete + "" + user_number_string[i];

                        }
                    }
                }
                //delete the indicatifs and keep 8 caracter
                user_final_number = user_number_string.replace(caracter_to_delete, "");
            }
        } else if (user_number_string.length == 8) {
            // console.log("Numero valid  ✅  à  8️⃣  chiffre")
            user_final_number = user_number_string.toString();
            is_number_valid = true;

        } else {
            // console.log("Ceci n'est pas un numéro valid")
            is_number_valid = false;
        }
        //stock user new number information
        var type_network = ""
        var number_converted_national = ""
        var number_converted_international = ""

        if (is_number_valid) {
            //we check here if it's fixed fphone number or mobile phone number
            var regex_fixe_number = /^[2-3]{1}[0-9]{7}$/
            var is_fixe_number = regex_fixe_number.test(user_number_string);
            var final_result;
            if (is_fixe_number) {
                // console.log("Numero valid  ✅  à  8️⃣  chiffre et de type fixe")
                final_result = this.fixe_number(user_number_string);

            } else {
                // console.log("Numero valid  ✅  à  8️⃣  chiffre et de type mobile")
                final_result = this.phone_number(user_number_string);
            }
            return final_result;
        } else {
            // console.log("Ceci n'est pas un numéro ivoirien   ❌")
            return {
                error: true,
                message: "🛑  Le numéro " + user_number_string + ", n'est pas un numéro valid",
                type_network,
                number_converted_national,
                number_converted_international
            }
        }

    }

    rollback(user_number) {
        var is_number_valid = false;
        var reguex_ivory_coast_number = /^(\(+225\)|\+225|00225|225|)[0-9]{10}$/
        var reg_orange = /^\d{1}[7]{1}\d{8}$/;
        var reg_mtn = /^\d{1}[5]{1}\d{8}$/;
        var reg_moov = /^\d{1}[1]{1}\d{8}$/;


        //convert to string
        var user_number_string = user_number.toString();

        //clean the data by removing (. , - espace)
        var clean_regex = /[.\-*\(\), ]+/;

        while (user_number_string.match(clean_regex)) {
            user_number_string = user_number_string.replace(clean_regex, "")
        }

        //check if the number is a valid pnn10 number

        var user_number_string_length = user_number_string.length;

        //stock user number after removing the prefix
        var user_final_number = "";


        //stock user new number information
        var type_network = ""
        var number_converted_national = ""
        var number_converted_international = ""


        if (user_number_string_length > 10) {
            //check if it's a valid number
            var is_ivory_coast_number = reguex_ivory_coast_number.test(user_number_string)
            var number_of_caracter_to_delete = user_number_string_length - 10;

            if (is_ivory_coast_number) {
                // console.log("Numero valid ✅")
                is_number_valid = true;
            } else {
                is_number_valid = false;
            }

            var user_number_height_caracter = [];
            var caracter_to_delete;
            if (is_number_valid) {
                // change by regex
                for (var i = 0; i < user_number_string_length; i++) {
                    if (i >= number_of_caracter_to_delete) {
                        user_number_height_caracter.push(user_number_string[i]);
                    } else {
                        // console.log(" delete this number ❌  : " + user_number_string[i])
                        if (i == 0) {
                            caracter_to_delete = user_number_string[i];
                        } else {
                            caracter_to_delete = caracter_to_delete + "" + user_number_string[i];

                        }
                    }
                }
                //delete the indicatifs and keep 8 caracter
                user_final_number = user_number_string.replace(caracter_to_delete, "");
                // console.log(caracter_to_delete);
                // console.log("String  ✅   :" + user_final_number);
            }
        } else if (user_number_string.length == 10) {
            // console.log("Numero valid  ✅  à  8️⃣  chiffre")
            user_final_number = user_number_string.toString();
            is_number_valid = true;

        } else {
            // console.log("Ceci n'est pas un numéro valid   ❌")
            is_number_valid = false;
        }


        if (is_number_valid) {
            var user_rollback_number = "";
            var number_carac_delete_when_rollback = ""

            for (var i = 0; i < 10; i++) {
                if (i > 1) {
                    if (user_rollback_number.length == 0) {
                        user_rollback_number = user_final_number[i];
                    } else {
                        user_rollback_number = user_rollback_number + "" + user_final_number[i];
                    }
                } else {
                    if (number_carac_delete_when_rollback.length == 0) {
                        number_carac_delete_when_rollback = user_final_number[i];
                    } else {
                        number_carac_delete_when_rollback = number_carac_delete_when_rollback + "" + user_final_number[i];
                    }
                }
            }

            var number_type = "";
            var reg_orange_mobilepnn8 = /^\d{1}[7-9]{1}\d{6}$/;
            var reg_mtn_mobilepnn8 = /^\d{1}[4-6]{1}\d{6}$/;
            var reg_moov_mobilepnn8 = /^\d{1}[1-3]{1}\d{6}$/;

            var reg_orange_fixepnn8 = /^[3]{1}[0-9]{1}[8]{1}[0-9]+$/;
            var reg_orange_fixepnn8_1 = /^[3]{1}[0-9]{1}[0]{1}[0-9]+$/;
            var reg_mtn_fixepnn8 = /^[1-9]{1}[0-9]{1}[2345679]{1}[0-9]+$/;
            var reg_moov_fixepnn8 = /^[2]{1}[0-9]{1}[8]{1}[0-9]+$/;

            // console.log(number_carac_delete_when_rollback);
            //appliquer regex pour verifier la validider du numéro après converstion pnn10

            if (reg_orange.test(user_final_number) && (number_carac_delete_when_rollback == "07" || number_carac_delete_when_rollback == "27")) {
                if (number_carac_delete_when_rollback == "07" && reg_orange_mobilepnn8.test(user_rollback_number)) {
                    //Un numéro Orange
                    type_network = "Orange";
                    number_type = "Mobile"
                    number_converted_national = user_rollback_number
                    number_converted_international = "+225" + user_rollback_number
                } else if (number_carac_delete_when_rollback == "27" &&  (reg_orange_fixepnn8.test(user_rollback_number) ||  reg_orange_fixepnn8_1.test(user_rollback_number))) {
                    //Un numéro Orange
                    type_network = "Orange";
                    number_type = "fixe"
                    number_converted_national = user_rollback_number
                    number_converted_international = "+225" + user_rollback_number
                } else {
                    is_number_valid = false;
                }
            } else if (reg_mtn.test(user_final_number) && (number_carac_delete_when_rollback == "05" || number_carac_delete_when_rollback == "25")) {
                console.log(user_rollback_number);

                if (number_carac_delete_when_rollback == "05" && reg_mtn_mobilepnn8.test(user_rollback_number)) {
                    //Un numéro MTN
                    type_network = "MTN"
                    number_type = "Mobile"
                    number_converted_national = user_rollback_number
                    number_converted_international = "+225" + user_rollback_number
                } else if (number_carac_delete_when_rollback == "25" && reg_mtn_fixepnn8.test(user_rollback_number)) {
                    //Un numéro MTN
                    type_network = "MTN"
                    number_type = "fixe"
                    number_converted_national = user_rollback_number
                    number_converted_international = "+225" + user_rollback_number
                } else {
                    is_number_valid = false;
                }
            } else if (reg_moov.test(user_final_number) && (number_carac_delete_when_rollback == "01" || number_carac_delete_when_rollback == "21")) {
                if (number_carac_delete_when_rollback == "01" && reg_moov_mobilepnn8.test(user_rollback_number)) {
                    //Un numéro MOOV
                    type_network = "MOOV"
                    number_type = "Mobile"
                    number_converted_national = user_rollback_number
                    number_converted_international = "+225" + user_rollback_number
                } else if (number_carac_delete_when_rollback != "21" && reg_moov_fixepnn8.test(user_rollback_number)) {
                    //Un numéro MOOV
                    type_network = "MOOV"
                    number_type = "fixe"
                    number_converted_national = user_rollback_number
                    number_converted_international = "+225" + user_rollback_number
                } else {
                    is_number_valid = false;
                }
            } else {
                // console.log("Ceci n'est pas un numéro ivoirien   ❌")
                is_number_valid = false;
            }


            // console.log(is_number_valid);

            if (is_number_valid) {
                return {
                    error: false,
                    message: "Le rollback à 8 chiffre du numéro " + type_network + " " + user_number_string + " à été effectuer avec succès  ✅",
                    type_network,
                    number_type: number_type,
                    number_converted_national: number_converted_national,
                    number_converted_international: number_converted_international
                }
            } else {
                return {
                    error: true,
                    message: "🛑  Le numéro " + user_number_string + ", n'est pas un numéro valid",
                    type_network,
                    number_converted_national: "",
                    number_converted_international: ""
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