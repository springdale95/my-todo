const TaskItemEditInput = ({ editedText, handleChange, handleKeyPress }) => {
    return (
        <input
            type="text"
            value={editedText}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
        />
    );
};

export default TaskItemEditInput;