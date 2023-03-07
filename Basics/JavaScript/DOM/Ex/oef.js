// const g = t => document.createElement(t);
// const parentContainer = document.querySelector('.container');

// const ULContainer = g('ul');
// ULContainer.classname='list-group list-group-flush';

// function LiGenerator (content){
// const LIItem = g('li');
// LIItem.classname='list-group-item';
// LIItem.innerText = content;
// ULContainer.appendChild(LIItem)
// return LIItem
// }

// parentContainer.appendChild(ULContainer)
// console.log(parentContainer)

const table = document.querySelector('.table')

const createElement = x => document.createElement(x);

const tHead = createElement('thead');
const tBody = createElement('tbody');
const tR = createElement('tr');
const tR2 = createElement('tr');
const tH = createElement('th');
const tH2 = createElement('th');
const tH3 = createElement('th');
const tD = createElement('td');
const tD2 = createElement('td');
const tD3 = createElement('td');

tR2.append(tD, tD2, tD3);
tR.append(tH, tH2, tH3);
tHead.append(tR);
tBody.append(tR2);
table.appendChild(tHead);
table.appendChild(tBody);

// tH.innerText ='#';
// tH2.innerText = 'username';
// tH3.innerText = 'password';
// tD.innerText = '1';
// tD2.innerText = 'root';
// tD3.innerText = 'toor123';

const createText = (x,y)=>{
    x.innerText = y
}

createText(tH,'#');
createText(tH2,'username');
createText(tH3,'password');
createText(tD,'1');
createText(tD2,'root');
createText(tD3,'toor123');

// const createExtra = (a, b, c) =>{
//     document.createElement(a)
//     a.innerText(b)
//     c.appendChild(a)
// }

// createExtra (tD4, 'another', tR2);

console.log(table)

