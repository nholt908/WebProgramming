function validateEmail(){
    let emailInput = document.getElementById("email");
    let errorMessage = document.getElementById("emailError");
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput.value)) {
        errorMessage.textContent = "Invalid email format.";
        emailInput.classList.add("inputError");
        return false;
    }

    errorMessage.textContent = "";
    emailInput.classList.remove("inputError");
    return true;
}

function validateAge(){
    let ageInput = document.getElementById("age");
    let age = parseInt(ageInput.value, 10);
    let errorMessage = document.getElementById("ageError");

    if (isNaN(age) || age < 18 || age > 100){
      errorMessage.textContent = "Age must be between 18 and 100.";
      ageInput.classList.add("inputError");
      return false;
    }

    errorMessage.textContent = "";
    ageInput.classList.remove("inputError");
    return true;
};

function validation(){
    let isAgeValid = validateAge();
    let isEmailValid = validateEmail();

    if (isAgeValid && isEmailValid){
        alert("Form submitted successfully!");
        return true;
    }

    return false;
}