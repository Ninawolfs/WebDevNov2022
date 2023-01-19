// Number methoden voorbeelden

// Number methoden
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

var result;

// Convert from string to number/integer
result="10";
var x="5";
result=Number(x) // moet met hoofdletter beginnen!
result=Number("5") === 5;


// 1.Number to string
x=100;
result=x.toString(); // returns a string

//2.// Number to fixed ---> hoeveel nummers na de komma tussen haakjes zetten en het rond af!
x=100;
result=x.toFixed(2); // returns a string
var y=5;
result=isNan(y); // not a number, response is boolean (true or false) --> here false want het is a number en niet not a number 


//3.Number to is integer ---> converts a string to a number
//integer numbers are not decimal numbers!!!
result=x.parseInt();

//isInteger // boolean is it a number or not (response true or false) === geheel getal
//Opnieuw een boolean response het is een geheel getal of het is geen geheel getal
result=x.isInteger();


//



console.log(`result is ${result} and typeof variable is ${typeof result}`);