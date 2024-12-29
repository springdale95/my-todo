import { useState } from "react";
import './App.css'
import Header from "./components/Header/Header.tsx";
import TaskInput from "./components/TaskInput/TaskInput.tsx";
import TaskList from "./components/TaskList/TaskList.tsx";
import Filter from "./components/Filter/Filter.tsx";
import {ITask} from "./types/types.ts";

function App() {

    const [tasks, setTasks] = useState<ITask[] | []>([]);

  return (
    <>
        <div className="app">
            <Header
                title={"my-todo"} />
            <TaskInput
                tasks={tasks}
                setTasks={setTasks} />
            <Filter />
            <TaskList
                tasks={tasks}
                setTasks={setTasks} />
        </div>
    </>
  )
}

export default App