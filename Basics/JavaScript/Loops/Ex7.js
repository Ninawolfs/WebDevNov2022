// Todolist Application exercise
// 1. Create a new todo list
// 2. Add a new todo item
// 3. Remove a todo item
// What is a todo list?
// A todo list is a list of tasks that need to be completed.
// What is a todo item?
// A todo item is a single task that needs to be completed.
// What you require to complete this exercise: 
// 1 . Required array, string and number methods and properties: 
// - push ok
// - splice ok 
// - findIndex ok
// - toLowerCase
// - trim
// - length
// - includes ok
// - indexOf
// - slice

// Explain what you'll do in each step
// 1. Create a new todo list
// - Create a new array
// - Create a new object
// - Add the object to the array

const myToDoList = [{
    name : 'shopping',
    time : 'not urgent',
    what : 'clothes',
    id : 1
},{
    name : 'cleaning',
    time : 'urgent',
    what : 'kitchen',
    id : 2
},{
    name : 'studying',
    time : 'urgent',
    what : 'object creator javascript',
    id : 3
},{
    name : 'reading',
    time : 'not urgent',
    what : 'Gothikana',
    id : 4
}];

// console.log(myToDoList);



// 2. Add a new todo item
// - Create a new object
// - Add the object to the array

function addObj(item){
    let addedObj = myToDoList.push(item)
};

addObj({
    name : 'Go to the doctor',
    time : 'not urgent',
    what : 'monthly psy meeting',
    id : 5
});

// console.log(myToDoList);



// 3. Remove a todo item
// - Find the index of the object in the array
// - Remove the object from the array

// const delItem = function(id){
//     let findItem = myToDoList.findIndex(function(item){
//         return item.id === id
//     })
//     myToDoList.splice(findItem,1)
// };

// delItem(1);
// // console.log(myToDoList);



// 4. Edit a todo item
// - Find the index of the object in the array
// - Update the object in the array


const upDateItem = function(id, propname , newvalue){
    let updateItem = myToDoList.findIndex(function(item){
        return item.id === id
       
    })
    myToDoList[updateItem][propname] = newvalue
};

upDateItem(5, 'time', 'not urgent');
// console.log(myToDoList);

// Uitleg: het deel van  myToDoList[updateItem][propname] = newvalue  moet buiten de functie van let upDatItem komen!! Het maakt deel uit van de functie (id,propname, newvalue), niet de andere functie!



// 5. Delete a todo list
// - Find the index of the object in the array
// - Remove the object from the array


// const delObj = function(id){
//     let findObjIndex = myToDoList.findIndex(function(item){
//         return item.id === id
//     })
//     myToDoList.splice(findObjIndex,1)
// };

// delItem(2);
// console.log(myToDoList);



// 6. Display all todo lists
// - Loop through the array
// - Display the object

myToDoList.forEach(function (item, index) {
    // console.log(item, index)
  })

// 7. Display a todo list
// - Find the index of the object in the array
// - Display the object

// we need to use include to know which ones have answer true to including urgent. -->let urgentToDo
// We need to loop through array and display each object that comes back true; --< const urgent

function urgentToDo(value){
    let urgent = myToDoList.filter(word => {
        if (word.time === value) {
            return value
        }});
    
};

console.log(urgentToDo('urgent'));










const options = {
    drink: [
        { name: 'cola', price: 1.5 },
        { name: 'fanta', price: 1.3 },
        { name: 'sprite', price: 1.2 },
        { name: 'water', price: 1.0 },
        { name: 'coffee', price: 2.3 },
        { name: 'tea', price: 2.4 },
    ],
    fastfood: [
        { name: 'hamburger', price: 4.0 },
        { name: 'cheeseburger', price: 4.3 },
        { name: 'hotdog', price: 3.5 },
        { name: 'fries', price: 4.3 },
        { name: 'chicken nuggets', price: 5.0 },
    ],
    sauces: [
        { name: 'ketchup', price: 0.4 },
        { name: 'mayonnaise', price: 0.4 },
        { name: 'mustard', price: 0.5 },
        { name: 'bbq', price: 0.6 },
        { name: 'garlic', price: 0.6 },
        { name: 'hot sauce', price: 0.6 },
    ]
}
// Create MakeOrder function that takes 3 parameters: drink, fastfood, sauces and returns the total price of the order

function MakeOrder(drink, fastfood, sauces){

}
// Create displayOrder function that displays the order in the console
// Expected output: You ordered a cola, hamburger with ketchup and the total is 4.5 euro