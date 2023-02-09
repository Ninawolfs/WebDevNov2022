// CRUD Application 
// create data in database 
// delete data by id in database
// update data by id in database
/*
fullname,username,email,password
*/
let users = [];
const AddNewUser = newUser=>{
    let id=0;
  
    if(users.length===0){
        id++
        console.log(id)
        newUser.id=id

        // console.log(newUser)
        users.push(newUser)
    //    console.log(newUser)
    }else{
        id = users[users.length-1].id
        // console.log("Position Index Number",users.length-1)
        id++
        newUser.id=id
        // console.log({
        //     id:id,
        //     user:'admin'
        // }) // insert
        users.push(newUser)
    }
    // insert new user object
}
AddNewUser({
    fullname:'John Doe',
    username:'john',
    email:'john@john.com',
    password:'john123'
})

AddNewUser({
    fullname:'Mike Doe',
    username:'mike',
    email:'mike@john.com',
    password:'mike123'
})


// console.log(users)


// New exercise: een item uit een array verwijderen met .splice 

let arr = [{
    name : 'Zana',
    age : 27,
    id : 1
},{
    name : 'Nina',
    age : 32,
    id : 2
},{
    name : 'Axel',
    age : 25,
    id : 3
}];

const delUserById = id =>{
    let findUser = arr.findIndex(function(user){
        return user.id===id
    })
    // console.log(findUser)
    arr.splice(findUser,1)
}

delUserById(3);

// console.log(arr);

// Uitleg: We willen een user(dat een object is) met een specifieke id deleten uit de array. We kunnen niet ditrect de .splice methode gebruiken want daar maken we gebruik van de positie van de objecten in de array en niet de ID nummers. vb: axel heeft id nummer 3 maar zijn object heeft positie 2 in de array. We moeten dus .findIndex gebruiken om de positie te bepalen van axel op basis van de callback info waar we 3 zetten omdat dat zijn id nummer is. 

// Nieuwe oefening met update array item

let array = [{
    name : 'Zana',
    age : 27,
    id : 1
},{
    name : 'Nina',
    age : 32,
    id : 2
},{
    name : 'Axel',
    age : 25,
    id : 3
}];

const upUserById = (id, propname, newvalue) =>{
    let findUserr = array.findIndex(random => random.id === id)
    array[findUserr][propname] = newvalue
    // console.log(array[findUserr])
    // console.log(array)
    }

upUserById(2, 'name', 'Ara')

// // Uitleg: We willen een user(dat een object is) met een specifieke id updaten naar een andere waarde. We gaan eerst de object vinden op basis van id nummer (opnieuw, niet hetzelfde als de positie in de array!) en nadien specifieren welke waarde in het object we willen veranderen en dan naar wat (vandaar de 3 parameters in de arrow function.  Nina had id nummer 2 (en positie 1) en is nu ge-update naar Ara
//--> Dit kan bvb gebruikt worden om een wachtwoord te resetten!


/*New ex Blog CMS cruf
1. create array
2. create function that can add new user if username does not exist
3. create function that can login user if username and password exist
4. create function that can create new post if user is logged in
5. create function that can delete post if user is logged in
6. create a function that can fetch all postMessage
*/


// 1.
let myArray = [{
    username : 'Ara',
    email : 'ara@intec.be',
    password : 'Ara123',
    id : 1
},{
    username : 'Bilal',
    email : 'bilal@intec.be',
    password : 'Bilal123',
    id : 2
},{
    username : 'Zana',
    email : 'zana@intec.be',
    password : 'Zana123',
    id : 3
},{
    username : 'Axel',
    email : 'axel@intec.be',
    password : 'Axel123',
    id : 4
},{
    username : 'Nina',
    email : 'nina@intec.be',
    password : 'Nina123',
    id: 5
}]


// 2.
let userIndex =0;

const addUser = function(user){
    let found = myArray.map(x=>x.username === user.username)
    if(found.includes(true)){
        console.log("username already taken")
    }else{
        console.log("create an account");
        userIndex = myArray[myArray.length-1].id
        userIndex++
        user.id=userIndex
        myArray.push(user) 
    }
}

addUser({
    username : 'Marie',
    email : 'marie@intec.be',
    password : 'Marie123'
});

console.log(myArray);

//3.
const userAuth = user => {
    let isLoggedIn = myArray.filter(single => single.username === user.username && single.password === user.password);
    return isLoggedIn.length !==0? true:false
};

userAuth({
    username : 'Nina',
    password : 'Nina123'
})

console.log (userAuth({}))

// 4.

const posts = [{
    title : 'De naam van de roos',
    body : 'Historische detectieve, klassieker',
    id : 1
},{
    title : 'The deal',
    body : 'Hockeyspeler die verliefd wordt',
    id : 3
},{
    title : 'The devine & the cursed',
    body : 'Hockeyspeler die verliefd wordt',
    id : 4
}];

const createPost = (post, userData )=> {
    let isLoggedIn = userAuth(userData)
    if (isLoggedIn){
        posts.push(post)
    } else {
        console.log('User is not logged in, please log in with your account')
    }
}

createPost({title: 'Het parfum', body: 'Boek over een parfumier extraordinair', id : 2}, {
    username : 'Nina',
    password : 'Nina123'
});
console.log(posts);

// 5.

const deletePost = (userData) => {
    let isLoggedIn = userAuth(userData)
    if (isLoggedIn){
        const delSpecificPost
    }
}

deletePost({ username : 'Nina',
password : 'Nina123'
})

console.log(posts)


const delUserById = id =>{
    let findUser = arr.findIndex(function(user){
        return user.id===id
    })
    // console.log(findUser)
    arr.splice(findUser,1)
}

delUserById(3);

// moet nog een id toevoegen aan elke post object zodat ik kan zoeken op id number en een specifieke post kan deleten met de splice method

// 6.



