document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get field values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Get error message elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");

    // Reset messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    // Regex for email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    let valid = true;

    // Validate Name
    if (name === "") {
        nameError.textContent = "Name is required";
        valid = false;
    }

    // Validate Email
    if (email === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email";
        valid = false;
    }

    // Validate Message
    if (message === "") {
        messageError.textContent = "Message is required";
        valid = false;
    }

    // If all valid
    if (valid) {
        successMessage.textContent = "✅ Message sent successfully!";
        document.getElementById("contactForm").reset();
    }
});
