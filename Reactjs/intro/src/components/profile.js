import {newsAll, newsById, getNewsDetail} from "../utils/newAction"

export default function Profile(props){
    return(
        <ul>
          <li>Test1</li>
          <li>Test2</li>
          <li>Test3</li>
          <li>{props.drink}</li>
          <li>{props.number}</li>
          <li>{props.password}</li>
        <h1>
            {props.drink}
        </h1>
        {props.users.map((user,index)=>(
            <li key={index}>{user.username}</li>
        ))}

        {
            newsAll()
            .then(data=>console.log(data))
        }
        
        </ul>
    )
}