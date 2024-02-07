let date = new Date("February 15 2024 00:00:00");
// let date = Date.now("February 8 2024 00:00:00");

function pad(value) {
  return String(value).padStart(2, 0);
}

function counts() {
  let now = new Date();
  let gap = date - now;

  // let now = Date.now();
  // let gap = date - now;

  let days = pad(Math.floor(gap / 1000 / 60 / 60 / 24));
  let hours = pad(Math.floor(gap / 1000 / 60 / 60) % 24);
  let minutes = pad(Math.floor(gap / 1000 / 60) % 60);
  let seconds = pad(Math.floor(gap / 1000) % 60);

  if (gap < 0) {
    document.getElementById("timer").innerText = "Акція закінчена";
    document.getElementById("timer2").style = "display: none";
    // days = days + 7;
    // hours = hours + 24;
    // minutes = minutes + 60;
    // seconds = seconds + 60;
  } else {
    document.getElementById("d").innerText = days;
    document.getElementById("h").innerText = hours;
    document.getElementById("m").innerText = minutes;
    document.getElementById("s").innerText = seconds;
  }
}
counts();

setInterval(counts, 1000);

// const timer = {
//   intervalId: null,
//   isActive: false,
//   // Стартовий час
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true;

//     // установили інтервал
//     this.intervalId = setInterval(() => {
//       // получаем текущій час
//       const currentTime = Date.now();
//       // получаємо різницю між текучем та стартовим часом
//       const deltaTime = currentTime - startTime;
//       // записуємо сюди
//       const time = getTimeComponents(deltaTime);

//       // виводимо в консолі час хвилини секунди
//       //   console.log(`${hours}::${mins}::${secs}`);
//       updateClockface(time);
//     }, 1000);
//   },
// };

// timer.start();

// function updateClockface({ hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }

// function pad(value) {
//   return String(value).padStart(2, 0);
// }

// // функция яка считає сількиі часов хвилин секунд
// function getTimeComponents(time) {
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 24))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { hours, mins, secs };
// }
