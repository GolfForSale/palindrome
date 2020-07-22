import React, { useState } from 'react';


const PalindromePage = () => {
    const [text , setText] = useState("")

    const isPalindrome = (text) => {
        text = text.toLowerCase().replace(/[^a-z]+/g,"");
        return text === text.split("").reverse().join("")
    }

    const checkPalindrome = (event) => {
        event.preventDefault()
        const v= isPalindrome(text)
    }
    
    const handleChange = (event) => {
        const {value} = event.target
        setText(value)
    }
    return (
        <form onSubmit={checkPalindrome}>
        <label>
            Word:
            <input onChange = {handleChange} value={text} type="text" name="login" />
        </label>

        {/* <input type="submit" value="Wyślij" /> */}
        <button type="submit">login</button>
    </form>
    )
}

export default PalindromePage;
