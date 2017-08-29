'use strict'

var A = [];
A[0] = false;
A[1] = false;

for(var i=0;i<98;i++){
    A.push(true);

}
for(var i = 0; i < Math.sqrt(A.length); i++){
    if(A[i] == true){
        var j = i*i;
        while(j<A.length){
            A[j] = false;
            j=j+i;
        }
    }
}
for(var i=0;i<A.length;i++){
    if(A[i] == true){
        console.log(i);
    }

}

