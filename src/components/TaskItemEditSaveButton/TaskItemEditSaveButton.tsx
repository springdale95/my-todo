const TaskItemEditSaveButton = ({ setIsEditing, editTask, taskButtonEditName }) => {

    const handleSave = () => {
        setIsEditing(false);
        editTask();
    };

    return (
        <button type="submit" onClick={handleSave}>
            {taskButtonEditName}
        </button>
    );
};

export default TaskItemEditSaveButton;