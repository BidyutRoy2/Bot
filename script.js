let timer;
let timeRemaining = 28800; // 8 hours in seconds

document.getElementById('fry-button').addEventListener('click', fryCorn);
document.getElementById('task-page').addEventListener('click', () => alert('Task Page'));
document.getElementById('invite-page').addEventListener('click', () => alert('Invite Page'));

function fryCorn() {
    if (timeRemaining <= 0) {
        alert('You have claimed 1000 Corn!');
        timeRemaining = 28800; // Reset timer
        startTimer();
    } else {
        alert('You can only claim corn every 8 hours.');
    }
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function updateTimerDisplay() {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('time-remaining').textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Start the timer on page load
startTimer();
