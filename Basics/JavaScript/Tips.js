//THIS IS AN OBJECT
var user1Obj = {
    id : 1,
   firstName : 'Ramesh',
   lastName : 'Fadatare',
   emailId : 'ramesh@gmail.com',
   age : 29
}

var user2Obj = {
   id : 2,
   firstName : 'John',
   lastName : 'Cena',
   emailId : 'john@gmail.com',
   age : 29
}

//THIS IS AN ARRAY
var usersAR = ["user1", "user2","user3", "user4"];


//THIS IS AN ARRAY OF OBJECT (elements of this arrays are objtetcs)
const dataArObj = [{
    "id": 1,
    "first_name": "Salmon",
    "last_name": "Duplan",
    "email": "sduplan0@seesaa.net"
}, {
    "id": 2,
    "first_name": "Jase",
    "last_name": "Rowesby",
    "email": "jrowesby1@godaddy.com"
}, {
    "id": 3,
    "first_name": "Rowney",
    "last_name": "De Blasiis",
    "email": "rdeblasiis2@tuttocitta.it"
}, {
    "id": 4,
    "first_name": "Kermit",
    "last_name": "Nayshe",
    "email": "knayshe3@soundcloud.com"
}, {
    "id": 5,
    "first_name": "Elbert",
    "last_name": "Bellinger",
    "email": "ebellinger4@oaic.gov.au"
}, {
    "id": 6,
    "first_name": "Munroe",
    "last_name": "Kubica",
    "email": "mkubica5@networksolutions.com"
}]


//access in array
console.log("access array : ", usersAR[0], usersAR[3]);


//access an object
console.log("the whole object", user1Obj);


//access IN an objet

console.log("one property of the object",user1Obj.firstName);


//access IN an ARRAY MADE OF OBJECT
console.log("the hole arrayObject", dataArObj);
console.log("one item of the object",dataArObj[0]);
console.log("one property OF one item of the object :",dataArObj[0].first_name);


