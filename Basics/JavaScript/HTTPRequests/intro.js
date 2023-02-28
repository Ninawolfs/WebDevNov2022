fetch('http://localhost:3000/database')
.then(res=>res.json())
.then(jsondata=>{
    console.log(jsondata)
})

fetch('readme.txt')
.then(res=>res.text())
.then(txtcontent=>{
    console.log(txtcontent)
})

fetch('http://localhost:3000/database/2')
.then(res=>res.json())
.then(preview=>{
    console.log(preview)
})

// fetch integrated in a function

async function GetData(id){
    let response= await fetch('http://localhost:3000/database/'+ id)
    let data = response.json();
    return data
}

GetData(3)
.then(mydata=>console.log(mydata))

// Link with HTML...?

const DataID=document.getElementById('data_id')
const Output=document.getElementById('Output')

function ClickHandler(){
    GetData(DataID.value)
    .then(mydata =>{
        Output.innerHTML +=`<li>Title:${mydata.title}<br/>Body:${mydata.body}</li>`
    })
}



const newData={
    title:"Python",
    body:"Python is a reptilian"
}


function AddDataHandler(){
    fetch('http://localhost:3000/database/',{
    method:'POST',
    headers:{
        'content-Type':'application/json; charset=utf-8'
    },
    body:JSON.stringify(newData)
})
.then(data=>{
    console.log(data, 'Saved')
})
}

// Link with HTML to delete data

function DeleteHandler(){
    console.log('testing delete')
    fetch('http://localhost:3000/database/'+DataID.value,{
        method:'DELETE',
    })
    .then(()=>{
        console.log('Deleted')
    })
}

// link with HTML to update existing data

const newObjectData={
    title:"Viper",
    body:"Poisonous reptilian"
}

function UpdateHandler(){
    fetch('http://localhost:3000/database/4',{
        method:"PATCH",
        headers:{
            'Content-Type':'application/json; charset=utf-8'
        },
        body:JSON.stringify(newObjectData)
    })
    .then(res=>res.json)
    .then(data=>{
        console.log(data, 'UPDATED')
    })
}