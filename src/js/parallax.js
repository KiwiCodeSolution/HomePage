const section = document.querySelector(".parallax__container");

const wrapper = section.querySelectorAll(".testimonials__list--imgwrapper");

section.addEventListener("mousemove", parallax);

function parallax(e) {
  wrapper.forEach((el) => {
    const x = (window.innerWidth - e.pageX * 0.75) / 100;
    const y = (window.innerHeight - e.pageY * 0.75) / 100;

    el.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
