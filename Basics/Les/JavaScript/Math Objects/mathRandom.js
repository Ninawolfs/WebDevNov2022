// Random numbers Random ()
// new Math ()


let app = Math.PI; // Geeft je de waarde van PI


app = Math.max(44,88,33,96,423,846,222013);// Geeft je de hoogste waarde in de lijst, ook met negatieve en komma getallen 
app = [1,55,623,[8,659]]; // nested array in another array
app = [1,55,623,...[8,659]]; // sprite ... zorgt ervoor dat de nested verdwijnt en gewoon in de array komt te staan
app = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]]].flat(2); // Flat zegt hier dat we de eerste 2 nested arrays integreren in de originele array. Indien er 3 nested arrays zijn blijft er 1 nested in dit geval. 
 // sprite & flat doen eigenlijk hetzelfde maar sprite is makkelijker en meer gebruikt. 


 app = Math.min(5,6,8,33,66,753,-5,4.14); // geeft het laagste getal uit de lijst (ook negatieve en komma getallen!)

app = Math.floor(1000.7); // afronden naar beneden
app = Math.round(52.76); // afronden naar boven of beneden!

app = Math.abs(-52); // maakt er een positief getal van 
app = Math.random() // range is tussen 0 en 0.9! --> geeft steeds een random nummer tussen 0 en 0.9
app = Math.round(Math.random()*9) // geeft een random nummer tussen 0 en 9
app = Math.round(Math.random()*9+1) // geeft een random nummer tussen 1 en 9 

console.log(app)

// Voorbeelden

const students = ['Nina','Zana','Ara','Bilal','Mohammed'] // range 0 - 4
const randomName = Math.round(Math.random()*4)
console.log(students[randomName])

const diceRooll = {
    dice1:[1,2,3,4,5,6], // range 0-5
    dice2:[1,2,3,4,5,6]
}

const dice1Random = Math.round(Math.random()*5);
const dice2Random = Math.round(Math.random()*5);
console.log(`Dice1: ${diceRooll.dice1[dice1Random]} \n Dice2: ${diceRooll.dice2[dice2Random]}`)

// Mix html voorbeeld

const dice1text = document.getElementById('dice1');
const dice2text = document.getElementById('dice2');
const output = document.getElementById('result');
let count = 0;
const winnerGif = document.getElementById ('winnerGif');
const winSound = document.getElementById('winSound');

function diceRoll(){
    const dice1Random = Math.round(Math.random()*5+1) // range 1-6 because dice
    const dice2Random = Math.round(Math.random()*5+1)
    dice1text.innerText=`Dice: ${dice1Random}`;
    dice2text.innerText=`Dice: ${dice2Random}`;
    if (dice1Random===dice2Random){
        count++
        output.innerText="You win!!!" + count
        winnerGif.src="https://media2.giphy.com/media/3ohryhNgUwwZyxgktq/giphy.gif"
        winSound.play()
    }else{
        winnerGif.src=""
    }
// setTimeout (()=>{
//     winnerGif.src=""
// },5000) // 5000 millisec = 5 sec



}

function ClickHandler(){
    diceRoll()
}

