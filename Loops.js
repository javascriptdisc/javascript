'use strict'

for(var i = 0; i < 10; i++){ //yeah you have to be explicit that it is a var in the first parameter of the for()
    console.log(i)
    
}
console.log('\n\n');

for(var i = 0; i < 10; i++){ 
    console.log(i*i);


};

console.log('\n\n');

for(var i = 0; i <= 20;){ 
    console.log(i);
    i=i+2

};
console.log('\n\n\n');

var i = 0;
while(i != 45){
    
  i =  Math.floor(Math.random()*100); // will output random numbers {i E N | 0 <= x <100 } until i = 45

    console.log(i);


}