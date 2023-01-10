var result;

// primitive datatypes

//string data type

var name = "michael";

result = typeof fullname


// number data type

result=10;


//Boolean data type (true and false)

result = true;
result= false;


//Undefined data type

result = undefined;

var fullname;


//Null data type

result = null;


//Object data type

result = ['a','b','c',1,2,3] // object /// array

result ={
    name:'Michael' // Object
}

//both are recognised as an object by javascript

//Function data type
function getName(){
    return "blablabla"
}

result = getName


console.log(result, "type of this data is " + typeof result);
