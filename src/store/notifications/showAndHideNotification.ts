import { AppDispatch } from '../store';
import {
    NotificationState,
    hideNotificationReducer,
    showNotificationReducer,
} from './notificationsReducer';

export const showAndHideNotification = (
    showNotificationAction: NotificationState,
    hideNotificationAction: NotificationState,
) => {
    return async (dispatch: AppDispatch) => {
        dispatch(showNotificationReducer(showNotificationAction));
        await new Promise((resolve) => setTimeout(resolve, 1500));
        dispatch(hideNotificationReducer(hideNotificationAction));
    };
};
