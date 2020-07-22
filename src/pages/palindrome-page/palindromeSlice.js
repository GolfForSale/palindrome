import { createSlice } from '@reduxjs/toolkit';

export const palindromeSlice = createSlice({
  name: 'palindromes',
  initialState: [],
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