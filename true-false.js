/*
Truthy: 
1.true
2.any number (+ve or -ve) will be truthy other than 0
3.any string will be falsy
4.empty object {}
5.empty array []

Falsy:
1. false
2.0
3. ' ' (empty string)
4.undefine
5.null


*/ 

const x='salamn'
// const x=4;
// const x=false; //'value of x is falsy'
if(x){
    console.log('value of x is truthy')
}
else{
    console.log('value of x is falsy')
}


// optional
// check falsy
const y='';
if(!y){
console.log('value is falsy')
}

const z={class:9};
if(!!z){
    console.log('value is truthy')
}