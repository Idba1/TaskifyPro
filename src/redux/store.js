import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import reducer from "./features/tasks/tasksSlice";

const store = configureStore({
    reducer: {
        tasksSlice: reducer,
        userSlice: userSlice,
    },
})

export default store;