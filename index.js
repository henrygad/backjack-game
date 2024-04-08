// 21 means you've win. in > 21 you can collect a card. 21 > you've failed


let isAlive = false
let hasBlackJack = false
let arrayOfCards =[]
let sumOfCard = 0;
let playerProfile = {
    name: 'Henry',
    amount: 0
}


// DOM
let messageEl = document.getElementById('message-el')
let cards = document.getElementById('cards')
let sumEl = document.getElementById('sum-el')
let playerPrf = document.getElementById('player-prf')
let playerAmt = document.getElementById('player-amt')

//genarating random Cards
function genarateRandomNum() {
  let randomNumbers = Math.floor(Math.random() * 13) + 1
   if( randomNumbers > 10) {
        return 10
   } else if(randomNumbers === 1) {
         return 11
   }else {
     return randomNumbers
   }
}

//start game
function startGame() {
   if(isAlive === false || hasBlackJack ===true ) {
        //run
    playerPrf.innerHTML = `<p id="player-prf">Hi! ${playerProfile.name} <span id="player-amt"></span></p>`
    playerAmt.innerHTML = playerProfile.amount
    isAlive = true
    hasBlackJack = false
    let firstCard = genarateRandomNum() ;
    let secondCard = genarateRandomNum();
    arrayOfCards =[
        firstCard,
        secondCard,
    
    ]
    sumOfCard = arrayOfCards[0]+ arrayOfCards[1];

    renderGame()
    } 
}

//render game
function renderGame() {
    cards.innerHTML = 'Cards: '
    for(i=0; i < arrayOfCards.length; i++) {
    cards.innerHTML +=  arrayOfCards[i] + ' '
    }

    sumEl.innerHTML = 'Sum: ' + sumOfCard

    if(sumOfCard < 21 ) {
        messageEl.innerHTML = 'Do you what to draw new card?'
        isAlive = true
    } else if(sumOfCard === 21){
        messageEl.innerHTML = "You've got Blackjack!"
        arguments
        hasBlackJack = true
        if(hasBlackJack === true) {
        playerProfile.amount = 100
        playerPrf.innerHTML =  playerPrf.innerHTML = `<p id="player-prf">Hi! ${playerProfile.name} <span id="player-amt">Amount: Congrat!! you won $${playerProfile.amount}</span></p>`

        }
    } else{
        messageEl.innerHTML = "You're out of the game!"
        isAlive = false
    }
}
 //add new card
function newCard() {
    if(!hasBlackJack === true && isAlive === true ) {
        let moreCard = genarateRandomNum() ;
        arrayOfCards.push(moreCard)
        sumOfCard+= arrayOfCards[2]
        renderGame()
        
    }


}
