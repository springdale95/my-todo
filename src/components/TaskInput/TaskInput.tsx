import './TaskInput.css'
import React, { useState } from "react";
import { v4 } from "uuid";
import {ITask} from "../../types/types.ts";

interface IHandleChange {
    target: {
        value: string;
    };
}

interface ITasksInput {
    tasks: ITask[] | [];
    setTasks: (task: ITask[]) => void;
}

const TaskInput = ({ tasks, setTasks }:ITasksInput ) => {

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

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTask();
        }
    }

    return (
        <>
            <input
                type="text"
                placeholder="Введите задачу"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
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