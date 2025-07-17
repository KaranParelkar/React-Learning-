// App.js

import './App.css';
// import {User} from './User'; // This is a named import

function App() {
  
  const users = [
    {name :"Karan", age: 20},
    {name :"Yogesh",age: 50},
  ]
  
  
   return (
    <div className="App">
    {
    <div>
      {users.map((user,key) =>{
        return <User name= {user.name} age = {user.age} />
      })}
    </div>
    }
     </div>
   )
 
   
}
 
const User = (props) => {
    return (
      <div>
        <h1>{props.name} {props.age} </h1>
      </div>
    )
}

export default App;
