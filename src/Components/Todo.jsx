import { useState } from "react";

import Forms from "./Forms";
import ToDoList from "./ToDoList";
import Footer from "./Footer";

export default function ToDo() {
  const [list, setList] = useState([]);
  const completedTodos = list.filter((todo) => todo.done).length;
  const totalTodos = list.length;

  return (
    <div>
      <Forms list={list} setList={setList} />
      <ToDoList list={list} setList={setList} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
