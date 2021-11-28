function validateForm() {
let x = document.forms["form"]["email"].value;

if (x == "") {
alert("Email must be filled out");

return false;
} else if (x.toLowerCase()) == false) {
alert("Email must be valid");

return false;
}
return true;
}
