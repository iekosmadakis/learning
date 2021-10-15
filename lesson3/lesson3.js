// Lesson 3

// Coercion

// Implicit coercion
// Όταν μια μεταβλητή αλλάζει τύπο μετά από ανάθεση τιμής
var x = 5;
console.log(typeof(x));
x = "Xristos";
console.log(typeof(x));

console.log('------------------------');

// Explicit coercion - Casting
//  'Όταν μια μεταβλητή αλλάζει τύπο μετά από τη χρήση κάποιας συνάρτησης
var y = '5'
console.log(typeof(y));
y = Number(y);
console.log(typeof(y));

console.log(Boolean(5))
console.log(Boolean(0))

console.log('------------------------');

// var let const

// const
const c = 5;
// c = 7; // --> type Error
const t = ['a'];
t.push('b')
console.log(t);

const o = {a: 5};
o.a = 6;
o.b = 7;
console.log(o);
// o = ''; // --> type error

// var -- hoisting
// Το hoisting είναι όταν ο ορισμός των μεταβλητών μεταφέρεται εσωτερικά από τη javascript στο ανώτερο επίπεδο του scope - code bloc
var x = 6;
var x = 7;
console.log(x)

d = 8;
console.log(d);

console.log(u);
var u = 10;

// let -- not hoisted
let g = 'asdf';
// let g = 'a'; // --> syntax error

// q = 6; // --> reference error
let q = 10;

// hoisting is "bad"
const rrr = 10;

function myFunc() {
    if(rrr > 5) {
        x = 30;
        console.log(x);
    }
}

var x = 10;

myFunc();
console.log(x);

console.log('------------------------');

// Operators
var k = 1;
k++;
console.log(k);
console.log(k++);
console.log(k);
console.log(++k);
console.log(k);

console.log(10 % 3);

