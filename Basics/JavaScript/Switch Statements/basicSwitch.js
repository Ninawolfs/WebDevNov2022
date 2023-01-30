const age = 32;

switch (age) {
    case 18:
        console.log('You are too young!');
        break;
    case 25:
        console.log('you are a grown person');
        break;
    case 30:
        console.log('Dude, it is the half of your life!');
        break;
    default:
        console.log('No match!');
}

switch (age>17) {
    case false:
        console.log('You are too young to enter the casino.')
        break;
    case true:
        console.log('You are allowed to enter the casino, based on your age.')
        break;
} // No default needed since it is either true or false!



// New ex.

let userRequest = 'remove';

function addUser(){
    console.log('User is added.')
}

function removeUser() {
    console.log('User is removed.')
}

switch (userRequest) {
    case 'remove':
        removeUser();
        break;
    case 'add':
        addUser();
        break;
    default:
        console.log('Command not found.')
}


// Extra oefening 

let days = ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag']; // altijd starten met zondag zodat die 0 is en maandag 1
let getDay = new Date().getDay();

console.log(days[getDay]);

switch (getDay) {
    case 0:
        console.log(`Day of the week: ${days[getDay]}`)
        break;
    case 1:
        console.log(`Day of the week: ${days[getDay]}`)
        break;
    case 2:
        console.log(`Day of the week: ${days[getDay]}`)
        break;
    case 3:
        console.log(`Day of the week: ${days[getDay]}`)
        break;
    case 4:
        console.log(`Day of the week: ${days[getDay]}`)
        break;
    case 5:
        console.log(`Day of the week: ${days[getDay]}`)
        break;
    case 6:
        console.log(`Day of the week: ${days[getDay]}`)
        break;
}


// Nieuwe oefening

let product = "tea";
const output = document.getElementById('result');

function getProductResult(){
switch (product) {
    case 'coffee':
       return 'Product is coffee.'
    default:
        return 'Unknown.'
}
}

let productResult = getProductResult();
console.log(productResult);
output.innerText=productResult;