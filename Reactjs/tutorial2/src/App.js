function Profile (){
  return(
    <h1>Profile</h1>
  )
}

function Posts (){
  return(
    <ul>

    </ul>
  )
}



function App() {
  const test = 'this is a test'
  const data = []
  const clickHandler = ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }

  return (
   <div>
    <button onclick={}></button>
   </div>
  );
}

export default App;
