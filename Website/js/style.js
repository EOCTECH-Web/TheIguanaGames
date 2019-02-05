$(document).ready(function() {
    
    $(".left").click(function() {
        $("#placeholder").css("display", "block")
        $("#add").css("display", "none")
        $("#current").css("display", "none")
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


    // check to see if user agrees to liability waiver or not
    $(".agree").click(function() {
        let checked = $('.agree').prop('checked');
        if (checked) {
            $(".disagree").prop('checked', false);
            $(".submit").show();
        }
    });
    $(".disagree").click(function() {
        let checked = $('.disagree').prop('checked');
        if (checked) {
            $(".agree").prop('checked', false);
            $(".submit").hide();
        }
    });
});