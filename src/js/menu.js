const refs = {
  openMenuBtn: document.querySelector(".header__menu--open"),
  closeMenuBtn: document.querySelector(".header__menu--close"),
  logo: document.querySelector(".logo"),
  navLinks: document.querySelectorAll(".nav--mobile_link"),
  headerBtns: document.querySelector(".header_buttons"),
  menu: document.querySelector(".nav--mobile"),
  body: document.querySelector("body"),
  upBtn: document.querySelector(".go-up"),
  downBtn: document.querySelector(".go-down"),
};

refs.openMenuBtn.addEventListener("click", toggleMenu);
refs.closeMenuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  refs.headerBtns.classList.toggle("is-hidden");
  refs.logo.classList.toggle("is-hidden");
  refs.menu.classList.toggle("is-hidden");
  refs.upBtn.classList.toggle("is-hidden");
  refs.downBtn.classList.toggle("is-hidden");
  refs.body.classList.toggle("disable-scroll");
}

refs.navLinks.forEach((el) => {
  el.addEventListener("click", toggleMenu);
});
