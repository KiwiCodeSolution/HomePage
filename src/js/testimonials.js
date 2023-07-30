import datas from "../data/testimonials.json";

const section = document.querySelector(".testimonials__list");
const cardElement = document.querySelector(".testimonials__card");

if (section) {
  const element = datas
    .map(
      (data) =>
        `<li class=testimonials__list--item${data.id}><div><div class=testimonials__list--imgwrapper id=${data.id} ><img src="${data.photo}" alt="${data.name}" class=testimonials__list--img${data.id} /></div></div></li>`
    )
    .join("");
  section.insertAdjacentHTML("afterbegin", element);
}

const imgwrapper = section.querySelectorAll(".testimonials__list--imgwrapper");

imgwrapper.forEach(function (wrapp) {
  wrapp.addEventListener("click", function (e) {
    const result = datas.find((el) => el.id === wrapp.id);

    if (result) {
      cardElement.innerHTML = `<div class=testimonials__card--imgwrapper><img src="/img/quote-up.png" alt="quote-up" class=quote-up />
    <img src="${result.photo}" alt="${result.name}" class=testimonials__card--img />
    </div>
    <p class=testimonials__card--name >${result.name}</p>
    <p class=testimonials__card--company >${result.company}</p>
    <div class=testimonials__card--text>
    <p >${result.text}</p><div class="testimonials__card--circle1"></div>
      <div class="testimonials__card--circle2"></div>
      <div class="testimonials__card--circle3"></div>`;
    }
  });
});

function firstRender() {
  const randomId = Math.floor(Math.random() * imgwrapper.length) - 1;

  if (datas[randomId]) {
    cardElement.innerHTML = `<div class=testimonials__card--imgwrapper><img src="/img/quote-up.png" alt="quote-up" class=quote-up />
    <img src="${datas[randomId].photo}" alt="${datas[randomId].name}" class=testimonials__card--img />
    </div>
    <p class=testimonials__card--name >${datas[randomId].name}</p>
    <p class=testimonials__card--company >${datas[randomId].company}</p>
    <div class=testimonials__card--text>
    <p >${datas[randomId].text}</p></div><div class="testimonials__card--circle1"></div>
      <div class="testimonials__card--circle2"></div>
      <div class="testimonials__card--circle3"></div>`;
  }
}

firstRender();
