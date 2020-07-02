const description = document.querySelector(".modal");
const modalText = document.querySelector(".modalText");
const buttons = document.querySelectorAll(".functionality__button");

buttons.forEach(function (button, index) {
  button.addEventListener("click", (e) => {
    console.log(e.target);

    description.style.display = "block";
    modalText.setAttribute("data-i18n", `func.fun${index + 1}`);
  });
});

const closeModal = document.querySelector(".close");
closeModal.addEventListener("click", () => {
  description.style.display = "none";
  modalText.removeAttribute("data-i18n");
});
