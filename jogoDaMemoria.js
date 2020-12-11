const memoriaDiv = $("#memoria")[0];
const memoriaCards = $(".memoria-card");
const cardsCount = memoriaCards.length;
const pairsCount = memoriaCards.length / 2;

var totalScore = 0;
var attempts = 0;

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

var selection1 = undefined;
var selection2 = undefined;

var interact = true;

selectCard = (cardIndex) => {
    const card = cards[cardIndex];
    
    if (interact === false || card.closed === true || card.revealed === true) {
        return;
    }

    if (selection1 === undefined) {
        if (selection2 === undefined) {
            selection1 = card;
            card.revealed = true;
        } else {

        }
    } else {
        if (selection2 === undefined) {
            selection2 = card;
            card.revealed = true;

            attempts++;

            if (selection1.pair == selection2.pair) {
                console.log("Par Correto");
                selection1.closed = true;
                selection2.closed = true;
                selection1 = undefined;
                selection2 = undefined;
                totalScore++;
            } else {
                console.log("Par Errado");
                interact = false;

                setTimeout(() => {
                    selection1.revealed = false;
                    selection2.revealed = false;
                    selection1 = undefined;
                    selection2 = undefined;
                    interact = true;
                    updateCards();
                }, 1000);
            }
        } else {

        }
    }

    updateCards();
    onUpdateCards(totalScore, attempts, selection1, selection2);
}

cardWithId = (id) => {
    let c = undefined;
    cards.forEach(card => {
        if (c === undefined && card.id === id) {
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
            selectCard($('.memoria-card').index(this));
        }
    );

}

shuffleCards = () => {
    cards = shuffle(cards);
}

hideCards = () => {
    cards.forEach(card => {
        if (card.closed === false) {
            cards.revealed = false;
        }
    });
}

updateCards = () => {
    cards.forEach((card, i) => {
        var element = memoriaCards[i];

        if (card.revealed === true) {
            element.setAttribute("src", card.image);
            element.classList.add("show-card");
            element.classList.remove("hide-card");
        } else {
            element.setAttribute("src", hiddenImage);
            element.classList.remove("show-card");
            element.classList.add("hide-card");
        }
        
        if(card.closed === true){
            element.classList.add("closed-card");
        }
    });
}

setupCards();
shuffleCards();
updateCards();