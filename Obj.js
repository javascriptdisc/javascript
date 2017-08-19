'use strict'


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


    }
    
    
