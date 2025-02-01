import styles from "./InputForm.module.css";

function InputForm({ onSubmit }) {
  return (
    <div className={styles.mainContainer}>
      <form className={styles.form} onSubmit={onSubmit}>
        <label htmlFor="new-todo" className={styles.label}>
          What needs to be done?
        </label>
        <input
          type="text"
          id="new-todo"
          placeholder="Enter a new task..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Add
        </button>
      </form>
    </div>
  );
}

export default InputForm;
