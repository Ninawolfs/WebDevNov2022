// Comments application

const InputUsername = document.getElementById('username');
const TextAreaComment = document.getElementById('comment');
const CommentList = document.getElementById('commentList');
const data_Id = document.getElementById('data_id');

function AddComment(){
    const obj={
        username:InputUsername.value,
        comment:TextAreaComment.value
    }
    fetch('http://localhost:3000/database/',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(obj)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data,'saved')
    })
}

fetch('http://localhost:3000/database')
.then(response=>response.json())
.then(allcomments=>{
    allcomments.map(single_comment=>{
        console.log(single_comment)

        CommentList.innerHTML += `<li class="list-group-item">${single_comment.username} - ${single_comment.comment}</li>`
    })
})

function deleteOne (){
    const ID = data_Id.value
    fetch (`http://localhost:3000/database/${data_Id.value}`, {
        method:'DELETE'
    })
    .then(()=>{
        console.log('Data is deleted')
    })
}

function updateOne(){
    const ID = data_Id.value
    const newComm = {
        username:"Reassurance",
        comment: "It will all become clear, give it some time"
    }
    fetch (`http://localhost:3000/database/${data_Id.value}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComm)
    })
    .then(res=>res.json())
    .then(updated=>console.log('Updated', updated))
}


function deleteAll (){
    fetch('http://localhost:3000/database')
    .then(res=>res.json)
    .then(data=>{
        data.forEach(comment => {
            fetch(`http://localhost:3000/database/${comment.id}`,{
                method: 'DELETE'
            })
            .then(()=>{
                console.log('Done deleting all posts')
            })
        });
    })
}



