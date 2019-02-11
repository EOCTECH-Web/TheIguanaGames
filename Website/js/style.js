$(document).ready(function() {
    
    $()

    // This is the league drop down scripts

    $(".free").click(function() {
        $("#placeholder").css("display", "block")
        $("#add").css("display", "none")
        $("#current").css("display", "none")
        $(".free").css("background-color", "#A1D7DA")
        $(".old").css("background-color", "#fff")
        $(".add").css("background-color", "#fff")
    });

    $(".middle").click(function() {
        $("#placeholder").css("display", "none")
        $("#current").css("display", "block")
        $("#add").css("display", "none")
        $(".free").css("background-color", "#fff")
        $(".old").css("background-color", "#A1D7DA")
        $(".add").css("background-color", "#fff")
    });

    $(".right").click(function() {
        $("#placeholder").hide()
<<<<<<< HEAD
        $("#current").css("display", "none")
        $("#add").css("display", "block")
        $(".free").css("background-color", "#fff")
        $(".old").css("background-color", "#fff")
        $(".add").css("background-color", "#A1D7DA")
=======
        $("#add").css("display", "none")
        $("#current").css("display", "block")
>>>>>>> fa4ed7af83eb3df930ae4aba9b9b9dc13e540c16
    });

    // mark the main position as the selected one || The value will be changed to one to signify the selection of that option
    
    $(".topMain").click(function() {
<<<<<<< HEAD
        $(".topMain").css("background-color", "#A1D7DA")
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
        $(".jungleMain").css("background-color", "#A1D7DA")
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
        $(".topMain").val(0)
        $(".jungleMain").css("background-color", "")
        $(".jungleMain").val(0)
        $(".midMain").css("background-color", "#004f67ff")
        $(".midMain").val(0)
        $(".adcMain").css("background-color", "")
        $(".adcMain").val(0)
        $(".supportMain").css("background-color", "")
        $(".supportMain").val(0)
=======
        $(".topMain").css("background-color", "#004f67ff")
        $(".topMain").css("color", "white")
        $(".jungleMain").css("background-color", "")
        $(".jungleMain").css("color", "black")
        $(".midMain").css("background-color", "")
        $(".midMain").css("color", "black")
        $(".adcMain").css("background-color", "")
        $(".adcMain").css("color", "black")
        $(".supportMain").css("background-color", "")
        $(".supportMain").css("color", "black")
    });
    $(".jungleMain").click(function() {
        $(".topMain").css("background-color", "")
        $(".topMain").css("color", "black")
        $(".jungleMain").css("background-color", "#004f67ff")
        $(".jungleMain").css("color", "white")
        $(".midMain").css("background-color", "")
        $(".midMain").css("color", "black")
        $(".adcMain").css("background-color", "")
        $(".adcMain").css("color", "black")
        $(".supportMain").css("background-color", "")
        $(".supportMain").css("color", "black")
    });
    $(".midMain").click(function() {
        $(".topMain").css("background-color", "")
        $(".topMain").css("color", "black")
        $(".jungleMain").css("background-color", "")
        $(".jungleMain").css("color", "black")
        $(".midMain").css("background-color", "#004f67ff")
        $(".midMain").css("color", "white")
        $(".adcMain").css("background-color", "")
        $(".adcMain").css("color", "black")
        $(".supportMain").css("background-color", "")
        $(".supportMain").css("color", "black")
>>>>>>> fa4ed7af83eb3df930ae4aba9b9b9dc13e540c16
    });
    $(".adcMain").click(function() {
        $(".topMain").css("background-color", "")
        $(".topMain").css("color", "black")
        $(".jungleMain").css("background-color", "")
        $(".jungleMain").css("color", "black")
        $(".midMain").css("background-color", "")
        $(".midMain").css("color", "black")
        $(".adcMain").css("background-color", "#004f67ff")
        $(".adcMain").css("color", "white")
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
        $(".supportMain").css("background-color", "#004f67ff")
        $(".supportMain").css("color", "white")
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
<<<<<<< HEAD





    // Added This (ttracy)
    $(".leagueForm").hide();
    $("#freeHidden").hide();
    $(".team_choice").hide();
    $(".cont_newteam").hide();

    $(".game_choice").change(function() {
        let value = $(".game_choice").val();
        if (value == "league") {
            $(".leagueForm").slideDown();
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
=======
>>>>>>> fa4ed7af83eb3df930ae4aba9b9b9dc13e540c16
    
});