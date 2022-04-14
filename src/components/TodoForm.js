import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    // if (!input) {
    //   return;
    // }
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <div>
            <input
              placeholder="Chỉnh sửa"
              value={input}
              onChange={handleChange}
              name="text"
              className="todo-input edit"
              ref={inputRef}
            />
            <button onClick={handleSubmit} className="todo-button edit">
              Chỉnh sửa
            </button>
            {/* {props.todos
              .filter((e) => e.id !== props.edit.id)
              .map((f) => (
                <input value={f?.text} className="todo-input edit" />
              ))} */}
          </div>
        </>
      ) : (
        <>
          <input
            placeholder="Thêm công việc"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Thêm công việc
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
