$(document).ready(function() {
    
    // This is the game selection drop down area

    // Added This (ttracy)
    $(".leagueForm").hide();
    $(".freeHidden").hide();
    $(".team_choice").hide();
    $(".cont_newteam").hide();
    $(".smashForm").hide();

    $(".game_choice").change(function() {
        let value = $(".game_choice").val();
        if (value == "league") {
            $(".leagueForm").slideDown();
            $(".smashForm").slideUp();
            $(".smashNewTeam").slideUp();
            $(".smashTeamChoice").slideUp();
            $(".smashFree").css("background-color", "#efefef")
            $(".smashFree").css("color", "#004f67ff")
            $(".smashOld").css("background-color", "#efefef")
            $(".smashOld").css("color", "#004F67")
            $(".smashAdd").css("background-color", "#efefef")
            $(".smashAdd").css("color", "#004F67")
        }
        if (value == "smash") {
            $(".leagueForm").slideUp();
            $(".smashForm").slideDown();
            $(".cont_newteam").slideUp();
            $(".freeHidden").slideUp();
            $(".team_choice").slideUp();
            $(".free").css("background-color", "#efefef")
            $(".old").css("background-color", "#efefef")
            $(".add").css("background-color", "#efefef")
            $(".topMain").css("background-color", "")
            $(".jungleMain").css("background-color", "")
            $(".midMain").css("background-color", "")
            $(".adcMain").css("background-color", "")
            $(".supportMain").css("background-color", "")
            $(".topSub").css("background-color", "")
            $(".jungleSub").css("background-color", "")
            $(".midSub").css("background-color", "")
            $(".adcSub").css("background-color", "")
            $(".supportSub").css("background-color", "")
        }
        if (value == ""){
            $(".leagueForm").slideUp();
            $(".smashForm").slideUp();
            $(".smashNewTeam").slideUp();
            $(".smashTeamChoice").slideUp();
            $(".smashFree").css("background-color", "#efefef")
            $(".smashFree").css("color", "#004f67ff")
            $(".smashOld").css("background-color", "#efefef")
            $(".smashOld").css("color", "#004F67")
            $(".smashAdd").css("background-color", "#efefef")
            $(".smashAdd").css("color", "#004F67")
            $(".cont_newteam").slideUp();
            $(".freeHidden").slideUp();
            $(".team_choice").slideUp();
            $(".free").css("background-color", "#efefef")
            $(".old").css("background-color", "#efefef")
            $(".add").css("background-color", "#efefef")
            $(".topMain").css("background-color", "")
            $(".jungleMain").css("background-color", "")
            $(".midMain").css("background-color", "")
            $(".adcMain").css("background-color", "")
            $(".supportMain").css("background-color", "")
            $(".topSub").css("background-color", "")
            $(".jungleSub").css("background-color", "")
            $(".midSub").css("background-color", "")
            $(".adcSub").css("background-color", "")
            $(".supportSub").css("background-color", "")
        }
    });
    
    // when user clicks on "Free agent"
    $(".free").click(function() {
        $(".freeHidden").slideDown();
        $(".team_choice").slideUp();
        $(".cont_newteam").slideUp();
        $(".free").css("background-color", "#EDC164")
        $(".old").css("background-color", "#efefef")
        $(".add").css("background-color", "#efefef")

    });

    // when user clicks on "Already Have a Team"
    $(".old").click(function() {
        $(".team_choice").slideDown();
        $(".freeHidden").slideUp();
        $(".cont_newteam").slideUp();
        $(".free").css("background-color", "#efefef")
        $(".old").css("background-color", "#EDC164")
        $(".add").css("background-color", "#efefef")
    });

    // when user clicks on "Add New Team"
    $(".add").click(function() {
        $(".cont_newteam").slideDown();
        $(".freeHidden").slideUp();
        $(".team_choice").slideUp();
        $(".free").css("background-color", "#efefef")
        $(".old").css("background-color", "#efefef")
        $(".add").css("background-color", "#EDC164")
    });

    // This is the league drop down scripts

    $(".smashFree").click(function() {
        $(".smashNewTeam").slideUp();
        $(".smashTeamChoice").slideUp();
        $(".smashFree").css("background-color", "#EDC164")
        $(".smashFree").css("color", "#004f67ff")
        $(".smashOld").css("background-color", "#efefef")
        $(".smashOld").css("color", "#004F67")
        $(".smashAdd").css("background-color", "#efefef")
        $(".smashAdd").css("color", "#004F67")
    });

    $(".smashOld").click(function() {
        $(".smashNewTeam").slideUp();
        $(".smashTeamChoice").slideDown();
        $(".smashFree").css("background-color", "#efefef")
        $(".smashFree").css("color", "#004F67")
        $(".smashOld").css("background-color", "#EDC164")
        $(".smashOld").css("color", "#004f67ff")
        $(".smashAdd").css("background-color", "#efefef")
        $(".smashAdd").css("color", "#004F67")
    });

    $(".smashAdd").click(function() {
        $(".smashNewTeam").slideDown();
        $(".smashTeamChoice").slideUp();
        $(".smashFree").css("background-color", "#efefef")
        $(".smashFree").css("color", "#004F67")
        $(".smashOld").css("background-color", "#efefef")
        $(".smashOld").css("color", "#004F67")
        $(".smashAdd").css("background-color", "#EDC164")
        $(".smashAdd").css("color", "#004f67ff")
    });

    // mark the main position as the selected one || The value will be changed to one to signify the selection of that option
    
    $(".topMain").click(function() {
        $(".topMain").css("background-color", "#EDC164")
        $(".topMain").val(1)
        $(".jungleMain").css("background-color", "")
        $(".jungleMain").val(0)
        $(".midMain").css("background-color", "")
        $(".midMain").val(0)
        $(".adcMain").css("background-color", "")
        $(".adcMain").val(0)
        $(".supportMain").css("background-color", "")
        $(".supportMain").val(0)
    });
    $(".jungleMain").click(function() {
        $(".topMain").css("background-color", "")
        $(".topMain").val(0)
        $(".jungleMain").css("background-color", "#EDC164")
        $(".jungleMain").val(1)
        $(".midMain").css("background-color", "")
        $(".midMain").val(0)
        $(".adcMain").css("background-color", "")
        $(".adcMain").val(0)
        $(".supportMain").css("background-color", "")
        $(".supportMain").val(0)
    });
    $(".midMain").click(function() {
        $(".topMain").css("background-color", "")
        $(".jungleMain").css("background-color", "")
        $(".midMain").css("background-color", "#EDC164")
        $(".adcMain").css("background-color", "")
        $(".supportMain").css("background-color", "")
    });
    $(".adcMain").click(function() {
        $(".topMain").css("background-color", "")
        $(".jungleMain").css("background-color", "")
        $(".midMain").css("background-color", "")
        $(".adcMain").css("background-color", "#EDC164")
        $(".supportMain").css("background-color", "")
    });
    $(".supportMain").click(function() {
        $(".topMain").css("background-color", "")
        $(".jungleMain").css("background-color", "")
        $(".midMain").css("background-color", "")
        $(".adcMain").css("background-color", "")
        $(".supportMain").css("background-color", "#EDC164")
    });

    // Secondary positions

    $(".topSub").click(function() {
        $(".topSub").css("background-color", "#EDC164")
        $(".topSub").val(0)
        $(".jungleSub").css("background-color", "")
        $(".jungleSub").val(1)
        $(".midSub").css("background-color", "")
        $(".midSub").val(0)
        $(".adcSub").css("background-color", "")
        $(".adcSub").val(0)
        $(".supportSub").css("background-color", "")
        $(".supportSub").val(0)
    });
    $(".jungleSub").click(function() {
        $(".topSub").css("background-color", "")
        $(".topSub").val(0)
        $(".jungleSub").css("background-color", "#EDC164")
        $(".jungleSub").val(1)
        $(".midSub").css("background-color", "")
        $(".midSub").val(0)
        $(".adcSub").css("background-color", "")
        $(".adcSub").val(0)
        $(".supportSub").css("background-color", "")
        $(".supportSub").val(0)
    });
    $(".midSub").click(function() {
        $(".topSub").css("background-color", "")
        $(".topSub").val(0)
        $(".jungleSub").css("background-color", "")
        $(".jungleSub").val(0)
        $(".midSub").css("background-color", "#EDC164")
        $(".midSub").val(0)
        $(".adcSub").css("background-color", "")
        $(".adcSub").val(0)
        $(".supportSub").css("background-color", "")
        $(".supportSub").val(0)
    });
    $(".adcSub").click(function() {
        $(".topSub").css("background-color", "")
        $(".jungleSub").css("background-color", "")
        $(".midSub").css("background-color", "")
        $(".adcSub").css("background-color", "#EDC164")
        $(".supportSub").css("background-color", "")
    });
    $(".supportSub").click(function() {
        $(".topSub").css("background-color", "")
        $(".jungleSub").css("background-color", "")
        $(".midSub").css("background-color", "")
        $(".adcSub").css("background-color", "")
        $(".supportSub").css("background-color", "#EDC164")
    });

    // This is the smash bros side of the js

    

    // check to see if user agrees to liability waiver or not
    $(".agree").click(function() {
        let checked = $('.agree').prop('checked');
        if (checked) {
            $(".disagree").prop('checked', false);
            $(".submit").show();
            $("form").css("padding-bottom", "1%")
        }
    });
    $(".disagree").click(function() {
        let checked = $('.disagree').prop('checked');
        if (checked) {
            $(".agree").prop('checked', false);
            $(".submit").hide();
            $("form").css("padding-bottom", "3.5%")
        }
    });

    // The total calculation
    let total = 15
    $(".lunch").change(function() {
        let value = $(".lunch").val();
        if (value == "1") {
            total = total + 5
            $(".total").text("$" + total + ".00")
        }
        if (value == "2") {
            total = total - 5
            if (total < 15) {
                total = 15
            }
            $(".total").text("$" + total + ".00")
        }
    });
    $(".dinner").change(function() {
        let value = $(".dinner").val();
        if (value == "1") {
            total = total + 7
            $(".total").text("$" + total + ".00")
        }
        if (value == "2") {
            total = total - 7
            if (total < 15) {
                total = 15
            }
            $(".total").text("$" + total + ".00")
        }
    });

    // Waiver name fill in
    let firstName;
    let lastName;

    $(".first").keyup(function() {
        let signature = $(".first").val() + " " + $(".last").val();
        $(".signing").text(signature);
    });

    $(".last").keyup(function() {
        let signature = $(".first").val() + " " + $(".last").val();
        $(".signing").text(signature);
    });


    // change paypal button
    let ptotal = calcPaypalTotal();
    $(".lunch").change(function() {
        ptotal = calcPaypalTotal(); // get the total
        changePayPalButton(ptotal); // change the button
        updateTotal(); // change the total amount at the bottom of the form
    });
    $(".dinner").change(function() {
        ptotal = calcPaypalTotal();
        changePayPalButton(ptotal);
        updateTotal();
    });

    function updateTotal() {
        let totalPrice = "$" + calcPaypalTotal();
        $(".total").text(totalPrice);
    }

    function changePayPalButton(paypalTotal) {

        let str15 = "-----BEGIN PKCS7-----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-----END PKCS7-----";
        let str20 = "-----BEGIN PKCS7-----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-----END PKCS7-----";
        let str22 = "-----BEGIN PKCS7-----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-----END PKCS7-----";
        let str27 = "-----BEGIN PKCS7-----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-----END PKCS7-----";

        if (paypalTotal == 15.00) {
            $(".paypalcode").val(str15);
        }

        if (paypalTotal == 20.00) {
            $(".paypalcode").val(str20);
        }

        if (paypalTotal == 22.00) {
            $(".paypalcode").val(str22);
        }

        if (paypalTotal == 27.00) {
            $(".paypalcode").val(str27);
        }
    }


    function calcPaypalTotal() {
        let price = 15.00;

        if ($(".lunch").val() == "1") {
            price += 5.00;
        }

        if ($(".dinner").val() == "1") {
            price += 7.00;
        }
        price = parseFloat(price).toFixed(2);
        console.log(price);
        return(price);
    }
    
    
});