import { useState } from "react";
import css from "../src/app.module.css";
import Header from "../src/Header";
import Form from "../src/Form";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Купить бананы",
      favorite: true,
    },
    {
      text: "Купить шоколадку",
      favorite: true,
    },
    {
      text: "Купить молоко",
      favorite: false,
    },
  ]);

  const deleteTodo = (idOfRemoveTodo) => {
    const filtred = todos.filter((todos, id) => {
      if (id === idOfRemoveTodo) {
        return false;
      }
      return true;
    });
    setTodos(filtred);
  };

  const makeFavorite = (i) => {
    const newTodos = todos.map((item, id) => {
      if (i === id) {
        return {
          ...item,
          favorite: !item.favorite,
        };
      }
      return item;
    });
    setTodos(newTodos);
  };

  const newTodos = todos.map((todo, id) => {
    let todoClass = todo.favorite ? css.todo : css.todo__selected;
    return (
      <div key={id} className={todoClass}>
        <div className={css.favorite}>
          <button
            className={todo.favorite ? css.default__btn : css.favorite__btn}
            onClick={() => makeFavorite(id)}
          >
            ★
          </button>
        </div>
        <div className={css.todo_text}>{todo.text}</div>
        <div className={css.actions}>
          <button onClick={() => deleteTodo(id)}>✕</button>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className={css.app}>
        <Header />
        <Form setTodos={setTodos} todos={todos} />
        <div className={css.todos}>{newTodos}</div>
      </div>
    </>
  );
}

export default App;
