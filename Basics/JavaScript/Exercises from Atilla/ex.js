// 1. Create an array of objects with the following properties and values (10 objects)

let person =[
    {
        "name":"nina",
        "age": 29,
        "phone":"0123456789",
        "email":"nina@gmail.com",
        "city":"Brussel"
    },
    {
        "name":"cedric",
        "age": 24,
        "phone":"0123456788",
        "email":"cedric@gmail.com",
        "city":"Brussel"
    },
    {
        "name":"philippine",
        "age": 85,
        "phone":"0123456787",
        "email":"philippine@gmail.com",
        "city":"Brussel"
    },
    {
        "name":"Laila",
        "age": 56,
        "phone":"0123456786",
        "email":"laile@yandex.com",
        "city":"Istanbul"
    },
    {
        "name":"Melissa",
        "age": 5,
        "phone":"0123456785",
        "email":"melissa@yandex.com",
        "city":"Istanbul"
    },
    {
        "name":"pia",
        "age": 62,
        "phone":"0123456784",
        "email":"pia@yandex.com",
        "city":"Istanbul"
    },
    {
        "name":"tom",
        "age": 36,
        "phone":"0123456783",
        "email":"tom@hotmail.com",
        "city":"Ghent"
    },
    {
        "name":"arthur",
        "age": 35,
        "phone":"0123456782",
        "email":"arthur@hotmail.com",
        "city":"Ghent"
    },
    {
        "name":"bo",
        "age": 23,
        "phone":"0123456781",
        "email":"bo@hotmail.com",
        "city":"Ghent"
    },
    {
        "name":"Co",
        "age": 15,
        "phone":"0123456781",
        "email":"co@hotmail.com",
        "city":"Ghent"
    }
]
 
// Note: 3 of objects email should be @gmail.com and 3 of objects email @yandex.com and 4 of objects email should be @hotmail.com
// Note: 3 of objects city should be Brussel and 3 of objects city should be Istanbul and 4 of objects city should be Ghent
 
/*
 name: string
 age: number
 email: string
 city: string
 phone: string
*/
 
// 2. Create a function that can find the persons less than 30 years old.

function findPersonbyAge(age, arraydata){

    return arraydata.filter(function(obj)
    {
        return obj.age <age
    })
    // if (age<30)
    // console.log (The person is less than 30 years old)
}

console.log(findPersonbyAge(30,person))
;
 
// 3. Create a function that can find the persons who live in the same city.

function findpersonByCity(city){
    return person.filter(function (obj){
        return obj.city === city;
    })
}

console.log(findpersonByCity("Ghent"));

//or

function findpersonByCity(city){
    return person.filter(function (obj){
        return obj.city.includes(city);
    })
}

console.log(findpersonByCity("Brussel"));


 
// 4. Create a function that can find the persons who have gmail email.

function findByEmailDns(domain){        // domain name system zoals hotmail of gmail
    return person.filter (function(person){
        return person.email.includes(domain)
    })
} 

console.log(findByEmailDns("@gmail.com"))






