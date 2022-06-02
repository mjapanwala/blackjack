const startGameButton = document.getElementById('start-game')
const newCardButton = document.getElementById('new-card')
const holdCardButton = document.getElementById('hold-card')
const headerTitle = document.getElementById('onlyItalics');
const allFlexContainers = document.querySelectorAll('div')
const cards = document.getElementById('card-suits');
const cardSum = document.getElementById('card-sum')
const cardsSelection = document.getElementById('cards-selection')
const newCard = document.getElementById('new-card')

startGameButton.addEventListener('click', startGame);
newCard.addEventListener('click', addNewCard)

let cardNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let cardSuits = ["hearts", "spade", "diamonds", "clubs"];
let totalCards = 52;
let blackJack = 21;
let totalAmount = 0;
let suitsOne;
let suitsTwo;
function generateRandomNumberForCardNumber() {
    return Math.floor(Math.random() * 10);
}

function generateRandomNumberForSuits() {
    return Math.floor(Math.random() * 4);
}
function addNewCard() {
    const createNewCard = generateRandomNumberForCardNumber();
    const createNewSuit = generateRandomNumberForSuits();
    totalAmount = totalAmount + createNewCard
    cardSum.textContent = totalAmount
    const makeContentIntoNumber =  cardSum.textContent.split('').filter((item, index, array) => {
        if(!isNaN(item)) {
            return true;
        }
        if (array.includes('')) {
            return false;
        }
    })
const createParagraph = document.createElement('p');
createParagraph.classList.add('white-color')
createParagraph.innerText = `${suitsOne} ${suitsTwo}`
cards.appendChild(createParagraph);

}

function startGame() {
headerTitle.textContent = 'Do you want to draw a card';
holdCardButton.classList.remove('hide-info');
 suitsOne = cardSuits[generateRandomNumberForSuits()];
 suitsTwo = cardSuits[generateRandomNumberForSuits()];
}