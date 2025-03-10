document.getElementById("registrationForm").onsubmit = function () {
    let isValid = true;
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let age = document.getElementById("age").value.trim();
    let email = document.getElementById("email").value.trim();
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();

    if (firstName.length < 4 || !/^[A-Za-z]+$/.test(firstName)) {
        document.getElementById("firstNameError").textContent = "First Name must be at least 4 characters and contain only letters.";
        isValid = false;
    }

    if (lastName.length < 1 || !/^[A-Za-z]+$/.test(lastName)) {
        document.getElementById("lastNameError").textContent = "Last Name must contain only letters.";
        isValid = false;
    }

    if (!/^\d{2}$/.test(age) || age < 10 || age > 99) {
        document.getElementById("ageError").textContent = "Age must be a two-digit number between 10 and 99.";
        isValid = false;
    }

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        isValid = false;
    }

    if (!dob) {
        document.getElementById("dobError").textContent = "Please select a valid date of birth.";
        isValid = false;
    }

    if (!gender) {
        document.getElementById("genderError").textContent = "Please select a gender.";
        isValid = false;
    }

    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone Number must be 10 digits.";
        isValid = false;
    }

    if (address.length === 0) {
        document.getElementById("addressError").textContent = "Address cannot be empty.";
        isValid = false;
    }

    if (isValid) {
        let formData = {
            firstName, lastName, age, email, dob,
            gender: gender.value, phone, address
        };

        localStorage.setItem("formData", JSON.stringify(formData));
        window.location.href = "result.html";
    }

    return false;
};
