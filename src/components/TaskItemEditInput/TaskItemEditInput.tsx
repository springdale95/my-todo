const TaskItemEditInput = ({ editedText, handleChange }) => {
    return (
        <input id="edit" type="text" value={editedText} onChange={handleChange} />
    );
};

export default TaskItemEditInput;