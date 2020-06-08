let textHolder = document.querySelector('.functionality__description');
let btn = document.querySelector('.button__readmore');
debbuger;
function toggleText() {
  textHolder.classList.toggle("functionality__description");
}

btn.addEventListener('click', toggleText);
toggleText();