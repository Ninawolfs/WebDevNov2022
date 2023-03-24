// While Loop

let age = 20;
let i=0
while (i<=20) {
    console.log(i)
    i++;
}


let numbers = [44,55,66,77,88,99];
let index = 0;
while (index<numbers.length){
    console.log(numbers[index])
    index++;
}




let students = [{
    id: 1,
    name: 'Nina',
    email: 'nina@intec.be'
},{
    id: 2,
    name: 'Zana',
    email: 'zana@intec.be'
},{
    id: 3,
    name: 'Ara',
    email: 'ara@intec.be'
}]

let x = 0;

while (x<students.length) {
    console.log(students[x])
    x++  
}



// Do While Loop

let y=0;
do {
    console.log("Let's goooo")
} while (y>5);

// even when condition is not met the loop will run for one iteration!!! Since the condition is only checked at the end of the first iteration


function bipBip(){
    console.log('Ruuuuuuuun')
}

let indexx = 2;
let endpoint = 2;
while(indexx<endpoint){
    bipBip();
    indexx++
} 

do {
    bipBip()
    indexx++
} while (indexx<endpoint);