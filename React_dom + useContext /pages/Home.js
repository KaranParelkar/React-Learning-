import React from 'react';
import {useContext} from 'react';
import { AppContext } from '../App';

export const Home = () => {
    const {username} = useContext(AppContext)
    return <h1> Hello {username} </h1>
}
