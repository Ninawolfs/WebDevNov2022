const DeleteItem = document.querySelector('.delete-item');

console.log(DeleteItem);
console.log(DeleteItem.parentElement)
console.log(DeleteItem.parentElement.parentElement)

// .parentElement selecteerd/geeft parent element weer. Indien je dan een delete doet zal alles gedelete worden, kind en parent element.


console.log(DeleteItem.children)// geeft het/de kind(eren) van een element weer in een array
console.log(DeleteItem.children.length) // geeft het aantal kinderen weer (geen info over de kinderen zelf + dit kan je verder gebruiken in je code om mee te werken en/of bewerken

console.log(DeleteItem.firstElementChild)// Geeft/selecteerd eerste kind van een element aan. 
console.log(DeleteItem.lastElementChild)// Geeft/selecteerd laatste kind van een element aan. 


const toDoItem = document.querySelector('.list-group-item')

const clonedOfToDoItem = DeleteItem.cloneNode(true) // cloned het element (indien er kinderen zijn worden deze ook gecloned)
console.log(clonedOfToDoItem)

toDoItem.hasChildNodes() // geef aan true indien element een child heeft en false als het element geen kinderen heeft


const toDoList = document.querySelector('.list-group')

toDoList.addEventListener('click',(event)=>{
    console.log('Hello World', event.target.classlist)
    
    console.log(event.target.classlist.contains('fa-remove'))
    const isRemove = event.target.classlist.contains('fa-remove')
    if (isRemove){
        event.target.parentElement.parentElement.remove()
    }
})
