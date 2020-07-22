import { createSlice } from '@reduxjs/toolkit';
import defaultPalindromes from '../../defaultPalindromes.json'

export const palindromeSlice = createSlice({
  name: 'palindromes',
  initialState: defaultPalindromes,
  reducers: {
    updateList: (state, action) => {
        console.log(action)
      return [...state, action.payload];
    }
  },
});

export const { updateList } = palindromeSlice.actions;

export const selectPalindromeList = state => state.palindromesList;

export default palindromeSlice.reducer;