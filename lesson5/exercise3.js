function onCLick(){
    console.log("Clicked");
}

//Exercise 3

//1
const suits = ["clubs","diamonds","hearts","spades"];

//2
const values = ["3","2","5","4","7","6","8","9","10","Q","J","K","A"];
// const numericValues = [3, 2, 5, 4, 7, 6, 8, 9, 10, 12, 11, 13, 14];

const valueToNumberMapper = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,
}

//3
const cards = [];

for (let i = 0; i < suits.length; i += 1) {
    for (let j = 0; j < values.length; j +=1){
        const card = {
            suit: suits[i],
            value: values[j],
            numericValue: valueToNumberMapper[values[j]]
            // numericValue = numericValues[j]
        };
        cards.push(card);
    }
}

function bubbleSort(myArray) {
    const array = [...myArray];
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i += 1) {
        if (array[i - 1].numericValue < array[i].numericValue) {
          done = false;
          let tmp = {...array[i - 1]};
          array[i - 1] = {...array[i]};
          array[i] = {...tmp};
        }
      }
    }
  
    return array;
}

const sortedCards = bubbleSort(cards);
console.log(sortedCards)

// const sortedCards1 = cards.map((el) => ({...el}));

// for(let i=0; i < cards.length; i++){
//     for(let j=0; j < cards.length - 1 ; j++){
//         if(cards[j] < cards[j + 1]) {
//             const tempCard = {
//                 suit: cards[j].suit,
//                 value: cards[j].value,
//                 numericValue: cards[j].numericValue
//             };

//             cards[j] = {
//                 suit: cards[j + 1].suit,
//                 value: cards[j + 1].value,
//                 numericValue: cards[j + 1].numericValue
//             }

//             cards[j + 1] = {
//                 suit: tempCard.suit,
//                 value: tempCard.value,
//                 numericValue: tempCard.numericValue
//             };
//         }
//     }
// }

//4
const groupedCards = {};

for (const suitIndex in suits){
    groupedCards[suits[suitIndex]] = [];
    for (const cardIndex in cards) {
        if (suits[suitIndex] == cards[cardIndex].suit){
            // ... is called spread operator
            groupedCards[suits[suitIndex]].push({...cards[cardIndex]});
        }
    }
}

console.log(groupedCards);

console.log(cards);

cards.sort(function(card1, card2){
    if(card1.numericValue > card2.numericValue) {
        return -1;
    } else if (card1.numericValue < card2.numericValue){
        return 1;
    }

    return 0;
});

console.log(cards);

// const newCards = cards.map(
//     function(card, index, arr){
//         return {...card, newProperty: index * arr.length};
//     }
// );

// const newCards = cards.map(
//     (card, index, arr) => {
//         return {...card, newProperty: index * arr.length};
//     }
// );

const newCards = cards.map(
    (card, index, arr) => ({...card, newProperty: index * arr.length})
);

console.log(newCards);

const diamondCards = cards.filter(({suit}, index, array) => suit === "diamonds");
console.log(diamondCards);

const diamondCards = cards.filter((card, index, array) => card.suit === "diamonds");
console.log(diamondCards)





