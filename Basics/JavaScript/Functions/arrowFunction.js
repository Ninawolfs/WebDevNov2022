const myFunction = (first,last)=>`${first} ${last}`
console.log('John','Doe');

let myVar = "Axel"; // Merge with extra string: 'I put Axel in the code
const getMessage = name=>{
    let fullText = `I put ${name} in the code`
    return fullText
}

console.log(getMessage(myVar));