import { useSelector } from 'react-redux';
import { selectNotificationText } from '../../../store/notifications/selectors.ts';
import styles from '../../../App.module.scss';

export const Notification = () => {
    const notificationText = useSelector(selectNotificationText);

    return <span className={styles.notification_text}>{notificationText}</span>;
};
