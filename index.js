//Debugging - IMPORTANT! - finding mistakes and fixing them
//Stage 1 debug - gathering info

//Using the debugger
// 

function reversed(list) {
    //console.log(list);
    debugger;
    var result = ' ';
    for (var i = list.length - 1; i >= 0; i--) {
        result = result + list[i] + ',';
    }
};
reversed(['foo ', 'bar ', 'bac ']);


//Debugging
//--------------------------------------------------------------


//iterating with for loops
//same action on each item - log index and value of each element
/*var language = [
    'js',
    'css',
    'pcl',
];

for(var i = 0; i < language.length; i++) {
    console.log(i, language[i]);
}

console.log('-------');

for(var i = 1; i < 11; i++) {
    console.log(i);
}

console.log('-------');

for(var i = 10; i > 0; i--) {
    console.log(i);
}

function avg(list) {
    var total = 0;
    for(var i = 0; i < list.length; i++) {
        total += list[i];
    };
return total / list.length;
};

var results = [82, 17, 91,];
console.log(avg(results));*/



//manipulatiing arrays
/*var c1 = [10, 4, 18, 98];
var c2 = [12, 68, 44, 96];
var c3 = [74, 76, 82, 68];

console.log(c1.concat(c2));

var allResults = c1.concat(c2, c3);

var codeLanguage = [
    'js',
    'python',
    'pcl',
    'solidity',
    'css',
    'html',
];

var mostPop = codeLanguage.slice(0, 3);
console.log(mostPop);

var popSlice = codeLanguage.slice(2);
console.log(popSlice);

// inserting
//codeLanguage.splice(2, 0, 'typescript');
console.log(codeLanguage);

//replacing 2 items with 1
codeLanguage.splice(2, 2, 'typescript');
console.log(codeLanguage);

//replace 1 item with none
codeLanguage.splice(2, 1);
console.log(codeLanguage);



// add and remove items...push = num at end, pop remove AND RETURN num at end
//unshift - add item to start, shift, remove AND RETURN item from start

/*var results = [
    99,
    26,
    44,
    22,
    84,
]
console.log(results);

//results[5] = 70;
//results[results.length] = 70;
results.push(70);

console.log(results);

console.log(results.pop());
console.log(results);

results.unshift(100);
console.log(results);

results.shift();
console.log(results);
results.unshift(1);
console.log(results);*/



//What is an array....lists
/*var numwords = [
    'one',
    'two',
    'three',
    'four',
];
console.log(numwords.length);

var favLanguages = [
    'js',
    'solidity',
    'css',
    'pcl',
];
console.log(favLanguages.length);
console.log(favLanguages);

console.log(favLanguages[2]);

var varList = [
    3.2,
    'hi',
    {name: 'object', reason: 'example'},
    null,
    ['c', 'a', 's']
];
console.log(varList[4][0]);*/
//**arrays are magic objects that act as lists */



/*//The ternary operator (expresion instead of statement)
function checkNumber (x) {
    var magicNumber = 10;
    return x > magicNumber ? 'x is bigger than mag num':
     'x is less than or equal to the magic num';
    /*if (x > magicNumber) {
        return 'x is bigger than mag num';}
        else {
            return 'x is less than or equal to the magic num';
        }*/
//}
//console.log(checkNumber(11));
//if/else vs ternary

/*var magicNumber = 10;
var x = 4;
/*if (x > magicNumber) {
    console.log('x is bigger than mag num');
    alert('You beat the magic num');
    } else {
        alert('better luck next time');
    }*/
/*console.log(x > magicNumber ?
    'x is bigger':
    'x is equal or smaller');*/



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











