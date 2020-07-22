import React, { useState } from 'react';
import { checkAuthentication } from '../../utils';
import "./login-page.css";

const LoginPage = ({setAuthentication}) => {
    const [userData , setUserData] = useState({
        login : "",
        password : ""
    })

    const login = (event) => {
        event.preventDefault()
        const isAuthenticated = checkAuthentication(userData)
        if(isAuthenticated) {
            setAuthentication(true)
        }
    }

    const handleChange = (event) => {
        const {name , value} = event.target
        setUserData(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    return (
        <form onSubmit={login} className="login-container">
            <label className="label-container">
                Login:
                <input onChange = {handleChange} value={userData.login} type="text" name="login" />
            </label>
            <label className="label-container">
                Password:
                <input onChange = {handleChange}  value={userData.password} type="password" name="password" />
            </label>
            <button type="submit"  className="login-submit">login</button>
        </form>
    )
}

export default LoginPage;
