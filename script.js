let timerInterval;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    millisecondsDisplay.textContent = String(milliseconds).padStart(2, '0'); // Show only two digits

    hoursDisplay.textContent = hours;
    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = secs;
}

startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timerInterval);
        startStopBtn.textContent = 'Start';
    } else {
        timerInterval = setInterval(() => {
            milliseconds += 10; // Increment milliseconds by 10 (for every 10 ms)
            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds++;
            }
            updateDisplay();
        }, 10);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    seconds = 0;
    milliseconds = 0; // Reset milliseconds
    isRunning = false;
    updateDisplay();
    startStopBtn.textContent = 'Start';
});

// Initial display update
updateDisplay();
