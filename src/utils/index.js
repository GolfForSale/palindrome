import users from '../users.json'

export const checkPalindrome = (text) => {
    text = text.toLowerCase().replace(/[^a-z]+/g,"");
    return text === text.split("").reverse().join("")
}

export const checkAuthentication = (userData) => users.some(user => user.login === userData.login && user.password === userData.password)