// script.js

// Initial counter value
let counterValue = 0;

// Get references to DOM elements
const counterDisplay = document.getElementById("counter");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");

// Function to update the counter display
function updateCounter() {
    counterDisplay.textContent = counterValue;
    if (counterValue > 0) {
        counterDisplay.style.color = "green";
    } else if (counterValue < 0) {
        counterDisplay.style.color = "red";
    } else {
        counterDisplay.style.color = "#333";
    }
}

// Event listeners for buttons
decreaseButton.addEventListener("click", () => {
    counterValue--;
    updateCounter();
});

resetButton.addEventListener("click", () => {
    counterValue = 0;
    updateCounter();
});

increaseButton.addEventListener("click", () => {
    counterValue++;
    // counterValue = counterValue + 1
    updateCounter();
});
