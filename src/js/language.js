// const refs = {
//   uaBtns: document.querySelector("[data-language-ua]"),
//   enBtns: document.querySelector("[data-language-en]"),
// };

// refs.uaBtns.addEventListener("click", changeURLLanguage);

// refs.enBtns.addEventListener("click", changeURLLanguage);

// function toogleLanguage(e) {
//   refs.uaBtns.classList.toggle("active-language");
//   refs.enBtns.classList.toggle("active-language");
//   console.log(document.querySelector(".active-language").value);
// }

// function changeURLLanguage() {
//   let lang = document.querySelector(".active-language").value;
//   location.href = window.location.pathname + "#" + lang;
//   toogleLanguage();
//   location.reload();
// }

// function changeLanguage() {
//   let hash = window.location.hash;
//     hash = hash.substr(1);
//   console.log(hash);
//     if (!allLang.includes(hash)) {
//       location.href = window.location.pathname + "#en";
//       location.reload();
//     }
//     select.value = hash;
//     document.querySelector("title").innerHTML = langArr["unit"][hash];
//   document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
//     for (let key in langArr) {
//       let elem = document.querySelector(".lng-" + key);
//       if (elem) {
//         elem.innerHTML = langArr[key][hash];
//       }
//     }
// }

// changeLanguage();
