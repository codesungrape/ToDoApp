import styles from "./Task.module.css";

function Task({ index, task }) {
  return (
    <div className={styles.task}>
      <button className={styles.button}></button>
      <h4 className={styles.h4}>{task}</h4>
    </div>
  );
}

export default Task;
