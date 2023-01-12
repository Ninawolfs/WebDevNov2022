
const output = document.getElementById('output')


//Simple function
function add(){
    return 'Test value'
}

function addMessage(){
    console.log('This is a test value')
}

// Callback
add();
addMessage();

//or to make it visible in console

const result = add();
console.log(result); // This way we can reuse the result in other functions and thus way better!


output.innerHTML+="<h1>Hello World</h1>"; //appendage (+=) with all the .innerHTML if you want them all visible!
output.innerHTML+=add();


//Another way to insert JS in HTML

function addMessageInToDocument (message){
    output.innerHTML+=`<h1>${message}</h1>` //backtick for interpelation - template literals 
}

//call back
addMessageInToDocument('Microsoft')

// Concatonation + math operators
let myName = 'Nina';
myName+=' Wolfs';
console.log(myName)

//objects in functions

function CreateAccount(username, password, email, role){
    const obj = {
        user: username,
        pass: password,
        email: email,
        role: role
    }
    return obj 
}

let account=CreateAccount('nina', 'pass123', 'nina@gmail.com', 'CFO');
console.log(account);


// Function with array


let Users =[]

function createAccount(username, password, email, role){
    const obj = {
        user: username,
        pass: password,
        email: email,
        role: role
    }
    return Users.push(obj)
}


createAccount('Nina', 'what', 'mail', 'boss')
createAccount('Ara', 'who', 'maaaaille', 'cfo')
createAccount('Bilal', 'where', 'pass@gmailword', 'hrm')
createAccount('Mohammed', 'what', '@hotmail', 'coo')

console.log(Users);



// More realistic example


let users=[]

function sendAndSaveObj(obj){ //this function will save userdata in database
    // console.log(obj) // To test!
    // return users.push(obj) //
    users.push(obj)
    console.log(users)

}


function makeAccount (obj){ //object as argument
    return sendAndSaveObj(obj)

}

makeAccount({ //create the object directly in the callback of the function
    user:'Nina'

});

// je kan ook je obj aapart creeeren en dan call back=

const user1={
    user:'admin'
}

makeAccount(user1)
makeAccount({
    user:'Atilla'
})

// --> the makeAccount function takes the info from the call back  and sends it to sendAndSafeObj function who puts it out in the console. 


//Assignment - contacts app

//1. create a function that takes 3 arguments (name, phone, email)
//2. create object with 3 keys (name, phone, email)
//3. send the object to the database (array)

// let user=[]

// function contactDetails(obj){
//     return objToDataBase
// }

// function objToDataBase(obj){
//     user.push(obj)
//     console.log(user)

// }

// contactDetails({
//     Name: 'Nina',
//     Phone: '04857961',
//     Email: 'nina@gmail.com'
// })

// objToDataBase({
//     Name: 'Nina',
//     Phone: '04857961',
//     Email: 'nina@gmail.com'
// }) --> WRONG

let user=[];

function accountData(name,phone,email){
    const obj={
    users:name,
    tel:phone,
    contact:email
}
return user.push(obj)
}

accountData('Yann', '04568247', 'yann@gmail.be')
accountData('Arnold', '04858283', 'arnold@gmail.be')
accountData('Peter', '04121315', 'peter@gmail.be')
console.log(user)

