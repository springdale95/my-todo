const TaskItemEditCancelButton = ({ handleEditToggle, taskButtonEditName }) => {

    return <button
        onClick={handleEditToggle}
           >{taskButtonEditName}</button>;
};

export default TaskItemEditCancelButton;