import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName: 'Shakil Ahmed',
    email: 'shakil@gmail.com',
    userTasks: [],
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
});

export default userSlice.reducer;