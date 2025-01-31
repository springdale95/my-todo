import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NotificationState = {
    show: boolean;
    notificationText: string;
    type: 'panding' | 'success' | 'error';
}

const initialState: NotificationState = {
    show: false,
    notificationText: '',
    type: 'panding',
}

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        showNotificationReducer(state, action: PayloadAction<NotificationState>) {
            return {...state, ...action.payload};
        },
        hideNotificationReducer(state, action: PayloadAction<NotificationState>) {
            return {...state, ...action.payload};
        }
    }
})

export const { showNotificationReducer, hideNotificationReducer } = notificationSlice.actions;
export const notificationsReducer = notificationSlice.reducer;