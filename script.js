
function validate() {
    var username = document.getElementById("name").value;
    var password = document.getElementById("pass").value;

    if ((username == "") && (password == "")) {
        document.getElementById("validation").innerHTML = "Error: Please enter your username and password.";
        document.getElementById("validation").style.color = "red";
    } else if ((username == "") && (password != "")) {
        document.getElementById("validation").innerHTML = "Error: Please enter your username.";
        document.getElementById("validation").style.color = "red";
    } else if ((username != "") && (password == "")) {
        document.getElementById("validation").innerHTML = "Error: Please enter your password.";
        document.getElementById("validation").style.color = "red";
    } else {
        document.getElementById("validation").innerHTML = "Successfully logged in!";
        document.getElementById("validation").style.color = "orange";
    }
}
