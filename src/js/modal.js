const refs = {
  openModalBtns: document.querySelectorAll("[data-modal-open]"),
  backdrops: document.querySelectorAll(`.backdrop`),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
  body: document.querySelector("body"),
  formModal: document.querySelector(".modal__form"),
  formConsultation: document.querySelector(".consultation__form"),
  notification: document.querySelector("[data-notification]"),
  input: document.querySelectorAll("input"),
  upBtn: document.querySelector(".go-up"),
  downBtn: document.querySelector(".go-down"),
};

const { VITE_TOKEN: TOKEN, VITE_CHAT_ID: CHAT_ID } = import.meta.env;
const API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

refs.openModalBtns.forEach((el) => {
  el.addEventListener("click", onOpenModal);
});

refs.backdrops.forEach((el) => {
  el.addEventListener("click", onClickBackdrop);
});

refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.formModal.addEventListener("submit", onSendInformation);
refs.formConsultation.addEventListener("submit", onSendInformation);

refs.input.forEach((el) => {
  el.addEventListener("blur", () => {
    if (el.value.length === 0) {
      showErr(el, "This field is required!");
    }
  });
});

function onOpenModal() {
  refs.modal.classList.remove("is-hidden");
  refs.upBtn.classList.add("is-hidden");
  refs.downBtn.classList.add("is-hidden");
  refs.body.classList.add("disable-scroll");
  window.addEventListener("keydown", escClose);
}

function onCloseModal() {
  refs.modal.classList.add("is-hidden");
  refs.upBtn.classList.remove("is-hidden");
  refs.downBtn.classList.remove("is-hidden");
  onCloseNotifacation();
}

function onCloseNotifacation() {
  refs.notification.classList.add("is-hidden");
  refs.body.classList.remove("disable-scroll");
  window.removeEventListener("keydown", escClose);
}

function onClickBackdrop(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
    onCloseNotifacation();
  }
}

function escClose(e) {
  if (e.code === `Escape`) {
    onCloseModal();
    onCloseNotifacation();
  }
}

function onSendInformation(e) {
  e.preventDefault();
  const {
    elements: { phone, email },
  } = e.currentTarget;

  if (!phone.value.length || !email.value.length) {
    notification("error", "All fields must be filled");
    return;
  }

  const message = `<b>New contact from Landing!</b> %0A<b>Phone:</b> ${phone.value} %0A<b>Email:</b> ${email.value}`;

  fetch(`${API}?chat_id=${CHAT_ID}&text=${message}&parse_mode=html`)
    .then((res) => {
      notification("success", "Contacts sent! We will contact you shortly!");
      refs.formModal.reset();
      refs.formConsultation.reset();
    })
    .catch((error) => notification("error", "Oops, something happened! Please try again"));
}

function notification(status, textNotification) {
  refs.notification.classList.remove("is-hidden");
  refs.body.classList.add("disable-scroll");
  window.addEventListener("keydown", escClose);

  document.querySelector(".notification").classList.add(`notification__${status}`);
  document.querySelector(".notification__text").textContent = textNotification;

  setTimeout(() => {
    onCloseModal();
    refs.notification.classList.add("is-hidden");
  }, 3000);
}

function showErr(field, errText) {
  if (field.nextElementSibling && field.nextElementSibling.textContent === errText) {
    return;
  }

  const err = document.createElement("p");
  field.after(err);
  err.classList.add("error");
  err.textContent = errText;

  hideErr(field, err);
}

function hideErr(field, err) {
  field.addEventListener("input", () => {
    err.remove();
  });
}
