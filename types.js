const a =5;
const b= 'samsu kopai na ekhn ar';
const d =true;
const ages =[54,45,78]
const student ={id:23, class:7}
// console.log(typeof a, typeof b, typeof d, typeof ages,typeof student);

let x =5;
let y=x;
console.log(x,y)
y=7;
console.log(x,y)


let p={job:'web developer'}
let q=p; //{ job: 'web developer' } { job: 'web developer' }

// q={job:'backend developer'} //{ job: 'web developer' } { job: 'backend developer' }

q.job ='front end developer'
// { job: 'front end developer' } { job: 'front end developer' }
console.log(p,q)