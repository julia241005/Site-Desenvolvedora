// script.js
function updateClock() {
  const clock = document.querySelector('.clock');
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();