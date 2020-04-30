const teamCards = document.querySelectorAll('.team-card');
let card;

for(const teamCard of teamCards){
    let teamCardX = 0;
    let teamCardY = 0;
    teamCard.style.left = `${teamCardX}px`;
    teamCard.style.top = `${teamCardY}px`;

    let drawActive = false;   



    teamCard.addEventListener('mousedown', () => {
        drawActive = true;    
    })
    
    teamCard.addEventListener('mousemove', () => {
        console.log('mousemove');
        if(drawActive === true){
            for(let i = 1; i <= 5; i++){
                card = document.querySelector('.card'+ [i]); 
                if(teamCard === document.querySelector('.card1')){
                    teamCardX = 450;
                    teamCardY = -300;
                    teamCard.style.left = `${teamCardX}px`;
                    teamCard.style.top = `${teamCardY}px`;
                } else if (teamCard === document.querySelector('.card2')){
                    teamCardX = 150;
                    teamCardY = -300;
                    teamCard.style.left = `${teamCardX}px`;
                    teamCard.style.top = `${teamCardY}px`;
                }
                else if (teamCard === document.querySelector('.card3')){
                    teamCardX = -150;
                    teamCardY = -300;
                    teamCard.style.left = `${teamCardX}px`;
                    teamCard.style.top = `${teamCardY}px`;
                }
                else if (teamCard === document.querySelector('.card4')){
                    teamCardX = -450;
                    teamCardY = -300;
                    teamCard.style.left = `${teamCardX}px`;
                    teamCard.style.top = `${teamCardY}px`;
                }
                else if (teamCard === document.querySelector('.card5')){
                    teamCardX = 0;
                    teamCardY = -570;
                    teamCard.style.left = `${teamCardX}px`;
                    teamCard.style.top = `${teamCardY}px`;
                }
            }            
        } 
    
    })
    
    teamCard.addEventListener('mouseup', () => {
        if(drawActive === true){
        teamCard.style.left = 0;
        teamCard.style.top = 0;
        drawActive = false; 
        }  
    })

}



