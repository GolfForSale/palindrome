import { configureStore } from '@reduxjs/toolkit';
import palindromeSlice from '../pages/palindrome-page/palindromeSlice';

export default configureStore({
  reducer: {
    palindromesList: palindromeSlice,
  },
});
