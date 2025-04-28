import { useState,useEffect } from "react";
import React from "react";

export const Text = () => {
    const [text,setText] = useState("");
    useEffect(() => {
        console.log("Component Mounted");
        return () =>{console.log("Component Unmounted")}
    }, [text]
)
        return(
            <div>
                <input onChange={(event) => setText(event.target.value)}></input>
                <h1>{text}</h1>
            </div>
        )
}
