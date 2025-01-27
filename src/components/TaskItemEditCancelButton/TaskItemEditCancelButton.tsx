const TaskItemEditCancelButton = ({ handleEditToggle, taskButtonEditName }) => {

    return (
        <button type="submit" onClick={handleEditToggle}>
            {taskButtonEditName}
        </button>);
};

export default TaskItemEditCancelButton;