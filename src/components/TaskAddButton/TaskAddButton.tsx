interface TaskAddButton {
    addTask: () => void;
}

const TaskAddButton = ({ addTask }:TaskAddButton) => {

    return (
        <button
            type="submit"
            onClick={addTask}
        >
            Добавить
        </button>
    );
};

export default TaskAddButton;