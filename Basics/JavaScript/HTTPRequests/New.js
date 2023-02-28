// Comments application

const InputUsername = document.getElementById('username');
const TextAreaComment = document.getElementById('comment');
const CommentList = document.getElementById('commentList');

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



