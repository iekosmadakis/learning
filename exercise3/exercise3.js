//Exercise 3

//1
const suits = ["clubs","diamonds","hearts","spades"];

//2
const numbers = ["3","2","5","4","7","6","8","9","10","Q","J","K","A"];

//3
const cards = [];

for (var i = 0; i < suits.length; i += 1) {
    for (var j = 0; j < numbers.length; j +=1){
        const card = {
            suit: suits[i],
            number: numbers[j],
        };
        cards.push(card);
    }
}

console.log(cards);
console.log(cards.length);


//4
const groupedCards = {};

for (var suitIndex in suits){
    groupedCards[suits[suitIndex]] = [];
    for (const cardIndex in cards) {
        if (suits[suitIndex] == cards[cardIndex].suit){
            groupedCards[suits[suitIndex]].push(cards[cardIndex]);
        }
    }
}

console.log(groupedCards);