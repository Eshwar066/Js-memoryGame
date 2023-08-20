const cards=document.querySelectorAll(".a");

let hasFlippedCard=false;
let lockBoard=false;
let firstcard,secondcard;

cards.forEach(card => card.addEventListener('click',flipcard));

function flipcard(){
    if(lockBoard) return;
    if(this === firstcard) return;
    // console.log('i flipped the card');
    this.classList.add('flip');

    if(!hasFlippedCard){
        hasFlippedCard=true;
        firstcard = this;

        // console.log({hasFlippedCard,firstcard});
        return; 
    }

    // hasFlippedCard=false;
    secondcard=this;

        // console.log({hasFlippedCard,secondcard}); 
        // console.log(firstcard.dataset.name);
        // console.log(secondcard.dataset.name);
    checkforMatch();
    
}

function checkforMatch(){
    let isMatch=firstcard.dataset.name === secondcard.dataset.name;
    isMatch?disableCards():unflipCards();
}

function disableCards(){   
        firstcard.removeEventListener('click',flipcard);
        secondcard.removeEventListener('click',flipcard);
        console.log("Event executed");
        restBoard();
}

function unflipCards(){
    lockBoard=true;
    setTimeout(()=>{
        firstcard.classList.remove('flip');
        secondcard.classList.remove('flip');

        // lockBoard=false;
        restBoard();
    },1000)  
}

function restBoard(){
    [hasFlippedCard,lockBoard]=[false,false];
    [firstcard,secondcard]=[null,null];
}

(function shuffle(){
    cards.forEach(card =>{
        let randomPos=Math.floor(Math.random()*12);
        card.style.order= randomPos;
    })
})();