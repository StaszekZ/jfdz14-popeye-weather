const description = document.querySelector(".modal");
const modalText = document.querySelector(".modal__text");
const buttons = document.querySelectorAll(".functionality__button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");

buttons.forEach(function (button, index) {
  button.addEventListener("click", (e) => {
    console.log(i18next);
    description.style.display = "block";
    modalText.setAttribute("data-i18n", `func.fun${index + 1}`);
    i18next.changeLanguage().then(function () {
      localize();
    });
  });
});

closeModal.addEventListener("click", () => {
  description.style.display = "none";
  modalText.removeAttribute("data-i18n");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    description.style.display = "none";
    modalText.removeAttribute("data-i18n");
  }
});
