// email validaition start
function validateForm() {
    var x = document.forms["contactform"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        alert("Please enter a valid email address!");
        return false;
    }
    return true;
}
// email validaition end


// empty string validation start
var submit_button = document.getElementById("submit_button");
submit_button.addEventListener("click", function(e) {
    var required = document.querySelectorAll("input[required]");

    required.forEach(function(element) {
        if (element.value.trim() == "") {
            element.style.backgroundColor = "red";
        } else {
            element.style.backgroundColor = "white";
        }
    });
});
// empty string validation end