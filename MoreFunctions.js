'use strict'

var x = [1,2,3,4,5,6,12,14,88];

x.forEach(function(x){
    console.log(x);

}); //lists all elements of the array, function is a reserved word btw

x.forEach(function(x){
    console.log('number ' + x)
}); //and this proves "function" is local in this context

/* x = 1 assigns value 1 to x, x == 1 compares, x === 1 compares 
but makes sure both are the same data type (int for instance)*/
