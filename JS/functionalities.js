const background = document.querySelector('#functionality');
const sections = document.querySelectorAll('section');
const formBox = document.querySelector('.form__box');

document.querySelector('body').addEventListener('click', function (e) {
  if (e.target.className.match('functionality__button')) {
    const parent = e.target.parentElement;
    console.log(parent);
    const fromTop = parent.getBoundingClientRect().top;
    console.log(fromTop);
    console.log(scrollY);

    if (scrollY < 2000) {
      window.scrollTo(0, scrollY + 500);
    } else {
      window.scrollTo(0, scrollY);
    }
    parent.classList.toggle('active3');
    parent.children[2].classList.toggle('active__description');
    parent.children[0].classList.toggle('hide__img');

    if (e.target.textContent === 'Show More') {
      e.target.textContent = 'Show Less';
      let div = document.createElement('div');
      div.classList.add('back');
      background.appendChild(div);
      formBox.style.zIndex = -10;

    } else {
      e.target.textContent = 'Show More';
      let div = document.querySelector('.back');
      background.removeChild(div);
      formBox.style.zIndex = 1;

    }
  } else {
    console.error(`not a button!`);
  }
});