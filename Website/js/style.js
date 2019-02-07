$(document).ready(function() {
    
    $(".left").click(function() {
        $("#placeholder").css("display", "block")
        $("#add").css("display", "none")
        $("#current").css("display", "none")
        $(".left").css("")
    });

    $(".middle").click(function() {
        $("#placeholder").css("display", "none")
        $("#add").css("display", "block")
        $("#current").css("display", "none")
    });

    $(".right").click(function() {
        $("#placeholder").hide()
        $("#add").css("display", "none")
        $("#current").css("display", "block")
    });
    
    // mark the main position as the selected one || The value will be changed to one to signify the selection of that option
    
    $(".topMain").click(function() {
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
    
});