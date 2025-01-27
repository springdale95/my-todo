const TaskItemEditInput = ({ editedText, handleChange }) => {
    return (
        <input type="text" value={editedText} onChange={handleChange} />
    );
};

export default TaskItemEditInput;