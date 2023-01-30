let usernames = ['Mohammed','Bilal','Ara','Ahmad','Hande','Nina'];

let student = {
    name:"John",
    email: 'john@gmail.com',
    something:'anything'
}

for (let val in usernames){
    console.log(usernames[val])
}

for (let val in student){
    console.log(val)
}

for (let val in student){
    console.log(student[val])
    console.log(typeof val)
}

