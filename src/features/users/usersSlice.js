import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Roll Safe' },
  { id: '1', name: 'Charlie in the Booth' },
  { id: '2', name: 'Big Shaq' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
