import styles from '../../../../../../App.module.scss';

export const TaskItemEditButton = ({
    taskButtonViewName,
    handleEditToggle,
}: {
    taskButtonViewName: string;
    handleEditToggle: () => void;
}) => {
    return (
        <button className={`${styles.btn_reset} ${styles.button}`} onClick={handleEditToggle}>
            {taskButtonViewName}
        </button>
    );
};
