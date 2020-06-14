// const descriptions = document.querySelectorAll('.functionality__description');
// const buttons = document.querySelectorAll(".functionality__button");
// const boxes = [...document.querySelectorAll('.functionality__box')];
// console.log(buttons);
const background = document.querySelector('#functionality');


document.querySelector('body').addEventListener('click', function (e) {
  if (e.target.className.match('functionality__button')) {
    const parent = e.target.parentElement;
    console.log(parent);

    // const elementRect = parent.getBoundingClientRect();
    // const absoluteElementTop = window.pageYOffset + elementRect.top;
    // const middle = absoluteElementTop - (window.innerHeight / 2);
    // console.log(middle);
    // console.log(absoluteElementTop);
    // console.log(elementRect.top);
    // console.log(window.pageYOffset);

    window.scrollTo(0, pageYOffset);

    // parent.scrollIntoView()
    // {
    //   behavior: "smooth",
    //   block: "center",
    //   inline: "center"
    // });

    parent.classList.toggle('active3');
    parent.children[2].classList.toggle('active__description');
    document.querySelector('.gradient').classList.toggle('overlay');

    if (e.target.textContent === 'Show More') {
      e.target.textContent = 'Show Less';
      let div = document.createElement('div');
      div.classList.add('back');
      background.appendChild(div);
    } else {
      e.target.textContent = 'Show More';
      let div = document.querySelector('.back');
      background.removeChild(div);

    }
  } else {
    console.error(`not a button!`);
  }
});