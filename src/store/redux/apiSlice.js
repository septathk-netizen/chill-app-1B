import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
  name: 'apiData',
  initialState: [],
  reducers: {
    setDataApi: (state, action) => action.payload,
    addItem: (state, action) => [...state, action.payload],
    updateItem: (state, action) => state.map(item => item.id === action.payload.id ? action.payload : item),
    deleteItem: (state, action) => state.filter(item => item.id !== action.payload),
  },
});

export const { setDataApi, addItem, updateItem, deleteItem } = apiSlice.actions;
export default apiSlice.reducer;
