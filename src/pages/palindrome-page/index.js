import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPalindromeList, updateList } from './palindromeSlice';


const PalindromePage = () => {
    const palindromesList = useSelector(selectPalindromeList);
    const dispatch = useDispatch();
    const [text , setText] = useState("")
    console.log('a', palindromesList)
    const checkPalindrome = (text) => {
        text = text.toLowerCase().replace(/[^a-z]+/g,"");
        return text === text.split("").reverse().join("")
    }

    const saveToList = (event) => {
        event.preventDefault()
        const isTextPalindrome= checkPalindrome(text)
        dispatch(updateList({text, isTextPalindrome}))
    }
    
    const handleChange = (event) => {
        const {value} = event.target
        setText(value)
    }
    return (
        <div>
            <form onSubmit={saveToList}>
                <label>
                    Word:
                    <input onChange = {handleChange} value={text} type="text" name="login" />
                </label>

                {/* <input type="submit" value="Wyślij" /> */}
                <button type="submit">login</button>
            </form>
            <ul>
                {palindromesList.map(record => (
                    <li>
                       { `${record.text}  ${record.isTextPalindrome.toString()}`}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PalindromePage;
