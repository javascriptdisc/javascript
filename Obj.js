'use strict'
var x = 1.1;

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
        return x*x;
    },

    }
console.log(x);
console.log(person.fullName());
for(var i = 0; i < 10; i++){
    x = person.changeValue(x);
    console.log(x);   
}
 
    
