/*Task 1

Write a function remove(list, i) where list is an array,
and i is a number. The function should not return
anything, but instead should remove the element at
index i from the list argument.

Example useage:

var myList = [‘a’, ‘b’, ‘c’, ‘d’];
remove(myList, 2);
// myList is now [‘a’, ‘b’, ‘d’];
*/

var arrr = [1, 2, 3, 4, 5, 6];
function remove(list, i) {
    //var arr = [];
    list.splice(i, 1);
};

console.log(remove(arrr, 2));


/*Task 2

Write a function reversed(list) that takes an array of 
strings, and returns a single which consists of all the 
strings in the array, in reverse order, concatonated 
and seperated by commas. Note that the function should 
not add a trailing comma at the end of the reversed 
string, only between the items. You should also just be 
adding a comma between items, no spaces.

Example useages:

var myList = [‘Java’, ‘PHP’, ‘Ruby’];
reversed(myList);
// Result: ‘Ruby,PHP,Java’

reversed([‘a’, ‘b’, ‘c’, ‘d’])
// Result: ‘d,c,b,a’

For this task, remember string concatentation:

var first = ‘a’;
var second = ‘b’;
var joined = first + second;
// joined: ‘ab’

You’ll probably also have to use an if/else statement 
or a ternary at some point...
*/

var myList = ['a', 'b', 'c', 'd'];

function reversed(list) {
    var word = '';
    for(var i = list.length - 1; i >= 0; i--) {
        word = (word + list[i]);
        if (i !== 0) {
            word = word + ','
        }
    }
    //word.slice(word.length);
    return word;
    //console.log(word);
}

console.log(reversed(myList));

/*Task 3

Write a function 
calculatePercentages(scores, totalPossibleScore) where 
scores is an array of numbers which represent scores on 
an exam. totalPossibleScore is a number which is the 
total possible score for that exam. The return value 
should be a new array (don’t alter the original!) which 
is the scores from the scores array as percentages of 
the totalPossibleScore, in the same order as the scores 
in the scores array argument.

Example:

var scores = [50, 120, 180, 10];
var percentages = calculatePercentages(scores, 200);
// percentages: [25, 60, 90, 5]
*/
function calculatePercentages(scores, totalPossibleScore) {
   var score = [];
    for(var i = 0; i < scores.length; i++) {
        score.push((scores[i] / totalPossibleScore) * 100);
    }
    return score;
};
var grades = [100, 54, 22, 98 ];
console.log(calculatePercentages(grades, 500));

//...tests
/*QUnit.test( "remove removes correct element", function( assert ) {
    var a = [1,2,3,4];
    remove(a, 1);
    assert.deepEqual(a, [1, 3, 4], "Passed!" );
  });
  
  QUnit.test( "reversed returns correct string", function( assert ) {
    var a = ['foo', 'bar', 'bash'];
    assert.equal(reversed(a), 'bash,bar,foo', "Passed!" );
  });
  
  QUnit.test( "reversed returns correct string when first string has a comma at the end", function( assert ) {
    var a = ['foo,', 'bar', 'bash'];
    assert.equal(reversed(a), 'bash,bar,foo,', "Passed!" );
  });
  
  QUnit.test( "calculatePercentages returns array with correct percentages", function( assert ) {
    var a = [10, 20, 50];
    assert.deepEqual(calculatePercentages(a, 50), [20, 40, 100], "Passed!" );
  });*/


