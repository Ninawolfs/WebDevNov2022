const student={
    first_name:'Jenny',
    last_name:'Doe',
    age:30,
    email:'jenny@microsoft.com',
    role:'developer',
    phone:'05494834619',
    isValid:true
}
//print first name function
function getName(){
    return student.first_name
}

//print student email
function getStudentEmail(){
    return student.email
}

//print student phone numer
function getStudentPhoneNumber(){
    return student.phone
}

//set student last name
function setStudentName(newName){
student.first_name=newName // update student name
return student
}

function getSelectedStudentInfo(){
    return{
        fullname: `${student.first_name} ${student.last_name} ${student.age}`
    }
}

console.log(getName());
console.log(getStudentEmail());
console.log(getStudentPhoneNumber());
setStudentName('Michael') //update object property first_name
console.log(getName());//display first_name property out again

console.log(getSelectedStudentInfo())