export const TaskItemEditInput = ({ editedText, handleChange }: { editedText: string, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <input id="edit" type="text" value={editedText} onChange={handleChange} />
    );
};
