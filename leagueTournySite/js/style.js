 var pw1 = document.getElementsByClassName("pw1").value
 var pw2 = document.getElementsByClassName("pw2").value

$(".pwchec")
    if (pw1 != pw2) {
        alert("Passwords entered must match.")
    }