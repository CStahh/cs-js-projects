//The ternary operator (expresion instead of statement)
function checkNumber (x) {
    var magicNumber = 10;
    return x > magicNumber ? 'x is bigger than mag num':
     'x is less than or equal to the magic num';
    /*if (x > magicNumber) {
        return 'x is bigger than mag num';}
        else {
            return 'x is less than or equal to the magic num';
        }*/
}
//console.log(checkNumber(11));
//if/else vs ternary

var magicNumber = 10;
var x = 4;
/*if (x > magicNumber) {
    console.log('x is bigger than mag num');
    alert('You beat the magic num');
    } else {
        alert('better luck next time');
    }*/
console.log(x > magicNumber ?
    'x is bigger':
    'x is equal or smaller');



//Truthy and falsy
//console.log(1 && true);
//truthy is value that can be coercer to being boolean true- vice versa falsey
var hasValidCountry = true;
var countryEntered = 'England';
var country = hasValidCountry && countryEntered;
//console.log(country);

function createUser (email, password, name) {
    return {
        email: email,
        password: password,
        name: name || '',
    }
}
//console.log(createUser('c@r', 'abc', ''));

//Boolean equality operators
var a = 1;
var b = 10;
//console.log(a === b);
//console.log('aaa' > 'b');
//console.log(false && (false || true));

var magicNumber = 10;
function isNotEqualToMagicNumber(x) {
    var magicNumber = 10;
    return (x === magicNumber);
}

//console.log(isNotEqualToMagicNumber(10));

//if and else
function isBiggerThanMagicNumber (x) {
    var magicNumber = 10;
    if (x === magicNumber) {
        console.log(x, 'is equalt to the magic number');}

        else if (x > magicNumber) {
            console.log(x, 'is greater than the magic number')
        }
        else if (x < magicNumber) {
            console.log(x, 'is less than the magic number')
        }
    }
//console.log(isBiggerThanMagicNumber(6));

//Truthy and falsy





/*//A quick intro to functions
function add (a, b) {
    //console.log('Returning:', a, b);
    return a + b;
};
console.log(add(128, 3));

var a = add(1, 4);
var b = add(14, 268);
console.log(a, b);*/


//function declarations



/*//Type coercion
var a = 4;
var b = 'hi';
console.log(a + b);

// == vs ===
console.log(2 == '2');
console.log(1 === '1');

//Exercise 1
var a = '10';
var b = '5';
var c = '20';
var d = '30';

var result;
result = Math.ceil((Number(a) + Number(b) + Number(c) + Number(d)) / 4);

var randomDieRollOutcome = Math.floor(Math.random() * 6) + 1;
//randomDieRollOutcome = Math.random(1, 6);

console.log(result);
console.log(randomDieRollOutcome);*/



//Pre June 7

//alert('Hello From Javascript Land')
/*var firstName = 'Chris';
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

console.log('random whole', Math.floor(Math.random() * 10));*/

/*//Fun with strings
var greeting = 'hello!';
var orderCode = 'GSX-1149';
var longString = 'fngsjng/nfsjgnfao/ndajgasnj/nfadsj gdjk/Hiiiiiiiiiiiii';
console.log(orderCode.substring(5));
console.log(orderCode.replace('GSX-', ''));

console.log(window.location.pathname);
console.log(longString.split('/'));
console.log(greeting.toUpperCase());

var p1 = 'js';
var p2 = 'is';
var p3 = 'cool';
var cString = p1 + '-' + p2 + '-' + p3;
console.log(cString.toUpperCase());

//console.log(p1 + '-' + p2 + '-' + p3);*/











