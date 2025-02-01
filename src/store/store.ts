import { configureStore } from '@reduxjs/toolkit'
import { getTasksReducer } from './tasks/tasksReducer.ts';
import { notificationsReducer } from './notifications/notificationsReducer.ts';
import { filterReducer } from './filter/filterReducer.ts';

export const store = configureStore({
    reducer: {
        tasksResponse: getTasksReducer,
        notification: notificationsReducer,
        filter: filterReducer,
    },
})