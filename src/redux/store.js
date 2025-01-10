import { configureStore } from "@reduxjs/toolkit";
import reducer from "./features/tasks/tasksSlice";

const store = configureStore({
    reducer: {
        tasks: reducer,
    },
})

export default store;