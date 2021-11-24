let cards = [];

let sum = 0;

let hasBlackJack = false;
let isAlive = false;

let message = '';

let canPick = true;

let botaoStart = document.getElementById('start');

let messageEl = document.getElementById('message-el');

let sumEl = document.querySelector('#sum-el');

let cardsEl = document.getElementById('cards-el');

let player = {

    name: "Pedro",
    chips: 145
}

let playerEl = document.getElementById('player-el');

playerEl.innerHTML = `${player.name}: $${player.chips}`;


function getRandomCard(){

    let numRandom = Math.floor(Math.random() * 13) + 1;
    if (numRandom === 1){

        return 11;

    } else if (numRandom == 11 || numRandom == 12 || numRandom == 13){

        return 10;

    } else {

        return numRandom;
    }
}


function startGame(){

    if(canPick === true){

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum += firstCard + secondCard;
    isAlive = true;
    canPick = false;
    renderGame();
}
}

function renderGame(){

    if (sum < 21){

        message = 'Do you want to draw a new card?🤔'
    
    } else if (sum === 21){
    
        message = "you've got blackjack!🤑"
        hasBlackJack = true;
    
    } else{
    
        message = 'you are out of the game!😭'
        isAlive = false;
    }

    messageEl.innerHTML = message;
    sumEl.innerHTML = "Sum: " + sum;
    cardsEl.innerHTML = "Cards: "; 
    
    for(let i = 0; i < cards.length; i++){

        cardsEl.innerHTML += cards[i] + ' '
    }
}

let newCardEl = document.getElementById('new');

newCardEl.addEventListener('click', () =>{

    if (isAlive === true && hasBlackJack === false){

        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame();
    }
    
})

