import styles from '../../../../../../App.module.scss';

export const TaskItemEditCancelButton = ({
    handleEditToggle,
    taskButtonEditName,
}: {
    handleEditToggle: () => void;
    taskButtonEditName: string;
}) => {
    return (
        <button
            className={`${styles.btn_reset} ${styles.button}`}
            type="button"
            onClick={handleEditToggle}
        >
            {taskButtonEditName}
        </button>
    );
};
