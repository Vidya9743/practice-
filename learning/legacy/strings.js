// let str1="my name is vidya";
// let str2 =str1.substring(11,16)
// console.log(str2);

const text1="hello";
const text2="world";
//using charat()
console.log(text2.charAt(4));
//using concat()
console.log(text1.concat(" ",text2));
//using replace()
console.log(text1.replace("hello","My").concat(" ",text2));
//using Split()
console.log(text1.split())
//using substr()
console.log(text1.substr(1,3))
//using substring()
console.log(text1.substring(1,3))
//using slice()
console.log(text1.slice(1,3))
//to lowercase
console.log(text1.toLowerCase())
//to UpperCase
console.log(text2.toUpperCase())
const text3="    vidya  ";
//trim ()
console.log(text3.trim());
console.log(text3.trimStart())
console.log(text3.trimEnd())
//includes
console.log(text3.includes("a"))
//search()
console.log(text3.search("a"));
var a=888;
let b=true;
c="vidya";
console.log(String(a))
console.log(String(b))
console.log(String(c));
console.log(a, typeof(a));