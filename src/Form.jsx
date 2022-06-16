import React, { useState } from "react";
import css from "../src/form.module.css";

function Form(props) {
  
  const [text, setText] = useState('')

  const addTodo = () => {
    props.setTodos([
      {
        text: text,
        favorite: true,
      },
      ...props.todos,
    ]);
    setText("");
  };

  const addEnter =(e) => {
    if (e.key === "Enter") {
      props.setTodos([
        {
          text: text,
          favorite: true,
        },
        ...props.todos,
      ]);
    setText("");
    }
  }
  return (
    <div className={css.form}>
      <input
        placeholder="Введите текст"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={e => addEnter(e)}
      />
      <button onClick={addTodo}>Добавить</button>
    </div>
  );
}

export default Form;
