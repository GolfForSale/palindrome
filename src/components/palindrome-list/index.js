import React from 'react';
import { useSelector } from 'react-redux';
import { selectPalindromeList } from './../../pages/palindrome-page/palindromeSlice';

const PalindromeListComponent = () => {
    const palindromesList = useSelector(selectPalindromeList);

    return (
    <ul>
        {palindromesList.map(record => (
            <li>
               { `${record.text}  ${record.isTextPalindrome.toString()}`}
            </li>
        ))}
    </ul>
    )
}

export default PalindromeListComponent;
