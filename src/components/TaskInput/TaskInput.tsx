import './TaskInput.css'
import { useState } from "react";
import { v4 } from "uuid";

interface IHandleChange {
    target: {
        value: string;
    };
}

const TaskInput = ({ tasks, setTasks } ) => {

    const [inputValue, setInputValue] = useState<string>('');

    const addTask = () => {
        if (inputValue.trim() === "") {
            alert("Введите Вашу задачу")
        }
        else {
            setTasks([...tasks, { id: v4(), text: inputValue, status: false }]);
            setInputValue("");
        }
    }

    const handleChange = (event: IHandleChange) => {
        setInputValue(event.target.value);
    }

    return (
        <>
            <input
                type="text"
                placeholder="Введите задачу"
                value={inputValue}
                onChange={handleChange}
            >
            </input>
            <button
                type="submit"
                onClick={addTask}
            >
                Добавить
            </button>
        </>
    );
};

export default TaskInput;