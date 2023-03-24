const deleteBtn = document.getElementById('delete-btn');

// Start your backend server before coding the below code.
// You can use the json-server package to create a fake REST API server.
// json-server db.json --watch

// The function below is not working yet. Please help me to fix it.
// I want to delete all posts from the server using the delete http request.
// I have tried to use the deleteAllPosts function below but it is not working.
// Maybe i need to use the fetch api to send the delete request for each post while looping through the posts.

function deleteAllPosts(){
    fetch ('http://localhost:3000/database')
    .then(res=>res.json())
    .then(data=>{
        data.forEach(post=>{
            fetch(`http://localhost:3000/database/${post.id}`,{
                method: 'DELETE'
            })
            .then(()=>{
                console.log('Deleting all posts...');
        })
    })
})
}

