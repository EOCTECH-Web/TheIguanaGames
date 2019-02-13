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

    
    
});