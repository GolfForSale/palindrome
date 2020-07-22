import React from 'react';
import { useSelector } from 'react-redux';
import { selectPalindromeList } from './../../pages/palindrome-page/palindromeSlice';
import "./palindrome-list.css"

const PalindromeListComponent = () => {
    const palindromesList = useSelector(selectPalindromeList);

    return (
        <ul className="palindrome-list-container">
            {palindromesList.map(record => (
                <li>
                    <span>{ `Text: ${record.text}`}</span>
                    <span>{ `Palindrome: ${record.isTextPalindrome.toString()}`}</span>
                </li>
            ))}
        </ul>
    )
}

export default PalindromeListComponent;
