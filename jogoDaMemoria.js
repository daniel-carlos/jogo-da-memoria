const memoriaDiv = $("#memoria")[0];

const memoriaCards = $(".memoria-card");


const cardsCount = memoriaCards.length;
const pairsCount = memoriaCards.length / 2;

var cardPairs = [];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var cards = []


selectCard = (cardIndex) => {
    console.log(cardIndex);
    cardWithId(cardIndex).revealed = true;
    updateCards();
}

cardWithId = (id) => {
    let c = undefined;
    cards.forEach(card => {
        if(c===undefined && card.id === id){
            c = card;
        }
    });
    return c;
}

setupCards = () => {
    cards = [];

    memoriaCards.each(i => {
        cards.push({
            id: i,
            image: allImages[Math.floor(i / 2)],
            pair: Math.floor(i / 2),
            revealed: false,
            closed: false
        });

    });

    memoriaCards.click(
        function () {
            // selectCard(cards[$('.memoria-card').index(this)].id);
            console.log($('.memoria-card').index(this));
            selectCard($('.memoria-card').index(this));
        }
    );
}

shuffleCards = () => {
    cards = shuffle(cards);
}

updateCards = () => {
    cards.forEach((card, i) => {
        var element = memoriaCards[card.id];

        if (card.revealed === true) {
            element.setAttribute("src", card.image);
        } else {
            element.setAttribute("src", hiddenImage);
        }
    });
}


setupCards();
shuffleCards();
updateCards();