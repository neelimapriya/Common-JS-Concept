// primitive types are pass by value

let num1=5;
let num2=4;

function multiply(a,b){
    a=27;
    const result=a*b;
    return result;
}
console.log(num1)
// const output= multiply(num1, num2);
// console.log(output)
multiply(num1, num2)
console.log(num1)

