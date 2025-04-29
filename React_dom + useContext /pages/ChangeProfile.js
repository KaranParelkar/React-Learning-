import { useState } from "react"
import { useContext } from "react"
import { AppContext } from "../App"

export const ChangeProfile = (props) => {

    const {setUsername} = useContext(AppContext)
    const [newusername,setNewUsername] = useState("")
    return (
        <div>
            <input type="text" placeholder="Enter the new username" onChange={(event)=>setNewUsername(event.target.value)}/>
            <button onClick={() =>{
                setUsername(newusername);
            }}> Change Username </button>
        </div>
    )
}