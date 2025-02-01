import Task from "../Task/Task";

function TasksContainer({ tasks }) {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} task={task}></Task>
        ))}
      </ul>
    </div>
  );
}

export default TasksContainer;
