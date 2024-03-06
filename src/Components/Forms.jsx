import { useState } from "react";
import styles from "./form.module.css";
export default function Forms({ list, setList }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        className={styles.formInput}
        onChange={(e) => setTodo({ name: e.target.value, done: false })}
        value={todo.name}
        type="text"
        placeholder="Enter todo item..."
      />
      <button className={styles.formButton} type="Submit">
        Add
      </button>
    </form>
  );
}
