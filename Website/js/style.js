$(document).ready(function() {
    
    // This is the game selection drop down area

    // Added This (ttracy)
    $(".leagueForm").hide();
    $("#freeHidden").hide();
    $(".team_choice").hide();
    $(".cont_newteam").hide();

    $(".game_choice").change(function() {
        let value = $(".game_choice").val();
        if (value == "league") {
            $(".leagueForm").slideDown();
            $(".smashForm").slideUp();
        }
        if (value == "smash") {
            $(".leagueForm").slideUp();
            $(".smashForm").slideDown();
        }
        if (value == ""){
            $(".leagueForm").slideUp();
            $(".smashForm").slideUp();
        }
    });
    
    // This is the league drop down scripts

    $(".free").click(function() {
        $("#placeholder").css("display", "block")
        $("#add").css("display", "none")
        $("#current").css("display", "none")
        $(".free").css("background-color", "#A1D7DA")
        $(".free").css("color", "#004f67ff")
        $(".old").css("background-color", "#fff")
        $(".old").css("color", "black")
        $(".add").css("background-color", "#fff")
        $(".add").css("color", "black")
    });

    $(".old").click(function() {
        $("#placeholder").css("display", "none")
        $("#current").css("display", "block")
        $("#add").css("display", "none")
        $(".free").css("background-color", "#fff")
        $(".free").css("color", "black")
        $(".old").css("background-color", "#A1D7DA")
        $(".old").css("color", "#004f67ff")
        $(".add").css("background-color", "#fff")
        $(".add").css("color", "black")
    });

    $(".add").click(function() {
        $("#placeholder").hide()
        $("#current").css("display", "none")
        $("#add").css("display", "block")
        $(".free").css("background-color", "#fff")
        $(".free").css("color", "black")
        $(".old").css("background-color", "#fff")
        $(".old").css("color", "black")
        $(".add").css("background-color", "#A1D7DA")
        $(".add").css("color", "#004f67ff")
    });

    // mark the main position as the selected one || The value will be changed to one to signify the selection of that option
    
    $(".topMain").click(function() {
        $(".topMain").css("background-color", "#A1D7DA")
        $(".topMain").val(1)
        $(".topMain").css("color", "#004f67ff")
        $(".jungleMain").css("background-color", "")
        $(".jungleMain").val(0)
        $(".jungleMain").css("color", "black")
        $(".midMain").css("background-color", "")
        $(".midMain").val(0)
        $(".midMain").css("color", "black")
        $(".adcMain").css("background-color", "")
        $(".adcMain").val(0)
        $(".adcMain").css("color", "black")
        $(".supportMain").css("background-color", "")
        $(".supportMain").val(0)
        $(".supportMain").css("color", "black")
    });
    $(".jungleMain").click(function() {
        $(".topMain").css("background-color", "")
        $(".topMain").val(0)
        $(".topMain").css("color", "black")
        $(".jungleMain").css("background-color", "#A1D7DA")
        $(".jungleMain").val(1)
        $(".jungleMain").css("color", "#004f67ff")
        $(".midMain").css("background-color", "")
        $(".midMain").val(0)
        $(".midMain").css("color", "black")
        $(".adcMain").css("background-color", "")
        $(".adcMain").val(0)
        $(".adcMain").css("color", "black")
        $(".supportMain").css("background-color", "")
        $(".supportMain").val(0)
        $(".supportMain").css("color", "black")
    });
    $(".midMain").click(function() {
        $(".topMain").css("background-color", "")
        $(".topMain").val(0)
        $(".jungleMain").css("background-color", "")
        $(".jungleMain").val(0)
        $(".midMain").css("background-color", "#A1D7DA")
        $(".midMain").val(0)
        $(".adcMain").css("background-color", "")
        $(".adcMain").val(0)
        $(".supportMain").css("background-color", "")
        $(".supportMain").val(0)
    });
    $(".adcMain").click(function() {
        $(".topMain").css("background-color", "")
        $(".topMain").css("color", "black")
        $(".jungleMain").css("background-color", "")
        $(".jungleMain").css("color", "black")
        $(".midMain").css("background-color", "")
        $(".midMain").css("color", "black")
        $(".adcMain").css("background-color", "#A1D7DA")
        $(".adcMain").css("color", "#004f67ff")
        $(".supportMain").css("background-color", "")
        $(".supportMain").css("color", "black")
    });
    $(".supportMain").click(function() {
        $(".topMain").css("background-color", "")
        $(".topMain").css("color", "black")
        $(".jungleMain").css("background-color", "")
        $(".jungleMain").css("color", "black")
        $(".midMain").css("background-color", "")
        $(".midMain").css("color", "black")
        $(".adcMain").css("background-color", "")
        $(".adcMain").css("color", "black")
        $(".supportMain").css("background-color", "#A1D7DA")
        $(".supportMain").css("color", "#004f67ff")
    });

    // Secondary positions

    $(".topSub").click(function() {
        $(".topSub").css("background-color", "#A1D7DA")
        $(".topSub").val(0)
        $(".topSub").css("color", "#004f67ff")
        $(".jungleSub").css("background-color", "")
        $(".jungleSub").val(1)
        $(".jungleSub").css("color", "black")
        $(".midSub").css("background-color", "")
        $(".midSub").val(0)
        $(".midSub").css("color", "black")
        $(".adcSub").css("background-color", "")
        $(".adcSub").val(0)
        $(".adcSub").css("color", "black")
        $(".supportSub").css("background-color", "")
        $(".supportSub").val(0)
        $(".supportSub").css("color", "black")
    });
    $(".jungleSub").click(function() {
        $(".topSub").css("background-color", "")
        $(".topSub").val(0)
        $(".topSub").css("color", "black")
        $(".jungleSub").css("background-color", "#A1D7DA")
        $(".jungleSub").val(1)
        $(".jungleSub").css("color", "#004f67ff")
        $(".midSub").css("background-color", "")
        $(".midSub").val(0)
        $(".midSub").css("color", "black")
        $(".adcSub").css("background-color", "")
        $(".adcSub").val(0)
        $(".adcSub").css("color", "black")
        $(".supportSub").css("background-color", "")
        $(".supportSub").val(0)
        $(".supportSub").css("color", "black")
    });
    $(".midSub").click(function() {
        $(".topSub").css("background-color", "")
        $(".topMain").val(0)
        $(".topMain").css("color", "black")
        $(".jungleSub").css("background-color", "")
        $(".jungleSub").val(0)
        $(".jungleSub").css("color", "black")
        $(".midSub").css("background-color", "#A1D7DA")
        $(".midSub").val(0)
        $(".midSub").css("color", "#004f67ff")
        $(".adcSub").css("background-color", "")
        $(".adcSub").val(0)
        $(".adcSub").css("color", "black")
        $(".supportSub").css("background-color", "")
        $(".supportSub").val(0)
        $(".supportSub").css("color", "black")
    });
    $(".adcSub").click(function() {
        $(".topSub").css("background-color", "")
        $(".topSub").css("color", "black")
        $(".jungleSub").css("background-color", "")
        $(".jungleSub").css("color", "black")
        $(".midSub").css("background-color", "")
        $(".midSub").css("color", "black")
        $(".adcSub").css("background-color", "#A1D7DA")
        $(".adcSub").css("color", "#004f67ff")
        $(".supportSub").css("background-color", "")
        $(".supportSub").css("color", "black")
    });
    $(".supportSub").click(function() {
        $(".topSub").css("background-color", "")
        $(".topSub").css("color", "black")
        $(".jungleSub").css("background-color", "")
        $(".jungleSub").css("color", "black")
        $(".midSub").css("background-color", "")
        $(".midSub").css("color", "black")
        $(".adcSub").css("background-color", "")
        $(".adcSub").css("color", "black")
        $(".supportSub").css("background-color", "#A1D7DA")
        $(".supportSub").css("color", "#004f67ff")
    });

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

    // when user clicks on "Free agent"
    $(".free").click(function() {
        $("#freeHidden").slideDown();
        $(".team_choice").slideUp();
        $(".cont_newteam").slideUp();
    });

    // when user clicks on "Already Have a Team"
    $(".old").click(function() {
        $(".team_choice").slideDown();
        $("#freeHidden").slideUp();
        $(".cont_newteam").slideUp();
    });

    // when user clicks on "Add New Team"
    $(".add").click(function() {
        $(".cont_newteam").slideDown();
        $("#freeHidden").slideUp();
        $(".team_choice").slideUp();
    });
    
});