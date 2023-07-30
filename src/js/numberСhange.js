const section = document.querySelector(".mainblock_indicators");
const numbers = section.querySelectorAll("span");

numbers.forEach(function (el) {
  for (let i = 0; i < numbers.length; i += 1) {
    const startNumber = [87, 211, 10];
    const duration = 3000;
    const step = 1;

    let number = 0;

    const timeInterval = Math.round(duration / (number / step));

    let interval = setInterval(() => {
      number = number + step;
      numbers[i].innerHTML = number + "+";
      if (number === startNumber[i]) {
        clearInterval(interval);
      }
    }, timeInterval);
  }
});
