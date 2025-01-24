import { configureStore } from '@reduxjs/toolkit'
import { getTasksReducer, addTaskReducer } from './tasks/tasksReducer.ts';

export const store = configureStore({
    reducer: {
        tasks: getTasksReducer,
        addTask: addTaskReducer,
    },
})

