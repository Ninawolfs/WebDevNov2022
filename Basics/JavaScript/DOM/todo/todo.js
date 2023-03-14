const toDoInput = document.querySelector('#todo');
const addToDoBtn = document.querySelector('.btn-danger');
const deleteBtn = document.querySelector('#clear-todos')

// Click Event
addToDoBtn.addEventListener('click', function (event){
    console.log('hello click button!')
    event.preventDefault();
    return false;
})

// Input event (change)
toDoInput.addEventListener('change', function (event){
    console.log('hello change!')
    event.preventDefault();
}) // onchange -> wanneer we iets invullen en dan gelijkwaar klikken met de muis dan verschijnt er hello bro!


//Keydown event (one of input events)

toDoInput.addEventListener('keydown', function (event){
    console.log(event.key); // keydown is altijd samen gebruikt met .key en dan geven ze weer wat je hebt getypt, letters, cijfers, control,enter,...
    if(event.key === 'Enter'){
        console.log('Enter has been introduced into the play!'); // dit gaat enkel verschijnen wanneer er op Enter geklikt wordt. 
        event.preventDefault();
    }
})

// click & keydown
// nieuwe entry wordt toegevoegd aan de todo lijst


addToDoBtn.addEventListener ('click', function (){
    const parser = new DOMParser();
    const newLi = parser.parseFromString(`<li class="list-group-item d-flex justify-content-between" id="newElement">${toDoInput.value}<a href = "#" class ="delete-item">    <i class = "fa fa-remove"></i></a></li>`, 'text/html');
    let list = document.querySelector('#list')
    list.appendChild(newLi.body.firstChild)
})




// deleteBtn.addEventListener('click', function (){
//         const list = document.querySelector('#list')
//         const items = list.children
//         const deleter = setInterval(function(i) {
//         if (i > 0, i = items.length, i-- ){
//             list.removeChild(items[i]);
//         }        
//     }, 3000)
// })

deleteBtn.addEventListener('click', function (){
    const list = document.querySelector('#list')
    const items = list.children
    function toDelete (i) {
    while (i > 0) {
        list.removeChild(items[i]);
        i--
    }        
}
toDelete (items.length - 1)
})




	



