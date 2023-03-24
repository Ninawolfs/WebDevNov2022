console.log(sessionStorage);
console.log(typeof sessionStorage);

// methods

// set (create new storage data)
sessionStorage.setItem('secret-key','hello world'); // 'secret-key' is de naam die je zelf kiets voor de plaats waar je de data opslaat
sessionStorage.setItem('here i store a number', 12345);
sessionStorage.setItem('boolean storage unit', true);
sessionStorage.setItem('secret-key', undefined);
sessionStorage.setItem('nullies', null); // primitive data types can be stored without adaptation // Other datatypes such as array and object need to be put inside a string to be saved correctly . 
sessionStorage.setItem('arraysaved', [1,2,3,4]); // will be saved as a string (argument list)
sessionStorage.setItem('arraysavedd', '[1,2,3,4]'); // Nu is de array opgeslagen als een echte array!
sessionStorage.setItem('objectsaved', {id:1}); // impossible to save an object this way
sessionStorage.setItem('objectsavedd', '{id:1}'); // Nu is het object opgeslagen en als een echt object
sessionStorage.setItem('Jsondatastored', '[{"id":1}]'); // JSON result opslaan

// get item (read sessionstorage data)
let result;

result = sessionStorage.getItem('secret-key');
result = sessionStorage.getItem('arraysavedd');
result = sessionStorage.getItem('Jsondatastored');

// remove item
result = sessionStorage.removeItem('Jsondatastored')


// locale storage

console.log(localStorage);
console.log(typeof localStorage);

// methods

// set (create new storage data)
localStorage.setItem('secret-key','hello world'); // 'secret-key' is de naam die je zelf kiets voor de plaats waar je de data opslaat
localStorage.setItem('here i store a number', 12345);
localStorage.setItem('boolean storage unit', true);
localStorage.setItem('secret-key', undefined);
localStorage.setItem('nullies', null); // primitive data types can be stored without adaptation // Other datatypes such as array and object need to be put inside a string to be saved correctly . 
localStorage.setItem('arraysaved', [1,2,3,4]); // will be saved as a string (argument list)
localStorage.setItem('arraysavedd', '[1,2,3,4]'); // Nu is de array opgeslagen als een echte array!
localStorage.setItem('objectsaved', {id:1}); // impossible to save an object this way
localStorage.setItem('objectsavedd', '{id:1}'); // Nu is het object opgeslagen en als een echt object
localStorage.setItem('Jsondatastored', '[{"id":1}]'); // JSON result opslaan

// get item (read sessionstorage data)
let result2;

result2 = localStorage.getItem('secret-key');
result2 = localStorage.getItem('arraysavedd');
result2 = localStorage.getItem('Jsondatastored');

// remove item
result2 = localStorage.removeItem('Jsondatastored')



// console.log(result2, typeof result2, JSON.parse(result2));



// coockies

//Methods
document.cookie = `expires=${new Date().toUTCString()}` // Steeds de naam van de opslagplaats eerst geven, dan = en dan de data die je daarin wilt opslaan
document.cookie = `isLoggedIn=true`
document.cookie = `isAdmin=`+true
let myname = "Jackie"
document.cookie = `username=${myname}`

