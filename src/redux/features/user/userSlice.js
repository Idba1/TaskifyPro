import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'Idba',
    email: 'idba@gmail.com',
    userTasks: [],
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
});

export default userSlice.reducer;