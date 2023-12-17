function reserveTable() {
    // Get values from input
    var firstName = document.getElementById("res_firstname");
    var lastName = document.getElementById("res_lastname");
    var email = document.getElementById("res_email");
    var resDate = document.getElementById("res_date");

    if (firstName.value == "") {
        window.alert("Please type your first name");
    } else if (lastName.value == "") {
        window.alert("Please type your first name");
    
    } else if (email.value == "") {
        window.alert("Please type your email");
    
    } else if (resDate.value == "") {
        window.alert("Please choose a date for your reservation");
    
    } else {
        window.alert("Hi " + firstName.value + " " + lastName.value + " your table is reserved on " + resDate.value);
        
        // Clears all forms
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        resDate.value = "";
    }


}