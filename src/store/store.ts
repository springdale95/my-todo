import { configureStore } from '@reduxjs/toolkit'
import { tasksReducer} from './tasks/tasksReducer.ts';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
})

