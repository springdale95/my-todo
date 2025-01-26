const TaskItemEditSaveButton = ({ setIsEditing, editTask, taskButtonEditName }) => {

    const handleSave = () => {
        setIsEditing(false);
        editTask()
    };

    return (
        <button
            onClick={handleSave}
        >
            {taskButtonEditName}
        </button>
    );
};

export default TaskItemEditSaveButton;