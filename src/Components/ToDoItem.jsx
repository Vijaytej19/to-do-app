import styles from "./todoitem.module.css";
export default function ToDoItem({ item, handleDelete, handleClick }) {
  const completedTask = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName} key={item}>
        <span
          className={completedTask}
          onClick={handleClick}
          id={styles.taskCursor}
        >
          {item.name}
        </span>

        <span>
          <button onClick={handleDelete} className={styles.deleteButton}>
            x
          </button>
        </span>
      </div>

      <hr className={styles.seperator} />
    </div>
  );
}
