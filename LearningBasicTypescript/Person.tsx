
import { useState } from "react"

const [num,setnum] = useState<string>("")
interface Props {
    name :string,
    age: number,
    email: string,
    isMarried: boolean,
    friends: string[],
    country: Country,
}

export enum Country {
    India = "India",
    USA = "USA",
    Russia = "Russia"
}




export const Person = (props : Props) => {
    return(
        <div>
            <h1>Name : {props.name}</h1>
            <h1>Age : {props.age}</h1>
            <h1>Email : {props.email}</h1>
            <h1>IsMarried : {props.isMarried}</h1>
            {props.friends.map((friend : string ) => (
                <h1>{friend}</h1>
            ))}
            <h1>Country : {props.country}</h1>
        </div>
    )
}