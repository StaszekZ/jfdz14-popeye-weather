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
                card1.style.transform =  'scale(1.01)';
                card2.style.marginTop = `${upWave}px`;
                card2.style.transform =  'scale(0.99)';
                card3.style.marginTop = `${upWave  - 55}px`;
                card3.style.transform =  'scale(1.01)';
                card4.style.marginTop = `${upWave + 375}px`;
                card4.style.transform =  'scale(0.99)';
                card5.style.marginTop = `${upWave + 375}px`;
                card5.style.transform =  'scale(0.99)';
                upWave += 10;            
        } else {
                card1.style.marginTop = `${upWave  - 55}px`;
                card1.style.transform =  'scale(0.99)'; 
                card2.style.marginTop = `${upWave}px`;
                card2.style.transform =  'scale(1.01)'; 
                card3.style.marginTop = `${upWave  - 55}px`;
                card3.style.transform =  'scale(0.99)'; 
                card4.style.marginTop = `${upWave + 375}px`;
                card4.style.transform =  'scale(1.01)'; 
                card5.style.marginTop = `${upWave + 375}px`;
                card5.style.transform =  'scale(1.01)'; 
                upWave -= 10;
        }
    }
    
}

setInterval(waveUpFunc, 750)
observer.observe(teamCard);

