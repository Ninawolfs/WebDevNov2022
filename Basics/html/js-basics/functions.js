function  printMyName () {
    //code here
    console.log('hello function')
}

function printMyName (name){
    //function parameter
    console.log(name);
}

printMyName(); // call back function
printMyName('michael');
printMyName('Ara');

// the function is printMyName

function salaryCalculator (bruto){
    var brutosalary = bruto;
    var tax = 40;
    var result = (brutosalary/100)*tax // tax amount bruto - tax

    console.log(`Tax is ${result}\nNetto Salary is ${bruto-result}`);

}
salaryCalculator(4000);

// return statement

function serveNumber1 (){
    //console.log(1);
    return 3
}

function serveNumber2 (){
    //console.log(3);
    return 1
}


const result = serveNumber1() + serveNumber2()
serveNumber2()
console.log(result)


function getFirstName(){
    return "Michael"
}

function getLastName(){
    return "Jackson"
}

const fullname = getFirstName () + getLastName ()

function getFullName(){
    return getFirstName () + getLastName
}

console.log(getFullName);