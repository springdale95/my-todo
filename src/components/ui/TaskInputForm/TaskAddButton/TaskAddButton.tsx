import styles from './TaskAddButton.module.scss'

interface TaskAddButton {
    addTask: () => void;
}

enum TaskAddButtonName {
    Add = 'Добавить',
}

export const TaskAddButton = ({ addTask }: TaskAddButton) => {
    return (
        <button className={styles.button} type="submit" onClick={addTask}>
            {TaskAddButtonName.Add}
        </button>
    );
};

