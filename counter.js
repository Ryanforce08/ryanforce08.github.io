// Function to get the current day of the week (0 for Sunday, 1 for Monday, etc.)
function getDayOfWeek() {
    const date = new Date();
    return date.getDay();
}

// Function to check if it's a weekend (Saturday or Sunday)
function isWeekend() {
    const day = getDayOfWeek();
    return day === 0 || day === 6;
}

// Function to increment the counter
function incrementCounter() {
    let currentCounter = parseInt(localStorage.getItem('counter')) || 1;
    const newCounter = currentCounter + 1;

    if (newCounter > 5) {
        currentCounter = 1; // Reset counter to 1
    } else {
        currentCounter = newCounter;
    }

    localStorage.setItem('counter', currentCounter);
}

// Function to update the counter if it's not a weekend
function updateCounterIfWeekday() {
    if (!isWeekend()) {
        incrementCounter();
    }
}

// Function to display the counter
function displayCounter() {
    const counterElement = document.getElementById('counter');
    const currentCounter = localStorage.getItem('counter') || 1;
    counterElement.textContent = currentCounter;
}

// Function to initialize the script
function init() {
    // Check if counter has already been initialized
    if (!localStorage.getItem('counter')) {
        localStorage.setItem('counter', 1);
    }

    updateCounterIfWeekday();
    displayCounter();
}

// Call the init function when the page loads
window.onload = init;
