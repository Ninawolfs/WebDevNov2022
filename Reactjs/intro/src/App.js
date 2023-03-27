
import Profile from './components/profile'
import Spider_logo from './logo.png'

function App(){
  const message = "Hello friend!"
  const number = [1,2,3,4,5,6,7,8,9]
  const users = {username:'root'}
  const allUsers = [
    {username:'Nina'},
    {username:'Zana'},
    {username:'Ahmad'}
  ]

const GetMessage = ()=>{
  return(
    <h1>this is the most recent message</h1>
  )
}

  return (
   <>   
   <h1>Hello world</h1>
   <h1>another message</h1>
   <img src={Spider_logo} width={300} />
   <img src="/spider.png" width={300} />
   <h1>{message}</h1>
   <h1>{number}</h1>
   <h1>{users.username}</h1>
   <h1>{4+5}</h1>
   <h1>{'Yo'}</h1>
   {/* <h1>{alert(1)}</h1> */}
   {
    allUsers.map((user,index)=>(
      <h1>{user.username}</h1>
    ))
   }


  <GetMessage/>
  {/* <Profile drink="Hello React"/>
  <Profile number={55} /> */}
  <Profile password="root123" number={55}  name="Nina" drink="Hello React" users={[{username:'Nina'},{username:'Zana'}]}/>
   </>
  )
}



export default App;