interface TaskAddButton {
    addTask: () => void;
}

enum TaskAddButtonName {
    Add = 'Добавить'
}

const TaskAddButton = ({ addTask }: TaskAddButton) => {
    return (
        <button
            type="submit"
            onClick={addTask}
        >
            {TaskAddButtonName.Add}
        </button>
    );
};

export default TaskAddButton;
