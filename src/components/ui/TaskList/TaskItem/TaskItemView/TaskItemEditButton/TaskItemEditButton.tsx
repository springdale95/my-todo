export const TaskItemEditButton = ({ taskButtonViewName, handleEditToggle }: { taskButtonViewName: string, handleEditToggle: () => void }) => {
    return (
        <button onClick={handleEditToggle}>
            {taskButtonViewName}
        </button>
    );
};