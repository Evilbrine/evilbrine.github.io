let timerInSeconds = 0; // Initialize time in seconds
let interval = null;
let isRunning = false; // Tracks whether the timer is running

function updateTimerDisplay() {
    const hours = String(Math.floor(timerInSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((timerInSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(timerInSeconds % 60).padStart(2, "0");
    document.getElementById("timer").textContent = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
    if (isRunning) return; // Prevent multiple intervals
    isRunning = true;
    interval = setInterval(() => {
        if (timerInSeconds > 0) {
            timerInSeconds--;
            updateTimerDisplay();
        } else {
            clearInterval(interval);
            isRunning = false;
            alert("Time's up!");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    isRunning = false;
}

function addTime() {
    timerInSeconds += 60; // Add 1 minute
    updateTimerDisplay();
}

function deductTime() {
    timerInSeconds = Math.max(0, timerInSeconds - 60); // Deduct 1 minute
    updateTimerDisplay();
}

function doubleTime() {
    timerInSeconds *= 2; // Double the time
    updateTimerDisplay();
}

function halfTime() {
    timerInSeconds = Math.floor(timerInSeconds / 2); // Half the time
    updateTimerDisplay();
}

function setTime1() {
    timerInSeconds = 60;
    updateTimerDisplay();
}

function setTime2() {
    timerInSeconds = 120;
    updateTimerDisplay();
}


// Initialize the timer with a default time
timerInSeconds = 300; // Example: 5 minutes
updateTimerDisplay();
