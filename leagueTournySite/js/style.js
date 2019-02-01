$(document).ready(function() {
    
    $(".free").click(function() {
        $("#add").css("display", "none")
        $("#current").css("display", "none")
    });

    $(".new").click(function() {
        $("#add").css("display", "block")
        $("#current").css("display", "none")
    });

    $(".old").click(function() {
        $("#add").css("display", "none")
        $("#current").css("display", "block")
    });

    if ($(".disagree").value == 1) {
        
    }


    // check to see if user agrees to liability waiver or not
    $(".agree").click(function() {
        let checked = $('.agree').prop('checked');
        if (checked) {
            $(".disagree").prop('checked', false);
        }
    });
    $(".disagree").click(function() {
        let checked = $('.disagree').prop('checked');
        if (checked) {
            $(".agree").prop('checked', false);
        }
    });
});