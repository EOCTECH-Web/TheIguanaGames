$(document).ready(function() {
    
    $(".noTeam").click(function() {
        $("#add").css("display", "none")
        $("#current").css("display", "none")
    });

    $(".newTeam").click(function() {
        $("#add").css("display", "block")
        $("#current").css("display", "none")
    });

    $(".oldTeam").active(function() {
        $("#add").css("display", "none")
        $("#current").css("display", "block")
    });
});