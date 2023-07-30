const section = document.querySelector(".howitworks");
const btns = section.querySelectorAll("button");
const liItems = section.querySelectorAll("li");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const id = btn.id - 1;

    for (let i = 0; i < liItems.length; i += 1) {
      if (i === id) {
        liItems[i].classList.remove(`is-hidden`);
        btns[i].classList.add(`active`);
      } else {
        liItems[i].classList.add(`is-hidden`);
        btns[i].classList.remove(`active`);
      }
    }
  });
});
