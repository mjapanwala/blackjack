const startGameButton = document.getElementById('start-game')
const newCardButton = document.getElementById('new-card')
const holdCardButton = document.getElementById('hold-card')
const headerTitle = document.getElementById('header-round');
const allFlexContainers = document.querySelectorAll('div')
const cards = document.getElementById('card-suits');
const cardSum = document.getElementById('card-sum')
const cardsSelection = document.getElementById('cards-selection')
const newCard = document.getElementById('new-card')

startGameButton.addEventListener('click', startGame);

let cardSuits = ["hearts", "spade", "diamonds", "clubs"];
let cardNumber = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
let totalCards = 52;
let blackJack = 21;
let newDeck = [];
let count = 0
function startGame() {
    //Show the Hide Button
    holdCardButton.classList.remove('hide-info');
    //Change the text on the header
    headerTitle.textContent = 'Do you want to draw a new card?';
    //Create a deck with all cards
    if (count === 0) {
        count++
    for (let i = 0; i < cardSuits.length; i++) {
        for (let j = 0; j <cardNumber.length; j++) {
            let specialCardValue;
            if ((cardNumber[j] === "J") || (cardNumber[j] === "Q") || (cardNumber[j] === "K") ) {
                specialCardValue = 10
            }
            if (cardNumber[j] === "A") {
                specialCardValue = 11;
            }
            newDeck.push({
            cardNumber: isNaN(cardNumber[j]) ? specialCardValue : parseInt(cardNumber[j]),
            suits: cardSuits[i]
            })
        }
    } 
    }
    shuffleDeck() 
}
    const generateRandomNumber = () => Math.floor(Math.random() * newDeck.length)

function shuffleDeck() {
    //Change all the indexes in the decks array
    for (let i = 0; i < 1; i++) {
        const generation = generateRandomNumber()
        //select one card
        const {cardNumber, suits} = newDeck.slice(generation, generation + 1)[0];
        console.log(cardNumber, suits)
        // The card that was selected, remove it from the main deck card array
        const filteredDeck = newDeck.filter((item, index) => {
            if ((item.cardNumber !== cardNumber) && (item.suits !== suits)) {
                return true
            }
        })
        console.log(filteredDeck)
        
    }
}