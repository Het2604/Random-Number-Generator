function generateRandomNumber() {
    // Get the minimum and maximum values
    const minValue = parseInt(prompt("Enter the minimum value:"));
    const maxValue = parseInt(prompt("Enter the maximum value:"));

    // Validate input
    if (isNaN(minValue) || isNaN(maxValue)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Generate a random number within the specified range
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    // Display the random number
    document.getElementById('random-number').textContent = `Random Number: ${randomNumber}`;
}