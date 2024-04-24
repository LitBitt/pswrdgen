// Event listener for the "Generate Password" button
document.getElementById('generate-btn').addEventListener('click', () => {
    // Get the password length input value
    const passwordLength = document.getElementById('password-length').value;
    // Generate password based on the specified length
    const password = generatePassword(passwordLength);
    // Display the generated password
    document.getElementById('password-output').innerHTML = password;
});

// Function to generate a random password
function generatePassword(length) {
    // Character set for generating the password
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    // Generate each character of the password
    for (let i = 0; i < length; i++) {
        // Generate a random index to select a character from the charset
        const randomIndex = Math.floor(Math.random() * charset.length);
        // Append the selected character to the password
        password += charset[randomIndex];
    }
    return password; // Return the generated password
}
