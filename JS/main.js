const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const card5 = document.querySelector('.card5');

const teamCard = document.querySelector('.team-card');


let leftPosition = -1500;
let position1 = -2150;
let position2 = -1850; 
let position3 = -1680; 
let position4 = -1900; 
let position5 = -1500;
let topPosition = 0;
let wave = 0;

    

observer = new IntersectionObserver((entries) => {
    if(entries[0].intersectionRatio > 0){
        const changePosition = () => {
            if(leftPosition !== 0){
                if(window.outerWidth > 790){
                    leftPosition +=10;
                position1 += 10;
                card1.style.marginLeft = `${position1}px`;
                card1.style.marginTop = `${-55}px`;                
                position2 += 12;
                card2.style.marginLeft = `${position2}px`;
                position3 += 15;
                card3.style.marginLeft = `${position3}px`;
                card3.style.marginTop = `${-55}px`
                position4 += 10;
                card4.style.marginLeft = `${position4}px`;
                card4.style.marginTop = `${topPosition}px`;
                topPosition -= -2.5;
                position5 += 12;
                card5.style.marginLeft = `${position5}px`;
                card5.style.marginTop = `${topPosition}px`; 
                }  
            } 
            if(leftPosition === 0){
                clearInterval(interval);  
            }  
        } 
        
         
        const interval = setInterval(changePosition, 100);
        
    }
})

let upWave = 0; 

const waveUpFunc = () => {
    if(leftPosition === 0){
        wave++;
        if(wave % 2 === 0){            
                card1.style.marginTop = `${upWave - 55}px`;
                card1.style.transform =  'scale(1.001)';
                card2.style.marginTop = `${upWave}px`;
                card2.style.transform =  'scale(0.99)';
                card3.style.marginTop = `${upWave  - 55}px`;
                card3.style.transform =  'scale(1.001)';
                card4.style.marginTop = `${upWave + 375}px`;
                card4.style.transform =  'scale(0.99)';
                card5.style.marginTop = `${upWave + 375}px`;
                card5.style.transform =  'scale(0.99)';
                upWave += 12;            
        } else {
                card1.style.marginTop = `${upWave  - 55}px`;
                card1.style.transform =  'scale(0.99)'; 
                card2.style.marginTop = `${upWave}px`;
                card2.style.transform =  'scale(1.001)'; 
                card3.style.marginTop = `${upWave  - 55}px`;
                card3.style.transform =  'scale(0.99)'; 
                card4.style.marginTop = `${upWave + 375}px`;
                card4.style.transform =  'scale(1.001)'; 
                card5.style.marginTop = `${upWave + 375}px`;
                card5.style.transform =  'scale(1.001)'; 
                upWave -= 12;
        }
    }
    
}

setInterval(waveUpFunc, 750)
observer.observe(teamCard);

const bubbleWater = document.querySelectorAll('.team_bubble-water');

let bubbleOpacity1 = 1;
let bubbleTop1 = 0;
let bubbleOpacity2 = 1;
let bubbleTop2 = 0;
let bubbleOpacity3 = 1;
let bubbleTop3 = 0;
let bubbleOpacity4 = 1;
let bubbleTop4 = 0;
let bubbleOpacity5 = 1;
let bubbleTop5 = 0;

const bubbleWaterTime = () => {
    if(leftPosition === 0){
        for( let i = 0; i < 1; i++){
            bubbleTop1 -=4;
            bubbleWater[0].style.display = 'inline'
            bubbleWater[0].style.marginTop = `${bubbleTop1}px`;
            bubbleWater[0].style.opacity = bubbleOpacity1;
            bubbleOpacity1 = bubbleOpacity1 - 0.085;
            bubbleTop2 -=4;
            bubbleWater[1].style.display = 'inline'
            bubbleWater[1].style.marginTop = `${bubbleTop2}px`;
            bubbleWater[1].style.opacity = bubbleOpacity2;
            bubbleOpacity2 = bubbleOpacity2 - 0.085;
            bubbleTop3 -=4;
            bubbleWater[2].style.display = 'inline'
            bubbleWater[2].style.marginTop = `${bubbleTop3}px`;
            bubbleWater[2].style.opacity = bubbleOpacity3;
            bubbleOpacity3 = bubbleOpacity3 - 0.085;
            bubbleTop4 -=4;
            bubbleWater[3].style.display = 'inline'
            bubbleWater[3].style.marginTop = `${bubbleTop4}px`;
            bubbleWater[3].style.opacity = bubbleOpacity4;
            bubbleOpacity4 = bubbleOpacity4 - 0.085;
            bubbleTop5 -=4;
            bubbleWater[4].style.display = 'inline'
            bubbleWater[4].style.marginTop = `${bubbleTop5}px`;
            bubbleWater[4].style.opacity = bubbleOpacity5;
            bubbleOpacity5 = bubbleOpacity5 - 0.085; 
            if(bubbleOpacity1 <= 0 ){
                bubbleOpacity1 = 1;
                bubbleTop1 = 0;
                bubbleOpacity2 = 1;
                bubbleTop2 = 0;
                bubbleOpacity3 = 1;
                bubbleTop3 = 0;
                bubbleOpacity4 = 1;
                bubbleTop4 = 0;
                bubbleOpacity5 = 1;
                bubbleTop5 = 0;
            }
        }
             
        
    }
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

setInterval(bubbleWaterTime, 150)
