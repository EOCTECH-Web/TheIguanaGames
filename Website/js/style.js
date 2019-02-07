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
    // mark the main position as the selected one
    $(".topMain").click(function() {
        $(".topMain").css("background-color", "#da6134")
        $(".jungleMain").css("background-color", "")
        $(".midMain").css("background-color", "")
        $(".adcMain").css("background-color", "")
        $(".supportMain").css("background-color", "")
    });
    $(".jungleMain").click(function() {
        $(".topMain").css("background-color", "")
        $(".jungleMain").css("background-color", "#da6134")
        $(".midMain").css("background-color", "")
        $(".adcMain").css("background-color", "")
        $(".supportMain").css("background-color", "")
    });
    $(".midMain").click(function() {
        $(".topMain").css("background-color", "")
        $(".jungleMain").css("background-color", "")
        $(".midMain").css("background-color", "#da6134")
        $(".adcMain").css("background-color", "")
        $(".supportMain").css("background-color", "")
    });
    $(".adcMain").click(function() {
        $(".topMain").css("background-color", "")
        $(".jungleMain").css("background-color", "")
        $(".midMain").css("background-color", "")
        $(".adcMain").css("background-color", "#da6134")
        $(".supportMain").css("background-color", "")
    });
    $(".supportMain").click(function() {
        $(".topMain").css("background-color", "")
        $(".jungleMain").css("background-color", "")
        $(".midMain").css("background-color", "")
        $(".adcMain").css("background-color", "")
        $(".supportMain").css("background-color", "#da6134")
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