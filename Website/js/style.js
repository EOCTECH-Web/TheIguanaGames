$(document).ready(function() {
    
    $(".free").click(function() {
        $("#placeholder").css("display", "block")
        $("#add").css("display", "none")
        $("#current").css("display", "none")
        $(".left").css("")
    });

    $(".old").click(function() {
        $("#placeholder").css("display", "none")
        $("#current").css("display", "block")
        $("#add").css("display", "none")
    });

    $(".add").click(function() {
        $("#placeholder").hide()
        $("#current").css("display", "none")
        $("#add").css("display", "block")
    });
    
    // mark the main position as the selected one || The value will be changed to one to signify the selection of that option
    
    $(".topMain").click(function() {
        $(".topMain").css("background-color", "#004f67ff")
        $(".topMain").val(1)
        $(".topMain").css("color", "white")
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
        $(".jungleMain").css("background-color", "#004f67ff")
        $(".jungleMain").val(1)
        $(".jungleMain").css("color", "white")
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
        $(".topMain").css("color", "black")
        $(".jungleMain").css("background-color", "")
        $(".jungleMain").val(0)
        $(".jungleMain").css("color", "black")
        $(".midMain").css("background-color", "#004f67ff")
        $(".midMain").val(0)
        $(".midMain").css("color", "white")
        $(".adcMain").css("background-color", "")
        $(".adcMain").val(0)
        $(".adcMain").css("color", "black")
        $(".supportMain").css("background-color", "")
        $(".supportMain").val(0)
        $(".supportMain").css("color", "black")
    });
    $(".adcMain").click(function() {
        $(".topMain").css("background-color", "")
        $(".topMain").val(0)
        $(".topMain").css("color", "black")
        $(".jungleMain").css("background-color", "")
        $(".jungleMain").val(0)
        $(".jungleMain").css("color", "black")
        $(".midMain").css("background-color", "")
        $(".midMain").val(0)
        $(".midMain").css("color", "black")
        $(".adcMain").css("background-color", "#004f67ff")
        $(".adcMain").val(1)
        $(".adcMain").css("color", "white")
        $(".supportMain").css("background-color", "")
        $(".supportMain").val(0)
        $(".supportMain").css("color", "black")
    });
    $(".supportMain").click(function() {
        $(".topMain").css("background-color", "")
        $(".topMain").val(0)
        $(".topMain").css("color", "black")
        $(".jungleMain").css("background-color", "")
        $(".jungleMain").val(0)
        $(".jungleMain").css("color", "black")
        $(".midMain").css("background-color", "")
        $(".midMain").val(0)
        $(".midMain").css("color", "black")
        $(".adcMain").css("background-color", "")
        $(".adcMain").val(0)
        $(".adcMain").css("color", "black")
        $(".supportMain").css("background-color", "#004f67ff")
        $(".supportMain").val(1)
        $(".supportMain").css("color", "white")
    });

    // This is the secondary position for the free hidden inputs || change the value of the buttons to signify they are the ones that are chosen

    $(".topSub").click(function() {
        $(".topSub").css("background-color", "#004f67ff")
        $(".topMain").val(1)
        $(".topMain").css("color", "white")
        $(".jungleSub").css("background-color", "")
        $(".jungleSub").val(0)
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
        $(".jungleSub").css("background-color", "#004f67ff")
        $(".jungleSub").val(1)
        $(".jungleSub").css("color", "white")
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
        $(".midSub").css("background-color", "#004f67ff")
        $(".midSub").val(0)
        $(".midSub").css("color", "white")
        $(".adcSub").css("background-color", "")
        $(".adcSub").val(0)
        $(".adcSub").css("color", "black")
        $(".supportSub").css("background-color", "")
        $(".supportSub").val(0)
        $(".supportSub").css("color", "black")
    });
    $(".adcSub").click(function() {
        $(".topSub").css("background-color", "")
        $(".topSub").val(0)
        $(".topSub").css("color", "black")
        $(".jungleSub").css("background-color", "")
        $(".jungleSub").val(0)
        $(".jungleSub").css("color", "black")
        $(".midSub").css("background-color", "")
        $(".midSub").val(0)
        $(".midSub").css("color", "black")
        $(".adcSub").css("background-color", "#004f67ff")
        $(".adcSub").val(1)
        $(".adcSub").css("color", "white")
        $(".supportSub").css("background-color", "")
        $(".supportSub").val(0)
        $(".supportSub").css("color", "black")
    });
    $(".supportSub").click(function() {
        $(".topSub").css("background-color", "")
        $(".topSub").val(0)
        $(".topSub").css("color", "black")
        $(".jungleSub").css("background-color", "")
        $(".jungleSub").val(0)
        $(".jungleSub").css("color", "black")
        $(".midSub").css("background-color", "")
        $(".midSub").val(0)
        $(".midSub").css("color", "black")
        $(".adcSub").css("background-color", "")
        $(".adcSub").val(0)
        $(".adcSub").css("color", "black")
        $(".supportSub").css("background-color", "#004f67ff")
        $(".supportSub").val(1)
        $(".supportSub").css("color", "white")
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