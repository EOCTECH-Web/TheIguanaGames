 var pw1 = document.getElementsByClassName("pw1").value
 var pw2 = document.getElementsByClassName("pw2").value

$("checkPw").click(function() {
    if (pw1 != pw2) {
        alert("Passwords entered must match.")
    }
})