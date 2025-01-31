import { configureStore } from '@reduxjs/toolkit'
import { getTasksReducer } from './tasks/tasksReducer.ts';
import { notificationsReducer } from './notifications/notificationsReducer.ts';

export const store = configureStore({
    reducer: {
        tasksResponse: getTasksReducer,
        notification: notificationsReducer,
    },
})