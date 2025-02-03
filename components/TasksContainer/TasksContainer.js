import Task from "../Task/Task";

function TasksContainer({ tasks, setTasks }) {
  function removeTask(index) {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((_, i) => i !== index);
      console.log("Updated tasks after delete:", updatedTasks);
      return updatedTasks;
    });
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
