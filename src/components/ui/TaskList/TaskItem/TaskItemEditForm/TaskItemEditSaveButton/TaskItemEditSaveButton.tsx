import styles from '../../../../../../App.module.scss';

export const TaskItemEditSaveButton = ({ setIsEditing, editTask, taskButtonEditName }: { setIsEditing: (isEditing: boolean) => void, editTask: () => void, taskButtonEditName: string }) => {

    const handleSave = () => {
        setIsEditing(false);
        editTask();
    };

    return (
        <button className={`${styles.btn_reset} ${styles.button}`} type="button" onClick={handleSave}>
            {taskButtonEditName}
        </button>
    );
};