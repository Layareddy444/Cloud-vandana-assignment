function displaySelectedValues() {
    // Get references to the form elements
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var genderElements = document.getElementsByName('gender');
    var gender = '';
    for (var i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender = genderElements[i].value;
        }
    }
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    // Construct the message to display
    var message = "First Name: " + firstName + "\n";
    message += "Last Name: " + lastName + "\n";
    message += "Date of Birth: " + dob + "\n";
    message += "Country: " + country + "\n";
    message += "Gender: " + gender + "\n";
    message += "Profession: " + profession + "\n";
    message += "Email: " + email + "\n";
    message += "Mobile Number: " + mobile;

    // Display the message in a pop-up box
    alert(message);
}
