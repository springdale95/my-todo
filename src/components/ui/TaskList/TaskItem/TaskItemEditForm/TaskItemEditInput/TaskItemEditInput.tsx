import styles from '../../../../../../App.module.scss';

export const TaskItemEditInput = ({ editedText, handleChange }: { editedText: string, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <input className={`${styles.input} ${styles.input_reset}`} id="edit" type="text" value={editedText} onChange={handleChange} />
    );
};

