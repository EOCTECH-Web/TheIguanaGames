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
});