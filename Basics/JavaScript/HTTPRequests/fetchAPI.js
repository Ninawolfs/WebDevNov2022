fetch('http://localhost:3000/database')
.then(response=>{
    return response.json()
})
.then(data=>{
    data.forEach(todo => {
        console.log(todo)
    });
})