fetch('https://api.github.com/repos/Ryanforce08/ryanforce08.github.io/commits?per_page=1')
.then(res => res.json())
.then(res => {
  document.getElementById('message').innerHTML = res[0].commit.message
})

if (typeof navigator.serviceWorker !== 'undefined') {
  navigator.serviceWorker.register('sw.js')
}


// Retrieve lunch period from local storage
const lunchPeriod = localStorage.getItem("lunchPeriod");
const daytype = localStorage.getItem("daytype");

// Define the schedule based on lunch period
let schedule;
if (daytype === "Halfday"){
    document.getElementById("lunch").textContent = "Halfday";
    schedule = [
    { period: "School Starts in", start: "00:00", end: "07:34" },
    { period: "Homeroom", start: "07:35", end: "07:40" },
    { period: "Period 1", start: "07:44", end: "08:12" },
    { period: "Period 2", start: "08:16", end: "08:44" },
    { period: "Period 3", start: "08:48", end: "09:16" },
    { period: "Period 4", start: "09:20", end: "09:48" },
    { period: "Period 6/7", start: "09:52", end: "10:20" },
    { period: "Period 8/9", start: "10:24", end: "10:52" },
    { period: "Period 10/11", start: "10:56", end: "11:24" },
    { period: "Period 12", start: "11:28", end: "11:56" }
  ];
  }
  else if (daytype === "2hour"){
    document.getElementById("lunch").textContent = "2 Hour Delay";
    schedule = [
      { period: "Homeroom", start: "09:35", end: "09:40" },
      { period: "Period 1", start: "09:44", end: "10:09" },
      { period: "Period 2", start: "10:13", end: "10:38" },
      { period: "Period 3", start: "10:42", end: "11:07" },
      { period: "Period 4/5", start: "11:11", end: "11:36" },
      { period: "Period 6 - B Lunch", start: "11:39", end: "12:04" },
      { period: "Period 8 - C Lunch", start: "12:07", end: "12:32" },
      { period: "Period 10 - D Lunch", start: "12:35", end: "13:00" },
      { period: "Period 11/E - Lunch", start: "13:03", end: "13:28" },
      { period: "Period 12", start: "13:32", end: "13:57" },
      { period: "Period 14", start: "14:00", end: "14:40" }
    ];
  }    

else if (lunchPeriod === "Period B") {
  document.getElementById("lunch").textContent = "Lunch B";
  schedule = [
  { period: "School Starts in", start: "00:00", end: "07:34" },
  { period: "Homeroom", start: "07:35", end: "07:40" },
  { period: "Period 1", start: "07:44", end: "08:24" },
  { period: "Period 1/2", start: "8:24", end: "08:27" },
  { period: "Period 2", start: "08:28", end: "09:08" },
  { period: "Period 2/3", start: "08:08", end: "09:12" },
  { period: "Period 3", start: "09:12", end: "09:52" },
  { period: "Period 3/4", start: "09:52", end: "09:51" },
  { period: "Period 4", start: "09:52", end: "10:36" },
  { period: "Lunch", start: "10:39", end: "11:02" },
  { period: "Period 7", start: "11:05", end: "11:45" },
  { period: "Period 9/10", start: "11:48", end: "12:28" },
  { period: "Period 11", start: "12:31", end: "13:11" },
  { period: "Period 12", start: "13:16", end: "13:55" },
  { period: "Period 14", start: "14:00", end: "14:39" }
];
} else if (lunchPeriod === "Period C") {
  document.getElementById("lunch").textContent = "Lunch C";
  schedule = [
  { period: "School Starts in", start: "00:00", end: "07:34" },
  { period: "Homeroom", start: "07:35", end: "07:40" },
  { period: "Period 1", start: "07:44", end: "08:24" },
  { period: "Period 2", start: "08:28", end: "09:08" },
  { period: "Period 3", start: "09:12", end: "09:52" },
  { period: "Period 4", start: "09:56", end: "10:36" },
  { period: "Period 6", start: "10:36", end: "11:19" },
  { period: "Lunch", start: "11:22", end: "11:45" },
  { period: "Period 9/10", start: "11:48", end: "12:28" },
  { period: "Period 11", start: "12:31", end: "13:11" },
  { period: "Period 12", start: "13:16", end: "13:55" },
  { period: "Period 14", start: "14:00", end: "14:39" }
];
} else if (lunchPeriod === "Period D") {
  document.getElementById("lunch").textContent = "Lunch D";
  schedule = [
  { period: "School Starts in", start: "00:00", end: "07:34" },
  { period: "Homeroom", start: "07:35", end: "07:40" },
  { period: "Period 1", start: "07:44", end: "08:24" },
  { period: "Period 2", start: "08:28", end: "09:08" },
  { period: "Period 3", start: "09:12", end: "09:52" },
  { period: "Period 4", start: "09:56", end: "10:36" },
  { period: "Period 6", start: "10:39", end: "11:19" },
  { period: "Period 8", start: "11:22", end: "12:02" },
  { period: "Lunch", start: "12:05", end: "12:28" },
  { period: "Period 11", start: "12:31", end: "13:11" },
  { period: "Period 12", start: "13:16", end: "13:55" },
  { period: "Period 14", start: "14:00", end: "14:39" }
]; 
} else if (lunchPeriod === "Period E") {
  document.getElementById("lunch").textContent = "Lunch E";
  schedule = [
  { period: "School Starts in", start: "00:00", end: "07:34" },
  { period: "Homeroom", start: "07:35", end: "07:40" },
  { period: "Period 1", start: "07:44", end: "08:24" },
  { period: "Period 2", start: "08:28", end: "09:08" },
  { period: "Period 3", start: "09:12", end: "09:52" },
  { period: "Period 4", start: "09:56", end: "10:36" },
  { period: "Period 6", start: "10:39", end: "11:19" },
  { period: "Period 8", start: "11:22", end: "12:02" },
  { period: "Period 9/10", start: "12:05", end: "12:45" },
  { period: "Lunch", start: "12:48", end: "13:11" },
  { period: "Period 12", start: "13:16", end: "13:55" },
  { period: "Period 14", start: "14:00", end: "14:39" }
];
} else {
// Default schedule if lunch period is not set
document.getElementById("lunch").textContent = "No Lunch Set";
schedule = [
  { period: "School Starts in", start: "00:00", end: "07:34" },
  { period: "Homeroom", start: "07:35", end: "07:40" },
  { period: "Period 1", start: "07:44", end: "08:24" },
  { period: "Period 2", start: "08:28", end: "09:08" },
  { period: "Period 3", start: "09:12", end: "09:52" },
  { period: "Period 4/5", start: "09:56", end: "10:36" },
  { period: "Period 6/7", start: "10:39", end: "11:19" },
  { period: "Period 8", start: "11:22", end: "11:45" },
  { period: "Period 9/10", start: "11:48", end: "12:28" },
  { period: "Period 11", start: "12:31", end: "13:11" },
  { period: "Period 12", start: "13:16", end: "13:55" },
  { period: "Period 14", start: "14:00", end: "14:39" }
];
}
// Function to calculate time remaining in seconds
function getTimeRemaining(endTime) {
const total = Date.parse(endTime) - Date.parse(new Date());
const seconds = Math.floor((total / 1000) % 60);
const minutes = Math.floor((total / 1000 / 60) % 60);
const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
return {
  total,
  hours,
  minutes,
  seconds
};
}

// Function to update countdown every second
function updateCountdown(endTime, period) {
const timeRemaining = getTimeRemaining(endTime);

// If the current period is over
if (timeRemaining.total <= 0) {
  // Refresh the page
  location.reload();
  document.getElementById("period").textContent = `${period.period}:`;
  document.getElementById("countdown").textContent = "Current period is over!";
  return;
}

// Display countdown for the current period
document.getElementById("period").textContent = `${period.period}:`;
document.getElementById("countdown").textContent = `${timeRemaining.hours}h ${timeRemaining.minutes}m ${timeRemaining.seconds}s`;

// Update countdown every second
setTimeout(() => {
  updateCountdown(endTime, period);
}, 1000);
}

// Function to initialize countdown
function initializeCountdown() {
const now = new Date();
let currentPeriod = null;
let nextPeriod = null;

// Find the current period
for (let i = 0; i < schedule.length; i++) {
  const start = new Date(now.toDateString() + " " + schedule[i].start);
  const end = new Date(now.toDateString() + " " + schedule[i].end);
  
  if (self.i=0 ){
    location.reload();
  }


  if (now >= start && now <= end) {
    currentPeriod = schedule[i];
    nextPeriod = schedule[i + 1];
    self.i=1
    break;
  }
}

// If there's no current period (after school hours)
if (!currentPeriod) {
  document.getElementById("countdown").textContent = "School is over for today!";
  self.i = 0
  return;
}

// Calculate time remaining for the current period
const endTime = new Date(now.toDateString() + " " + currentPeriod.end);

// Start updating countdown
updateCountdown(endTime, currentPeriod);
}

// Start the countdown
initializeCountdown();
