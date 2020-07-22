import React, { useState } from 'react';
import { checkPalindrome } from '../../utils';
import { updateList } from '../../pages/palindrome-page/palindromeSlice';
import { useDispatch } from 'react-redux';
import "./form-palindrome.css"

const FormPalindrome = () => {
    const [text , setText] = useState("")
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const {value} = event.target
        setText(value)
    }
    
    const saveToList = (event) => {
        event.preventDefault()
        if(!text) {
            return
        }
        const isTextPalindrome= checkPalindrome(text)
        dispatch(updateList({text, isTextPalindrome}))
    }

    return (
        <form onSubmit={saveToList} className="form-palindrome-container">
            <label className="label-palindrome">
                Word:
                <input onChange = {handleChange} value={text} type="text" name="login" />
            </label>
            <button type="submit" className="check-text-button">Check text</button>
        </form>
    )
}

export default FormPalindrome;
