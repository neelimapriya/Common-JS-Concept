// array like object

function sum(a,b,c){
    const args =[...arguments];
    console.log(args)
    const result =a+b+c;
    return result;
}
// console.log(arguments);

const total = sum(23,45,67,45,7,89,5);
console.log(total)
console.log(sum.length)