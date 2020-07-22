import React, { useState } from 'react';
import { checkPalindrome } from '../../utils';
import { updateList } from '../../pages/palindrome-page/palindromeSlice';
import { useDispatch } from 'react-redux';


const FormPalindrome = () => {
    const [text , setText] = useState("")
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const {value} = event.target
        setText(value)
    }
    
    const saveToList = (event) => {
        event.preventDefault()
        const isTextPalindrome= checkPalindrome(text)
        dispatch(updateList({text, isTextPalindrome}))
    }

    return (
        <form onSubmit={saveToList}>
            <label>
                Word:
                <input onChange = {handleChange} value={text} type="text" name="login" />
            </label>
            <button type="submit">login</button>
        </form>
    )
}

export default FormPalindrome;
