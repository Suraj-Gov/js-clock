const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const timeText = document.querySelector("#time");

setTime();
setInterval(setTime, 1000);

function setTime() {
  const time = new Date();
  let hour = (time.getHours() % 12) * 30 - 90 + time.getMinutes() * 0.5;
  let minute = time.getMinutes() * 6 - 90 + time.getSeconds() * 0.1;
  let second = time.getSeconds() * 6 - 90;
  hourHand.style.transform = `rotate(${hour}deg)`;
  minuteHand.style.transform = `rotate(${minute}deg)`;
  secondHand.style.transform = `rotate(${second}deg)`;
  timeText.innerHTML = `${formatHour(time.getHours() % 12)}:${prepend(
    time.getMinutes()
  )}:${prepend(time.getSeconds())}`;
  if (second == 264 || second == -90) {
    secondHand.style.transition = "none";
  } else secondHand.style.transition = "all 0.05s";
  if (minute == 264 || minute == -90) {
    minuteHand.style.transition = "none";
  } else minuteHand.style.transition = "all 0.05s";
  if (hour == 264 || hour == -90) {
    hourHand.style.transition = "none";
  } else hourHand.style.transition = "all 0.05s";
}

function prepend(num) {
  return (num < 10 ? "0" : "") + num;
}

function formatHour(hour) {
  if (hour == 0) {
    return 12;
  } else return prepend(hour);
}
