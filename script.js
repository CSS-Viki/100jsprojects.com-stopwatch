const hms = document.getElementById("h-m-s");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let [hours, minutes, seconds] = [0, 0, 0];

let timer = null;

function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 5 === 1) {
      minutes = 0;
      hours++;
    }
    if (hours / 24 === 1) {
      resetTimer();
    }
  }

  // Setting our Leading zero
  let leadingHour = hours < 10 ? "0" + hours.toString() : hours;
  let leadingMinute = minutes < 10 ? "0" + minutes.toString() : minutes;
  let leadingSecond = seconds < 10 ? "0" + seconds.toString() : seconds;

  hms.innerText = leadingHour + ":" + leadingMinute + ":" + leadingSecond;
}

const startTimer = () => {
  if (timer !== null) clearInterval(timer); // If there is a timer running, it clears that interval to avoid multiple timers running at once.
  timer = setInterval(stopWatch, 10);
};
const stopTimer = () => {
  clearInterval(timer);
};

const resetTimer = () => {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  hms.innerText = `00:00:00`;
};
// window.setInterval(stopWatch, 50);
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
