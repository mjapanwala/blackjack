const startGameButton = document.getElementById("start-game");
const newCardButton = document.getElementById("new-card");
const holdCardButton = document.getElementById("hold-card");
const headerTitle = document.getElementById("header-round");
const allFlexContainers = document.querySelectorAll("div");
const myHandUi = document.getElementById("my-hand");
const cardSumUi = document.getElementById("card-sum");
const myCardsTitle = document.getElementById("my-cards");
const newCard = document.getElementById("new-card");
const totalValueId = document.getElementById("total-value");
startGameButton.addEventListener("click", startGame);

let cardSuits = ["hearts", "spade", "diamonds", "clubs"];
let cardNumber = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
let totalCards = 52;
let blackJack = 21;
let newDeck = [];

let myCards = [];

function startGame() {
    // Clear previous deck and myCards 
     newDeck = [];
     myCards = [];
    // Rerender deck by calling render function (to remove previous cards from ui)
    renderCards()
  //Show the Hide Button
  holdCardButton.classList.remove("hide-info");
  //Change the text on the header
  headerTitle.textContent = "Do you want to draw a new card?";
  //Create a deck with all cards
  
    for (let i = 0; i < cardSuits.length; i++) {
      for (let j = 0; j < cardNumber.length; j++) {
        let cardValue = cardNumber[j];

        if (
          cardNumber[j] === "J" ||
          cardNumber[j] === "Q" ||
          cardNumber[j] === "K"
        ) {
          cardValue = 10;
        }
        if (cardNumber[j] === "A") {
          cardValue = 11;
        }
        newDeck.push({
          name: cardNumber[j],
          value: parseInt(cardValue),
          suit: cardSuits[i],
        });
      }
    }
  

  shuffleDeck();
}

const generateRandomNumber = () => Math.floor(Math.random() * newDeck.length);

function shuffleDeck() {
  for (let i = 0; i < 1000; i++) {
    const fromLocation = generateRandomNumber();
    const toLocation = generateRandomNumber();

    [newDeck[fromLocation], newDeck[toLocation]] = [
      newDeck[toLocation],
      newDeck[fromLocation],
    ];
  }
  console.log(newDeck);
  getCard();
  getCard();
}

function getCard() {
  const card = newDeck.pop();
  myCards.push(card);
  renderCards();
}

let randomString = "";

// A new card is pulled from the deck and added to myCards
// Html element with id=cards, which is a UL (list), holds the UI card elements

//

function renderCards() {
    // Create Ul dynamically
  var myCardsUiList = document.createElement('ul')
  myHandUi.innerHTML = ''
//   Go through myCards array and update myCardsUi and myHandsUi
  myCards.map((item) => {
    const child = document.createElement("li");
    child.textContent = `${item.value}`;
    myCardsUiList.appendChild(child);
    const createNewHand = document.createElement("li");
    createNewHand.textContent = `${item.suit}`
    myHandUi.appendChild(createNewHand)
  });
  myCardsTitle.nextSibling.replaceWith(myCardsUiList)

// Calculate the totalValue 
  const totalValue = myCards.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.value;
  }, 0);

//   Update cardSumUi with the totalValue
  cardSumUi.innerHTML = "";
  cardSumUi.textContent= totalValue
}
