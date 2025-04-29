import React from "react"; 
import { ChangeProfile } from "./ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
    const {username} = useContext(AppContext);
    return(
        <div>This is profile page user {username }
        <ChangeProfile />
</div>
);
}
