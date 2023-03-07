const DeleteItem = document.querySelector('.delete-item');

console.log(DeleteItem);
console.log(DeleteItem.parentElement)
console.log(DeleteItem.parentElement.parentElement)

// .parentElement selecteerd/geeft parent element weer. Indien je dan een delete doet zal alles gedelte worden, kind en parent element.


console.log(DeleteItem.children)// geeft het/de kind(eren) van een element weer in een array
console.log(DeleteItem.children.length) // geeft het aantal kinderen weer (geen info over de kinderen zelf + dit kan je verder gebruiken in je code om mee te werken en/of bewerken

console.log(DeleteItem.firstElementChild)// Geeft/selecteerd eerste kind van een element aan. 
console.log(DeleteItem.lastElementChild)// Geeft/selecteerd laatste kind van een element aan. 

