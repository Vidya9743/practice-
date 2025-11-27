function sayHi(name,jobrole){
console.log("Hello" +name +"!"+"iam"+jobrole)
}
function greetuser(callback){
console.log("Hello praveen")
callback("vidya","TestingEngineer")
}
greetuser(sayHi);