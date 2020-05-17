const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const card5 = document.querySelector('.card5');


let time = 0;
let leftPosition = -1500;
let position1 = -2150;
let position2 = -1850; 
let position3 = -1680; 
let position4 = -1900; 
let position5 = -1500;
let topPosition = 0; 

const changePosition = () => {
    if(leftPosition !== 0){
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
    
    if(leftPosition === 0){
        clearInterval(interval)
    }
    
}


const interval = setInterval(changePosition, 100)




