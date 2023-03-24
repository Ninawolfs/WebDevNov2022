// Decode flag to get the message
 
var flag1 = [
    '=', 'E', 'S', 'Z', 'z', 'l', '2', 'Y',
    'y', 'V', 'G', 'e', 'l', 'B', 'S', 'Z',
    'o', 'R', 'H', 'I', 'k', 'V', 'G', 'd',
    'l', 'x', 'G', 'c'
]
 
var flag2 = ['t', '9', '2', 'Y',
    'g', 'U', 'm', 'd', 'n', 'U', '3', 'b',
    'Z', 'B', 'S', 'I', 'l', '5', '2', 'b',
    'k', 'B', 'C', 'b', 's', 'V', '2', 'V']
 
// 1. Merge the two arrays into one array

let mergedArrays = flag1.concat(flag2);
console.log(mergedArrays);
// 2. Reverse the array

let reversedArray = mergedArrays.reverse();
console.log(reversedArray)
 
// 3. Convert the array to a string

// let stringedArray = mergedArrays.toString();  // Niet juist want dan worden de , behouden! We gebruiken join method
let stringedArray = mergedArrays.join("");
console.log(stringedArray)
 
// 4. Print the decoded message  (Possible algorithms: Base64 Encoded String)

console.log(atob(stringedArray)); // atob methode to decode base64. btoa is to encode --> built in methods
