import { hideNotificationReducer, showNotificationReducer } from "./notificationsReducer";

export const showAndHideNotification = (showNotificationAction, hideNotificationAction) => {
    return async (dispatch) => {
        dispatch(showNotificationReducer(showNotificationAction));
        await new Promise((resolve) => setTimeout(resolve, 1500))
        dispatch(hideNotificationReducer(hideNotificationAction));
    }
}