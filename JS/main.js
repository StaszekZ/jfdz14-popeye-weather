const teamCards = document.querySelectorAll('.team-card');
let card;

for (const teamCard of teamCards) {
    let teamCardX = 0;
    let teamCardY = 0;
    teamCard.style.left = `${teamCardX}px`;
    teamCard.style.top = `${teamCardY}px`;

    let drawActive = false;

    teamCard.addEventListener('mousedown', () => {
        drawActive = true;
    })

    teamCard.addEventListener('mousemove', (e) => {
        console.log('mousemove');
        if (drawActive) {
            for (let i = 1; i <= 5; i++) {
                card = document.querySelector('.card' + [i]);
                if (teamCard === document.querySelector('.card1')) {
                    teamCardX = 450;
                    teamCardY = -300;
                    teamCard.style.left = `${teamCardX}px`;
                    teamCard.style.top = `${teamCardY}px`;
                } else if (teamCard === document.querySelector('.card2')) {
                    teamCardX = 150;
                    teamCardY = -300;
                    teamCard.style.left = `${teamCardX}px`;
                    teamCard.style.top = `${teamCardY}px`;
                }
                else if (teamCard === document.querySelector('.card3')) {
                    teamCardX = -150;
                    teamCardY = -300;
                    teamCard.style.left = `${teamCardX}px`;
                    teamCard.style.top = `${teamCardY}px`;
                }
                else if (teamCard === document.querySelector('.card4')) {
                    teamCardX = -450;
                    teamCardY = -300;
                    teamCard.style.left = `${teamCardX}px`;
                    teamCard.style.top = `${teamCardY}px`;
                }
                else if (teamCard === document.querySelector('.card5')) {
                    teamCardX = 0;
                    teamCardY = -570;
                    teamCard.style.left = `${teamCardX}px`;
                    teamCard.style.top = `${teamCardY}px`;
                }
            }
        }

    })

    teamCard.addEventListener('mouseup', () => {
        if (drawActive === true) {
            teamCard.style.left = 0;
            teamCard.style.top = 0;
            drawActive = false;
        }
    })

}





// ============= slider ======================== //

const buttonPrev = document.querySelector(".button__prev");
const buttonNext = document.querySelector(".button__next");
const slides = document.querySelectorAll('.slides');

const slidesLength = slides.length;


console.log(slides)

let currentState = 0;

slides[currentState].classList.add('active');


const slideLeft = () => {
    slides[currentState].classList.remove('active');
    currentState -= 1;
    if (currentState < 0) {
        currentState = 4;
        slides[currentState].classList.add('active');

    };
    slides[currentState].classList.add('active');
}

const slideRight = () => {
    slides[currentState].classList.remove('active');
    currentState = (currentState + 1) % slidesLength;
    slides[currentState].classList.add('active');
    // clearInterval(intervalRight);
    // setInterval(slideRight, 2000)
}

// const intervalRight = setInterval(slideRight, 6000);
buttonPrev.addEventListener('click', slideLeft);
buttonNext.addEventListener('click', slideRight);

