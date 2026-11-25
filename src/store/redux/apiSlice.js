import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
  name: 'apiData',
  initialState: { film: [], series: [] },
  reducers: {
    setDataApi: (state, action) => action.payload,
  },
});

export const { setDataApi } = apiSlice.actions;
export default apiSlice.reducer;
