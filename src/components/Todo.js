import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo, setTodos }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const [changeInput, setChangeInput] = useState(false);
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} todos={todos} />;
  }
  // const changeField = (key, value) => {
  //   const newArray = [...todos];
  //   const itemChange = newArray.find((e) => e.id === key);
  //   itemChange[key] = { ...todos[key], text: value };
  //   setTodos(newArray);
  //   console.log(newArray);
  // };
  return (
    <div style={{ marginBottom: "15px" }}>
      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="icons">
            <AiFillEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
            <AiFillDelete
              onClick={() => removeTodo(todo.id)}
              className="delete-icon"
            />
          </div>
        </div>
      ))}
    </div>
    // <div>
    //   {todos.map((e) => (
    //     <div style={{ display: "flex" }}>
    //       <input
    //         value={e?.text}
    //         disabled={!changeInput}
    //         onChange={(f) => changeField(e.id, f.target.value)}
    //       />
    //       <button>
    //         <AiFillEdit
    //           onClick={() => setChangeInput(true)}
    //           className="edit-icon"
    //         />
    //       </button>
    //       <button>
    //         <AiFillDelete
    //           onClick={() => removeTodo(e.id)}
    //           className="delete-icon"
    //         />
    //       </button>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Todo;
