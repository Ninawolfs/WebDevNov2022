var fullText= 'veniam et nulla expecteur aute. 3 duis in aute. consequat 57 quis fugiat eu aute. pariatur est 007 enim'
var result;

// 1.charAt()  --> extract a character from the string


result=fullText.charAt(0);
result=fullText.charAt(6);
result=fullText.charAt(8);

//2.charCodeAt () -->

result=fullText.charCodeAt() // zoek op UTF-16 code


//3.concat () --> put 2 strings together

var txt1='hello';
result=txt1.concat(' world').concat(' new world').concat(' freaking');


//4.endsWith() -->  the last element of the string

result=fullText.endsWith('hello'); // Not the case so value false is given in console
result=fullText.endsWith('enim'); // correct so value true is given in console


//5.startWith() ---> The first element of the string

result=fullText.startsWith('yo'); // Not correct so value false is given in console
result=fullText.startsWith('veniam'); // correct so value true is given in console -- Hoofdletter gevoelig!


//6.fromCharCode() ---> zoek op UTF-16 code

result=String.fromCharCode(86);
result=String.fromCharCode(101);



//7.includes() ---> check if certain element/word is in a string

result=fullText.includes('et'); // true because 'et' is in the string
result=fullText.includes('nina'); //false because it is not included in the tring



//8.indexOf() --> welke positie heeft de letter of woord in de string

result=fullText.indexOf('veniam'); // answer 0 want eerste woord
result=fullText.indexOf('e'); // answer 1 want 2de letter in de string (start tellen vanaf 0 ), neemt altijd de eerste voorkomende e
result=fullText.indexOf('nina');// indien negatieve waarde wilt dit zeggen dat de letter of woord niet voorkomt in de string
result=fullText.lastIndexOf('e'); // answer 77 want we vroegen voor de laatste e --- Same for words


//9.substr () ----> extract a substring from text

result=fullText.substr(0,10); // answer: veniam et ---> eerste 11 characters
result=fullText.substring(0,10); //same only voluit geschreven
result=fullText.substr(10,30); // answer:nulla expecteur aute duis in c want van    af 10de character tot de 30ste


//10.toLowerCase  ---> Naar kleine letter A-->a
result='HELLO WORLD'.toLowerCase(); // alles naar kleine letters:hello world


//11.toUpperCase ---> Naar grote letter a-->A
result='hello world'.toUpperCase();
result=fullText.toUpperCase(); // alles naar hoofdletter


//12.match () ---> krijg  info over een bepaald element van u string

result=fullText.match('et');
result=fullText.match('nina') // indien element niet bestaat waarde null
result=fullText.match(/[a-z]+/g); // return all the words with letters between a and z -- kan ook met cijfers [1-9] en is hoofdletter gevoelig 
// +/g ?? niet de eerste of de laatste maar allemaal (global search)?
result=fullText.match(/[0-9]+/g); // vanaf 10 werkt het niet meer, not sure why
result=fullText.match(/aute/g); // geef alle aute weer in console

//https://regex101.com --> check this out and learn!


//13.repeat

result=fullText.repeat(3).repeat(5); // text veel langer nu want veel repeat
result="#".repeat(100);

//14.replace
result=result.replace('#','$'); //eerste # is replaced door $

//15.replaceAll
result=result.replaceAll('#','$'); // alle # replaced door $
result=fullText.replaceAll('aute','nina');
result='wwwwwwwindowswwwwww'.replace(/w/g,'lol'); // same result as replaceAll because we said /g --> global alle w's vervangen door lol



var user_email='nina@microsoft.com jimmy@gmail.com  nala@hotmail.com';
var myEmailRegex=/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g
result=[...user_email.matchAll(myEmailRegex)];



var findEmail='bilal@micro.com bilal@gmail.com bilal@avc.com bilal@gggg.com';
result=findEmail.match(/[a-zA-Z]+@(gmail.com)/g) // enkel emails met @gmail.com !



//16.split() ---> opsplitsing op basis van een teken(selector) en de verschillende elementen in een array!

result='bilal,ara,axel,ahmed,zana,mohammed,prince';
result=result.split(',');
result=fullText.split('.');
result=fullText.split(' '); // no selector it takes every letter/character seperatly if you add a space it splits every word


//17.trim() ---> trim the outside of your string

result='    hello world ';
result=result.trim();


//18.search() ---> gives the index/position of the element/character that you search for
result=result.search('hello');
result=fullText.search('nina'); // if not existing you get a negative value
result=fullText.search('aute');
result="microsoft products".search(/products/g); //position of the word you search for
result="microsoft products products".search('products'); // position index (plaatst in de array vanaf 0)


//19.toString() ---< convert any datatype to string

result=['a','b','c','d','e'].toString(); // from array to string (first an array with string elements --< converted to a string with different characters)


//20.


// Exercise

// string methods exercise 

var binaryTree = `
01101010 01100001 01110110 01100001 01110011 01100011 01110010 01101001 01110000 01110100 00100000 01101001 01110011 00100000 01100011 01101111 01101111 01101100 01101010 01100001 01110110 01100001 01110011 01100011 01110010 01101001 01110000 01110100 00100000 01101001 01110011 00100000 01100011 01101111 01101111 01101100
`

// find length of ones and zeros
result= binaryTree.match(1);
ones=binaryTree.match(/1/g).length;
zeros=binaryTree.match(/0/g).length;

console.log(`ones:${ones} zero:${zeros}`)


console.log(result);