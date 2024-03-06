import ToDoItem from "./ToDoItem";
import styles from "./todolist.module.css";
export default function ToDoList({ list, setList }) {
  const sortedList = list.slice().sort((a,b)=>Number(a.done)-Number(b.done))
  function handleDelete(item) {
    setList(list.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const newArray = list.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setList(newArray);
  }
  return (
    <div className={styles.list}>
      {sortedList.map((item) => (
        <ToDoItem
          key={item.name}
          item={item}
          handleDelete={() => handleDelete(item)}
          handleClick={() => handleClick(item.name)}
          list={list}
          setList={setList}
        />
      ))}
    </div>
  );
}
