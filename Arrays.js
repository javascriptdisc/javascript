'use strict';

var Array1 = [];
Array1 = ['A11','A12','A13'];

console.log(Array1);
console.log(Array1[0]);
console.log(Array1[1]);
console.log(Array1[2]);
console.log(Array1[3]); //Shows as undefined

Array1[3] = 'GTKRWN'; //I can add values straight to a location in the array later
console.log(Array1[3]);


Array1.push('A15','A16'); //better than that, you can just use the function "push" to add new values to an array

console.log(Array1[4]+' ' +Array1[5]);

console.log(Array1.length); //another funtion
var Array2 = [344342,23,6543,343,35,2,56,7,423,1488,1234573];
console.log('There are ' + Array2.length + ' elements in your array');
console.log('Sorting them in ascending order: ' + Array2.sort()); //yet another one
console.log('Sorting them in descending order: ' + Array2.reverse()); // because '10' comes before '2' in Unicode code point order, for instance







