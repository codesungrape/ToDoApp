import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import TasksContainer from "../TasksContainer/TasksContainer";

function MainContainer() {
  const [task, setTask] = useState("");
  const [addTask, setAddTask] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = event.target[0].value; // Get the task from the input
    setAddTask([...addTask, newTask]); // Add the new task to the list
    setTask(""); // Clear the input
  }

  return (
    <div>
      <InputForm onSubmit={handleSubmit} />
      <TasksContainer tasks={addTask} />
    </div>
  );
}

export default MainContainer;
