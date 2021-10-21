// Lesson 4

const person = {
    name: "Ioannis",
    age: 27,
    surname: "Kosmadakis",
};

console.log(person);

const me = Object.create(person);

const me1 = Object.assign(person);

const m2 = { ...person };
console.log(m2)

const myArray = [1,2,3];
const myArray1 = [...myArray];

const olderPerson = {
    ...person,
    age: 30
};

console.log("----------------");

function add(...rest) {
    console.log(rest);
    return rest[0] + rest[1];
};

function add1(a, b, ...rest) {
    console.log("Arguments = ", arguments)
    console.log(rest);
    return a + b;
};

function add3() {
    console.log(arguments);
    return arguments[0] + arguments[1];
};

console.log(add(1,3));
console.log(add(1,2,3,4,5));
console.log(add1(1,2,3,4,5));

(function() {
    console.log('Automatically invoked')
})();

const isAdult = person.age >= 18 ? "yes" : person.age === 18 ? "yes and no" : "no";

const isAdult1 = (function xxx(){
    if(person.age >= 18) {
        return 'yes';
    } else {
        return 'no';
    }
})();

console.log(isAdult1);

function print() {
    return console.log;
}

print()('Xristos');

function myAdd(x, y) {
    return x + y;
}

function mySubstract(x, y) {
    return x - y;
}

function myMath(operator) {
    if(operator === '+') {
        return myAdd;
    } else {
        return mySubstract
    }
};

const myResult1 = myMath('+')(1,2);
const myResult2 = myMath('-')(4,2);
console.log(myResult1);
console.log(myResult2);

console.log('-----------');

const myArrowFunc = (a, b) => {
    let x = 9;
    x += 1;
    return x;
}

console.log(myArrowFunc());

const sum = (a) => (b) => a + b;

console.log(sum(1)(2));

// myArray.push, myArray.pop, myArray.map, myArray.filter, ********* myArray.reduce
