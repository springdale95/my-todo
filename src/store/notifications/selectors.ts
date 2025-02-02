import { RootState } from '../store';

export const selectShowNotification = (state: RootState) => state.notification.show;
export const selectNotificationText = (state: RootState) => state.notification.notificationText;