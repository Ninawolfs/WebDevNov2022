// Promise Object examples: Burger King ordering machine !== BulgurKing

const bulgurKing = (food, drink, sauce)=>{
    return new Promise((resolve, reject)=>{ //async is al geïntegreerd in promise object
        let foodBoolean = food.match(/\d/g) ==null
        let drinkBoolean = drink.match(/\d/g) ==null
        let sauceBoolean = sauce.match(/\d/g) ==null // Kijken of de data die we ontvangen enkel      uit letters betsaan die in een string zitten (geen cijfers die in een string zitten. ). 
        if(foodBoolean && drinkBoolean && sauceBoolean){// als alle boolean variabelen true geven (en de data dus enkel uit letters bestaat) dan gaan we over om resolve en wordt de functie promise uitgevoerd. 
        resolve({
           food:food,
           drink:drink,
           sauce:sauce
        } )
    } else{
        reject ("Food, drink or sauce cannot contain a number")
    }
})}


bulgurKing('Fried bulgur', 'Ayran', 'Garlic sauce')
.then(result =>{
    console.log(result)
})
.catch(err=>console.log(Error)) // .cath is een intern alarm systeem dat afgaat wanneer je data niet correct is en de functie niet uitgevoerd kan worden. 
