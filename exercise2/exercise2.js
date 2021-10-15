//Exercise 2

let age;
let answer;

console.log("Welcome to exercise 2");
window.alert("I am an alert box. Don't want to scare you! Just press OK to continue");

answer = window.prompt("Please enter your age:", "Type here your age");
age = parseInt(answer);

while (isNaN(age)) {
    console.log("Please try again by entering a real value");
    answer = window.prompt("Please enter your age:", "Type here");
    age = parseInt(answer);
}

if(age > 18){
    console.log("Ok so you are an adult");
}
else{
    console.log("Ok so you are just a child");
}