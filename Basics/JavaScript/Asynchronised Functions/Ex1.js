// Promise Object examples: Burger King ordering machine !== BulgurKing

const bulgurKing = (food, drink, sauce)=>{
    return new Promise((resolve, reject)=>{ //async is al geïntegreerd in promise object
        if(5)
        resolve({
           food:food,
           drink:drink,
           sauce:sauce,
        })
    })
}

bulgurKing('Fried bulgur', 'Ayran', 'Garlic sauce')
.then(result =>{
    console.log(result)
})
.catch(err=>console.log(Error)) // .cath is ene intern alarm systeem dat afgaat wanneer je data niet correct is en de functie niet uitgevoerd kan worden. 
