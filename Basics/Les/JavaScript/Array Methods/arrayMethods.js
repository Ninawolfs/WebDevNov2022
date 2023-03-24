var students =['Ara','Bilal','Mohammed','Ahmad','Zana','Prince','Nina','Serine','Axel'];
var result;

//1. toString() ---> convert data (numbers,objects,arrays,...)to string
result=students.toString();

//2.join() ---> return string of the elements with het leesteken naar keuze (normaal altijd komma maar hier kan je kiezen welk leesteken de elementen van elkaar scheid eenmaal ze string worden)
result=students.join("-"); // nu zal de string bestaan uit alle namen die gescheiden worden door - ipv ,


//3.push() ---> add new value into array
students.push('Atilla'); // response = 10 want nu extra element en dus 10 in totaal
students.push(true); // boolean toevoegen aan array
students.push(20); // number toevoegen aan array
students.push({    //object toevoegen aan array
    id:1,
    name:"nina",
})

result=students; // response alle namen met atilla erbij

//4. pop() ---> remove last item/element from array
students.pop();
result=students;

//5. shift() --->remove first element/item/value of array 
students.shift();

//6. unshift() ---> add value in the beginning of the array (with push the value is added at the end of the array)
students.unshift('Ara');
//update array list
students[0]='Hello World'; // Hiermee wordt de eerste waarde veranderd : ara is nu hello world.

//7. lenght - size of array list
result=students.length //---> geen () toevoegen bij deze.
// geef weer hoeveel elementen er in de array zitten

//Delete ---> delete an element of the array
delete students[9]; // hier zal het 9de element van de array gewist worden (Atilla)
// this is not a method!!!! delete is an keyword
result= students;


//8. concat() --> samenvoegen van arrays
result=students;

//concat
var n1=[1,2,3];
var n2=[4,5,6];
console.log(n1.concat(n2));


//9. splice ()
students.splice(0,1,"New student name"); //---> // eerste waard eis waar we beginnen, 2de waarde is hoeveel elementen we willen impacten, 3de waarde hoe we de 2de waarde willen impacten (deze laatste is optional) --> we beginnen hier te tellen vanaf het begin en willen 1 element aanpassen naar new student name en dus zal ara (het eerste element) vervangen worden door new student
students.splice(6,students.length-6,"Hello World"); //----> vanaf element 6 wordt alles dat erna komt gewist

//1ste waarde: vanaf waar we beginnen te deleten
//2de waarde: hoeveel elementen we deleten
//3de waarde: optional, door wat vervangen we de verwijderde waarden

//10.slice()
let newArrayList= students.slice(0,3);
result = newArrayList

// je neemt van de originele var enkel de eerste 3 elementen in de nieuwe array var (0,3); beginnen tellen in het begin en we nemen 3 elementen over

let newArrayLiist= students.slice(4,7);
result = newArrayLiist

// we beginnen te tellen vanaf het 4de element en vanaf het 4de element nemen we de volgende 7 elementen over in de nieuwe var array

//11. reverse ()
result=newArrayList.reverse();

//12. sort ()
result=students.sort(); // alfabethische ordening en werkt enkel op string elements; met nummers niet mogelijk

var numbers=[1,88,63,2,999,5403,5,223,87];
result=numbers.sort(function(x,y){
    return x-y;
})

// Dit is de enige manier om cijfers van klein naar groot te ordenen. 


//13. forEach() --> een bepaalde functie laten uitvoeren op elk element van de array

students.forEach(function(value,index){
console.log(`id: ${index} \n Value: ${value}`)
});



console.log(`result is\n ${result}\n typeof data is ${typeof result}`);
console.log(students[12]);