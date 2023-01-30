let usernames = ['Mohammed','Bilal','Ara','Ahmad','Hande','Nina'];

for (let user of usernames){ // for of will give the value of the array
    console.log(user)
}

for (let user in usernames){ // for in in array will give the numbers of items
    console.log(user)
}


let obj =[{
    id:1,
    usernaam: 'root'
}];

for (let user of obj){
    console.log(user)
}


for (let user in obj){
    console.log(obj[user])
}