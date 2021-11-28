function validateForm() {
let x = document.forms["form"]["email"].value;

if (x == "") {
alert("Email must be filled out");

return false;
} else {
alert("Email must be valid");

return false;
}
return true;
}
