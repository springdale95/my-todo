import { configureStore } from '@reduxjs/toolkit'
import { getTasksReducer } from './tasks/tasksReducer.ts';

export const store = configureStore({
    reducer: {
        tasks: getTasksReducer,
        loading: getTasksReducer,
    },
})
