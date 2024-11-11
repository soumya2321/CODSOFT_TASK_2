// Display current time and update every second
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("current-time").textContent = timeString;
}
setInterval(updateTime, 1000);

// Array to store alarms
let alarms = [];

// Function to set an alarm
function setAlarm() {
    const alarmTimeInput = document.getElementById("alarm-time").value;
    if (!alarmTimeInput) {
        alert("Please select a time for the alarm.");
        return;
    }

    alarms.push(alarmTimeInput);
    displayAlarms();
}

// Function to display all active alarms
function displayAlarms() {
    const alarmsList = document.getElementById("alarms-list");
    alarmsList.innerHTML = "";

    alarms.forEach((time, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${time}</span>
            <button onclick="removeAlarm(${index})">Remove</button>
        `;
        alarmsList.appendChild(listItem);
    });
}

// Function to remove an alarm
function removeAlarm(index) {
    alarms.splice(index, 1);
    displayAlarms();
}

// Check if any alarm matches the current time
function checkAlarms() {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5);

    alarms.forEach((alarmTime) => {
        if (alarmTime === currentTime) {
            alert("Alarm ringing!");
            removeAlarm(alarms.indexOf(alarmTime));
        }
    });
}
setInterval(checkAlarms, 60000); // Check alarms every minute
