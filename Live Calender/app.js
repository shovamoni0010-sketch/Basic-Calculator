const month = document.getElementById('month');
const weekday = document.getElementById('weekday');
const day = document.getElementById('day');
const year = document.getElementById('year');
const time = document.getElementById('time');

function updateDateTime() {
  const now = new Date();

  month.textContent = now.toLocaleString('en-US', { month: 'long' });
  weekday.textContent = now.toLocaleString('en-US', { weekday: 'long' });
  day.textContent = now.getDate();
  year.textContent = now.getFullYear();

  // Get current time
  time.textContent = now.toLocaleTimeString('en-US', { hour12: false });
}

setInterval(updateDateTime, 1000);


updateDateTime();
