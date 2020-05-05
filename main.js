const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const timeText = document.querySelector("#time");

setTime();
setInterval(setTime, 1000);

function setTime() {
  const time = new Date();
  let hour = (time.getHours() % 12 * 30) - 90 + (time.getMinutes() * 0.5);
  let minute = (time.getMinutes() * 6 ) - 90 + (time.getSeconds() * 0.1);
  let second = (time.getSeconds() * 6 ) - 90;
  hourHand.style.transform = `rotate(${hour}deg)`;
  minuteHand.style.transform = `rotate(${minute}deg)`;
  secondHand.style.transform = `rotate(${second}deg)`;
  timeText.innerHTML = `${prepend(time.getHours()%12)}:${prepend(time.getMinutes())}:${prepend(time.getSeconds())}`;
}

function prepend(num) {
  return ( num < 10 ? '0' : '') + num;
}
