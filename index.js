//alert('Hello From Javascript Land')
var firstName = 'Chris';
console.log(firstName);
firstName = 'Phil';
console.log(firstName);

// DATA TYPES
// string
var person = 'Christopher';

// integer
var num1 = 5;
var num2 = 10;
var add = num1 * num2;

// bool
var falisity = true;

//object
var dude = {
    givenName: 'John',
    lastName: 'Smith',
    age: 50,
};

//undefined
var mystery;

//null
var zero = null;

//Maths
var a = 5;
var b = 7;
var result = a + b;
console.log(result);

//var min = Math.min(3, 12, 2);
//var max = Math.max(3, 12, 2);
console.log('min:', Math.min(3, 12, 2));
console.log('max:', Math.max(3, 12, 2));

console.log('ceil', Math.ceil(2.2));
console.log('ceil', Math.ceil(2));
console.log('ceil', Math.ceil(3.9));

console.log('floor', Math.floor(9.8));
console.log('floor', Math.floor(9));
console.log('floor', Math.floor(3.8647382));

// 0.9, 4.8, 1.5
var small = Math.min(0.9, 4.8, 1.5);

console.log('smallest/down', Math.floor(small));
console.log('smallest/down', Math.floor(Math.min(0.9, 4.8, 1.5)));
console.log('largest/up:', Math.ceil(Math.max(0.9, 4.8, 1.5)));

console.log('random whole', Math.floor(Math.random() * 10));









