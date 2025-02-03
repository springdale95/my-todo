export const TaskItemEditCancelButton = ({ handleEditToggle, taskButtonEditName }: { handleEditToggle: () => void, taskButtonEditName: string }) => {

    return (
        <button type="button" onClick={handleEditToggle}>
            {taskButtonEditName}
        </button>);
};