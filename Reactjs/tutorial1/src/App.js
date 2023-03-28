import Header from "./Components/Header"
import Footer from "./Components/Footer"
import NewsFeed from "./Components/NewsFeed"


function App(){
  const handleInput = (e)=>{
  console.log(e.target.value);
}

  return (
<div>
  <Header/>
  <NewsFeed/>
  <input type='text' onKeyDown={handleInput}></input>
  <Footer/>
</div>
  )
}

export default App