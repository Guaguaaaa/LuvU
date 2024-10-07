document.addEventListener("DOMContentLoaded", function() {
    event.preventDefault();  // Prevent the form from refreshing the page
    const correctPassword = "20040808"; // Set your desired password here

    const passwordForm = document.getElementById("password-form");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");
    const mainContent = document.getElementById("main-content");
    const passwordContainer = document.getElementById("password-container");
    const hintMessage = document.getElementById("hint-message");

    passwordForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const enteredPassword = passwordInput.value;
        if (enteredPassword === correctPassword) {
            passwordContainer.style.display = "none";
            mainContent.style.display = "block";
        } else {
            errorMessage.textContent = "Incorrect password. Developer only";
            hintMessage.textContent = "Hint: Birthday";
        }

        passwordInput.value = ""; // Clear the password field
    });
});
