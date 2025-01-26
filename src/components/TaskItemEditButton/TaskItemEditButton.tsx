const TaskItemEditButton = ({ taskButtonViewName, handleEditToggle }) => {
    return <button
        onClick={handleEditToggle}
           >
        {taskButtonViewName}
    </button>;
};

export default TaskItemEditButton;