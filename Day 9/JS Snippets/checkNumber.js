let num1 = 3;
let num2 = 4;
let num3 = 21;

console.log("Is " + num1 + " even or odd? " + checkNumber(num1));
console.log("Is " + num2 + " even or odd? " + checkNumber(num2));
console.log("Is " + num3 + " even or odd? " + checkNumber(num3));

function checkNumber(num){
    let remainder = num % 2;
    if(remainder==0)
        return "even";
    if(remainder==1)
        return "odd";
}