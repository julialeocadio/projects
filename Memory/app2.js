document.addEventListener('DOMContentLoaded', () => {

    // Loading cards
    const cardArray = [
        { name: 'ganhou', img: 'images/ganhou.png' },
        { name: 'ganhou', img: 'images/ganhou.png' },
        { name: 'direita', img: 'images/direita.png' },
        { name: 'direita', img: 'images/direita.png' },
        { name: 'tras', img: 'images/tras.png' },
        { name: 'tras', img: 'images/tras.png' },
        { name: 'correndo', img: 'images/correndo.png' },
        { name: 'correndo', img: 'images/correndo.png' },
        { name: 'pulo', img: 'images/pulo.png' },
        { name: 'pulo', img: 'images/pulo.png' },
        { name: 'esquerda', img: 'images/esquerda.png' },
        { name: 'esquerda', img: 'images/esquerda.png' }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    const resetButton = document.querySelector('#reset-button');
    
    let cardsChosen = [];
    let cardsChosenId = [];
    let pair = [];

    // Create screen
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            const card = document.createElement('img');
            card.setAttribute('src', 'images/card.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // Check pairs
    function checkforMatch(){
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        // Two clicks on the same object
        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/card.png');
            cards[optionTwoId].setAttribute('src', 'images/card.png');
        }
        // Making a pair
        else if(cardsChosen[0] == cardsChosen[1]){
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            pair.push(cardsChosen);
        } else { // Not making a pair
            cards[optionOneId].setAttribute('src', 'images/card.png');
            cards[optionTwoId].setAttribute('src', 'images/card.png');
        }

        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = pair.length;

        if(pair.length == cardArray.length / 2){
            resultDisplay.textContent = 'Congrats! You found all pairs!';
        }
    }

    // Turning cards
    function flipCard() {
        const cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkforMatch, 500);
        }
    }

    // Reset game function
    function resetGame() {
        grid.innerHTML = ''; // Clear existing cards
        cardsChosen = []; // Reset chosen cards
        cardsChosenId = []; // Reset chosen IDs
        pair = []; // Reset pairs
        resultDisplay.textContent = '0'; // Reset display

        // Shuffle the card array
        cardArray.sort(() => 0.5 - Math.random());

        // Create a new board
        createBoard();
    }

    // Add event listener to the reset button
    resetButton.addEventListener('click', resetGame);

    // Create the initial board
    createBoard();
});
