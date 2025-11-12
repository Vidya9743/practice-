// var a=10;
// let b=20;
// const c=3.95;
// a=25;
// console.log(a+b+c);

import { type } from "os";

let z = 18;
{
    let x = "vidya";
    var a = 10;
    x = "veena";
    console.log(x + z + a);
    console.log(a + z + x);
    console.log((z + a) + x);
    console.log(typeof x);
}
a = 40;
console.log(a + z);
console.log(typeof z);
console.log(typeof a);
// console.log(x); // x is not defined here because it is block scoped