function NewsFeed(){
    const handleClick = ()=>alert('Click arert!')
    const handleMouseOver = ()=> console.log('Mouse over!')
    const handleNewsData = ()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    }
    return (
  
  <ul>
    <li onClick={handleClick}>news1</li>
    <li onMouseOver={handleMouseOver}>news2</li>
    <li onClick={handleNewsData}>news3</li>
    <li>news4</li>
  </ul>
  
    )
  }
  
  export default NewsFeed