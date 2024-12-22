import { useState } from "react";
import './App.css'
import Header from "./components/Header/Header.tsx";
import TaskInput from "./components/TaskInput/TaskInput.tsx";
import TaskList from "./components/TaskList/TaskList.tsx";

function App() {

    const [tasks, setTasks] = useState([]);

  return (
    <>
        <div className="app">
            <Header title={"my-todo"} />
            <TaskInput tasks={tasks} setTasks={setTasks} />
            <TaskList tasks={tasks} />
        </div>
    </>
  )
}

export default App
