//Traditional JS Function

function greet(name){
    return "Hello, "+name+"!";
}

console.log(greet("Nicole"));

function isPositive(number){
    return number>=0;
}

//Arrow Function
let greetName = (name) => "Hello, "+name+"!";
console.log(greetName("Holt"));

let isPositiveNumber = (number) => number>=0;
console.log(isPositiveNumber(5));