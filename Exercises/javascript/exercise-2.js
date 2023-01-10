/* Exercise 3 functions */

// 1. Create a function called "add" that takes two arguments (parameters named "first" and "second") and returns their sum.
function add(first,second){
    return first + second
}

console.log(add(5,7));


// 2. Create a function called "subtract" that takes two arguments (parameters named "first" and "second") and returns their difference.
function subtract(first,second){
    return eval(first-second)
}

console.log(subtract(8,6));

// 3. Create a function called "multiply" that takes two arguments and returns their product.
function multiply(first,second){
    return eval(first*second)
}
console.log(multiply(6,3));


// 4. Create a function called "divide" that takes two arguments and returns their quotient.
function divide (first, second){
    return eval(first/second)
}
console.log(divide(9,3));

// 5. Create a function called "calculate" that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
function calculate (num1, num2, operator){
    return eval(num1+operator+num2)

}


// 6. Call the calculate function 4 times, each time using one of the operation functions you wrote

console.log(calculate(5,10,'+'));
console.log(calculate(5,10,'-'));
console.log(calculate(5,10,'*'));
console.log(calculate(5,10,'/'));


// 7. Create a function called "printDay" that takes one argument (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday etc.)


