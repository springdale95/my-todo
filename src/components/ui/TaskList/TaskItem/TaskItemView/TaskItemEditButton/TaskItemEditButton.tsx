export const TaskItemEditButton = ({ taskButtonViewName, handleEditToggle }) => {
    return (
        <button onClick={handleEditToggle}>
            {taskButtonViewName}
        </button>
    );
};