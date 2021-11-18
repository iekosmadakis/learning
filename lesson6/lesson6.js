// Lesson 6


const myArray = [3, 5, 8];

const myArrayPlus2 = [];


// forEach() calls a function for each element in an array.
myArray.forEach((element, index, arr) => {
    
    myArrayPlus2.push(element + 2);
});

console.log(myArrayPlus2)


// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
const myArrayPlus2New = myArray.map((element, index, arr) => {
    return element + 2;
});

console.log(myArrayPlus2New)


const myArrayPlus3New = myArray.map(function(element, index, arr){
    return element + 3;
})

console.log(myArrayPlus3New);

function mapper4(element, index, arr) {
    return element + 4;
}

const myArrayPlus4 = myArray.map(mapper4);

console.log(myArrayPlus4);

const people = [
    {name: 'Giannis', surname: 'Kosmadakis'},
    {name: 'Giannis', surname: 'Gamatos'},
    {name: 'Xristos', surname: 'Koronas'}
];

const names = people.map((person) => person.name);

console.log(names);

const peopleWithNumberOfChars = people.map((person) => ({
    ...person,
    numOfChars: person.name.length + person.surname.length
}));

console.log(peopleWithNumberOfChars);


// filter() creates a new array filled with elements that pass a test provided by a function.
const giannhdes = people.filter((person, index, arr) => person.name === 'Giannis');
console.log(giannhdes);

const person1andlater = people.filter((person, index, arr) => index > 0);
console.log(person1andlater);


// reduce() executes a reducer function for each value of an array.
//reduce() returns a single value which is the function's accumulated result.
const sum = myArray.reduce(
    (acc, el, index, arr)=>{
        return acc + el;
    },
    0
);

console.log(sum);


const myArrayPlus5 = myArray.reduce(
    (acc, el, indx, arr) => {
        acc.push(el + 5);
        return acc;        
    },
    []
    // initial Value
);

console.log(myArrayPlus5);

const myArrayGreaterThan4 = myArray.reduce(
    (acc, el, indx, arr) => {
        if (el > 4) {
            acc.push(el + 5);
        }
        
        return acc;
    },
    []
);

console.log(myArrayGreaterThan4);


const objFromArray = myArray.reduce(
    (acc, el, indx, arr) => {
        acc[`${el}`] = el;
        return acc;
    },
    {}
);

console.log(objFromArray);


//concat() concatenates (joins) two or more arrays.
//concat() returns a new array, containing the joined arrays.
const arrayWith3 = [1,2,3];
const arrayWith4 = arrayWith3.concat(4);
const arrayWith6 = arrayWith3.concat([4,5,6]);
console.log(arrayWith4);
console.log(arrayWith6);


// Να δω μόνος μου slice, splice etc!!!!!!!!!!!!

//slice() returns selected elements in an array, as a new array.
//slice() selects from a given start, up to a (not inclusive) given end.
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

console.log(citrus);


const whereTheMoneyGo = fruits.slice(-2, -1);

console.log(whereTheMoneyGo);


//splice() adds and/or removes array elements.
const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits2.splice(2, 1, "Xristos", "Kiwi"); //remove Lemon and add Xristos & Kiwi there

console.log(fruits2);

const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits3.splice(2, "Xristos", "Kiwi"); //add Xristos & Kiwi in position 2

console.log(fruits3);


//includes() returns true if an array contains a specified value.
//includes() is case sensitive.
console.log(fruits3.includes("Banana", 3)); //start searching from position 3