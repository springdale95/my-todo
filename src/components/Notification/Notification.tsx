import { useSelector } from "react-redux";
import { selectNotificationText } from "../../store/notifications/selectors";

const Notification = () => {
    const notificationText = useSelector(selectNotificationText)
    return (
        <span>{notificationText}</span>
    );
};

export default Notification;