// DOM manipulations basics

//change-remove-add

var result;

// document

result = document;
result = document.all; // returns object collection
result = document['all'];
result = document.body.children;
result = document.body.children[1];
result.innerHTML='Hello bed';
result = document.head.children;
result = document.location; // info about current url
result = document.characterSet // return charachter type
result = document.scrips;
result = document.forms;

result = document.getElementById('form1')
console.log(result)