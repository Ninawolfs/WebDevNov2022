// Find li elements 
const liItems = document.querySelectorAll('li.list-group-item:nth-child(even)') // object

const ListContainer = document.querySelector('.list-group')

liItems.forEach((li,index)=>{
    console.log(li) // > each li element
    // className
    console.log(li.className)
    li.className="list-group-item bg-dark text-light"
    li.innerHTML =`<h1>Item-${index}</h1>` // update content of element or elements
  // li.innerText = `<h1>hello </h1>` // NO HTML TAGs
    // li.innerText > only string <p>hello</p>
})

// classList
liItems.forEach((li,index)=>{
    console.log(li) // > each li element
    // className
    console.log(li.className)
    li.className="list-group-item bg-dark text-light"
    li.innerHTML =`<h1>Item-${index}</h1>` // update content of element or elements
  // li.innerText = `<h1>hello </h1>` // NO HTML TAGs
    // li.innerText > only string <p>hello</p>
    console.log(li)
    li.classList.add('bg-dark')
    li.classList.add('text-light')
    console.log(li.classList.contains('list-group-item'))
    // li.classList.remove('coffee')
    if(li.classList.contains('coffee')){
        li.classList.remove('coffee')
    }
})

// add new Child into ul list
// "<li>Hello world</li>" DOMString
const liElement = document.createElement('li')
// setAttribute
liElement.setAttribute('class','list-group-item')
liElement.classList.add('bg-danger')
liElement.classList.add('text-light')
liElement.innerText="This is new li element";

console.log(liElement,"this is new li")
ListContainer.appendChild(liElement)


const g = t => document.createElement(t) // reusable function to create html elements

const newTask = g('li');
newTask.classList.add('list-group-item')
newTask.classList.add('bg-primary')
newTask.classList.add('text-light')
newTask.innerHTML=('this is new li')
ListContainer.appendChild(newTask)

// previoussibling
const teaElement = document.querySelector('.tea');
teaElement.previousElementSibling.innerHTML='this is sibling of tea element'
teaElement.previousElementSibling.previousElementSibling.innerHTML='this is the first sibling'
console.log(teaElement.previousElementSibling)

//nextSibling

teaElement.nextElementSibling.innerHTML='Next sibling of tea element'
console.log()


