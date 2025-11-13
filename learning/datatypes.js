//premitive datatype

let x=50;
console.log(typeof x);//number
var name="vidya";
console.log(typeof name);//string
const isLoggedIn=true;
console.log(typeof isLoggedIn);//boolean
let z
console.log(typeof z);//undefined
var n=null;
console.log(typeof n);//object
var bigInt=1236778908937839n;
console.log(typeof bigInt);//bigint
var sym=Symbol("id");
console.log(typeof sym);//symbol    

//non premitive datatype
//Arrays

let arr=[10,20,30,40];
console.log(typeof arr);//object
console.log(arr[2]);//30
console.log(arr.length);//4

//object

scooty = {
    brand: "zest",
    model :2025,
    colour : "red",
    price : 80000,
    Automatic : true
}
console.log(typeof scooty);
console.log(scooty.brand);
console.log(scooty.model);  
console.log(scooty.colour);
console.log(scooty.price);
console.log(scooty.Automatic);     

