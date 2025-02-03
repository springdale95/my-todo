export const TaskItemEditSaveButton = ({ setIsEditing, editTask, taskButtonEditName }: { setIsEditing: (isEditing: boolean) => void, editTask: () => void, taskButtonEditName: string }) => {

    const handleSave = () => {
        setIsEditing(false);
        editTask();
    };

    return (
        <button type="button" onClick={handleSave}>
            {taskButtonEditName}
        </button>
    );
};