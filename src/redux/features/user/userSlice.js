import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import auth from '../../../utils/firebase.config';
import { updateProfile } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const initialState = {
    name: ' ',
    email: ' ',
    isLoading: true,
    isError: false,
    error: ' ',
};

export const createUser = createAsyncThunk('/userSlice/createUser', async ({ email, password, name }, { rejectWithValue }) => {
    console.log("createUser Thunk triggered with:", { email, password, name });
    try {
        const data = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Firebase sign up result:", data);
        await updateProfile(auth.currentUser, { displayName: name });
        return {
            email: data.user.email,
            name: data.user.displayName,
        };
    } catch (error) {
        console.error("Firebase sign up error:", error);
        return rejectWithValue(error.message);
    }
});


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.name = payload.name;
            state.email = payload.email;
        },
        toggleLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        logout: (state) => {
            state.name = "";
            state.email = "";
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.email = '';
            state.name = '';
            state.error = '';
        }).addCase(createUser.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;
            state.email = payload.email;
            state.name = payload.name;
            state.error = '';
        }).addCase(createUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.email = '';
            state.name = '';
            state.error = action.error.message;
        });
    },
});

export const { setUser, toggleLoading, logout } = userSlice.actions;
export default userSlice.reducer;