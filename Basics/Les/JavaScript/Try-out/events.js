const output = document.getElementById('output'); //control over the element in javascript
const username = document.getElementById('username');
// const myBtn = document.getElementById('myBtn');
const myBtn = document.getElementById('myBtn')
const myImg = document.getElementById('myImg')


function clickHandler(){
    console.log('Event Handler')
    output.innerText=username.value
}

function changeHandler(){
    console.log('Change Handler')
    output.innerText=username.value
}

function mouseOverHandler(){
    console.log('test mouseoverhandler')
    myBtn.className ="btn btn-primary btn-lg"
    myImg.src="https://cdn.britannica.com/61/166261-050-34EC02D8/Bill-Clinton.jpg"
}

function mouseOutHandler(){
    console.log('test mouseoverhandler')
    myBtn.className ="btn btn-danger btn-lg"
}