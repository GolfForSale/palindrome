import React, { useState } from 'react';
import { checkAuthentication } from '../../utils';

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
        <form onSubmit={login}>
            <label>
                Login:
                <input onChange = {handleChange} value={userData.login} type="text" name="login" />
            </label>
            <label>
                Password:
                <input  onChange = {handleChange}  value={userData.password} type="text" name="password" />
            </label>
            <button type="submit">login</button>
        </form>
    )
}

export default LoginPage;
