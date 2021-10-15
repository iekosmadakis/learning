//This is a comment
console.log("Hello World");
console.log([1,2,3,4,5]);

console.log("Learning about == & ===");
console.log(1 == "1");
console.log(1 === "1");

console.log("Learning about != & !==");
console.log(1 != "1");
console.log(1 !== "1");

console.log("Learning about variables");
var x;
console.log(x);

console.log("Learning about arrays (arrays are a form of objects)");
var y = [1,"xristos",2,3];
console.log(y);

console.log("Learning about objects")
var z = {
    'name': "Giannhs", //<key1>: <value1>
    age: 22 //<key2>: <value2>
};

console.log(z);
console.log(z.age);
console.log(z["name"]);
console.log(z.name);

console.log("Search inside object")
var key = "age";
console.log(z[key]);

var a = 1;
var b = a;
a = 2;

console.log("Primitive types fumction by value")
console.log(a + ' ' + b);
console.log(a + a + ' ' + b + a);
console.log(b + a + "7");

console.log("Object inside object")
var c = {
    a: 1,
    b: {
        x: 10,
        y: 11
    }
};

var d = c.b;
d.x = 20;

console.log(c); //objects, array - by reference | primitive types (numbers, strings, boolean, undefined, null, symbol) -> by value


var e = [1,2,3];
var f = e;
f[0] = 10;

console.log(e); //also by reference


console.log("Learning about different types of variables")
console.log(typeof 10);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof c);

console.log(null === undefined);
console.log(null == undefined);

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean([]));
console.log(Boolean(c));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("hello"));
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));
console.log(Boolean(new Date()));

console.log(`hello ${c.a}`) //template literal

var x = 5;
x = "xristos"; //coercion

