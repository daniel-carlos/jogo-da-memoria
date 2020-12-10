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

shufflePairs = () => {
    var sequence = shuffle(Array.from(Array(cardsCount).keys()));
    console.log(sequence);

    cardPairs = [];
    
    sequence.forEach((v,i) => {
        if (i % 2 === 0) {
            cardPairs.push([sequence[i], sequence[i+1]]);
        }
    });
}

shufflePairs();