import React, { useState } from 'react';
import pageConsts from '../../pageConsts';
import users from '../../users.json'

const LoginPage = ({setPage}) => {
    const [userData , setUserData] = useState({
        login : "",
        password : ""
    })

    const login = (event) => {
        event.preventDefault()
        const isAuthenticated = users.some(user => user.login === userData.login && user.password === userData.password)
        if(isAuthenticated) {
            setPage(pageConsts.palindromePage)
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
            {/* <input type="submit" value="Wyślij" /> */}
            <button type="submit">login</button>
        </form>
    )
}

export default LoginPage;
