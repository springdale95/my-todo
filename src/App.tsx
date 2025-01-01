import { useState } from "react";
import Header from "./components/Header/Header.tsx";
import TaskInputForm from "./components/TaskInputForm/TaskInputForm.tsx";
import Filter from "./components/Filter/Filter.tsx";
import TaskList from "./components/TaskList/TaskList.tsx";
import {ITask} from "./types/types.ts";
import './App.css'

function App() {

    const [tasks, setTasks] = useState<ITask[] | []>([]);
    const [filter, setFilter] = useState<string>("all");
    console.log(tasks)

  return (
    <>
        <div className="app">

            <Header
                title={"my-todo"}
            />

            <TaskInputForm
                tasks={tasks}
                setTasks={setTasks}
            />

            <Filter
                filter={filter}
                setFilter={setFilter}
            />

            <TaskList
                tasks={tasks}
                setTasks={setTasks}
                filter={filter}
            />
        </div>
    </>
  )
}

export default App