import { useState } from "react";
import Header from "./components/Header/Header.tsx";
import TaskInputForm from "./components/TaskInputForm/TaskInputForm.tsx";
import Filter from "./components/Filter/Filter.tsx";
import EmptyList from "./components/EmptyList/EmptyList.tsx";
import TaskList from "./components/TaskList/TaskList.tsx";
import {ITask} from "./types/types.ts";
import './App.css'

function App() {

    const [tasks, setTasks] = useState<ITask[] | []>([]);
    const [filter, setFilter] = useState<string>("all");
    console.log(filter)

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

            {(tasks.length === 0) ? <EmptyList /> :
                <TaskList
                    tasks={tasks}
                    setTasks={setTasks}
                    filter={filter}
                    setFilter={setFilter}
                />

            }
        </div>
    </>
  )
}

export default App