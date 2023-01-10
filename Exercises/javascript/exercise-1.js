/* Exercise 1 operators */

// 1. Declare two variables "snackServings" and "guests" and assign them number values.
let snackServings = 10;
let guests = 20;

// 2. Add snackServings and guests.
var add =(snackServings+guests);
console.log(add)


// 3. Subtract guests from snackServings. Then, subtract snackServings from guests.
var sub1=(snackServings-guests);
console.log(sub1)

var sub2=(guests-snackServings);
console.log(sub2)

// 4. Multiply snackServings and guests.
var mult=(snackServings*guests);
console.log(mult)

// 5. Divide snackServings by guests.
var divi=(snackServings/guests);
console.log(divi)

// 6. Declare another variable "drinks" with value "10". Multiply snackServings and guests. Then, divide the result by drinks. Store the result in a new variable named "resultOne". Print "resultOne" to the console.
let drinks = 10;
let multi1=(snackServings*guests);
let resultOne= (multi1/drinks);
console.log(resultOne)


// 7. Declare two variables: "monkeys" with value 15, and "bananas" with value 9. Divide monkeys by bananas.
let monkeys = 15;
let bananas = 9;
let divi1=(monkeys/bananas);
console.log(divi1);



// 8. Declare another variable "monkeyfights" with value 20. Add monkeys and bananas, then multiply the result by monkeyfights. Store the result in variable "resultTwo".  Print "resultTwo" to the console.
let monkeyfights = 20;
let sum1=(monkeys+bananas);
let resultTwo=(sum1*monkeyfights);
console.log(resultTwo);

// 9. Increment monkeys.
let inc= ++monkeys;
console.log(inc);

// 10. Decrement bananas.
let decr=--bananas;
console.log(decr);

// 11. Subtract monkeys from bananas and store this in a new variable "happiness". Add happiness and monkeyfights.
let happiness=(bananas-monkeys);
let result=(happiness+monkeyfights);
console.log(result)

// 12. Print the remainder when "resultOne" is divided by "resultTwo" to the console.
let remainder1=(resultOne % resultTwo);
console.log(remainder1);

// 13. Create a variable called "orderHasShipped" and set it to false. Create an if statement that checks if orderHasShipped is true. If it is true, console log "The order shipped". If not, console log "The order did not ship".
let orderHasShipped=false;


// function orderHasShipped(){
//     if(true){
//         console.log("The order shipped");
//     }
// }

// function orderHasShipped(){
//     if(false){
//         console.log("The order did not ship");
//     }
// }




/*
Exercise 2 data types 
boolean/number/string/array/object
*/

// 1. Declare a variable "test" and set it to a boolean value.
let test=true;

// 2. Declare a variable "message" and set it to a string value.
let message='stringvar';

// 3. Declare a variable "undefinedVariable" and set it to undefined.
let undefinedVariable=undefined;

// 4. Declare a variable "nullVariable" and set it to null.
let nullVariable=null;

// 5. Declare a variable "sampleNumber" and set it to a number value.
let sampleNumber=5;

// 6. Use the typeof operator to check the type of "sampleNumber".
result = typeof sampleNumber;

// 7. Declare a variable "students" and set it to an empty array.
let students=[];

// 8. Declare a variable "sampleArray" and set it to an array with 5 elements.
let sampleArray=[1,2,3,4,5];

// 9. Access the 3rd element in "sampleArray".
sampleArray[2];

// 10. Declare a variable "sampleObject" and set it to an object with a property "name" and a value of your name.
let sampleObject={
    name:'Nina'
}


// 11. Access the "name" property in "sampleObject".
console.log(sampleObject.name);

// 12. Declare a variable "car" and set it to an object with a property "model" and a value of "Honda Civic".
let car={
    model:'Honda Civic'
}

// 13. Access the "model" property in "car".
console.log(car.model);