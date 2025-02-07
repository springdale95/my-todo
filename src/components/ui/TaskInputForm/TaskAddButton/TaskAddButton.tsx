import styles from '../../../../App.module.scss';

interface TaskAddButton {
    addTask: () => void;
}

enum TaskAddButtonName {
    Add = 'Добавить',
}

export const TaskAddButton = ({ addTask }: TaskAddButton) => {
    return (
        <button className={`${styles.btn_reset} ${styles.button}`} type="submit" onClick={addTask}>
            {TaskAddButtonName.Add}
        </button>
    );
};
