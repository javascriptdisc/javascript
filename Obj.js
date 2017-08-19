'use strict'
var x = 0;

var person = {
    Name: 'Schlomo',
    Surname: 'Shekelsteinbergblatthal',
    age: 38,
    children: ['Moishe', 'Benjamin'],
    address: {
        street: '60000000000000 Shoah st',
        city: 'New York',
        state: 'NY'
    },
    fullName: function(){
        return this.Name +' '+this.Surname;
    },
    changeValue: function(x){
        return x+1;
    },

    }
console.log(x);
console.log(person.fullName);
x = person.changeValue(x);
console.log(x);    
    
