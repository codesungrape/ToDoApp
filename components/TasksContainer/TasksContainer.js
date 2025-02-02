import Task from "../Task/Task";

function TasksContainer({ tasks, setTasks }) {
  function removeTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index)); // Keep all except the one to remove
  }

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            onRemove={removeTask}
          ></Task>
        ))}
      </ul>
    </div>
  );
}

export default TasksContainer;
