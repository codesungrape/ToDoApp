import { useState } from "react";
import styles from "./Task.module.css";

function Task({ index, task, onRemove }) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prev) => !prev);
  }

  return (
    <div className={styles.task}>
      <button className={styles.button} onClick={handleClick}>
        {isDone ? "DONE" : ""}
      </button>
      <h4 className={styles.h4}>{task}</h4>
      <button className="remove-btn" onClick={() => onRemove(index)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="red"
        >
          <path
            d="M6 6L18 18M6 18L18 6"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default Task;
