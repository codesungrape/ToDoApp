import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import TasksContainer from "../TasksContainer/TasksContainer";

function MainContainer() {
  const [tasks, setTasks] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = event.target[0].value;
    if (!newTask.trim()) return; // no empty Tasks

    setTasks([...tasks, newTask]); // Add the new task to the list
    event.target.reset(); // clear input
  }

  return (
    <div>
      <InputForm onSubmit={handleSubmit} />
      <TasksContainer tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default MainContainer;
