import React from 'react';
import App from './App';
import Login from "./login"
import {useSelector} from "react-redux"

const Auth = () =>{
    const auth = useSelector(state => state.login.data[0].auth)

    return(
        <div>
        {auth && <App />}
        {!auth && <Login />}
        </div>
    )
};

export default Auth;
